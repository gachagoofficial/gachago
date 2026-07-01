# 백엔드 실동작 셋업 (뽑기 실제로 돌리기)

프론트/백엔드 코드는 완성되어 있습니다. 아래 3단계만 하면 뽑기가 실제로 작동합니다.

## 1) Supabase 프로젝트 준비 + 스키마 실행

Supabase 대시보드 → SQL Editor → `supabase/schema.sql` 내용 붙여넣고 실행.
→ packs / rewards / draws 테이블 + RLS + `draw_pack` 함수가 생성됩니다.

## 2) 환경 변수 설정

```bash
cp .env.local.example .env.local
```
`.env.local` 을 열어 채웁니다:
- `NEXT_PUBLIC_SUPABASE_URL` — 프로젝트 URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — anon(public) 키
- `SUPABASE_SERVICE_ROLE_KEY` — **service_role 키** (대시보드 > Project Settings > API)
  - ⚠️ 절대 `NEXT_PUBLIC_` 접두사 붙이지 말 것 (서버 전용)

## 3) 데이터 시드

```bash
npm install
npm run seed
```
→ `lib/data/catalog.ts` 의 팩/보상 데이터를 DB에 채웁니다.
   (packs 10개, rewards 43개)

시드 결과 예시:
```
✅ packs 10개 업서트 완료
✅ rewards 43개 삽입 완료
🎉 시드 완료! 이제 /packs/<slug> 에서 실제 뽑기가 동작합니다.
```

## 확인

```bash
npm run dev
```
1. 우측 상단에서 로그인 (Email provider를 대시보드에서 켜둬야 함)
2. `/packs/chanel-card-wallet-pack` 접속
3. "구매 완료 후 추첨하기" 클릭 → 슬롯이 서버가 정한 결과에서 멈춤

## 시드 데이터 설계 (참고)

- **stock(재고)**: 보상에 quantity가 있으면 사용, 없으면 rarity 기본값
  (LEGEND 2, MYTHIC 3, EPIC 6, RARE 20, STANDARD 100)
- **weight(가중치)**: rarity 반비례로 희귀할수록 낮음
  (LEGEND 1, MYTHIC 3, EPIC 8, RARE 20, STANDARD 68)
- **value**: actualPrice 우선, 없으면 displayValue
- "랜덤 상품" placeholder는 제외

가중치/재고 규칙은 `scripts/seed.ts` 상단 상수에서 조정할 수 있습니다.

## 아직 남은 것
- **결제 검증**: `/api/draw` 의 결제 확인이 TODO. 지금은 로그인만 하면 뽑힙니다.
  실서비스에선 `/api/checkout` (PG 연동)을 뽑기 전에 통과시켜야 합니다.
