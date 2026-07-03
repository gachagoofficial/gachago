-- ============================================================
-- GACHA GO Supabase 스키마 + RLS + 가챠 뽑기 RPC
-- Supabase 대시보드 SQL Editor 에 붙여넣어 실행하세요.
-- ============================================================

-- ---------- 테이블 ----------
create table if not exists packs (
  id          text primary key,
  slug        text unique not null,
  title       text not null,
  subtitle    text,
  price       integer not null,
  category    text,
  created_at  timestamptz default now()
);

-- 팩에 들어있는 보상(아이템)과 가중치/재고
create table if not exists rewards (
  id          uuid primary key default gen_random_uuid(),
  pack_id     text references packs(id) on delete cascade,
  name        text not null,
  brand       text,             -- 슬롯 표시/매칭용 브랜드
  item        text,             -- 슬롯 표시/매칭용 아이템명
  rarity      text,             -- 슬롯 표시/매칭용 희귀도 (tier와 별도로 슬롯 라벨)
  tier        text,             -- 등급 (예: STANDARD/RARE/...)
  value       integer,          -- 가치(원)
  weight      integer not null, -- 가중치(확률)
  stock       integer not null, -- 남은 재고
  image       text
);

-- 사용자별 뽑기 기록
create table if not exists draws (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null,
  pack_id     text references packs(id),
  reward_id   uuid references rewards(id),
  created_at  timestamptz default now()
);

-- ---------- RLS ----------
alter table packs   enable row level security;
alter table rewards enable row level security;
alter table draws   enable row level security;

-- 팩/보상은 누구나 읽기 가능 (공개 카탈로그)
create policy "packs are public read"   on packs   for select using (true);
create policy "rewards are public read" on rewards for select using (true);

-- draws 는 본인 것만 조회 가능. insert/update 는 정책 없음
-- => 클라이언트(anon)로는 절대 기록을 쓸 수 없고, 오직 service_role(서버)만 가능.
create policy "own draws read" on draws
  for select using (auth.uid() = user_id);

-- ---------- 가챠 뽑기 RPC ----------
-- ★ 핵심: 재고 차감 + 가중 랜덤 + 기록을 한 트랜잭션에서 원자적으로 처리.
--   동시 요청에도 재고가 음수로 빠지지 않고, 확률 조작이 불가능하다.
--   security definer 로 만들어 RLS 우회 + 서버 RPC 로만 호출.
create or replace function draw_pack(p_pack_id text, p_user_id uuid)
returns table (reward_id uuid, name text, brand text, item text, rarity text, value integer, tier text, image text, remaining_stock integer)
language plpgsql
security definer
as $$
declare
  total_weight  integer;
  pick          integer;
  running       integer := 0;
  chosen        rewards%rowtype;
begin
  -- 재고가 남은 보상만 잠금(FOR UPDATE)으로 가져와 동시성 보장
  -- ★ 가중치 = 현재 재고(stock). 개체 단위 균등 확률 (뽑기통 방식).
  select coalesce(sum(stock), 0) into total_weight
  from rewards
  where pack_id = p_pack_id and stock > 0;

  if total_weight = 0 then
    raise exception '재고가 모두 소진되었습니다.';
  end if;

  pick := floor(random() * total_weight)::int;

  for chosen in
    select * from rewards
    where pack_id = p_pack_id and stock > 0
    order by id
    for update
  loop
    running := running + chosen.stock;  -- stock 을 가중치로 사용
    if pick < running then
      update rewards set stock = stock - 1 where id = chosen.id;
      insert into draws (user_id, pack_id, reward_id)
      values (p_user_id, p_pack_id, chosen.id);

      reward_id       := chosen.id;
      name            := chosen.name;
      brand           := chosen.brand;
      item            := chosen.item;
      rarity          := chosen.rarity;
      value           := chosen.value;
      tier            := chosen.tier;
      image           := chosen.image;
      remaining_stock := chosen.stock - 1;
      return next;
      return;
    end if;
  end loop;

  raise exception '뽑기 처리 중 오류가 발생했습니다.';
end;
$$;
