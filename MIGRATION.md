# 컴포넌트 이전 가이드

## ✅ 완료: 인증 (Supabase Auth) — 뽑기 end-to-end 연결

로그인/회원가입과 서버 세션 기반 신원 확인이 연결되어, 뷥기가 실제로 동작합니다.

### 파일
- **`lib/supabase/ssr-server.ts`** — 서버 컴포넌트/API에서 로그인 사용자 확인(`getCurrentUser`)
- **`lib/supabase/middleware.ts`** + **`middleware.ts`** — 요청마다 세션 쿠키 갱신
- **`components/auth/AuthProvider.tsx`** — 클라이언트 인증 상태 Context(`useAuth`)
- **`components/auth/AuthModal.tsx`** — 이메일/비번 + 카카오/구글 OAuth 로그인
- **`components/auth/AuthButton.tsx`** — Nav 로그인/로그아웃 버튼
- **`app/auth/callback/route.ts`** — OAuth 콜백(code→세션 교환)
- `app/account/page.tsx` — 로그인 상태 반영

### 보안 강화 (핵심)
`/api/draw` 가 이제 **클라이언트가 보낸 userId를 신뢰하지 않고** 서버 세션에서
직접 사용자를 확인합니다(`getCurrentUser`). 미로그인 요청은 401.
→ 남의 명의로 뽑거나 userId를 위조하는 것이 원천 차단됩니다.

### 뽑기 전체 흐름 (이제 완결)
```
[미로그인] 뽑기 클릭 → AuthModal 로그인 유도
[로그인]   뽑기 클릭 → POST /api/draw { packId }   (userId 안 보냄)
          → 서버가 세션에서 user.id 확인
          → draw_pack RPC (재고차감+가중랜덤+기록, 트랜잭션)
          → 결과로 슬롯 정지 → 결과 카드
```

### Supabase 설정 필요
1. `.env.local` 에 `SUPABASE_SERVICE_ROLE_KEY` 입력
2. Supabase 대시보드 > Authentication > Providers 에서 Email 활성화
3. (선택) 카카오/구글 OAuth Provider 등록 + Redirect URL 에
   `<앱주소>/auth/callback` 추가
4. `supabase/schema.sql` 실행 (packs/rewards/draws + RLS + draw_pack)

### 검증 완료
`npm run build` 성공 — 23개 페이지, Middleware 등록, /auth/callback,
/api/draw 서버 세션 확인, 타입체크 0 에러.

---


## ✅ 완료: 슬롯 머신 + 뽑기 로직 (components/slot/)

가챠의 핵심인 슬롯 애니메이션과 서버 연동 뽑기가 이전되었습니다.

### 파일
- **`lib/slot/helpers.ts`** — 슬롯 설정/시퀀스/좌표 계산 헬퍼(buildReelSequence, measureSlotTargetY, findSlotItemIndex 등)
- **`components/slot/SlotReel.tsx`** — 릴 애니메이션 엔진("use client"). 원본 로직 보존 + `spinToItem(targetItem)` 메서드 추가
- **`components/slot/SlotItem.tsx`** — 릴 개별 아이템
- **`components/slot/SlotMachine.tsx`** — 홈 화면 장식용 자동 순환 슬롯(데모, 랜덤)
- **`components/slot/GachaDrawMachine.tsx`** — ★ 실제 유료 뽑기 컴포넌트
- **`components/slot/PurchaseButton.tsx`** — 추첨 버튼
- **`app/packs/[slug]/page.tsx`** — 팩 상세 + 뽑기 머신 (10개 팩 SSG)

### 보안 흐름 (가장 중요)
```
사용자 클릭
  → POST /api/draw { packId, userId }   (금액·확률은 클라이언트가 안 보냄)
  → 서버가 draw_pack RPC로 결과 확정 + 재고 차감 (트랜잭션)
  → 응답 reward 로 슬롯이 그 아이템에서 멈춤 (spinToItem)
  → 결과 카드 표시
```
애니메이션은 연출일 뿐이고 **당첨은 서버에서 이미 결정**됩니다.
원본은 결과가 클라이언트 랜덤이었지만, 이제 서버가 신뢰 원천입니다.

### 스키마 보강
`rewards` 테이블에 slot 매칭용 `brand/item/rarity` 컬럼 추가,
`draw_pack` 이 이 필드들을 반환하도록 업데이트(supabase/schema.sql).

### 검증 완료
`npm run build` 성공 — 22개 페이지 생성, /api/draw·/api/checkout 서버함수 등록,
/packs/[slug] 10개 팩 SSG, 타입체크 0 에러.

---


## ✅ 완료: 데이터 이전 (lib/data/)

원본의 데이터 영역(약 123KB)이 이미 이전되었습니다:

- **`lib/data/catalog.ts`** — allPacks, packTierCatalog, marketProducts, boardPosts,
  faqItems, feedPool, packSpecialDetails 등 29개 export.
  - base64 이미지 참조는 전부 `images["..."]`(from `lib/images.ts`)로 치환됨
  - `allPacks`는 원본과 동일하게 `customPackSlugs`로 필터링됨(로드 시 1회, 10개 팩)
  - 원본이 순수 JS라 파일 상단에 `// @ts-nocheck` 적용 (런타임 동작은 검증 완료)
- **`lib/data/types.ts`** — Pack, MarketProduct, BoardPost, FaqItem 등 소비용 타입.

### 사용 예 (app/market/page.tsx 참고 — 실제 연결 완료됨)
```tsx
import { marketProducts } from "@/lib/data/catalog";
import type { MarketProduct } from "@/lib/data/types";

const products = marketProducts as MarketProduct[];
```

외부 이미지(unsplash 등)는 `next.config.ts`의 `remotePatterns`에 등록되어 있습니다.
점진적으로 로컬 이미지로 교체한 뒤 해당 패턴을 제거하면 됩니다.

---


원본 `index.html`에는 38개 React 컴포넌트와 약 110KB의 데이터가 있습니다.
한 번에 옮기지 말고 아래 순서로 진행하세요.

## 1. 데이터부터 (lib/data/)

원본 데이터 객체를 TS 파일로 분리:

- `packTierCatalog`, `rewardImages`, `marketProducts`, `boardPosts`,
  `faqItems`, `communityBoards` 등 → `lib/data/*.ts` 로 export.
- 이미지 참조(`appleIphone17ProImage` 등)는 `lib/images.ts`의 `images["..."]`로 치환.
  예: `image: appleIphone17ProImage` → `image: images.appleIphone17Pro` (필요시 키 확인)

## 2. 표현(presentational) 컴포넌트

상태 없는 순수 UI부터: `PackCard`, `ProductCard`, `RewardCard`, `BoardRow`,
`PageHero`, `Hero`, `TierSection`. 그대로 `components/`에 옮기고 props 타입만 추가.

## 3. 상태/인터랙션 컴포넌트 → "use client"

`useState`/`useEffect`/`useRef` 쓰는 컴포넌트는 파일 맨 위에 `"use client";` 추가.
- `SlotMachine`, `SlotReel`, `SlotItem`, `LiveSlotSection`, `LiveFeed`
- `ListingControls`, `PacksPage`, `MarketPage`, `CommunityPage`, `FAQPage`
- `AuthModal`, `NicknameSetupModal`, `AccountPage`, `AdminPage`

## 4. 라우팅

원본의 `page` 상태(`home/packs/market/...`) 분기를 Next 라우트로 대체.
`setPage("packs")` 같은 호출은 `<Link href="/packs">` 또는 `router.push` 로.

## 5. 뽑기 로직 (핵심 변경)

원본은 클라이언트에서 결과를 정했지만, 이제:

1. 사용자가 "뽑기" 클릭 → `fetch("/api/draw", { method:"POST", body:{packId,userId} })`
2. 서버가 `draw_pack` RPC로 당첨 아이템 결정 + 재고 차감 + 기록
3. 응답으로 받은 `reward`를 슬롯 애니메이션이 "따라가도록" 표시
   (`slotReelSettings`의 duration/overshoot는 그대로 연출용으로 사용)

## 6. Supabase 호출 분리

- 읽기(상품/FAQ 목록): 클라이언트 컴포넌트에서 `createClient()` (anon)
- 쓰기/뽑기/결제: 반드시 `/api/*`의 서버 핸들러에서 `createServiceClient()`
