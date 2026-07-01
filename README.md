# GACHA GO — Next.js + Supabase

원본 단일 `index.html`(React + Babel CDN + 인라인 base64)을 Next.js(App Router) +
Supabase 구조로 이전한 프로젝트의 초기 골격입니다.

## 설치 & 실행

```bash
npm install
cp .env.local.example .env.local   # 값 채우기
npm run dev
```

## 환경 변수 (.env.local)

| 변수 | 노출 | 용도 |
|------|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | 공개 | Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 공개(RLS로 보호) | 읽기 전용 클라이언트 |
| `SUPABASE_SERVICE_ROLE_KEY` | **서버 전용** | 뽑기/결제/관리자. 절대 클라이언트 금지 |

## 보안 설계 (가장 중요)

- **읽기 전용 공개 데이터**(상품·FAQ·커뮤니티 조회) → 브라우저에서 `lib/supabase/client.ts`로 직접 호출 (anon 키 + RLS).
- **돈·확률에 영향을 주는 모든 로직**(가챠 뽑기, 재고 차감, 결제, 당첨 기록, 관리자) → 서버에서만. `app/api/*` + `lib/supabase/server.ts`(service_role).
- 가챠 뽑기는 `supabase/schema.sql`의 `draw_pack` RPC에서 **재고 차감 + 가중 랜덤 + 기록을 한 트랜잭션**으로 처리 → 동시성/확률 조작 방지.

## 폴더 구조

```
app/            라우트별 페이지 + api/(draw, checkout)
components/     Nav, Footer, (이전 예정: SlotReel, PackCard ...)
lib/
  supabase/     client.ts(anon) / server.ts(service_role)
  format.ts     formatWon 등 유틸
  images.ts     base64 → /public/images 매핑
public/images/  분리된 이미지 71개 (원래 ~6.4MB 인라인)
supabase/       schema.sql (테이블 + RLS + draw_pack RPC)
```

## 다음 작업 (MIGRATION.md 참고)

1. `npm install` 후 dev 서버 확인
2. Supabase SQL Editor에서 `supabase/schema.sql` 실행
3. 원본 React 컴포넌트를 `components/`·`app/`로 이전 (이미지 참조는 `lib/images.ts`로 치환)
4. 뽑기 UI를 `/api/draw` 호출 + 슬롯 애니메이션 연동으로 변경
