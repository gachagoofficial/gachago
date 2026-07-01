// @ts-nocheck
/**
 * 원본 index.html의 데이터 영역을 이전한 카탈로그 데이터 + 구성 헬퍼.
 * 원본이 순수 JS(타입 주석 없음)라 이 파일은 타입 검사에서 제외(@ts-nocheck)한다.
 * 컴포넌트/페이지에서 이 데이터를 소비할 때 필요한 타입은 그쪽에서 정의한다.
 *
 * - base64 이미지 참조는 images["..."] 로 치환됨
 * - allPacks 는 원본과 동일하게 customPackSlugs 로 필터링됨(모듈 로드 시 1회)
 * - 라우팅/정렬 UI 헬퍼(getRouteFromHash, sortItems)는 제외(컴포넌트 쪽에서 처리)
 */
import { images } from "@/lib/images";
import { formatWon, formatDisplayValue, formatQuantity } from "@/lib/format";

export const allPacks = [
  {
    id: "pack-chanel-card-wallet",
    slug: "chanel-card-wallet-pack",
    title: "Designer 카드 지갑 팩",
    englishName: "Designer Card Wallet Pack",
    subtitle: "명품 지갑 팩",
    category: "지갑",
    priceValue: 69000,
    totalQuantity: 200,
    soldQuantity: 0,
    remainingQuantity: 200,
    randomQuantity: 182,
    lastDrawQuantity: 1,
    odds: "총 200개 한정",
    cardHighlight: "LEGEND: Chanel Classic Card Holder",
    topPrize: "Chanel 카드 지갑",
    popularity: 100,
    createdAt: 20260525,
    image: images["brand_chanel"],
    heroImage: images["brand_chanelHero"],
    imageAlt: "Designer 카드 지갑 팩 대표 이미지",
  },
  {
    id: "pack-apple-macbook-neo",
    slug: "apple-macbook-neo-pack",
    title: "Apple 맥북 네오 팩",
    englishName: "Apple MacBook Neo Pack",
    subtitle: "Apple 노트북 팩",
    category: "전자제품",
    priceValue: 50000,
    totalQuantity: 800,
    soldQuantity: 0,
    remainingQuantity: 800,
    randomQuantity: 782,
    lastDrawQuantity: 1,
    odds: "총 800개 한정",
    topPrize: "Apple 맥북 네오",
    popularity: 99,
    createdAt: 20260607,
    image: images["appleMacbookNeoImage"],
    heroImage: images["appleMacbookNeoImage"],
    imageAlt: "Apple 맥북 네오 제품 이미지",
  },
  {
    id: "pack-apple-airpods",
    slug: "apple-airpods-pack",
    title: "Apple 에어팟 팩",
    englishName: "Apple AirPods Pack",
    subtitle: "Apple 오디오 팩",
    category: "전자제품",
    priceValue: 29000,
    totalQuantity: 400,
    soldQuantity: 0,
    remainingQuantity: 400,
    randomQuantity: 391,
    lastDrawQuantity: 1,
    odds: "총 400개 한정",
    topPrize: "Apple 에어팟 맥스 2",
    popularity: 98,
    createdAt: 20260607,
    image: images["appleAirpodsPackImage"],
    heroImage: images["appleAirpodsPackImage"],
    imageAlt: "Apple 에어팟 라인업 팩 이미지",
  },
  {
    id: "pack-apple-airpods-4",
    slug: "apple-airpods-4-pack",
    title: "Apple 에어팟 4 팩",
    englishName: "Apple AirPods 4 Pack",
    subtitle: "Apple 에어팟 4 팩",
    category: "전자제품",
    priceValue: 19000,
    totalQuantity: 800,
    soldQuantity: 0,
    remainingQuantity: 800,
    randomQuantity: 782,
    lastDrawQuantity: 1,
    odds: "총 800개 한정",
    topPrize: "Apple 에어팟 액티브 노이즈 캔슬링 모델 4",
    popularity: 97,
    createdAt: 20260607,
    image: images["appleAirpods4AncImage"],
    heroImage: images["appleAirpods4AncImage"],
    imageAlt: "Apple 에어팟 액티브 노이즈 캔슬링 모델 4 제품 이미지",
  },
  {
    id: "pack-apple-iphone",
    slug: "apple-iphone-pack",
    title: "Apple 아이폰 팩",
    englishName: "Apple iPhone Pack",
    subtitle: "Apple 아이폰 팩",
    category: "전자제품",
    priceValue: 70000,
    totalQuantity: 400,
    soldQuantity: 0,
    remainingQuantity: 400,
    randomQuantity: 391,
    lastDrawQuantity: 1,
    odds: "총 400개 한정",
    topPrize: "Apple 아이폰 17 Pro",
    popularity: 99,
    createdAt: 20260607,
    image: images["appleIphonePackImage"],
    heroImage: images["appleIphonePackImage"],
    imageAlt: "Apple 아이폰 라인업 팩 이미지",
  },
  {
    id: "pack-apple-iphone-17-pro",
    slug: "apple-iphone-17-pro-pack",
    title: "Apple 아이폰 17 팩",
    englishName: "Apple iPhone 17 Pack",
    subtitle: "Apple 아이폰 17 팩",
    category: "전자제품",
    priceValue: 70000,
    totalQuantity: 1200,
    soldQuantity: 0,
    remainingQuantity: 1200,
    randomQuantity: 1173,
    lastDrawQuantity: 1,
    odds: "총 1200개 한정",
    topPrize: "Apple 아이폰 17 Pro",
    popularity: 100,
    createdAt: 20260607,
    image: images["appleIphone17ProImage"],
    heroImage: images["appleIphone17ProImage"],
    imageAlt: "Apple 아이폰 17 Pro 제품 이미지",
  },
  {
    id: "pack-apple-ipad",
    slug: "apple-ipad-pack",
    title: "Apple 아이패드 팩",
    englishName: "Apple iPad Pack",
    subtitle: "Apple 아이패드 팩",
    category: "전자제품",
    priceValue: 55000,
    totalQuantity: 400,
    soldQuantity: 0,
    remainingQuantity: 400,
    randomQuantity: 391,
    lastDrawQuantity: 1,
    odds: "총 400개 한정",
    topPrize: "Apple 아이패드 프로",
    popularity: 99,
    createdAt: 20260607,
    image: images["appleIpadProImage"],
    heroImage: images["appleIpadProImage"],
    imageAlt: "Apple 아이패드 프로 제품 이미지",
  },
  {
    id: "pack-comme-des-garcons-tshirt",
    slug: "comme-des-garcons-tshirt-pack",
    title: "Comme des Garçons 티셔츠 팩",
    englishName: "Comme des Garcons T-Shirt Pack",
    subtitle: "Comme des Garçons 티셔츠 팩",
    category: "의류",
    priceValue: 18000,
    totalQuantity: 300,
    soldQuantity: 0,
    remainingQuantity: 300,
    randomQuantity: 280,
    lastDrawQuantity: 1,
    odds: "총 300개 한정",
    topPrize: "Comme des Garçons 레드 하트 티셔츠 블랙",
    popularity: 98,
    createdAt: 20260607,
    image: images["commeBlackTshirtImage"],
    heroImage: images["commeBlackTshirtImage"],
    imageAlt: "Comme des Garçons 레드 하트 티셔츠 블랙 제품 이미지",
  },
  {
    id: "pack-ader-error-tshirt",
    slug: "ader-error-tshirt-pack",
    title: "ADERERROR 티셔츠 팩",
    englishName: "Ader Error T-Shirt Pack",
    subtitle: "ADERERROR 티셔츠 팩",
    category: "의류",
    priceValue: 20000,
    totalQuantity: 350,
    soldQuantity: 0,
    remainingQuantity: 350,
    randomQuantity: 334,
    lastDrawQuantity: 1,
    odds: "총 350개 한정",
    topPrize: "ADERERROR 시그니피컨트 TRS/BL 태그 티셔츠 01 블랙",
    popularity: 98,
    createdAt: 20260607,
    image: images["aderErrorBlackTshirtImage"],
    heroImage: images["aderErrorBlackTshirtImage"],
    imageAlt: "ADERERROR 시그니피컨트 TRS/BL 태그 티셔츠 01 블랙 제품 이미지",
  },
  {
    id: "pack-stussy-tshirt",
    slug: "stussy-tshirt-pack",
    title: "Stussy 티셔츠 팩",
    englishName: "Stussy T-Shirt Pack",
    subtitle: "Stussy 티셔츠 팩",
    category: "의류",
    priceValue: 18000,
    totalQuantity: 250,
    soldQuantity: 0,
    remainingQuantity: 250,
    randomQuantity: 235,
    lastDrawQuantity: 1,
    odds: "총 250개 한정",
    topPrize: "Stussy x Our Legacy 서프맨 피그먼트 다이드 티셔츠 블랙",
    popularity: 98,
    createdAt: 20260607,
    image: images["stussyOurLegacySurfmanBlackImage"],
    heroImage: images["stussyOurLegacySurfmanBlackImage"],
    imageAlt: "Stussy x Our Legacy 서프맨 피그먼트 다이드 티셔츠 블랙 제품 이미지",
  },
  {
    id: "pack-iab-studio-tshirt",
    slug: "iab-studio-tshirt-pack",
    title: "IAB Studio 티셔츠 팩",
    englishName: "IAB Studio T-Shirt Pack",
    subtitle: "IAB Studio 티셔츠 팩",
    category: "의류",
    priceValue: 25000,
    totalQuantity: 100,
    soldQuantity: 0,
    remainingQuantity: 100,
    randomQuantity: 90,
    lastDrawQuantity: 1,
    odds: "총 100개 한정",
    topPrize: "IAB Studio 26 아이앱 티셔츠 화이트 네이비",
    popularity: 98,
    createdAt: 20260607,
    image: images["iabStudioWhiteNavyTshirtImage"],
    heroImage: images["iabStudioWhiteNavyTshirtImage"],
    imageAlt: "IAB Studio 26 아이앱 티셔츠 화이트 네이비 제품 이미지",
  },
  {
    id: "pack-luxury-tshirt",
    slug: "luxury-tshirt-pack",
    title: "티셔츠 팩",
    englishName: "T-Shirt Pack",
    subtitle: "프리미엄 티셔츠 셀렉션",
    category: "의류",
    priceValue: 19000,
    totalQuantity: 400,
    soldQuantity: 0,
    remainingQuantity: 400,
    randomQuantity: 376,
    lastDrawQuantity: 1,
    odds: "총 400개 한정",
    topPrize: "AMI 스몰 하트 로고 티셔츠 화이트",
    popularity: 100,
    createdAt: 20260607,
    image: images["luxuryTshirtPackImage"],
    heroImage: images["luxuryTshirtPackImage"],
    imageAlt: "티셔츠 팩 대표 이미지",
  },
  {
    id: "pack-stussy-new-era-cap",
    slug: "stussy-new-era-cap-pack",
    title: "Stussy New Era 모자 팩",
    englishName: "Stussy New Era Cap Pack",
    subtitle: "Stussy New Era 모자 셀렉션",
    category: "의류",
    priceValue: 20000,
    totalQuantity: 300,
    soldQuantity: 0,
    remainingQuantity: 300,
    randomQuantity: 280,
    lastDrawQuantity: 1,
    odds: "총 300개 한정",
    topPrize: "Stussy New Era 9Twenty 베이직 트러커 블랙",
    popularity: 98,
    createdAt: 20260608,
    image: images["stussyNewEraCapPackImage"],
    heroImage: images["stussyNewEraCapPackImage"],
    imageAlt: "Stussy New Era 모자 팩 대표 이미지",
  },
  {
    id: "pack-supreme-cap",
    slug: "supreme-cap-pack",
    title: "Supreme 모자 팩",
    englishName: "Supreme Cap Pack",
    subtitle: "Supreme 캠프캡 셀렉션",
    category: "의류",
    priceValue: 23000,
    totalQuantity: 150,
    soldQuantity: 0,
    remainingQuantity: 150,
    randomQuantity: 140,
    lastDrawQuantity: 1,
    odds: "총 150개 한정",
    topPrize: "Supreme 워시드 치노 트윌 캠프캡 블랙",
    popularity: 98,
    createdAt: 20260608,
    image: images["supremeCapPackImage"],
    heroImage: images["supremeCapPackImage"],
    imageAlt: "Supreme 모자 팩 대표 이미지",
  },
  {
    id: "pack-mixed-cap",
    slug: "mixed-cap-pack",
    title: "모자 팩",
    englishName: "Cap Pack",
    subtitle: "프리미엄 모자 셀렉션",
    category: "의류",
    priceValue: 23000,
    totalQuantity: 500,
    soldQuantity: 0,
    remainingQuantity: 500,
    randomQuantity: 445,
    lastDrawQuantity: 1,
    odds: "총 500개 한정",
    topPrize: "WOOYOUNGMI 자수 볼캡 블랙 - 25FW",
    popularity: 99,
    createdAt: 20260608,
    image: images["wooyoungmiEmbroideredBallCapBlack25fwImage"],
    heroImage: images["wooyoungmiEmbroideredBallCapBlack25fwImage"],
    imageAlt: "모자 팩 대표 이미지",
  },  {
    id: "pack-beanie",
    slug: "beanie-pack",
    title: "비니 팩",
    englishName: "Beanie Pack",
    subtitle: "프리미엄 비니 셀렉션",
    category: "의류",
    priceValue: 25000,
    totalQuantity: 180,
    soldQuantity: 0,
    remainingQuantity: 180,
    randomQuantity: 162,
    lastDrawQuantity: 1,
    odds: "총 180개 한정",
    topPrize: "Arc'teryx 버드 헤드 토크 오르카",
    popularity: 98,
    createdAt: 20260608,
    image: images["beaniePackImage"],
    heroImage: images["beaniePackImage"],
    imageAlt: "비니 팩 대표 이미지",
  },  {
    id: "pack-backpack",
    slug: "backpack-pack",
    title: "백팩 팩",
    englishName: "Backpack Pack",
    subtitle: "프리미엄 백팩 셀렉션",
    category: "가방",
    priceValue: 24000,
    totalQuantity: 400,
    soldQuantity: 0,
    remainingQuantity: 400,
    randomQuantity: 378,
    lastDrawQuantity: 1,
    odds: "총 400개 한정",
    topPrize: "C.P. Company 나일론 B 렌즈 백팩 블랙 - 25FW",
    popularity: 98,
    createdAt: 20260608,
    image: images["backpackPackImage"],
    heroImage: images["backpackPackImage"],
    imageAlt: "백팩 팩 대표 이미지",
  },  {
    id: "pack-crossbody-bag",
    slug: "crossbody-bag-pack",
    title: "크로스백 팩",
    englishName: "Crossbody Bag Pack",
    subtitle: "프리미엄 크로스백 셀렉션",
    category: "가방",
    priceValue: 30000,
    totalQuantity: 150,
    soldQuantity: 0,
    remainingQuantity: 150,
    randomQuantity: 130,
    lastDrawQuantity: 1,
    odds: "총 150개 한정",
    topPrize: "Arc'teryx 헬리아드 6 크로스바디백 블랙",
    popularity: 98,
    createdAt: 20260608,
    image: images["crossbodyBagPackImage"],
    heroImage: images["crossbodyBagPackImage"],
    imageAlt: "크로스백 팩 대표 이미지",
  },  {
    id: "pack-cos-bag",
    slug: "cos-bag-pack",
    title: "COS 백 팩",
    englishName: "COS Bag Pack",
    subtitle: "COS 퀼티드 백 셀렉션",
    category: "가방",
    priceValue: 27000,
    totalQuantity: 150,
    soldQuantity: 0,
    remainingQuantity: 150,
    randomQuantity: 138,
    lastDrawQuantity: 1,
    odds: "총 150개 한정",
    topPrize: "COS 퀼티드 오버사이즈 숄더백 블랙",
    popularity: 98,
    createdAt: 20260608,
    image: images["cosBagPackImage"],
    heroImage: images["cosBagPackImage"],
    imageAlt: "COS 백 팩 대표 이미지",
  },  {
    id: "pack-rolex-crown",
    slug: "rolex",
    title: "Rolex Pack",
    subtitle: "Crown Reserve",
    category: "시계",
    priceValue: 98000,
    odds: "0.8% 최고 리워드",
    popularity: 98,
    createdAt: 20260522,
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pack-hermes-orange",
    slug: "hermes",
    title: "Hermès Pack",
    subtitle: "Orange Maison",
    category: "가방",
    priceValue: 128000,
    odds: "Birkin 라인업",
    popularity: 96,
    createdAt: 20260521,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pack-chanel-noir",
    slug: "chanel",
    title: "Chanel Wallet Pack",
    subtitle: "샤넬 지갑 팩",
    category: "지갑",
    priceValue: 79000,
    odds: "총 200개 한정",
    popularity: 91,
    createdAt: 20260519,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pack-watch-geneva",
    slug: "luxury-watch",
    title: "Luxury Watch Pack",
    subtitle: "Geneva After Dark",
    category: "시계",
    priceValue: 156000,
    odds: "Swiss Icons",
    popularity: 89,
    createdAt: 20260520,
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pack-designer-bag",
    slug: "designer-bag",
    title: "Designer Bag Pack",
    subtitle: "Runway Vault",
    category: "가방",
    priceValue: 74000,
    odds: "Paris Select",
    popularity: 86,
    createdAt: 20260517,
    image:
      "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pack-high-roller",
    slug: "high-roller",
    title: "High Roller Pack",
    subtitle: "Private Salon",
    category: "시계",
    priceValue: 240000,
    odds: "초고가 컬렉션",
    popularity: 94,
    createdAt: 20260518,
    image:
      "https://images.unsplash.com/photo-1601924638867-3ec3a42d9a1f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pack-cartier-maison",
    slug: "cartier",
    title: "Cartier Pack",
    subtitle: "Golden Atelier",
    category: "시계",
    priceValue: 112000,
    odds: "Jewelry & Watch",
    popularity: 84,
    createdAt: 20260516,
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pack-dior-couture",
    slug: "dior-couture",
    title: "Dior Couture Pack",
    subtitle: "Paris Night",
    category: "가방",
    priceValue: 68000,
    odds: "Couture Selection",
    popularity: 81,
    createdAt: 20260515,
    image:
      "https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pack-patek-mythic",
    slug: "patek-philippe",
    title: "Patek Philippe Pack",
    subtitle: "Mythic Dial",
    category: "시계",
    priceValue: 320000,
    odds: "Nautilus Chance",
    popularity: 92,
    createdAt: 20260514,
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85",
  },
];

export const customPackSlugs = new Set([
  "chanel-card-wallet-pack",
  "apple-macbook-neo-pack",
  "apple-airpods-pack",
  "apple-airpods-4-pack",
  "apple-iphone-pack",
  "apple-iphone-17-pro-pack",
  "apple-ipad-pack",
  "mixed-cap-pack",
  "backpack-pack",
  "luxury-tshirt-pack",
]);

allPacks.splice(0, allPacks.length, ...allPacks.filter((pack) => customPackSlugs.has(pack.slug)));

export const rewardImages = {
  watch:
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=700&q=85",
  blueWatch:
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=700&q=85",
  bag:
    "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=85",
  redBag:
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85",
  fashion:
    "https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&w=700&q=85",
  trunk:
    "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&w=700&q=85",
  jewelry:
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=700&q=85",
  tech:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85",
  luggage:
    "https://images.unsplash.com/photo-1601924638867-3ec3a42d9a1f?auto=format&fit=crop&w=700&q=85",
  voucher:
    "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=700&q=85",
};

export const randomProductImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAPAA8ADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxOkpaSgBKSlpKAEpKWkoAQ0lLSGgBKSiigBtOXpSUq9KAHUtJS0AFFFFABS0UUAFLSUtABRRRQAtFFFABRRRQAUUUUAFLRRQAUUUUAFLRRQAUUUUAFFFFABRS0UAJRS0UAFFFFABRRRQAUUUUAFFFLQAUlLRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUlLRQAlFLRQAlFFFABRRRQAUUUUAJRS0UAJRRRQAUUUUAFJS0lABRRRQAUUUUAJRS0lABRRRQAUlLSUAFFFFACUUtJQAUUUUAJRS0lABSUtJQAjdKaKc3Sm0ALS0lLQAtLSUtAC0tNpaAHUtIKWgBaWkpaACkNOptACUlLSUAIaSlpDQAhpKWkoASkpaSgBKVelJTl6UAOooooAKKKKAFooooAKWkpaACiiloAKKKKACiiigBaKKKACiiigApaSloAKKKKACiiigApaSloAKKKKACiiigAooooAKKKWgBKKWigAooopAFFFFMAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkpaKAEooooAKKKKACiiigBKKWkoAKKKKACiiigBKKKKACiiigAooooASiiigApKWigBKKKKACkpaSgAooooAKSlpKACkpaSgBG6U0U5ulNFAC0tJS0ALS0lLQAtKKSigBwpaSloAWlpKWgApKdTaAEpKWkNACGkpaSgBDSUtJQAlJS0lACGlXpSU5elADqKKKACiiloAKKKKAClpKWgAooooAWiiigAooooAWiiigAooooAWiiigAooooAKKKKACloooAKKKKACiiigAopaKACiikzSAWikopgLRSUUALRSUUALRSUUALRSUtIAopKKYC0UUUAFFFFACUtFJQAtFJRQAtFJRQAtFFFABRRRQAUUUUAFFFFABSUtFIBKKKKYBRRRQAUlLRQAlFFFABRRRQAUlLRQAlFFFABRRRQAUlLSUAFFFFACUUtJQAUUUUAJRRRQAUlLSUAFFFFADW6U0U5ulNFAC0tJS0ALS0lLQAtFJSigB1LSUtAC0tJS0ALTTTqbQAlJS0lACGkpaSgBKSlNJQAlJS0lACGnL0ptOXpQA6iiigApaSloAKKKKAClpKWgAooooAWiiigApaSloAKKKKAClpKWgAooooAKKKKACiiloAKKKKACiiigApaKKACkoooAKKKKACiiigAooooAKKKKACiiloASloooAKKKKACiiigAooooAKSlooASilooASiiloASiiigAooooAWikooAWiiigAooooAKSlopAJRRRTAKKKKAEopaKAEooooAKKKKACkpaSgAooooAKSlooASiiigAooooASiiigBKKKKACkpaSgAooooAa3SminN0ptAC0tJS0ALS0lLQAtFFLQAtLSUtAC0tJS0ALTTTqaaAEpDS0lACUlLSUAIaSlpKAENJS0lACU5elNpy9KAHUUUUALRRRQAUUUUALRRRQAUUUtABRRRQAUtFFABRRS0AFFFFABRRRQAUUUtABRRRQAUUUUAFFFFAC0UUlABRRRQAUUUUAFFFFABRRS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUtFABRRRQAUUUUAFFFFABRRRQAUlLRQAlFFFABRRRQAlFLSUAFFFFABRRRQAlFLSUAFFFFACUUtJQAUUUUAJRRRQAUlLSUAFJS0lABRRRQA1ulNpzdKaKAFpaSloAWlpKWgBaWkpaAFpaSloAUUtJS0ALTadTaAEpKWkNACUlLSGgBKSlNJQAlIaWkoAQ05elNpy9KAHUUUUALRRRQAUUUtABRRRQAtFFFABRRS0AFFFFABS0lLQAUUUUAFFFFAC0UUUAFFFFABRRRQAtJS0lABRRRQAUUUUAFFFLQAlLRRQAUUUUAFFFFABRRRQAUUUtACUUtFACUtFFACUUtFACUUtFACUUtJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUtFACUUUUAFFFFACUUtJQAUUUUAFJS0UAJRRRQAUlLSUAFFFFACUUUUAFJS0lABRRRQAlFFFADW6U0U5ulNFAC0tJS0ALS0lLQAtLSUtAC0tIKWgBaWkpRQAtNNONNoASkpaSgBKSlNJQAhpKWkoASkpaSgBKcvSmmnL0oAdRRRQAtFFFABS0lLQAUUUUALRRRQAUtFFABRRS0AFFFFABRRRQAUtFFABRRRQAUUUUAFLRRQAUlLRQAlFFLQAUUUUAFFFFABRRRQAUUUUAFFLRQAlLRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0UAJRS0lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUtJQAUUUUAFFFFACUUUUAFFFFACUUtJQAUlLRQAlFFFACUUUUAFJS0UAJRRRQAlFLSUANboaaKe3SmCgBaWkpaAFpaSloAWlpKWgBaWkpaAFpaSnUAFNp1NoASkpaSgBDSUtJQAlJS0lACUlKaSgBDTk6U2nJ0oAdS0lLQAUUUUAFLRRQAUtJS0AFFFFAC0UUUALRRRQAUUUUAFLRRQAUUUUAFFFFABS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUtJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlFFFABRRRQAUlLSUAFFFFABSUtFACUUUUAJRS0lABSUtFACUUUUAJRS0lABSUtJQAjdKYKe3Q0wUALS0lLQAtLSUtAC0tJS0AKKWkFLQA6lFIKUUAFNp1NoASkNLSUAIaSlpKAEpKWkoASkpxptACU5elNpy9KAHUtJS0AFFFFAC0UUUAFLSUtABS0lLQAUtJS0AFFFFABRRS0AFFFFABRRRQAUUUUALRRRQAUUUUAFFFFABRRRQAUUUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUtJQAUUUUAFFFFABRRRQAUUUUAFFFFABSUtFACUUUUAFFFFACUUtJQAUUUUAJRRRQAUlLRQAlFFFACUUtJQAUlLSUAFJS0lACN0pgp7dKYKAHUUUtAC0UUtABS0UUAKKdTaWgB1KKbTqACkpaSgBtFLSUANNFBpKAEpKWg0ANoooNADacnSm05elADqWiigApaSloAKKKKAFooooAKWkpaAClpKWgAooooAKWiigAooooAKKKKAFpKKWgAooooAKKKKACiiigApaKKACiiigAooooAKKKKACiiigAooooAKKKWgBKKWigAooooAKKKKACiiigAooooAKSlooASilpKACiiigAooooAKKKKACiiigApKWigBKKKKACiiigAooooAKKKKACiiigApKWkoAKKKKACkpaKAEooooAKSlooASiiigBKKKKACkpaKAEooooASiiigBrdKYKe3Q0wUAOpaSloAUUtJS0ALRRRQAtLSUtADqWm06gApKWkoASkpaQ0ANooNJQAGm0ppDQAU2nUlACUq9KQ05elADqKKKACloooAKKKWgAooooAWiiigApaKKAClpKWgAooooAKKKKACiiigBaKKKACiiigAooooAKWiigAooooAKKKKACiiigAooooAKKKWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASilooASiiigAooooAKKKKACiiigBKKWkoAKKKKACiiigAooooAKKKKAEooooAKKKKACkpaSgAooooASiiigApKWkoAKKKKAEopaSgApKKKAGt0NNFPbpTBQAtLSUtAC0tJS0ALS0lLQAtLSUtAC0opKUUAFJS0lACUhpTSUANooNFADaKKKAENJS0lACU5elNpy9KAHUUUUALRRRQAUtJS0AFFFLQAUUUtABRRRQAUtFFABRRRQAUUUUAFFFLQAUUUUAFFFFABS0UUAFFFFABRRRQAUUUUAFFFLQAlLRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAJRS0UAJRRRQAUUUUAFFFFACUUtJQAUUUUAFFFFABRRRQAUlLSUAFFFFABRRRQAlFFFACUUUUAFJS0lABRRRQAUlLSUAFJS0lACN0pgp7fdpgoAWlpKWgBaWkpaAFpaSloAWlpKWgBaWkpaAA0lKaSgBKSlpKAEpKWkoAQ0hpaSgBKSlpKAENOTpTacnSgB1LSUtABRRRQAtFFFABS0lLQAUtJS0AFFFFAC0UUUAFFFFABRRRQAtFFFABRRRQAUtJS0AFFFFABRRRQAUUUUAFLRRQAUVdsNKu9RfbBESvdj0FdXp3gyxQq2ozzuO6QgD9TWU60IfEzSNKctkcP1q3aaZf38gS0s552PQRxk17docHgPTwobRiHH/LS4/ef5/KvQrO90+KAGxSCOMjjy1C8Vn9Zi9hujJbngWkfCDxVqYV5bVbOM952wfy6109v8BLjaDc61Ep7hIya9afVSDjNV5dTOODms3iilSPL5/gSqL+71wE/7UX/ANesDUPg1rlsC1rcW1yOwDbT+tetXGruucHNUG1xlbrWf1uSLVBM8E1Pwtrejk/bdOnjUfxbcj86xyCDgivpB9bEqFJQrKeoIyDXNav4X0HWFLG2FvMf+WkPH6VpHGRfxImWHfQ8Uorqtc8DX+lq09v/AKVbD+JByB7iuWIIJBGCPWuuM1JXRg4uLsxKKWiqEJRS0UAJRS0UAJRRRQAUUUUAFFFFABRRRQAUUUUAFFWbbT7u8bFvbySe4Xiti28J3TkGd1jHfHNRKpCG7LjTlLZHPUYJ6Cu6tfDenQDMitM3q3ArRWys4xhLaMf8BrmljILZG6wsurPNNpHUGivTDaWj8NbRH/gNVZvDml3XBiMTHuhoWMi90DwsujPPKK6DV/Cl5pyNPEDPbjq6jkfUVz9dUZqSujmlFxdmFFFFUIKKKKAEooooAKKKKACiiigAooooASiiigAooooASiiigApKWkoAKKKKAEooooAKSlpKACkpaSgBG6UwU9ulMoAWlpKWgBaWkpaAFpaSloAWlpKWgBaUUlLQAGkpaSgBKSlpKAEpKWkoASkpTSUAJSUtJQAlOTpTacnSgB1LSUtABRRS0AFFFFAC0UUUAFLSUtABS0lLQAUUUUAFFFFABS0lLQAUUUUAFFFFAC0UUUAFFFFABRRRQAUtFFABWv4f0c6te7WyIU5c1kV6L4GtV/smSUD5mfBrDEVHCm2jWhBTmkzbt7WK1gEUKKiqMcUpQmrZjPpSCNueK8XVs9S6WxxfinVntAttA2HbqR1Fcxb65qlrIHhv7hGHo5qTxDM02t3BOflbArLr26FNQgkeXVm5TbPSNC+KVxCqwasnmAcCZByPqO9d3a69b6jAJrWdZEbutfPlXtL1e70m4E1rKV9V7NWdXCxlrHRjp1nHc9znnZlJrNmkbOc1maL4jt9atvlIS4UfNGT+oq8+T1rzZRlF2kjui01dDfMYnNKJ3Wo8YNBNIZYS9kVhz+dZereDLPX0eezC2971wPuuf6Vaq/psxjmUHvVwnKDuiJwUlqeN6npN5pF21tewNG6+o4P0NUq+mNR8MWHinRzb3UY34/dyAfMprwTxR4Vv/C2pNbXcZMZP7uUDhxXqUqyqLzOGcOVmFRRRWxmFFFFACUUtFACUUtFACUUUoBJwOTQAlOVWdgqKWJ7AV2Phb4a614kZJfKNtak/62QYyPYd69p8PfDfQ/C8AkMQuLoDLTzAcfQdqynVUUXGDZ4bo3w+1/WQrramCE/xzfL+ldfD4G0Tw/g30h1G8HPlA4RT712Wv+KAzPaaYQE6POO/stckxJySTk9feuCpipy0R2U8PFasbLMzjYI44Yx92KJcKKrO1RXd9b2oJnnRPYnmsOfxTZoSI1eT36VlGnOeqRtKcIdTaLnmm+Yelc03ivJ4tR/31Tf+EpyebYfg1afVqnYz+sQ7nUiSpUkOfeuYTxJbPgMjp+tadrfxXODFMp9s81EqUo7ouNSMtmdZp8+4GNsFG4IPQivP/G3h3+xtQW4gTFrcfMuOinuK6y1m2OvOK1tbsotc8L3MOMzRp5kf1FXQqck/IzrQ5onidFKQQSD1FJXqnnhRRRQAUlLSUAFFFFABRRRQAUUUUAFJS0lABRRRQAlFFFABSUtFACUUUUAJRRRQAUUUUAJSUtJQAjdDTBT26GmCgBaWkpaAFpaSloAWlpKWgBaWkpaAFpaSloAU000ppKAEpKWkoASkpaSgBKSlpKAEpKU0lACU5OlNNOTpQA6lpKWgApaKKAClpKWgAooooAWiiigApaSloAKKKKACilpKAFooooAKKKKACloooAKKKKACiiigApaSloAKKKKACu58DX+22nts8qdwrio4ZZmxGjMfYV0vhaxnttVRpiI0cYOT1rHER5qbRrRlyzTPQUugeMVMk3FZ7o0TYPUU5JTivH2PTtc8/wDEOkXP9rzyRpuR23CsdtPul/5Yt+Ar0LV4i5Eq8nviskHivYoz5oo8yrDlkcj9huv+eEn/AHzTDbzKeYnH4V2QzRzWtzI5C3e5tZlmh3o6nIIFejeHtebV4fLnXbcIOcD73vWQeeoBojdoJA8R2MO61jWpqordTSnUcGdiRmkK4FVNN1JbwCOQhZ/yDVqNGccjBry5wcHZnoRkpK6KJGKltziRc+tSxWkk77UGTVxtFvIhv8liB6CpGzs9Am3WqjNWfE/h2y8SaM9ldoPmHyPjlG9RWBod2Y2WNgVI65rsN4kgDCt6crbHPOOp8o+ItAu/Dmry2F0pyp+R+zDsRWTX0f8AEXwtBr2kCYjbcRDKuByPavBJNDuUkZMjKnFehSqqa8zlnDlZl0VoNo12P4AfoajOmXanBhP4Vtcgp0VZNhdL1hf8qj+yz5x5T/lQBFRV+z0bUb6UR29pK7ey9K9A8M/DqFZI59WbzHzkQKeB9TWVStCC1ZcacpbHFaD4V1TxFcCOzt28vPzSsMKPxr2jwr8LtK0jy7i7H2y6HOXHyqfYV1GnWUNrAkVvCkca9FUYFXrjUrTSod9zIA2MiMH5jXHLESn5I3jSS8zShEVpCXO2OJBknoAK8+8TeK31WV7S1YpZj7zd5P8A61VPEHii41jMa/ubNf4AevuTXnGteK47ctBY4eToZOw+lZ+9U92BqlGn70zc1LU7PTYt08gBxwg6muO1HxbdXGUtR5Mfr/EawZ7iW5lMszl3PUk1FXXSwsIb6swqYiUttB8krysWkcsT3JplFFdRzhRRRQAU5XZG3KxU+optFAG3p/iK5tmCznzY/fqK9H8M6jFeFRG+6N1II/CvHa9A+Gq7nu2bPGNvPQ1yYilG3Ojpo1ZX5WcZrFsbTV7qHGNshxVGuq8f2n2fxG7gYEqhq5WuiDvFMwkrNoKKKKskKKKKAEopaSgAooooAKKKKACkpaSgAooooASiiigAooooASiiigBKKKKACiiigBKSlooAa33aYKe33aYKAFpaSloAWlpKWgBaWkpRQAtLSUtAC0tJS0AFJTqbQAlIaWkoAQ0lLSUAIaSlNJQAhpKWkoASnJ0ptOTpQA+iiigBaKKKAClpKWgAooooAWiiigBaKKKACiiigApaSigBaKKKACiiigBaKKKACiiigAoq1Y6dealOsFnbSzyMcBUUmvQdG+DGt3yrJqE0Vkh/hPzN+VS5JbjSb2PNaVUZjhVJPsK92tvglpcSjzL2eV/UqAKsn4R20f8Ax73TJ/wAVm60SvZs8QttFu58Er5a+rVqQ6FBEAXYuw9eleqSfC26XPl34P8AvJVWX4ZauP8AV3ML/UYo9tEORnBxwiIYQBR7CpADXVy/DzXowf3cbf7rVQm8H65B9+ylP+7zT54sXK0T6bqUdzGtvdOEmHCSN0Yeh96szW0kTfdNYE+ialCf3lnOP+AVYsNZ1HTR5UsTTQ/3JVPH0PauWrQTd4nVSrtK0i9IpK4IrKubJlJaMfhXTW+raLfACUPaSdw4yv51dXR7e65t7iJwf7rg1jGU6TNZclRHAEkcEYNN3V3z+EDN95fxxVU+AXlfCyMg9a6o4qL3OaWHa2OJJ560c16Bb/DaPcDNdykeigCtm18A6RDgvC8h/wBtqr6xAj2MjygMw6D9a3NM1i4UCG5ieRO0gGWH+NepW3h7S7bHlWEIx6pmr5gRFwkSKPZQKxqVYzWqNKcJRejOL0ucQXMcu3Kn1GK76zuIZYgSBWDqUJeI4UHHNYP9qXmmEkNlPQjNcXNys6+XmR3stnYync0S7vUcGkaaK2GxclfSuJj8bSPlfLt2b/eI/Skl8R3s44jiUewJxVOoiPZM7CV4r63kgJ6jArxvxBot1bas/k28jgk52qTg12Fjqd2L1BJKArNjgYxXRz6L5u6SOZZSeTzzV0arTuialNWszxSW3uomCyW8isegKnmlksr6JPMktJlT1KmvVLjSpYImYAGXPP8AsiqH9nTNw24Vu8W10Mlh0+p5nubuAKvadps1+xbiO3Q/PK3QfT1Nde2hvealFbx28YgJ/f3LKDt9h711cXgspcJcLd71VcRRFQEQewH86qWIbj7oKik/eOSsbOVIPL02ykMQ6yEY3e5Jre0+yuIyHnIUYzgHP/1q3XsL2HA8hZB/eDcj8K5TxTrV/YoYRZ3Ma95TGdv51xNSerOlNbItapr1zbq0VtIkSgcv1b8K4y91KSQtJcTMRnkk8tVD7e82SGzk9SapXERmcs0xJ/lVwgm/eHL3V7o++1CS7iaFMpEwwcdTWEdFt2/ifNa4tG/hkU0htpVHT8ua9CnKnFWicM41JO7MU6FH2mI/Co20I5+WYfiK2WUrwcg00fWtk7mTVjEbRJR0kU1G2j3QGQFP410A5owKBHNf2Xdj/lkfzphsLpf+WD/lXU7QaMCi4HKGzuB/yxf/AL5phglHWNvyrrcA+v50sdu08giiQu56AUOVtxpXOTjtZ5nCRwuzHoAK9a8G6V/ZOkqJRiaU7mHpVbS9Oi05TIxDTMPmbHA9hWvHPxmvOxGI5/dR2UqPL7zOX+JdmXjtbxV6ZRjXnFew+JpY30R43AbewABrgzptq3WPH0rqw0m4WZhWVpHNUV0f9j2jdAw/GmNoluejuK6LmJz9FbZ0KPPFwR/wGo20MjpMuPcUXAyKStX+xZP+eyVG2kTjoyH8aLgZ1FXG0y5X+DP0NMawuVHMTU7gVqKlNtOOsT/980wxuOCpoAbRS7T6GkwfSgBKKKKACkpaSgAooooASiiigApKWkoAKKKKAEooooAa3SmCnt0pgoAWlpKWgBaWkpaAFpaSloAWlpKWgBaWkpaAFptONNoASkNLSUAJSUtJQAlJSmkoAQ0lLSUAIacnSmmnJ0oAfRRRQAtFFFABS0lLQAUUUtABRRRQAtFFFABRRRQAUtFFABRRRQAUtJTgCxwASaAEorQttGurjBK7FPdq2LfQoYAGc+Y3qRxSuBk6Tod9rVysNrF1PLscKPqa9e8OfCDRoFSbWNQW6m6+TG4Cj8e9cL5C4C4XaO2KaYcH5SQfUMRWcuZ7FK3U+h9L0jTNLgEWm2sEKf8ATMDJ/Gr5jc//AK6+bEmvIj+6v7lP92ZhV6DX9ft/9VrV2Pq+6sXSkac6PoXy3/yaaVb1/WvCo/G3iiLAGqlv9+MGrkXxG8Sx/fktZfXdHipdKQ+dHtG0+v60g4715EnxP1pceZY2kn0YirUXxWuQf32jKR/sTf4ip9nLsVzI9U4PejjHWvNY/ivbn/XaRcp/uuGq5H8UNHcgPBdx/WPOKTjLsF0dyyIc5ANQvaW7/fijP1UVy0PxD8PzE5u5Ivd4iKtJ4y0CXpq8APo2RUWaK0NWbSdNcHfZ25/4AKybrRdJQ7o7JVb1TirC+I9GZgo1azYk8YlFWRqeny/du7ZyT/DID/Wpk20VFJHL3K3Ftn7MJVA6fMay5Ne161YlCSB/e5rvGNpMp2ujfQg1n3Fhbv0AP4Vlys2U0cefH+vW+c2cD/UEUL8TtZU86XAf+Bmtm40mEg4UfiKx7rSEHzAAA072HowHxU1TGG0qHPs5/wAKcPifdtxJpmB/syf/AFqpPpcByF5PtSQ6PErZlQkelDkhqKNRPiNDPhZdPnGf7oBqabXtOu4AXWWJj1DR1USzhQbY4QueOBV630JXw9wML/dHU1m3cdkjG/s7TdUnKwyyO/XCRHj8atx+HobRdxvLgf7KtW+yQWkG1NkMQ6nOB+JrmtV8S6dAGRHadx2jHH50co+ZiXN0tmpMe9yP75zWXH48vbTUCxRkU9QvIJrKuPFCkkfYjg+sn/1qoDX7ONt8lm2P94VcYMTa6neeG/Gaz39wbtt32icNk9hjpXc6qy/YkW0ANxcfLFxnHqfwrwWzvH8Qa3BBYhbZVbO9ua6a08d3Gk+JPIvomkghQwu2cmM/3hWzpMx5kem2tqtpbJaht2wct6nuanXVbjSkLMrTW46r3X6VnaLqtnq0Pn2dwkynsOo/CtSVBIhXpWCTTG7MsW/iywuo90T7h+WKsDWLeUYxkH9a811rSZbK9+2WRKhm/eRjofcVqabBeOqOSSGGa052LkR01xpGg6iWabTrYux5IQA/mKx7z4daDPudIpoveKU/yOa2bS3mXaSDit+2T5QGFNakuVjy+f4dW8QLWuoHA7Tx/wBR/hWVceEtRtx+7WOYesbivX73SorqMgFkfs68Ef41wOu6frulB5o4vttuuTvjHzKPcUSVi4VLnD3FhPCSJ7d1/wB5apNZRP8Adyp9q0m8SSPwAyHPIBxTf7WLHOxSf9pQaSnKJbhGXQzDp7j7jK36VE9tNGMmM49cVr/bmcjMMOPTbin/AGr0iiH4GtY4uS3M5YWL2OfJ2nnilijluG2wxPIf9kZxW/524hisQP8A1zFBnH8TnHpnj8qt4t9ER9VXVmdb6PK53TOI17hfmb/AVsQpFaR7IVCKevOS31NUpL+GNceYv0zVJ9Vizw4P0Nc86lSobRpQgbT3I9aaLzaOtc++o5yQcCq819JICoOFP61dPDt7mc6yWxf1TUDeyLGp/dx/qaoe1QByMU7zMCvQhFRVkcUpczuybIzQWqAye1N83uRVEljPNLnP0quZM0oc0ATkikGDUXme1ODcZNADyFHYUnP4U3Oe1P8A0oAMGjHY4pM4FSAcZFAEZijbqik+4pptoCMtEn5UTXEcQ5PNUJbySTheBQA65FpGNogQmsyWBJFZlj2Htg8VaAzy3NOJ+U9OlAGHRTm+8aSqASiiigBKKWkoAKSlooASiiigBKKWkoAa3SmCnt92mCgBadSUtABS0lLQAtLSUtAC0tJS0ALS0lKKAFNJSmmmgBKSlpDQAlJSmkoAQ0lKaSgBDSUtJQAGlTpSGlTpQA+iiloAKKKKAClpKWgApaSloAKKKKAFooooAKWkpaACinxQSzNtjRmPsK1LfQLh8GYiMenU0AZFWYLG4uMbIzj1PSuktdKtIAD5ZdvVq0OMAAAClcDBt/D46zy5P91a1ILG3gX93EB7nrVglM8daMg8CkAgG0cdBSlm9c0n480ZYd6ADJNJz3NO3fNzigjJODQAmc8d6PpxQeOtAIyfSgAwcUm3Prml4xyaFDOcIGb2UZpXXUYgB70bTVyLS76YZSznYeuwirkfhnU5jzAsY/23qXOK6jUJPoY23160m0Z/+vXRxeDLo8yXUSf7oLVbTwZbjBkvJW9lUCodeC6lqlJnIlMjnP51C0anrmu/i8K6ZH95HkP+09XotG06HBS0hz7rmsniYdi1Rl1Z5YbISnCRFj7Lmpk8M3c/MdhLz3K7a9YESqMKqqPYYpTEKyeJ7I0VLuzzW18E6oWycQj3lP8AStu28GTpzNq957iJiv6k12IibGcUojb3rJ1ZM0UEjJs9KWyACz3Tkd5JmarDwAnLKWPvU9zd2lihe7uoYAP+ejgVzmofEXQLHIjme7cdoV4P4mpUJy2RXOkbghI4AwKcISecZ9TXm1/8V7yRiLDT4oV7NIdxrmbzxnrl6x866O0/wgcflWiwk3uS68Ue3f2xpOm582ZXm/up8x/Ss298YM+RaW4jH9+U5P5V4q2s6hJ/y8OPZRimG5vpus0zf8CNaLC2W5Ptl2PR77VPtDbru63n/bbgfQVgXut6fFnEu8+iDNcv9juJfvBj9TUi6TMeoFaRw8VuJ4h9CW618NkQQ4z3Y1lyXsszZc59q1F0XP3mFTpo0Sj5ua6IxjHZHPKcn1Mm0vp7WcPCWDe1Wbm/lubkzSoxZvvZ7mteLTYE6Y/KpXsU6YFOyvcm8jp9A+JsdjawxalpsLLENqz24EbqPp0Nd1pnxB0DVJEiS9Cu3TzBt/A/414q9soGCv6VUmtV6hQDWU6MWWqjR9JXUSzRndg8cEVRs9QfSpRG43Qk8e1eMeHvHms+HgLdgbyyHAilJyv+6e1ep6H4j0rxRBi3mVLjHzW8nDj/AB/CuOpQlHVHRGomd/bajBOqspGCKvx3SetcKkM9q37snb6Zq/DfOOG6is1NobhfY677SuODTHnBAzXPx32RyasJd570/aXJ9nYp694M0fXt0skPk3J/5bw8N+I6GvNtb8A+ItJdmsxFf246MnysPqv+FetLc/nUguM9+frVc66lJyR4AbDxEnH2Hb+BqB7XxBnmEr9Er6DkihmJLAZ9RUBtISeY1Yewpc3ZF8/c+f8A+z9dl6+cP90YpjeGtTm/1hufzr6CFjA33Y1z7CkbT4z0iA/CnzSWwcyPno+DL1+9xQvgrUVPySSj6rX0A1inQRiozYDOfLH0o9tNCfKzwhfBOuH7kwOem4EVOngrxEB9yNv+B4r3AWijjYKeLdR/DirVeZm4QPEh4M8RLjNkzf7rA0yTwzrcOd2n3Q9wmf5V7j5SjtQIx24qliJEOlE8Fk0u+jz5ttcpjrmIioDEUbByPqMV9BhTj7xAHvTWt45fvojf7yg1axPkQ6J8/iNexH507YPwr3STRNPmHz2Nq2fWEVRl8JaLLy2nWw/3QRiqWJQvYs8b2YPelCZr1iXwJocpLCBo/wDrnKR/OqFx8PtMwfJvbmI+5DirWIgL2UjzfYB0NKAD1HNdXfeC5YCfs+oQyj0kUoa5TUPN0uQxXEJSTsc5B9wa0jUjLZkShJbisQq7mxx61QnvR92Ifjmq0txLN1PymoxhRwKskc2W5Y0D2ppPIpVOaYDs0H7h+lJ+FGf3Z+lJgY7feNJSt940lUAlFFFABSUtJQAUUUUAJRRRQAUlLSUAI3SoxUjfdNRigB1LSUtAC0UUtABS0lLQAtLSUtAC0opKWgBaSlNIaAG0lLSUAJSUtJQAhpKU0lACUUUlABTk6U005OlADqWkpaACiiigBaKKKAClpKWgAooooAWiiigC5Yabc6jJtgTIHVj0Fb1r4Y8s7phvI7ZwKzNKuHihZVcgE5wK0hq0yDBbp0oA147B4VCpAqr/ALNI0Uo6xNx6VnLr04XqPripk8RSZBdVIosBYw2MlHHPpSB1XrkfUUn/AAkUZzmMfgaX+37ds7oc596LAKNh7ilADHrmmDV7E/fhz6ml/tDS3x8pUfSiwDivHbFNKHgClF1prDG/b71Kr2zj93Nn33UrARFCvYUE44HSrBjUcq+R9QaTySf4j+K0WArgnkfzpQPSpjbuv8Sn/gNIYZeMBSPY0WYCQzzQSrJC5RweCAD/AD61rw+LNSt/9ZHbXC+m3yz+Y4/Ssl4pQufLz9DULK4+9E4/ColBS3KUmtjsrbxjYzYFxDPbN3yN6/mP8K17XUbC8/1F5A7em/B/I15j0zkMB9KXKFfmIP1FYSwyexqq7W560Y9vU8fSozsz96vMbe8mtjm3vJoj2CSnH5VPPrmryIF/tOVQO6qoP54rJ4SXQ0VdHo3yEE7hgVVn1KwtQTPfW0YH96QCvLrpZ7zP2m9u5s9nmOPyqsml2i/8sVz7801hO7E666Hotz438PWvBv1lYdolLVl3HxLsQP8ARNMvLg+rYQf1rlY7eNDwqj6AVMFGK0WGgiXXZavPiBr8+RaaZDbDsWyx/WsC71nxZqAKzalIin+FG2j9K1hj0pDgHpWsacY7Ih1JM5Y6NeSsZJrjex6k5JqePQhgbpST9K38egzTs+1XYi5jpo0I65NSjSrccCIGtInd2xTevYUWQXKa2UKnAVR+FSfZ0A4UVZC0oGKAuQCEDnFLs9qsDg8ClIz1B/CgCtsHUCjYD25qfaOuPzo49KAIdgHXpSgA84zTzjOccUhbsBQIheLPaq72mRkDrV09eDSnkYxQO5kvZN6cVXe2mjYPFuV1OVYHBB9jW6B7YpfLB44oaBSsXtF+I2r6YEg1OIajbjjcx2ygf73f8a9A0fxTomubRaXqxzHrbz/I+fQdjXlslsjjBXNUptHhds8qR6GsJ4eMjWNZo95zg9efTFOWXHU4rx3SfEOu6EqxwXguLYf8sbkbh+B6iuv074iadPhNSs5rOQ/xx/vIz/UVyTw0o7G8asWdyLg+tSrce+Ky7K9sNUQNYXkNwPRH5/LrVvyXTgg1i01uaXTLq3PbPWnfaOOtUAp9KcA4pCaLF0sd5D5cjOPR43KMv0IrkNT0XxVasZNF8SXM0fUQXDDcPYEjB/SunDN9aeHbPIzWkajQnG55Xc+LfG2lXAiv7p4mHae2Ug/iOtTw/EbxApAlFjMvo0TL/I16VLElzCYpokliPVHUMPyNc7e+BdIustCklo57xHK/98muiNSEt0ZuMlsY0XxO1JFHm6TZyH1WZl/oatx/FNTnztCkB/6Z3IOfzFY1/wCA9YtstabL2Mf88/lb8jXO3NrdWcnlXVvLBJ/dkUg1qqdOWxk5SR6JH8U9KOPN0zUYvoqtj9atx/Evw7IP3j3sX+/bn+leVquT0wKfsAHVqf1eIvas9cj8eeGZmA/tVU/342XH6Vdi8UeH7jiPWbM57GTH868XCA9yaRreKQfMAfqBS+rIftT3SLULC5H7jULWTPHyyqc1KYyybkYOv+yc14KLC2JyY1/AYqVHWxG6KeaE9f3cpFS8N2GqqPaZ5ljyCcH0rB1HWVjBSM5b0rztvHWrqPLW48+MdRMoOfx610uiyQapZi+wfmOCh52nuKwnRlDVmsKkZE4N1eNuLELVTxLYQyeH5dw3PH86seoNbWQowOKpasPM0q4T1jNTTdpIqavE8sBJ57U2hThKO3FeqcAA+1KD6U0cU6gBcjb70nGxs+lBoJ/dn6UAZJ60lB60UwEopaSgApKWkoAKKKKAEopaSgApKWkoARvumoxUjdKjoAdS0lLQAtLSUtABS0lLQAtLSUtAC0opKWgBTTacaSgBppKWkoASkpaKAG0lONNoAQ0lLRQA2np0pppydKAHUtJS0AFLSUtABRRRQAUtJS0AFFFLQAUUUUAaFgPlJq0y7h0xVSwbCMO+at89T1pgN2j1PWnDbz60Y+bk4PvSE460ALznOKAMk5xQpBFDYoAQ4Hpn1pcbhjJH4UcdhzQMk9aAE2Ak5JwKUtgYH6Ug9BTgMdRzQAiM6jAY1IbmYYHmP+dMzk57UvUZ5oAkW8uFORM+frUg1W7DcSk/WqxA68UAAkmgC8uu3ankjPuOtSDxBPu+aJDz06VmYAzxnNGOM0AbA1/g7rdSfrT/AO24CRutiB9axCB6UnTjFAG8dSs2XDQYoW908nlT06YrAJIIHrQAfoe9IDoA+nupImA9uaPKt2A23Q/76rBzjODQHbPFOwG/9njb7s+fxFH2ZwwxJn6isDewPX+lKZ5VPEh/A0rIDeEMo5wDR5cmMlBz71hpdXAHErD8amGo3YGPOY0WA1zG+cBDn61G8Ug5KNj2qguqXKnLMD9RUo1yXgGND+FFgJ/mBw6sPwpSynoaj/tlCctB+TU5dXttpBhPPvRYLjwR/eGKXKHuDUa39mRyrA9+KcJrFjnf19RS5QuSKF5wOaQrk03NkfmEuKcFgHK3A57bqOUdxdvFNK54zQYTtJScH8aQRSAf6wH8KLBcNuevWmmPHWnbJV7g/hTSzY5UGiwXEKY5zQOxyaXcQMlKTzP9g0rALg9cjNKA3saTev8Adb8qBIpPBI/CiwCgE+lI2SaNyE8NTvlP8XP1oAYUz1FR+WM9AKs4G37wNNKZNIZAIlVwygq46MpwR+Irc07xfrmmjbHeNPGONlyN4/PrWQVx1oxUOEXuilNo7Q/E65CqDokDEDkicjJ/Ko3+Jt4fuaNbKP8AamY/0rjiKb261HsIFe1kdY3xK1QkbdOs1H1Y1EfiJrTniCyT28sn+tcwCM5p2Bn0p+wh2D2sjffx54gcfLPAn+7AKrP4v8Ryf8xN1/3Y1FZPTvSZ9Kfsodhe0kTz6zrs5y2t3o7nbJj+VVGkupiGuby4uD2M0hbH50/GTShB61ailsS5N7idBT0Yn1oC07HHNUSKGJGDSlggzxj3qvLdpGCAdxFZkt1LMTk/L6CgC/cakFysYGfWs15ZJWLOfwpOnOcmmZJOadhC/wAOQMV2Xw/uS+m3kDH/AFc2Rz61xh6EV0vw+k2zalFnrtasa69xmtJ+8d0x5qvdDdbSr6o38qlY80xhlSPUEV50d0db2PJwcZ74OKTuaklXZPIuejsP1qM9zXrrY4HuKMEml/Cmj6U7r3oEB6Chv9UfpS4wBQy/uHPoKAMc9aKD1opgFJS0lABSUtFACUUUUAFJS0lABSUtJQAjdKjFSN901GKAHUtJS0ALS0lLQAU6m06gApaSloAWlpKWgBTSUtJQA2kpaSgBKKKSgBKQ0tIaAEopabQAU5OlNpydKAHUtJS0AFFFFAC0UUUAFLSUtABRRRQAtFFFAF6wHDn0NXBg8/jVTT/uSfWreOBg0IAJAHTikx6jmlHAwRTScHpxTAU8UoOByaQAZ4zS4z2oAMEn3pCTgAUvHrQB05oAF4FKQSOvFGfwFAbOelACYJxg/hSkHgZo5HI6jtRuzQAowenWmEHJOepp5OPam85Pf60ALntn8aD1A3c0c+1Hb3+lAAPSmnHXFLnIPNKelACAkDNGSw6cUoxxyTQcYxzQAHPGRSj5SaM9v5UnUelAAwDD+tN2Y5pw2jvz70bfcc0ANwMYpU469aDw3Wl47UABJHWo+Caf9RTM89KAF4IPtRtx359KXHpRj3oATpxSbSe9O70AdzQA0k/40AZ65pTweRyKD+VACbiO9OEjD+NvzpnQdfzpAOc9qAJxdSrwJG/Ol+2znlXOKgUZNKSABQBbW/nA5IP4Uo1RwQCq/lVLdjimnrQBqLqoHDRDPtS/2pFnlCPpWYcECosZfAFAGwt/bE5O4VIL6zY43Y+orF4B6YpCOM4FAG2J7Q8BqcDARxMR+NYg6ZpRnGc0AbgjTGVm/Wl2t1Dg1heYyj7x/ClE0nGHP50WQG7+8GRkGmEy5xgYrIF3KP4zUq6hN/e4pWQGoPMJ+6KbliOVqgNUl9vypw1WToUUjtRZAXS6jqpo3pjIJqmdS3H5owPoacuoRg8oaLBctCRAfvfnTw6kD5qqfa4X5wfypwkt/wC9g0rBcsu8cY3E1mXF9JISqcCpr+eFUjVDkt1qmeBwKLARjcTyetOJGcYxTCSGpehzRsAZxQOuKTqaXPtTAQ8Kea3PAhxrF6p7xA/rWETW34IONeuR6wf1rKsvcZdL4j0E80LyRkcUhzjilB6HNeWtzuPLr1fLv7lemJW/nVU+gq9q426tdD/pqaonjFetHZHny3FBx1peAaNuaXaCaoQctVO7uWDNEhwO/vVzeFOFrKmOZnPvQAyiiimAlFLSUAFFFFACUUUUAFJS0lABSUtJQAjfdNRipG+6ajFADqWkpaAFpaSloAWiiigBaWkpaAFpaSloAWkpaaaAEpDS0lACUlLSUAIaSlNJQAlJSmg0ANp6dKbTk6UAOpaSloAKKKKAFooooAKWkpaACiiigBaKKKAL+n/dfjvVzkdR8v1qlYfdcA1bOcc8+lACnCimAnJNOTJO3oKXABJpgC8Ac0DBznP4UZDHil65oAaAc89KXn8PWjjOORSjGO3FACYwcZ4pR1OT+NAPPXNJg5ycH09qADaem7n0pQvNIRk9gKAMnk9KAFIyeaMH05owOlH3RjpQAHgHNBzjvTVG48nFKTggZOO1ABjHNLuJGPy9qPQn9aXPqaAEIOPekBKjFL0HXj1oI4z/ACoATqBxigbsmlP60A8dKAE2AjOcUoAHAx+NGcN0BpS3HQYoENwA3WjANLwf4cj1FIx9D+lAxMHPU5oGD0pQMLx0pBkHGKAEJY8dPpSgZ49KCB+NB+XvQAh457UDI5pc5FJ0oAB6ikJPcc0ozkelNzyf60ABI9OKXkjjpSYyKPXqKADo2O3ag4z7UnPpR24HPegQA98Up65oGCOtNOeuKBjjz3pmefencZyR0pCRnFACZOeacMHg9KXOBwM0wHk+tACsB270HPrTScHNNwepoAkPTFNHX3oxyCTTec0AOA9RSrjFJkgUm4dKAFzilznBpmcHpSnjvQBIKTPOKDgR4z1pBgUAIzMtIshPNDEke1M3ECgBjyE3cYY1cDcYNZ0nN3Gc96v45zmkwBhz7U48CkPIFJk0gBckn0pSRzikWlIoAb1WtfwcxXxGVBxuhNZORjitPwqceJoveJhWdX4WXT+JHpHam57UZwOtNzzXlnceca6CNcusf36pAAjp+NX9fH/E9ucd2qiG2jGcmvVh8KOCW4gXjJOBTWbnA4FKSScmmMcsOKskcBjFZcn+sb61pjtWY/32+poQDaKKKYBSUtJQAUUUlABRRRQAUlLSUAFFFJQAjfdNRipG6GoxQA6lpKWgBaWkpaAFopKWgBaWkpaAFpaSloAU0lFJQAlIaWkNACUlLSUAIaSlNJQAlJS0lABTk6U2nJ0oAdS0lLQAUUUUALRRRQAUtJS0AFFFFAC0UUUAXdPwWcE9qv4I+hrGjleJsoRz1yKuw3bNGxaMnb3WgC2o+bjqKCRwMfjmqhvB12sPwoF4mecj8KYFsYGDQcEcZ+lVhdRE5zUq3CdiKAH7fXtSMBxjr3o89T0oDKOcnNACgZHShcfSk3fNxinD5u+KAADPXn3FLnGKDnseR6UMB/k0ABx26Un1pVGO9IeDnk0AIQOm7ilx0J5pRx0FJjNAAOepB/CgkdOKB3GOKQLznOBQAuOMGlJwO9KRgcdKQDjpQAAA/eJzSdvTH6UHI78U04Pc0AOznmmk5OOaXGB1/CgHHPFAC/j+NNxzzzS57YpM5GOlACn8fajtyaQD3/OjtzzQAHryR9BSkZwaaQB6UcAdaAFJHrTSQTgUYBA65o254HBoAUAnnoKTbhs4z70pJAxSZ+XpQAdeO9JjHXkULx25NL0PP5UAIc55HFN6nilJOMCjpgUAHRqN3GCDxSEZNA4oAXknNNxSjGMnPFGR260AHQe9JjJ4NK2TxxTR1NACkDuaTNHUnNNPWgBTzgilAPIpFoJOOlAA2c4HSjk048Y9aaOM+tABnHWkDbm5FJk4680DOc0APJAHem5yOlO6io2bacjNACgHFNJHSlBJGaQ4xQIrt/x8p9a0c1nni4TPrWgw96ljF65FMP60FjR2FAAMgj1pWpBz1p3UYxmhgIRx6VpeG8DxHbf7rVnY9KveHgf+EhtD/vfyqKnwsqHxI9H7Dmms3PNIKTPNeUd55/4gOdcuR/tf0rNAxitDXPm1q5P+3VHvXqw+FHBLcaBzQccnvQetITVkir1FZkn32+taS9RWa/32+tCAbRRRTAKSlpKACkpaKAEooooAKSlpKACkpaSgBG6Go6kb7tRigB1LTadQAtFFFAC0tJS0ALS0lLQAtLSUtABSGlpKAEpKWkoASkpaSgBKSlpKAEpKU0lABTk6U2lXpQA+lpKWgAooooAWiiigApaSigBaKKKAFooooAKv2QzBJxxkVQrQsceQ/wBaAJNgI6UwwqeccVPwBnFIOpOcUwIDAvoKjNv7CrbZwBn8qack4oAqG2YdCR+NIIZR0kYfjVwg56jpQAMdKAKe2YdJGoElwv8AHxVraMj3pGjweaAIBcTr1ANIbuTJygz9an2ZNM2At0FADRfP3Q+/NSDUAfvK1MaIHnFIYMCkBP8AbomH3iM+tKLyLj5gcVUMAxTRAPSgDQFzCej8/WnCaNv4hWYbfnpSeR6UAa3mKTwQRT964wCMelYwiYDgn86T96D/AKxh+NFwNhmHehQrHissNMoJ30n2mde4NMDUxnNBGePSs77ZKByAacNQYDlKVwLvABxzQBnnp9aqDUExhlOfpTlvoupz+IouBbwAc5zSYzUC3cJ/jFP+1RHhWH50wJNpz04pP4jxx9Kb5yno4pwdD/FmgBo5OKXnOBRkE4GMUox65oARxn2pueMelOcdMUKMdaAGjdnmlPzN60pXjikKgdM4oAaaMc+lKy9MdaTGcc80AIV54NGDxzSkYx796McUAAJBpN+RzQeBwKO1AAG46c0nSmn5eppRyKAFXg80g5OD0pc5HtSAYNACUHBXmnelIxoAMcZ60DnrSjhabQA3Gc0g69aU8jpSfxDtQBIajZhinnpgVGVDGgAzhaTB20EcYo/h46UAVyf9IT61o5zWZn/SVz61prjaKlgHPUUY46U7tk03GBnrQADOcU5cZxTSD1qOSfaMLyfWkAssyW6FpGA9B3NWvCl2bvxLDgbUVWIBrnL0lmyzEmt3wGM6+p9EapqfCy6fxI9QFJ/FR2pActXlHcef60T/AGzc/wC/VHPXNXdYOdWuf+ulURya9WPwo4JbhSNwBTs0jngVZIDtWY/3z9TWl6Vmv98/WhANooopgFJS0lABSUtJQAUUUUAFJS0lABSUtJQA1ulMFPbpTBQAtOpKKAHUUlLQAtLSUtAC0tJS0ALS0lFAC0lLSUAJSUtJQAlJS0lACGkNLSUAJSUtJQAlOTpSUqdKAH0UUUALRRRQAtFJS0AFFFFAC0UUUALRSUtABV/TziOSqFXrBsJKPpQBaBOME0HC9aBjGcmhsH3pgIxxjB/Gkx3H60Yx70oGev6UAAPJzxQx5AxScZ54pei560ABI5BpvQZ/nS9e3FIeTigBVAxk03gdhSn72f5UuARwKAG4y2KRlzxS++DSg+vWgBmMdcGhRjt1pxxg9TS8Y68+tADAozz1oK88U/bz16UbcfWgCPaMe9NKA4qXocfyobHoc0ARBBtApNgzzUvGDxk0gGe1AEJjGKb5IOOKnA6inbQBQBVMQHak8oHjFWioNGz1zSsBU8hc8immD0FXCuegpuO2OadgKZiK9DRscchj+dWylLsGeKVgKgMw6Macs069DmrOznpSFPagCEXU/I4/Kj7bNnlRxUvl4HPemGMGgBgvZAfmUkfWni/9jTTGpHSk8n2oAlF6uc5NPW7jIySKr+SPSkMHPIoAuC4Qj7wzS+YrLwaoGH0pPJYUAaG9SBzQfuk8Vm7HH8RpT5uPvGmBeLArz1pMgiqW6UDrTlmlXtxRcC+ASOlB47VT+0vjBX9aBdsOqmlcC7jpnimldxPNVvtgPVTSfal6c0XAtgjGM9KZuz0qBblD3p4njwPmFMB+D0zTtoGPWohIpbORTxIPWgBxOc4pnNPyuOvNMPt0oENPrSE5+lOYcUwZI6UDK3W5H1rSQ/KKzwP9IGa0Iz+7FJgPBx3pGdRSFs8CmnANIAdi3Hb0qF+5qUnmon6UAZd52roPAP8AyHT/ANczWBegZrovh+P+JzIcdIjWdT4GaU/iPSh0pB9+jOB0pF+9mvLR2nnmpHOqXJ/6aGqvGas3xzqNyf8Apoaq9DXrR2R58txeM01sE0pHvTTVCF7jFZj/AH2+taecKDWYeWJoQCUUUUwCkpaSgAoopKACiiigBKKKKACkpaSgBrfdpgp7fdplADqKQUtAC0tJS0ALS0lLQAtLSUtAC0UUUALSUtJQAlJS0lACUhpaSgBDSUtJQAlJS0lABSr0ptOTpQA+iiigBaKKKAClpKWgAooooAWiiigApaSloAKuWOTv+lU6uWI/1n0oAthfelI/KkXjJPNGctTAOCeeRRggcUM2AcdKQMfSgAJx1xikJyOKXAI5A/CkJI6CgBcY5H5Uin25NLtzSA/N6YoAcAxGc00udvFP681Gc9RQADceuKC3PFHRh70o459aADH5UgGM5NDelGSOKAHDjvSEUEYAwOvWigBDnqacSxUZ60YU9DSHigAA6470m3nntSnPQjFA9OuKAGHAOcYpQMn2xQeMZ704Dk44FAAAR349qMZowQcZH0pT9P1oAbSc9hThxScE9cGgBv8AOlxjqKXGT06etJjnJ6UAN5oBAOKXvQfrQAYPXFIw/KlAzSmgBmBj39aAOKdmg4H0oAbg0bSRQCT3px6YoAjxzyBSFeKcSCeaXAximBFtGORQFz0qQjFKoGOaQEZjx0pAtS45owB0OaAIvL9hSeUCamwaMc8UAVzEDSCAZxVnA5zSYx0pWAgNuPSk+zrjgVZzjijGDxQBTNuPegwMBwx/OrYGetIwFMCmUkHRj+dAMy8bqtFR6UFRnNICt5kwpfOkAyVFWAozSSJhCcUANtlEh8w9atoMLiq1jgirR6UgG4xTT64p5BOMmmMMAc0AHB5qN/UU/HfNRtyDSAy7zqK6b4ej/iZ3B9Iq5m8611Xw7B+2Xh9Ix/Ooq/AzSl8R6CScCmgnd0pT0poOSAa8w7WeeXh3X05/6aGoDwc1Ncn/AEyb/rof51FjPNerHZHny3GnpSE9KUd80bRTENf7n4GsztWm/wBz8DWZTQBRRSUwCiiigBKKKKACkpaSgAooooAKSiigBG6GoxT26UwUALS0lLQAtLSUtAC0tJS0ALS0gooAWlpKWgBaSlpKAEpKWkoASkpaSgBKSlNJQAhpKU0lABSp0ptOXpQA+iiigBaKKKAClpKWgAooooAKWkpaACiiigBau2H3ZfpVKrlgcGQY7UAWk/SlI9O1LGeMHqaQ5LEbuR7UwEOT1HNDYxxSHk8CnY47UANGaApB56UnIOc07pjFACcjvxSY7ninAZ5zimknpQA7BHHOPWkPy896BkL149KQDJ56UwDPPrTg3HSg4x3P1pp7YpABGexHtRxxnOaUdaCcnoMigAAyfWjI7Dml+vb0oyO/IoAB1+WhgOvNIDgZAoALEk8UAABIPamjvinYyOfyFGOMcUAJgg9OtOJIGMflSYwDxQKAE4/GlPI96MDseKMcAZ4oAXjHWhcHk0vQ8nimk0ALnkU3JJxilxyKQ5DEnBoAbQg5OehpwwRxSKADzQAAjOM0hI3Upx1FJxmgBScetMxkECnZzxTeR0oAUAYwKUdaMfUGlHAx3oAY2Cc0vB5obJPHWk7c0AJ2zTugwMU0AYpwHze1ACjGDzR0X1o4H1pDyMdKABSOQaXcM9KQEY4FAPHSgBD7ilBwvFOHJ6UhwDzQA3HQ0H0pxYDjFJn1oAQUhHpmlBz0/GlJ/AUANz8ppoye1OA6il5A4oANuBnvUcnEZJqQ9KjmH7omgBLEcGrPciq1n90VZqQAnB65prU5ugPemGgAOKhY8HipWqJ+hpAZd51Fdf8ADlf3163+wB+tchd9a7L4dKdt83HRR+tZ1v4bNKXxHcnr9Ka3HOe1PppPyn6GvNW52vY84nObmU+rn+dR54NOlOZ5P98/zpD6V6y2R573GnOKQHmgjNA+8M0CCThDWXWpN9w1l00AlFFFMApKWkoAKKKKACkpaSgAooooASiiigBrdKYKe3SmCgBaWkpaAFpaSloAWlpKKAHUtNpaAFpaSloAWkpaSgBKSlpKAEpKWkNACUlKaSgBKSlNJQAlOXpTacnSgB9FFFAAKWkpaAClpKWgAooooAKWkpaACiiigBat2P33+lVKt2H+sf8A3aALqZI5oAxx+dOQjbnv6UjHPamA3b6UvIzjpSd8kUMcDPWgBuNwyCKXkntxQvHHQ0oHOc5oAOopPvDp06c00ZJ9vendM4IoAbzjFLxikVu1HXpigBMnIz608Edc00AbsnH0pwIPbntQA0EE9MUpx/jQQQeaRlyaAHAkAA0HGeBzSdeAOlHTFAByPp3oBPO3pQckcflQo9qAFxleBzSEkAcU78qQ8n1oARW4PpQuPr+NPGDzSAL16UAISOwoUbfrTuPbNBA6460ANJzx3NIox+FAxzmkYkdDQAuT1xgUYyMjk0mO5604EkHmgBoyBTTxx2pw+6aQdfagAzwMDFNxzintweDTckNj9aAAg7emKVRzSk49800HA60AKeD7UgOSc0HikA9TQAvuabjHQ5pT+dJ/DgUAKvqaTIyaF54P5UMMEYFAB796XknkUcY/rRkgUAI2O1L7UnPWlAycmgB2CF6UgYHrmjv6UhznGeKAF4FM68kjFPIwp54NMBx2oAdkZzgYpPvNS+uaM/LgUAH3SRmk3fjSdqBjFADutRTHEJAp+T0FRyg+WwNABZ/cqyeBVW05jqyOnNSApHrTD39Kew96YelDATtUT96k5PfpTG6GkBlXfUV23w6X/R75vdRXE3n3hXdfDoYsLw/7a1lX/hs1o/Edkc4psmfJf/dP8qewpkxxBIf9k/yrzo7nY9jzVs+ax/2jTT1pW+831NGa9boee9xAfmo43UoI9KafvUCCb7h+hrLrSm/1ZNZlNAFFFFMApKWkoAKKKKAEooooAKSlpKACiiigBrdKYKe3SmCgBaWkpaAFpaSloAWiiigBaWkpaAFpaSloAWkpaSgBKSlpKAEpKWkoASkpaSgBKSlpKAEpydKbTk6UAPopKWgApaSloAKWkooAWiiigAooooAWiiigBauad/rHH+zVKrdicTEZxkGgC6mAuO9Kfempjb3zTj0xxTAQ4J6GmnOMZp4IAJ61GNxJJFACrgfeNKfWk7dOaXHrwKAE4NIeOcUuOaQjnOc0APBwOQM+1NDAHkdaAQOo4o24680ABIAwRSAd+aHGenSjPyigBSeaOc0YzyB+NCmgBc446fSgZJ/rSd+MZFO7dMUAM57nilHHTn3oCnvSkYGBk0AIetJk5+6BTjxzzTepoAcGHpSEjmlyM9PypGHfHFAChh1pS3y55wabjPQ0A8e1AAfXNI2B0p/AHAqPPHrQApXgEUq9MYpDwaTknt+FACkDt1ppJ29KfwPWk4zQAg6/1pP4aXIJxSA9sUAAz+FJ0IGOKOuaXOO2eKAFye9JkYozxRkenAoAX8PrSdTijcMY7migBP4j6UdelDZ7UoAA96AGHp+NKMnilJGOBTR+FADj1HtTsc4ximDBJp3PpQAMfamnGMc0uDihcnkngUAHt3pBnPWndab39qAHEY6HPrSqcLRwPxppALelACE5yMcUnGelOfg/1pOozQAA5/CmS8oakA4zUcx/dn6UAMtflTjvVntk1XtfuD1qx9RUgGeKbjOc07sO1NbjpQAnNRseDUmeKif86AMu8OXrvfh5/wAgq6/66CuBvPv16D8PB/xJ7nj/AJaCscR/DZrR+I60/Sobji1lPYIf5VK3Heobo/6FKenyH+VedHc7HsecHG4/WlpO9Kelet0PPe439aQHml6ikA+YZoEMuD+6NZtaV1/qTWb2poAooopgFJS0lABRRRQAlFFFABSUtFACUUUUANboaYKe33aYKAFpaSloAWlpKWgBaKKKAFpaSloAWlpKWgApKWkoAQ0lLRQAlJS0lACUlLSUAJSUtJQAlOTpTacnSgB1LSUUALS0lFAC0UUUALRRRQAUUUUALRRRQAVZsv8Aj5H0NVqs2X/HwPoaALyj2peN3t60wZxTw3BOetMAzlsZximt0wKcT0NNPt1oAAx9M0EcZPSkBx0708E47YFACdsUrcLkdaRjyAOKRgT1oABjANJz659qXB9h6Up6etADRx1oBHPajqMY49aAQegoAXOR8tCH5sd6T+HORzRkjFACnlunNGOnBo/ipDk9KAHD9aDmjOByBSgjFACZPQjANKMenFBHOaTnt/OgAPT7v5Gk69KdjjP6ZpmMk9qAF9iflozkf1po4NKTkYzQAq+h5NJyvbrRn0zQeR6UAKevPFN7n1pcY4pevegBDnPvQfu0h46HilIA5zyaAEGPqaADnmlI4GKaMgUAO7jNN28nNO568UxvvcUAA6+2KXoKaM56CpOMc0ANAz1pcYoJB69fakz/AA0AISM8UdBmg9eBQc+tACc45PNJ060uMDjvQASOc0AB9RS4zTT7UoOOTQArcY9aBnHvnpSkZGc03jrznvQA4nHTpQAeOaTIzwKM0AKeOnNBzjnrTcnPWgDdzmgBcFhzSD73tRyDSc9c0AOB5/lTJRiJqkAwKil5jNADbYYFWCe4qC25AqftgVIC5ORTTxnIpW7ZPSmnJ96AENRP1qTrUbmkBlXf3q9E+Hoxoc5/6a153d/er0j4fjHh9/eU1jiP4ZrQ+I6ZunNV74gadPjr5ZqwwqrqWRpc/wDuHmvPjujrex50BQT2pVNB9a9boeexvNA5YUtCjBoAiu8iE1nVp3f/AB7msymgCiiimAUlFFABRRRQAlFFFABRRSUAFJS0lACN0pgp7dKYKAFpaSloAWlpKWgBaKSloAWlpKWgBaKKKAFNJS0hoASkpaSgApKKKAEpDSmmmgApKWkoASnJ0ptOTpQA6iiigBaKKKAFooooAKWkpaACiiigBaKSloAKs2X/AB8D6Gq1WLM4uFoAuqcnPb3pXxgY60gHGD3pSMe9AC8HrSHoaQdDxT8fLjimAwHFOGO1IFyKdgjvQAu05zTclCc/lQpyefw9qXBIPFADNwPqKXOBj/JpCvHoaD9KAEyCeppc/LzRt9/yo5PbNACADqKXqw5PSg/XpRgDp3FABnOaXBNJ3wKduz8oFADeMc/rT0Ix6Uztg9TSjB45x7UALnnkGkJ54FGcHNL1PWgAODzzSEgD3pN+Dg0jHIzjigAOGHUfSlAx70gGeOlLkBfpQAuSDz+tB4HFNxxng04cUAHfpgUfSg9aO3TBoAQkUv4UAAj3pTjGMmgBpyKMdz1pCcH2oOevSgBeMHmoyccmpDjrTWGRzQAinin7R160wcDrTsnbQAgOBjFGRnvTfumgc5OcUAP4HSmsDu5pQCBSZ+bmgBM570Z2ij5c8ilJ3dOlADT9KOg607oKbgE8UAOIwKARij6mmc5wKAHZG6gjOaQClA4PrQAg56072FIOTg0vINAAwOM44poODSt+lNoAeCD1qKY4jJ6inkZ6Uy4/1OKAC15QVNwBmorTmMVKetSApIJpppWPFJxj3oAQ+1RPjJqU4zUTc5oAyrv79el+A1/4pvPrIa81vP8AWV6b4FGPDKdOXNc+J/hm1D4joD1xVXVuNIuP9w1bPWqWtZ/sW47fIa4Y/EjqlszzsU7tQO1JnBxXrHngBx0pRyaSl/ipARXuPs5xWbWje/8AHuazqaAKKKKYCUUUUAFJS0lABRRRQAUlLSUAFJRRQAjdKYKe3SmUALS0lLQAtLSUtABS0lLQAtLSUtABS0lLQAtJS0lACUlLSUAJSUtJQAhpKWkNACUUGkNABTl6U2lXpQA+iiigBaKSloAWikpaAClpKKAFooooAKWkpaACprU4uE+tQ1Lbc3CfWgDRyQOaTjgkU4jtRn24pgJjIpQPUcU3JyTjjvTjzQA45wSBik3DHWlHyjnmg89BQA0c9gPrQzc/eUYrY8J7T4pslZVZS+MEZHSvVJtM0+4yJrC1fP8AeiX/AArmq4hU3axpCk5o8VUg+9NYYPFewv4R0CZsvpUIP+wzJ/I1UuPhxok6kwSXVq3bEocfkRn9alYyD3KdCSPKOnSg9hnJrrda+Huq6cjXFmRfwKMsIxiRR6le/wCFcoBnOeCPWuiFSM1oZOLjuMC7fc+1OO7A6UNkHrVvT9Jv9XkePT7OW6kjXc6xDkD1qm7biKWCW56U7HGBir8ugaxbH9/pN/GP9qBv8KpSRPFxJG6ezKR/OkpRfULMbgYyRSHAHHGaAwbgED2zQ2D6cVQAc56UvOfrQKTPPXigAI5pOtOPrTRnrmgAyQcZ696UjC9eaQjIpQnGRigAA6E8UfL6nP0pSuV65pvRQaADODnHSkHzHNKeeccUnA6UAOHHQdaU+5pMe9KwwM0AMb5vwpATnmlwB25pBw9ADgTnkU1lzx3p2c96RiM0ANUZJxinEcU04zxTuaAEbAAApoyDjOKcaMfKPbrQAvAyTTScnIyaG9entQOO1AAaQ+3Slb7pNC5K0AHOPakHByM0ucD3ozk9c0ANb2pD0zTm+lJ3xmgBQOtAYgYH40nfpQeT0oAU9e9O/CkXIGM0uMEEnNACNimHI44p55zzSY74oAQZxg024yYiOKfjPNRXPMRoAfa/6sVK3U8VFaZ8upiOalAIabjtmn4pp6UANPODUTdDUvJqJzhTQBlXZ+evUPA+B4Zj/wB415fd58yvUfBIx4aiOO5rnxPwG1D4jeAyao65xos/+7V8D1NUNe40SfP92uGHxI6pfCzz/Hy0mMc0oPy9aQ9OteqeeGMCkz8wxRmhfv0AR3p/0c1m1pXozCcVm00AUUlFMAooooASiiigAooooAKSlpKAEooooARvu1GKe3Q0wUAOpaSigB1FJS0ALS0lLQAtFJS0ALS0lLQAtJRSUAJRRRQAlJS0lACGkpaSgBKSlpKAClXpTacvSgB1LSUtABS0lLQAUtJS0AFFFFAC0UUUAFLSUUALUtsf9IT61FUtt/x8J9aANLdgc0DaB60uAR9KAKYAOnegfTpQew4NGMCgBSwI54puSeB0pSBjr+NIelAGr4WOPFViR/z0/pXsI61454Y/5GexOCP3w/lXsuOTivMxnxHVh9ipfavp+k+V9vulgEudm5Sc4+lWLHVdO1E4sr+3uD/djkBP5da4j4l/6nTD7vXARM8cglSQo6nKleCPxp08MpwvcJ1nGVj6IiBBB6YrjPHPhGK6tZdW06ELdIN08ajiRf7wHrVzwL4mfXbCS3u2DXltjLYx5idj9a64fTIPBHrWKcqM7Fu1SJ83j5q7/wCEpI1u/Hrb/wBa5zxdpA0TxJd20YIhc+ZF9G5rofhIf+J5e8/8u/f616FaXNSucsFadj1wSOowGYfjTXjjnH71Vcf7Sg/zoz1rj9b+IEGha1Jp8umyTLGAd6ygE59sV5cFKTtE6pNLc6G68N6JeIUudLtJAf8ApkFP5jBriPEHwstzE9xoDsso5+zTNkH/AHW65+tdBpHxA0PV7lLXdNaTucKJ1G1j6BhxXU528EfjWvtKlJ6k2jNaHzVLHLbyvDKjRyodrqwwVPpUYAzyeK9N+KWhRiGPXIEw+4RXAA6+jV5kvIyelenSqc8bnLKPK7CNnOBWho+jahrl21rp1uZplQuV3BcD6ms9sjn1NeqfCfTfLtb7UmU5kYQofYcmlWqckbocI8zscZL4I8T22d+hXbD1jAf+RrKudL1C1Ba50+7gA6mSFlA/SvpHeB2P50y5jW9sp7SQZSaNkIJyORXHHGSvZo1dFHzOpzkU0nsKnuYWs724tXXDRSMh/A1Jpfkf2tafaYxJAZlEiN0IJ71382lzC2tinnPUH8qUDPYivcZvh74XuORYNEDzmKZh/U1x/jbwPp2gaQmoac90R5oR1lcMAD0I4rCGJjJ2LdNpXPPgdrc9KUknnHFJ1B4rb8OeF7/xMZ1smiTyFBYykgHPbiuiUlFXZCVzDyR7Ck5JzXWz/DfxNC2EtYJgP7k6/wBcVyro8MrxyIUkRirKexFTGcZbDaa3G4CjHXNJgkc9Kd94Hjmm/ODhlA+vFVdCDscY/ClUEfSlAGM44oB4z2piGn2pN2RTs56CkwNtAxpOTRzj1xS4+tOHTBzQA0nPekB4zmjGBikzxwOaAFxnnNLnHNA9f0pG574oAM8005zxTu2e1IO9ACjkdqQ4JoGc460HIOeaAEHTvT+w5pMnjFO470AM696AfzpWwelIMBueKAHoOKhuCTEf51IAe9R3GPLIAoAdaf6oVMTjioLQjZU7c1IATimtyetKetIcAUANzxUb45qQ9PeonoAyrv8A1leqeDFx4Zh49a8quzmWvWPBwx4Zg+hrnxXwG9D4ja71neIONCnJz0rRwKzfEhxoEx69K4ofEjol8LPPyflFLn5aOq4ppzXqHAC9aXOH6Ug9qOd1MBl2f3BNZtaN3/x7ms6hAJRRRTAKSlpKACiiigAooooASiiigBKKKKAGt92mU9ulMFAC0tJS0ALS0lLQAtLSUUALS0lLQAtFFFAC0lLSUAJSUtJQAhooooASkpaSgBKSlpKAEpydKbTk6UAOpaSloAKWkpaAClpKWgAooooAWiiigAooooAWprb/AI+E+tQ1Lbf8fCfWgDROc4p+DjOeKNuDk0E8EYpgITjjpSgcetJ8pI5BoJ4wKAHEjHPSm7cHNIDnilPHvQI0vDZI8SWHX/XCvZiOT9a8X8PHHiOwP/Tda9pI+Y/WvNxvxI66Gxw3xLz9k00/7bivPFGRXovxKH+gad/10YfpXnS4zXVhf4aMavxnVfD6ZoPFlsi5AlRkYZr2gLgCvE/AaF/F9iR2LE/TFe3jGBXHjEuc1o/CeYfFm3C3em3Qxl4mQ/gapfCU58QXY9bY/wA61/i4R9l0oAjO6Q4rH+Ex/wCKiuB/07H+dbr/AHcj/l4ewAYBrxL4iEN4xue+EX+Ve3/wmuS1/wCHeleIdQe/lvLyC4cAHZtK8exH9a5cPUjCV2a1IuS0PFkGxSykgryD719G6XI82kWcsufMaBC2e5xXFWHwo0y0ukludRubqJGz5PlhAT7n0rvlAVAqgAAYAHpV4mrGpaxNKDjuc544iE3gvUwwHyxhh9Qa8JT7o78V7V8R9QjsvCM1uW/fXbCNFz1A5JrxVOhBFdODVoamdZ+8Nlzt6HPYCvoLwxpw0fwzYWgGG8sO/wDvHk14v4W0z+1fEtjalSUMgd+Ow5r358YAHas8ZPaJdGPUr3l/DYrC0zYE0qxL9TVoHBPY4rzP4n6u9tdaTbRPzA/2lwD6HivRbS4S6s4biNgVljVwR7iuSdNxipGildtHjfxG0w2PiqWdUxHdqJQffoa5EcHK/eHIxXr3xT07ztAt79Fy9tLtY/7Lf/XryBTnnNenh5c1M5pq0j6K0K7GoeH9Pu1582BST7jg1Q8Z232zwjqEQGSqeYPqvNZXwxvxc+FDbk5a2lZcex5FdXd24ubKeA8iRGXH1FebL3Kp0rWJ82ocg8969h+FNkYNAuLvHNxLgH2WvJJYmt55oSPmjdlx9DivfvC9h/ZfhiwtTwwhDNn1PJrtxU/cMKS942g7c88V4D42shYeL9QjAwrv5i/Rua94NeT/ABUs/L1azvAP9bEUJ9xXPhJ2nY0rLS5yXh+1+26/YW+3IeZR+HWvfJrGznOJrS3kH+3Ep/pXj3wztvtXiuOQgFbeNpD9egr2cjjIqsXJ81kKlHTU8++JNhpGn6DC1tp1tDdSzAB402kAdelZ/gbwjo2v+HHub6GZrgTMm+OUrx9Kh+Kt6ZNUs7IHiKLeR7mr/wAN9e0nTtBltL7Ube2mM5YLK23INae8qKa3J05y5cfCjS3bNveX0PsSrj+QrPm+Ejj/AFOsg+0sOP5GvQoNR0+5/wCPfUbSXP8AcnU/1qwQSMqcj2rm9tVia8kGeSy/CrWF/wBVe2Ug9N5X+YrNufh34mgzttFlHrFMh/nXtGCDzxSYzVLFzW4nRifPupaNqGjlRqFnPbs/3fMH3vpVU21whBkgmXIyMoRXo3xVUGPTlzzl66DwHq/9reF44pmDT2h8pwecjsa6vbtU+exlyLmseLHjrxScE9jX0HcaXp90rLPa2zg8HdCP8K8L1nT30rW7uzIwI5Dt/wB3tV0a6qaCnTcSgc0E8cmlHuK7vRPh5BqWiw3Vzdz288oLKqqCoXtwa0nUjDcmMXLY4IH0NJyepr0GT4WS5Ih1SJh/twkH9DXF6ppx0rUZ7Jpo5miOC0ecZpQqxnsEoOO5UxjvSjBOKRelKvNakiMcDoKQcr704jPWmZz0FADhuI61FOMRmpF4qO6/1JoAW1P7sCpT7morX/Vipm+9mpAV+QKaenFKx9OKacnrQAVFJnmnknOKY/f6UwMm6/1leteEh/xTVt/u15JcnMleveFhjw5a/wDXOuXFfAjeh8Rq9Ky/ExzoEv1FanasfxScaC2M8sK5KfxI6J/CzhORRmlPFJyepr1DgHUmfmpAT0oH36QEd3nyDms2tK9/1H41m00AUUUUwEopaSgAooooAKSiigApKWkoAKSlpKAEbpTBT2+7TKAFpaSloAWlpKWgBaKSloAWlpKWgApaSloAWkoooASkpaSgBKSlpKAEoNFJQAUlFFACU5OlNpydKAHUtJS0AFLSUtABS0lLQAUUUUALRRRQAUUUUALUtucXCfWoqkg/16fUUAarjPfFNIOOae+QfamAjvzTAaeCcdqVPU9aeACMimDgkdhQA/bzmkIJFLnjpSEnGKALug5Gv2H/AF3WvbDy7fWvEdEJGu2R7+ev869vPDt9a83G/Ejpw+xxHxK50/T/APrq38q85APfH517+9tb3SeXcW8UyZyFkQMP1pkXh7REkEiaRZBxyD5QpUcSoR5bDqUuaVzj/hjoU6STavcRFI9vlwZGN+erD2r0gnAHNNRwAFAAUcAAYxUOpX1tpemzX12wWCFcnnlj2A9zWE5urK5UVyI8w+Kl+s+tWtorA/Z4ct7FjTPhOMeJJh/07t/OuQ1TUpdY1S5v5xteZy23+6Ow/Kus+E7f8VNKOOYGr0Jx5aNjnTvO57HVObVtNtrn7LPqVnDcYz5Ukyq35E1c7c14p8TY1bxe5ZQcwp1rz6NJVJWZ0Tnyq57VnPQgg9CO9U9V1KPR9KuNQmjklSEZKRjk1zfw21kap4cW2lfdcWR8ts9Sv8JrrJ4Iru2mtZxmKVCjD2NJw5J2Y1LmV0eB+IvEF14i1Nru5wqL8sUSniNfT61kZ4PU45q3q2nSaRq11Yyg7oZCoJ7r2P5VTLcHPAr2IWUVY43vqekfCbTi817qrocIgijJ9T1r01hkcd653wJYf2d4PtEYYeUea3Hr0rfYZBHavKry5p3OumrRPDPGeoLqXiu9lDZjjbyk+i8V6f8AD2/+2+D7ZC2XtyYjnsB0qhcfDDQriV5VuNQidiWOJFYZP1Wtfwx4Zj8MR3EMF5JcRTENiRApUj6GtqtWEqaiiIxkpXNHXLEaloF7ZsoPmRED69RXzrtKZRhhlJB+or6XLYOfSvBvGemjS/FV7Eq4ikfzU+jc1WCnvEmtHqdL8KL0R6he2TMR50QkUH1HWvVhgY+teC+Db3+zvFlhNxtZ/LbPo3Fe9HgVnio2ncqk7xseJ6to+PiRLYKDtlu1ZR/snmvbCAvyjoOPyrjrrShL8VLK9x8i2jSNxwWHArsUwW5qa8+ZRRUI2uyMSIzsispZOGAPI+tcZ8TrET+FkuwvzW8wJ+h4qXwlrJ1PxL4iUt8vnBox/sjitvxRZ/b/AAtqFqBktESB7jmphH2dRA3zROH+EVrxqV3j+7GP516cg38d6434ZWRtPCSSsPmuHZz9Ogrqru5Fjp1zctwIomb9KdV89QIq0Twzxrefb/F+oyqcqr+Wv0UYrAXrzmpJJjPNLIxy0jlifqc01QfX8a9WCtFI5G7sTDDn5cj2q1YNqNxdw2tjNOJpWCoscjDJP41WY+pxXqfw48NfY4BrV2mJ5Bi3U9VX+9+NZVpxhG7Kgm2dZoumT6TpUNrc3MtzcKMySSOWJb0HtVuaaKCF5pXCRIpZ2PRQKsNljnqa8x+JHiT95/YVs/yjDXLKep7L/jXmwg6szqlLlict4p8QP4h1h5x8ttH8kCei+v1NXfh9rP8AZniEQSNiC6/dnJ4B7GuV4GadGxjkEinDKcg+4r1JU04cpyqXvXPogkgmvN/iTpWJ7bVI1PzjypT7joa7bw/qa6xodteAgsy4f2YcGm+IdPGqeH7u1x8xTch9GHIrzKcvZ1DrkuaJ43oWnPq+tWtkoyHcbz6KOte5qiRqscYCooCqPQCuD+G2k+XFc6nKmHZvKjz7da75cbsGrxNTmlZE0oWVzN17VV0XRbi8JG4LtjHqx6V4VLI8ztJIxZ3YszeprtfiNrQvNTj02FswW3L47uf8K4gkY4FdmGp8sbmNWV3YcoHejpmmqOc0p4+tdJkOOdvSmjPpTjyucmkHbmgAqO4GYTipipqC5yIjQAtv/q1qZjUNsAYxz2qcipAaRTWzwKc3BNMNAAPeo5Kl/SonNFwMm5/1lew+Ghjw9af9chXj1z/rTXsXh8bdCtB/0yFc2K+FG9DdmiaxvFnGhHH98VsH2rF8WH/iRn/fFctP4kdEvhZxHOKKB0oJr0zgDvQPvUmBSj79ICG9/wBR+NZ1aN9/qPxrOpoAooopgFJS0lABRRRQAlFLSUAFJS0lABRRSUAI33aZT26GmUALS0lLQAtFFFAC0tJS0AFLSUtAC0tJRQAtJS0lABSUUlABSUUUAJSUtJQAlFFJQAU5OlNp6dKAFpaKKACloooAWiiigAoopaACiiigApaSloAKfEcSofemU5Pvj60Aa0rUKBt5pXxuGRTTkN7GmIUEj6U3gHoOaXPOcU08fSgY/cuPSmMSW9RQeR0oBI7UmBNa3LWV3FcxorPE4dQ/TIrtofibOTm50mIk9TFKR+hzXCY5PPSl6dTnNROlCfxFRm47Hp8HxM0z/ltZ3cR9trVoxfEXw8/3p7hP96A/0rx4daQ4zwKx+qUy/bSPWrz4n6Tbofsdvc3cnbKiNc+5PNef694r1PxJNuvXVYUOY7ePhE/xPuaxu3tScitKdCENiZVJSBuTXbfCvjxQwGc+Q1cSc9M/jV3StTvdIuvtNhctbzYxuAByPxqqseaLSJi7O59HbGxkivGfieMeLM8jMC1DB8TPFMGN1zbTAf8APW3H9MVieIPEF14j1AXt5HCkoQJiEELx9Sa5cPh5U53ZrUmpKxqeAdb/ALH8Rxhztguf3Mmffofzr2/d1FfNA+X5g2COQfSvW9G+JelNp9umoi4juUQLIyx7lJHGetLFUW3zRHRmlozO+KWjbDb6xGvB/dTEev8ACa8/0uyOp6rbWaAkyyBT9M817DqXiTwrr2j3VhLqkaedGQPNRlwe3UVxPw2tLVPEks91dW6C2jbyzJIFDseMjPWqpTkqTTJmk5XR65CiwQJEowqKFA9hxVTVNZsNFtludQn8mJm2A7S2T9BVsMjcpIrj1RgR+leX/FS/L31lp6txEhlYejHp+lcdKm6k7M3lLljodtB4x8N3H+r1q1B9JGKfzrUhv7O5x5F7bS56eXMrfyNfOq5zgkGgu0UiyoQHRgwIHcV1SwS6MxVZn0gTg15t8VtOyLHUlXOcwu36iu70q9XUdGsrtTnzolY/XHNU/F+njVPCl5ABl0XzE/3l5rmpPkqGs1zRPDFla3eOZRzGwYH6GvoqzulvNKtLlTkSxq4P1FfODklcHvXtfw/v/tng21jY5e2YxH6DpXVjI+6pGVF62Ol8mMzicoPMC7N3t6VDqd4LDSru6PAihZv0qwDXKfEi8Nr4RljVsPcSLGPcdTXDSXNNI3k7I4n4c6l5HjFUdsC8jdT/AL3UV7FKgkQoejLg187aRdmw16wuQwHlzKT9M19EltwVgRgjIrpxceVpoyou6sV9NsY9NsIrSL7kQwD0zzmsD4hX5svB10qsA9wywj6E810+ecV5p8WLwkafYqe7SsP0FY0FzVEaVHaJ5uFUA8jrSHC07aQOlS2dpNqF5HaW8ZeWVgqgDvXsPRXOM3fBvhlvEWrK8wP2G3IaZv7x7LXtYVERFQABRgAdhWfoWkQaDo0NhCOVGZH7ux6mrVzNFa20tzO4SGJSzsewFeTXqOrOyOunFRWpkeLPEkfh3SWlXa13LlYEJ7/3j7CvD55pLiZ5ZWLu5LMx7k9a0fEeuTeIdXku3JWMfLCnZUHT86ysE+ld9ClyR8znqS5mA54oPrRg9qDmugg9D+GOrbJLjSpDgSDzIgfXvXozDIxivAdOv5NL1G3vImw0ThvqO9e8W9wl3aQ3MZBjlUOuPevMxdPllzI6qMrqzEgt4rWIRQoETJIA96qa3qkei6RcXsmMxr8i+rHoK0ME15l8S9XM1/Bpcb5jhG+XB6seg/AVjRhzzLnLlicRPcS3N1JPKd0khLMfUmo2FJjFKAPpXsJW0OIAcA4pMkgUY4NKOBg0wHDAHFN6Hmgd6Md8mgQ8Hiobg/uTUg6nB5qG55iJzQMW3/1a1YbtioIBmJfpU3UCpYA/TpUYOeT0FPbqc0wDPFACkcVG+ccU88D0pjZxjNIDIuf9bXsmhjGi2v8A1yWvG7j/AF1ezaRgaTbD/pkv8q58Vsjehuy5WF4sONEA9ZBW4TWD4uP/ABJ095BXLT+JG8/hZxg6UN0o6cijg16RwgKVT81IBihfvUARXx/cj61n1fvv9UPrVCmgEopaSmAUlLRQAlFFFABSUtFACUUUUAJRRRQA1vu0wVI33ajoAWiiigBaWkpaAFpaSigBaWkpaAFopKWgAoopKACkNLSUAJRRSUABpKWkoASkpaSgAp6/dplSL90UALRRS0AFFFLQAUUUUAFLRRQAUUUUALRRRQAUq/eFJTl+8KANVuQO3FIDk/SnY+6e2KTAz1pgHXJ4pDnvSHr/AEp34UAISduKOSvvQeuf0pM/pQAuSOtJjPNLnJxijg8Z6UAHGOTTVGT1pSPTkUg4NAC5PQ0uS3GelIen9aQHmgAzxil475pMbulOICjnrQAhPoaTPy0nbrS9ulACnGOKTZk9SKM9OKcCd3tQAAEDkmmsobsPxpSxPTmjPAz1pWQBG8kLDypJIz6o5FOlmkmYySyvI56s7En86ZuwT3o56miyDUA3saH+YYpMEmnEHtTA7bw18QF0LSotOurJp0jJKOsu04PbBFdLF8UvD8qlJ7e8jBGGG1WH6GvI+tJgZztFYSw8G7lqpJKxYv2he+na1LGAyExkjBK544rtvhprltYyXlle3MUCybZIzK4UE9CMmuC9qTbuPIq501OPKyYyadz6OiuraZd0NxBID3jlVv5GvNPivqG670+xB+6pkYfXgV56cKflGD6jikdnkILszEDqxzWFPDKEr3NJVOZWGty6sDyDkV9DaHdi+0DT7oHPmQLn6jg189rjIrp9I8daxodklnai3kt4ydqyxkkZ9warE0nUWgqc+Xc9tXlxivFPiFffa/GV0gbK26rEPw61rwfFrUEYfaNItnx3jkZf55rhr28e/wBSubyRcPNIXI9M1lhqEoSvIqpUUloQk89zXpXwu0iE29xqz/NNvMUfH3R3P415qevFel/DvXNLsNEmtby/gt5zMWVZG25GOtbYm/JoRStzanoRNYfijQ7jxDposob8WsWdzjyy2/0yc9K0YdRsrk/uL22l/wByZT/WrGGPRSfpXlxcou9jqdmeUTfC3VYyTDfWcuOmdy/0rPl+H3iWInFtFKP+mcyn+dezFWxzn8aYVbFdCxVRbkexizwfUND1XSUDX9jNAjHAdhwT9azieeteqfEkH/hHosj/AJbjFeUDkfjXbQqOcbs55x5XYVzx/SvbfBZJ8G6dkk/Kec+9eJSD5TXtfgo48G6eP9lv51ljPhNKG50HQHFeAaozS6rdO7EsZm5P1r33dgH6V4Dfkf2hcn/pq386ywe7KrlVuvNIDzilxzR3r0TnAE96TJBwRRkE/wBaDnrQAnXkUo4FJjFL7igBQcDrUVz/AKs4qVcY5FQ3J/dHFAD7c/Io9qmzz1qCDhB9KlxzUgDdabzSk80hPtSACc9MVG/fFPPFMYjBpgZM/M+PevaNLGNMtx/0yX+VeLy83I+te06eMWEA/wCmS/yrlxWyOih1JzxXP+L2xpMY9ZBW+eK5/wAXsP7KiB7yVz0viRtU+E41SaXpSIcClzmvSOEdnikT79HakRssaAI74/uh9aoVevP9UPrVGhAFJS0UwEooooASilpKACiiigBKKWkoASilpKAEPQ1EKlPSo6ACloooAWlpKWgBaKSloAWlpKKAFpaSloAKSlpKACkopKACkpaSgBDSUtJQAUlFFABUi9BUVTDpQAUtJS0AFLSUtABS0lLQAUUUUAFLRRQAUUUtABQOtFFAGsuDGufSkJxx0pYwRCh9qa3LCmAA5PNOyfpSEHjkU4DjJwKAEAAHrQQCfwpS+OnIpGcZHHNACAYHHU03n3pRyOtDDmgAHIoxmlHXHSgcj0oAFHp0pDg54/EUuOCeaQjn0oAOQRxRg856UhOT15pQCR6igBDyRgZ9aT2NKAcdwaMc8ntQAoHboKM+lGccDFA5zk80AAIAx3ppGDk05V56mmsTkjtQAlOySB6Cmjn2p2dtAARj60A8880YzzmhiPSgBTxgD8aG6cfjTfmYHimgmgBzZwCBQp9qCOKUAgZHegBpI5zQTwOKUj2pBwOOKAFXI607d82c4pgBPXNKOT6UAAGWyfzpec4HJpDyRg9KDg0AL7mjr16UnPek+XgE/lQA3HzfKq1PFeXtuf3N1LH/ALkjD+tRAdxRk0uVBc2oPFniK3Xamr3OPRn3fzq2nxA8SRHDXUEw/wCmkI/pXM5I6UBs1DpQe6HzM3tb8Y6hr2nLZ3dvbIFcNviDAk/QmueAIApxHrTSMcY/GqjBR0QNt7ivkrXqvhTxPolp4cs7O5v0hnjBDK6kY59cYryo9KXJx94/hUVKSqKzHCTi7o96g1jSbsHyNUs3OOgmGfyrw29/4/7nuPNbn8arFAepJpV46VFKgqew5zctwPXigjsDS9TmkJ2810ECYwDRxQGJoz60ABPbGKBx1FAOe1BHNAAD+VQ3I/dVMCQelRXR/dcUALET5Y4qQnPNRw/6sGpM8VIASe1NJ56cUp5b0pDQAHJ7cU1uAacvemOc5pAZcnN0P94V7VaDFnCPSNf5V4s2DdqP9oV7PbnFtEP9hf5VzYrZHRQ6kjVz3jD/AJBcJ/6aV0DVzvjA/wDEshH+3XPS+JGtT4TjwSBml7A0gPyUgOBXpHEP/GhfvmgHjNKg+bNAEd3zGPrVKrt0f3ePeqVCASilpKYBSUtFACUlLRQAlFFFABSUtFACUUUUAIaiqWou5oABS0lLQAtLSUUALS0lLQAUtJS0ALS0lLQAlFFJQAUlLSUAJRRSUAFJS0lACUUUlACjqKlqJfvCpaAClpKWgApaSloAWiiigApaSloAKKKKAFooooAKBRS0Aa6cQJ9Kb8p9MiljwbdD7U3ofWmgFbkcHmg9AODS8HnH4UmMnJHSgBADk4FByRgmnkYA4z60wj5hQAijHQcUHnsRS9M96CRgY60AJzj1xTsmgEbaTIwfWgAAH0oJ69KCMim9D04FACD1PJqRfu8nApgOTmnPyABQAhbn2poPPfmnjHfj0NNxz14oAQAZxTuvTk+lJgdqUcEUAKBt49aB155pT9PxoDAdRQBE42nilPTND/SnEZQc4oAIzzwaafve9AxnpS+9AAQduDwKaOtJk9aeOmaACkOcnHSlGcdiKb07UALnI/pQQSlITntilPXFABnIAxzSYy3FKRzSDOaADp2pSBxnFHGP9qkb0zzQAvXmkPDZFGOBxzS87sdPegBAc9TxQcYxSkcGk6LzQA08UcDFDc80YoAPSg/SjPHTFIeaAFPHSkGePWjkdDRjvQAvSl+8OKaCTRjFAC/SkySc9aUnBHalPAB70ANA4oJzxxigc8U08GgBQcD60oOKQAk9qcQOuaADIHOM1DdH91mpuo9Kguv9VzzQA6H/AFY+lPPHSmQf6sU/Iz0qABjk0nSg8mk9M0wHDpUb859aep6+tRv0NIDOUZv4x/tj+dezRH9yg/2R/KvG4hnUoh/tj+dexpwq/QVy4rodFDqKTXO+MD/oNv8A75roPWud8YnFlbf7xrCl8SNanwnJ9qCemKavIpxIr0jiHKfWhSc8U0HihT81IBlyfkA96q1Zujwv1qtTQBRRRTASiiigBKKKKACkpaSgAooooASiiigBKib7xqaon+9QAlLSUtAC0UlLQAtFFFAC0tJS0AFLSUtABSUtJQAlFFJQAUlLSUAJRRSUAFFFJQA5fvVJUadTUlAC0UUUAFLSUtAC0UUUAFLSUtABS0lLQAUUUUAFLSUtAGnD/wAeyHOKkAPc1FD/AMeqU8LxnH50AOPWk4BzxRgseopWUD0pgIxz9aZg555pT0NAbnk8UAOGPTmmkA55px5zg00cdRzSAUdPeg9OKTbg9TzSkcYpgN6jk0nOeDTs9utHUYAoAB97gikOfakNLkkYoATNKR8uaToeRQ36UAAOec9KUHBzSDpjinFTgGgAVienSkI2saQcHFOJzmgBuBSgjGCM0hOOtKFGO9ADSCT14pWIxjJpe/FMNAAoPTrnvTuhHekAwMUcelACgA0h4pT7dKQZbvxQAgye1LnHpSE8YFAJ/CgBRleM5zQcKp4pG7Y4pDnpQAKc9qGXoaAMelKScdeKAD69aXAxmkzmgE/hQAoIZefypCeAAKU8Dt+FNx2Ax70AG3vnFNIBNPxxSYyeKAG9+tKM5zmhR16Gl6+lACHGaaeT0peMYoPTOKAAA55wKcDuPQcU1OaMHpQAMTmnYJHP5UwDmlLYJoAcBwSTzTCOeuKKXA7jmgQvygY70hBzmm/xU5cA+tAwBxUNz/quDUzYqvc/6oUAPh/1Ypxz68UyA/u6cDk9OKgBxxjNNJyRSkU2mA4YFRt0Ip1NYcGgCpajOrwAf89B/OvYBwB9K8h08Z1q3H/TQV66DxXHiuh0UNhCeTXNeMCPs1sP9o10RPJrmPF7fu7YZ7msqPxoup8JzSnil6imKeKXtXonIOGMUinDGkzgUKfmoAbcn5VqvVi46LVehAFFFFMApKWkoASilpKACkpaKAEooooASiiigBKjk+8KlqOToDQA2lpKKAFpaSloAKWkpaAFopKWgBaWkooAKSlpKACkoooASiikoADSUtJQAUlLSUASJ0p1IvCiloAWiiigApaSloAWikpaAClpKWgApaSigBaKKKACiiigDUgGLVGp/bmmW/zWqinHC4B5oAUN83FBbntmgFQcjrTVIyc0wFJO059aDgdetKOB1yKNuTk4oAa2aRRxnPWnHrmm7Sec0gFLdOeKXIHTmmdKXoKYClu460ZHemnmigAzk0En1peKbQAvXqaXbkYpCMClJwo20AJgAYOaQH160oOepIoAwaAHA9aDgf4U0FcelN6t1zQA/wClHQeuaQYHelBFAAFx6ZprUd8AUNkEUAJknNKDgUi/Tih8daAHAd6auQT6Uqn5fpSLy1AA3A5NJnjrSnoaTp9KAHEE4pG+lL0HWkYjPSgAwMc03Az1p3WkY8UAIeCKUnIpAM9aUDtmgA7YzQefpSjpR7d6AEGAM5pevOKBgcE80AgHigBh6045FIDkn1oyM8jJoAU4PUYNJnnApOuaXtnvQA0f/rpQTmjqPagEdCaAAUqc8npSHHbinDO3nmgBvBPHFKfekXk0E0AB60Y7CkPvSr09KADHqKr3P3BirJxgVXuvuDigBYuVp2KbF9wYpSeakBSabn0NB5FIKAF601uh607OKRuh9KQEWjjfr9vn/noK9WDV5ZoQz4hg/wB+vT0NcmK3R00dhx61yvi9stbqPQ10rHk1y3itv3sA/wBk1nQ+Mqr8Jzw6UoGaQdKAea9BnIO4oHWkzThjPNICObtUNSzEZAqKmgCiiimAUlLSUAFJS0lABRRSUAFFFFACUUtJQAUx+VNPpDyDQBDS0lLQAtFFFAC0UUUALS0lLQAUtJS0AFJRRQAlJS0lABSUUUAJRRRQAlA60UqjLUASUtJS0AFLSUtABS0lFAC0tJRQAtLTaWgBaKSloAWikooAWikpaANC3JFqMHvUvWorfH2UfWpgSo5FACDGTxQVwTxSgncOOKGPzZFMA6jpml7elND7j3pw59CKAGgnB5pu7BpxGDjPFNxzQAhJNOU5HNJnA6cUAjIFAC4waDikflvakHPbpQAuPlzmgKe9BIx3pQxxQA3J6daXOOKU59aOo9aABsE9PqKZkjjFODAHkUmQCTj6UALjsaTHoaUnI5NNHf0oAU8GlyT3pBz9aUAjOKAGnrTu3HIpoBIOcYpc+49uKAG+vFA6HigkCgc9KAFHP+NJgA5NKMUELnGDQAEdycUhAxyafxjFIRhRjGKAExgUlByaXqPegAHPWkKgDmg8dKM5HWgA6jikyD2pegxSYGKAFBOOaM9sUhwR1oxg5zQAuB1oJ9s0jEYwBg0gPy0ALnjNAOeooH3c0EZPWgBO2KUHApA23ijPPtQAg9ulA9+tLil4yMigBuRj0p4GRg03bQSO2aAA9MDrTSPWndulIR6nmgBM8U4ew5pAMGlDDd0oAUjAz+lQXGfLqc81XuM+XQAR/cFOPNNj4WnHFSAnTNIcUp6daaT2oAU0jZwaP50hHWkA7w8pPiKDj+KvSQ1edeGx/wAVFH+NehA1yYn4jpo7Cs3Ncp4obN1EPRa6Z2561yXiWTdfKM9EqaHxDqv3TIHSkzxSZytBOBXezlHA0pfGc8VCz4pFyeW/AUgHEknJpKWkpgFJS0lAC0lFFACUUUUAFJS0lABRRRQAUlFFABSUUUARHhjRSv1zTaAFpaSloAKWkpaAFopKWgBaWkooAKSlpKACkopKACkpaSgApKWkoAKcg4ptSAYFAC0UUUALRRRQAtFJS0ALRSUtABS0lFAC0UUUALRSUtABRRRQBoWvNqfY1Yz2NQWQ/wBFc/7VTFl/GhCFYYIwaYSSDjnFJu5xilTjrTGIvJHNSj5RgCo8ZzTjkDrQAhyeppuPm9qCc0o4GcUAHGeKaBgnjNOJANIOtACj71IeKXIOTim9M0AAJJ5FAApANxoPpQAvJpRxzSdBxS4oAQbu1Lk96TOAaQE0wD+dOz7UhOOvWkB/OkAuADntTsDtTBj05pQeaAFPSmjJOKdkA8800n5j2oACMHFAHPIpCOlOA9vzoARxjoaOoGaRqOMDNADsYHIppIOKdjjrTCMdKAHcZ6mkJGevWkA49KCMHrmgA5HFKQcc0i8NSsxzg9KAADvQM54ANKDn6UhAoADj2pOPWl6/4UcGgBMEnNIODinEHAPYU1uDQAoHpxS4A780g6Z60DNACHJIpcDrQRg0Dk8kUAIp20d8ikNHTgUAOwD1P4UZA4703djAoHWgB3GPSkHLH0oDHkUg4OMUAKw55x9KOnSlPJzTc/lQA44HtVe4H7v8asdRk+lV5v8AUn60AIn3BTiec01OFGKcfSpASk6ClOKTtQAgFIaXPWmk+lAFvwsCfEAOM4U13efWuG8K5/txz6Ia7YNXFiPiOmj8I2QnNch4hfOpEeiiutYkmuM1pt2py+1GH+IK2xRFI5wabk9BSgY+tdqOYMZOT1paKKYBRSUUAFFFFABSUUUAFFFJQAUUUUAFJRRQAUUUlABRRSUAI4yKjqWoyMHFABRRRQAtFFFAC0tJRQAtLSUtACUUUlABSUtJQAUlFFACUUUUAKoyafSAYFLQAUtJRQAtLSUUALRRRQAtFJS0AFLSUUALRRRQAtFJRQAtFJS0Aadkf9Cb/ep5AJqjBd+VGY9pOTnNXVkyRkYpiDq2KcBg4NJjnJpSRmgYp+9gDHFHRaAfejgtQIZz1pwBxwaMEnAOBSkAUDGAE80hBBp3QHB60h6igBFLelLgd+tL3pDyaAE6c0nXpSgEmggjpQAoHvR0pM805uOBigBMd+1J1PFKc4poyOtACkHPJpMCnZ9eaQgHmgBNopQMU3uRjNKelACngUfxe3tSGlJ46UAIOlBORQo4o4FACcGlHzcUuBnNJjnrigAJxSKeTTj79DTRgHIoAPoOf50DPcUueP8ACk796AAe+fpQfbmgD5uaVuMYoAQEijr0P4ULyO9A4+tABkkZpCcgHtSlT1zQQWGfSgA59fzppwRxSjg880Hk5oAUHHQYoxzSc96Dz60AKRmkGCOKOlHTpigAOMdOaQAE9aU8j3oAPrxQAm0elGKXPvTuPxPegBmMdOlIfannGKbkr/jQADoPWlXBPNGOM00delADzVef/V4qcZPXrUE54x2oART8ooPWhR8gpM496kAzSGgc0houAd6Qmg9aTHOaGBoeFAf7ZlPohrsSwrkfCw/4mNy3+xXUFq4q+sjppfCOY9TXEajJ5t/MR/e610OpaqtqhjTmQjH0rlmYsxY9Sc1ph6bWrIqyT0EAAFLmkorqMQzRSUUALRSUUALSUUUAFFJRQAUUUUAFJRRQAUUUUAFJRRQAUlFFABTHHenUHkUAR0tIeDS0AFLSUUALS0lLQAtFJS0AFJRRQAlFFJQAUlLSUAFKo70nWnUALS0lFAC0UlLQAtFJRQAtLTaWgBaKSigBaWkooAWikpc0ALRSZooAWikooAWnbmB4dh+NMzS0ASCeUf8ALQ077TNnqv5VDRQBOLqTqVz9KkW8XuGHvVTNLmgC8LyP+/j6ini4Rh99T+NZ2aQgHqBQBqeYrcgj86UMKydq+mPpRgjo7D8aANcnOMUnfHc1lhpB0kJ+tPE8i9kJpgafTpSHp1qiLx1GPL/I04Xy/wASOKALeMniggY96ri/i7tj6inrcxP0dfzoAn4CUmcjrTRIu3rmlV07igBwGRTDxzTt69hS7gRkfrQAwDJp2MH3oB6kUo6/hQA3rTjgCgdeBSEc+goAbnkdqHpSTxQcfSgBv8qM89DSjpk0ucA9aAAnANMH0pw6c0hbB6UACilJ+bnGKFIpSN2OcigA9hg0hHIxjigLjJpM89KAHZANN4PNIc55NOA4oAMADg59qQbs4HSgg0Z4oAQ4zS7uB0/KkKn1zQAc8jj1oAXofajH4CjjrRxjmgBvelByaMc57Ug68cmgBT1NBxjNKcEcmm7eKAHAAkEnim9zgUoOO9APPX8KAE6d6QntTxt9aaW70AHPTNNz2p459KYMZ6UAPB4NV5+AKsHGPQ1XuOQDQAi/cFITzQp+Sk71IBn5jTc80fnSGiwC9aM0h6UZA5JoYGz4YXbJdSeuBU+pawIiYrc5fu3pWHHdywwNDGdqscsR1NQE5rL2d5czNOeyshzuzsWYkk9SaSkzRWxmFFJmjNAC0UmaKAFpKKSgBaKSjNAC0UlGaACijNJQAtFJmigAopM0ZoAWkopKAFpKKKACikooARh3ptPppGKACikpaAFooooAWlpKKACkpaSgApKKMUAJS4p2KMUAJijFLilxQA2lxS4ooASilxS4oASilxRigBMUYpaXFACUUtGKAEoxS4pcUAJRS4oxQAlGKdijFADaKdijFACYopcUuKAG4paXFGKAExRilxRigBMUYp2KMUANxRinYoxQAmKMU7FJigBKMU7FGKAG4puxeuBUmKMUAMC4PBI/Gnh5QOJW/GjFGKADzZx/GD9RTluZhnKqfxpuKMUATLfEfeib8DT1v4+6uPqKrYoxQBd+2xnoy/icU8Shl4wfoaz9oPUUnlqf4RQBpq/y8jn1pGI/Gs0KV+67r9DT98w/5aZ+ooA0BzSDPfrVETzjrsb8MU4XMgPKH8DTAuHjpSMCV4qv9rXofMH/AAGgXcWR85H1GKALHJFKMnimLPG3R1/Onh1FAC8005znFOVh1zSOcng0AN75pefQ0uBn3pD+VAC9j2oxijbwaUnjHegBp9jSZbkUdTxS9++aADFKfu0gx1J6Up6cUANOR7igZ57UEZNAOD0oACAKCcikI54p3HTAFACc59qD0PrQM5xQOT1oAQcHmg4PPajrQCAcdqAHKoH40cBsY5oUfNnOAKRuuaAFKkjmq1x0AqyrVWufTFADF4QUh9aX+EU0nmkAc000tNZieByaAEZiOKTBPWlC46nJ9aXFADcUYp2KMUANxRinYpMUAJikxTsUYoAbijFOxRigBuKKdikxQA2inYoxQA3FFOxSYoASkxTsUYoAbijFOxRigBuKTFOxRigBtFOxSYoAbRTsUUANop2KTFADaMU7FGKAGYop2KMUANpaMUUAFLSUtACUYJp22lxQA3FLilxS4oAbilxS4oxQAmKMU7FGKAG4pcUuKMUAJijFOxRigBMUYpcUuKAG4pcUuKXFADcUYp2KMUANxS4pcUuKAG4oxTsUYoAbijFOxRigBMUYp2KMUANxS4pcUuKAG4oxTsUuKAGYpcU7FGKAG4oxTsUYoAbijFPxRigBmKXFOxRigBuKMU/FGKAGYoxT8UYoAZijFPxRigBuKMU7FLtoAZijFP20baAGYoxT9tG00AMxRin7DRsNADMUYqTYaNhoAjxRj2qTYaPLNAEJjU9VH5UnlL2yPoan8s0eWaAIQjL92Vx+NL+9BzvDfUVL5ZpfLNADPNkH8CH8TSi4YHmJvwNO8s0eWaAFF4uMEOPqKcLqIjG8D9KZ5ZpDET2oAmWVD0cfnS7l9arG3U/wD8qPsw7ZH0NAFhSpB55p4xtxmqgikX7sjfjzTv8ASB/Ep+ooAsn0oxxzVfzJh/yzU/Q0ee46wt+BzTAsHrxQOeM1X+1DqQQfcYpRcBsY2/nQBMVJpcHoKA4I6cUmaAFAFJj5sYpQQOc8UhO45zxQA/pxTCCfT6UvfNDcHrQAAc9OlQXOMCrIGM1Vn525oAjPQVG3XNPY4XmmBS/Xhf51IDQS5+Xp608KBTwoAwKMUwG4pMU/FJigBuKMU7FGKAG4oxTsUYoAZijFOxRigBuKMU7FGKAG4pMU7FGKAG4oxTsUYoAbikxTsUYoAbijFOxRigBuKMU7FJigBuKMU7FGKAGYoxTsUYoAbikxT8UmKAG4op2KTFADcUYp2KMUANxRilxRigBuKMU7FGKAGbaKdijGaAHYoxS4pcUANxS4pcUYoASjFLilxQA3FLilxRigBMUYp2KMUAJijFLilxQA3FLilxS4oAbijFOxRigBMUYp2KMUANxS4p2KMUANxRinYpcUANxRinYoxQA3FGKdilxQA3FGKdil20AMxS4p22l20AMxS4p4SnBDQBFijbUwjpRFQBBtpdpqwIqUQ0AVtppdhq0IacIaAKew0uw1dEFKIKAKXlmjyzV8QU4QUAUPKNKITWgIKcIPagDO8k0vkGtEQU4QUAZogNOFvWj5FO8igDN+z0v2f2rS8il8igDNFv7Uv2f2rS8ml8mgDN+zUfZvatPyaPJoAzfs3tR9m9q0/Jo8mgDN+ze1H2atPyaPJoAzfs1H2b2rT8qjyaAMz7N7UfZvatPyRR5NAGZ9m9qPs3tWn5NHk0AZf2b2o+ze1afk0nk0AZn2b2o+z+1afk0nk0AZn2em/Z/atTyaTyaAMs2/tTDaKeqA/hWsYaaYaAMg2Sdlx9Dik+ysPuyOPxzWuYaaYKAMnyZh0cH6rTWS69Iz+la5gppg9qAMoPcKfmiOPbBpwm5+YMD7rWiYKaYPagCkJoyp+dahnbeAEKn6GtE24PVR+VM+zKOigfhQBmrEz/MwwOwqTYavGGmmGgCltNG2rZhpDFQBV20mKsmKmmKgCDFGKmMdN2GgCLFGKk2Um2gCPFGKk20m2gBmKMU/bSYoAZijFPxSYoAbijFOxRigBmKMU7FGKAG4oxTsUmKAG4oxTsUYoAbikxT8UmKAG4oxTsUmKAG4oxTsUmKAExSYp2KMUANxRilxRigBuKMU7FGKAG4pMU7FGKAG4oxTsUmKAHYoxS4pcUANxS4pcUYoATFGKdijFACYoxTsUYoAbilxS4pcUANxS4pcUuKAG4pcUuKXFADcUYp2KMUAJilxS4pcUANxRin4pcUAMxRipAtLtoAj20balCU4JQBCFpdlThKcI/agCAJThHVgR+1OEdAFYR04RVaEdOEdAFYRU4RVaEdOEftQBVENPENWRHThHQBWENOENWRHThHQBWENOEVWQlO2UAVhFThFVjZShaAK4ipwiqfbS7aAIfKpfLqbFGKAIhHS7KkxS4oAj2UbKkxRigBm2l20+loAZto20/FFADNtG2n0UAN20badilxQAzbS7afijFADNtG2n4oxQA3bRtp+KMUAR7aNtSYoxQBHto21JijFAEW2jbUmKMUARbaTbUuKTFAERWk2VNikxQBCUpNlT4pNtAEGykMdT7aNtAFcx03yqs7aTbQBWMVNMVWttJtoAqGKmmKrhSmlKAKZippiq4UppSgCmYqYYqulKaUoApGKmmKrpSmmOgCkY6aY6umOmmOgCkY6Qx1bMdNMdAFQpSbKtFKaUoArbaTbVgpTSlAEGKTbUxWkK0ARYpMVJtpNtADMUmKfijFADMUYp2KMUANxSYp2KMUANxSYp2KMUANxSYp2KMUANxSYp2KMUANxRinYoxQA3FJinYoxQA3FJinYoxQA3FGKdikxQA7FGKXFLigBMUYpcUYoATFLilxRigBMUYp2KMUAJijFLS0AJijFLilxQAmKXFLilxQA3FLinAUoFADcUu2ngUoWgBoWl208LTgtADAtOC08LTwtAEYSnBKkC08LQBGEp4SnhaeFoAjCU8JTwtPC0AMCU4JTwKcBQAwLTgtPApQKAGhacFpwFKBQA0LShadilxQA3FLinYooATFGKWloATFGKWigBKWikoAKKKSgBaWm0tAC0UUUALRSUtABS0lLQAUtJS0ALRSUtABRRRQAUtJS0AFFFFABRRSUAFFFFACUUUUAJilxRS0ANxRinYpKAExSYp1FADcUmKdijFADMUmKfSYoAZikxT8UmKAGEU3bUmKMUARFaaVqXFIRQBCVpClTEUmKAIClNKVOVppWgCApTSlWCtNK0AVilNKVYK00rQBWKU0pVkrTCtAFcpTSlWCtMK0AQFKaVqcrTStAEBWkK1MVppWgCLFJipCtIRQBHikxUmKTFADMUmKfikxQA3FJTsUYoAbijFLiigBMUmKdijFADcUYpcUYoAbijFOxSUANxRinYpMUAOxRilooATFLijFLQAmKXFFLQAmKKXFFABijFLRigAxS0UtABilAopRQAAU4CgCnCgAApwFAFOAoAAKcBQKcKAACngUgp4oAAKeBSCnCgBQKcBSCnigBQKcBSCnCgBQKUUgp1ACilFIKWgBRS0lOoAKWiigBaKKKACiiloASilooASkpaKAG0UtFACUtFLQAlLRS0AJS0UUAFFFLQAUtJS0AFLSUtABRRRQAUUUUAFFFFABSUtFABRRRQAUUUUAFFFFABRRRQAlFLRQAlJS0UAJSUtFACUmKWigBtJTjSUANpMU6koAbikxTqSgBuKQinGkNADCKaRTzSGgCMimk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kooAXNGaSigBc0uabRQA7NGabRQA7NGabRQA7NGabmigB2aXcaZRQA/dRupmaM0AP3UbqbmjNADt1LupmaM0AP3Um6m5pM0AP3Uu6o80ZoAfuo3UzNGaAH7qN1MzRmgB+6jdTM0ZoAfuo3UzNGaAH7qN1MozQA/dRmmUUAOzRmm0UAOzRmm0UAOzRmm0UALmjNJRQAuaM0lFAC5pM0UUAFFJRQAtFJRQAuaKSigBaKSigAooooAKKKKACiikoAKKKKACiiigAooooASiiigAoopKACiiigApKWkoAKKKKACiiigBKKWkoASlpKWgAooooAKKKKAClpKKAFooooAKKKKAFopKWgAooooAKWkooAWiiigAooooAWikooAWiiigAooooAKKKKAFopKWgAooooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAKKKKAFopKKAFopKKAFopKKAFopKKAFopKKAFozSUUAFFFFABRRRQAUUUUAFGaKKAClpKKAFopKKAFopKKAFopKKAFopKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopKAFpKKKACiiigAopKKAFopKKAFpKKKACiiigApKKKACiiigApKKKACiiigAooooAKSiigBKWkooAKWkooAWikpaACiiigApaSigBaKKKACiiigBaKSloAKKKKAClpKKAFooooAKKKKACiiigApaSigBaKSigBaKKKAClpKKAFopKKAFooooAKKKKACiiigAoopKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKACiiigAooooAKWkooAWikooAWikooAWikooAWikooAWikooAKKKKACiiigBaKSigAooooAKWkooAWikooAWkoooAKKKKACiiigApKKKACiiigAooooAKKSigAooooAKKKKACkoooAKKKKACiiigApKKKACiiigAopKWgApKWkoAKKKKAFopKKAFooooAKWkooAWiiigApaSigBaKSloAKKKKAClpKKAFopKKAFooooAKKKKACiiigAooooAKWkooAWikooAWiiigAoopKAFopKKAFopKKAFopKWgAoopKAFooooAWkoooAKKKSgBaKKKACiiigAooooAKKKKACikpaACikooAWiikoAWiiigAooooAKKKKACiiigAoopKAFopKKAFopKKAFopKKAFopKKAFopKKAFoopKAFopKKAFopKKAFpKKKACiiigAoopKAFpKKKACiiigAooooAKKSigBaSiigAooooAKKKKACiiigBKKWkoAKKKKAEooooAKKKKACiiigAooooAKWkooAWiiigAooooAWiiigAooooAKWkooAWikpaACiiigAooooAKKKKAClpKKAFopKKAFopKKAFopKKAFopKKAFoopKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKSloAKKSigBaKSigBaKSigBaKKKACikooAWikooAWkoooAKKKKACiiigAopKKAFpKKKACiiigAooooAKKKKACiiigApKWkoAWikooAKKKKACiiigD//2Q==";

export const reward = (name, value, rarity, image, extra = {}) => ({
  name,
  value,
  rarity,
  image: name === "랜덤 상품" ? randomProductImage : rewardImages[image],
  ...extra,
});

export const productReward = (tier, image, product) =>
  reward(product.title, formatDisplayValue(product.displayValue), tierConfig[tier].label, image, {
    ...product,
    name: product.title,
    englishName: product.englishTitle,
    count: formatQuantity(product.quantity),
  });

export function normalizeTierLabel(value) {
  return String(value || "").trim().toLowerCase().replace(/[\s_-]/g, "");
}

export function getTierKeyByRewardRarity(item, fallbackTierKey) {
  const rawTier = normalizeTierLabel(item.rarity || item.tier || fallbackTierKey);
  const directTier = tierOrder.find((tierKey) => normalizeTierLabel(tierKey) === rawTier);
  if (directTier) return directTier;

  const labelTier = tierOrder.find((tierKey) => normalizeTierLabel(tierConfig[tierKey]?.label) === rawTier);
  if (labelTier) return labelTier;

  const fallbackTier = tierOrder.find((tierKey) => normalizeTierLabel(tierKey) === normalizeTierLabel(fallbackTierKey));
  if (fallbackTier) return fallbackTier;

  return "standard";
}

export function getRewardQuantity(item) {
  if (Number.isFinite(item.quantity)) return item.quantity;
  const parsed = Number.parseInt(item.count, 10);
  return Number.isFinite(parsed) ? parsed : 1;
}

export function normalizeTieredRewards(tiers) {
  const normalized = tierOrder.reduce((result, tierKey) => {
    result[tierKey] = [];
    return result;
  }, {});

  Object.entries(tiers).forEach(([fallbackTierKey, items]) => {
    (items || []).forEach((item) => {
      const tierKey = getTierKeyByRewardRarity(item, fallbackTierKey);
      normalized[tierKey].push({
        ...item,
        rarity: tierConfig[tierKey].label,
      });
    });
  });

  return normalized;
}

export function buildTierStats(tiers) {
  return tierOrder.reduce((stats, tierKey) => {
    const count = (tiers[tierKey] || []).reduce((total, item) => total + getRewardQuantity(item), 0);
    if (count > 0) stats[tierKey] = { count };
    return stats;
  }, {});
}

export const packDetailCopy = {
  "cos-bag-pack": {
    detailSubtitle: "COS Bag Pack",
    description: "COS 퀼티드 오버사이즈 숄더백과 미니백을 포함한 가방 랜덤팩입니다.",
  },  "crossbody-bag-pack": {
    detailSubtitle: "Crossbody Bag Pack",
    description: "Arc'teryx 헬리아드 6 크로스바디백과 Stussy 캔버스 사이드 파우치를 포함한 가방 랜덤팩입니다.",
  },  "backpack-pack": {
    detailSubtitle: "Backpack Pack",
    description: "C.P. Company, CDG, Arc'teryx, Stussy, Salomon 백팩을 포함한 프리미엄 가방 랜덤팩입니다.",
  },  "beanie-pack": {
    detailSubtitle: "Beanie Pack",
    description: "Arc'teryx, Stussy, Matin Kim 비니를 포함한 프리미엄 모자 랜덤팩입니다.",
  },  "mixed-cap-pack": {
    detailSubtitle: "Cap Pack",
    description: "WOOYOUNGMI, Supreme, Alex Zono, Stussy, Diesel 등 다양한 프리미엄 모자를 포함한 랜덤팩입니다.",
  },"chanel-card-wallet-pack": {
    detailSubtitle: "Designer Card Wallet Pack",
    description:
      "샤넬, 디올, 구찌, 버버리, 비비안 웨스트우드 카드 지갑을 포함한 디자이너 카드 지갑 랜덤팩입니다. 마지막 팩 구매자는 샤넬 클래식 카드 홀더 LAST DRAW 보너스를 추가로 받습니다.",
  },
  "apple-macbook-neo-pack": {
    detailSubtitle: "Apple MacBook Neo Pack",
    description: "Apple 맥북 네오를 포함한 프리미엄 전자제품 랜덤팩입니다.",
  },
  "apple-airpods-pack": {
    detailSubtitle: "Apple AirPods Pack",
    description: "Apple 에어팟 라인업을 포함한 프리미엄 오디오 랜덤팩입니다.",
  },
  "apple-airpods-4-pack": {
    detailSubtitle: "Apple AirPods 4 Pack",
    description: "Apple 에어팟 4를 포함한 전자제품 랜덤팩입니다.",
  },
  "apple-iphone-pack": {
    detailSubtitle: "Apple iPhone Pack",
    description: "Apple 아이폰 17 시리즈를 포함한 프리미엄 전자제품 랜덤팩입니다.",
  },
  "apple-iphone-17-pro-pack": {
    detailSubtitle: "Apple iPhone 17 Pack",
    description: "Apple 아이폰 17 Pro와 Apple 아이폰 17을 포함한 프리미엄 전자제품 랜덤팩입니다.",
  },
  "apple-ipad-pack": {
    detailSubtitle: "Apple iPad Pack",
    description: "Apple 아이패드 라인업을 포함한 프리미엄 전자제품 랜덤팩입니다.",
  },
  "comme-des-garcons-tshirt-pack": {
    detailSubtitle: "Comme des Garcons T-Shirt Pack",
    description: "Comme des Garçons 레드 하트 티셔츠를 포함한 의류 랜덤팩입니다.",
  },
  "ader-error-tshirt-pack": {
    detailSubtitle: "Ader Error T-Shirt Pack",
    description: "ADERERROR 시그니피컨트 TRS/BL 태그 티셔츠를 포함한 의류 랜덤팩입니다.",
  },
  "stussy-tshirt-pack": {
    detailSubtitle: "Stussy T-Shirt Pack",
    description: "Stussy와 Our Legacy 티셔츠를 포함한 의류 랜덤팩입니다.",
  },
  "stussy-new-era-cap-pack": {
    detailSubtitle: "Stussy New Era Cap Pack",
    description: "Stussy New Era 9Twenty 베이직 트러커 모자를 포함한 의류 랜덤팩입니다.",
  },
  "supreme-cap-pack": {
    detailSubtitle: "Supreme Cap Pack",
    description: "Supreme 워시드 치노 트윌 캠프캡과 데님 캠프캡을 포함한 의류 랜덤팩입니다.",
  },
"iab-studio-tshirt-pack": {
    detailSubtitle: "IAB Studio T-Shirt Pack",
    description: "IAB Studio 26 아이앱 티셔츠를 포함한 의류 랜덤팩입니다.",
  },
  "luxury-tshirt-pack": {
    detailSubtitle: "T-Shirt Pack",
    description: "AMI, Stussy, IAB Studio, Comme des Garçons 티셔츠를 포함한 의류 랜덤팩입니다.",
  },
  rolex: {
    detailSubtitle: "럭셔리 워치 컬렉션",
    description: "프리미엄 시계 컬렉션을 가장 짜릿하게 만나는 GACHA GO 럭셔리 팩입니다.",
  },
  hermes: {
    detailSubtitle: "오렌지 메종 셀렉션",
    description: "Hermès 감성의 레더, 주얼리, 라이프스타일 리워드를 부티크처럼 큐레이션했습니다.",
  },
  chanel: {
    detailSubtitle: "샤넬 지갑 팩",
    description: "총 200개 한정으로 구성된 프리미엄 지갑 팩입니다. 마지막 팩의 주인공에게는 LEGEND 리워드인 Chanel Wallet이 확정 지급됩니다.",
  },
  "luxury-watch": {
    detailSubtitle: "제네바 애프터 다크",
    description: "스위스 워치와 프리미엄 워치 액세서리를 중심으로 구성한 시네마틱 워치 팩입니다.",
  },
  "designer-bag": {
    detailSubtitle: "런웨이 백 볼트",
    description: "런웨이 무드의 디자이너 백과 패션 하우스 아이템을 담은 럭셔리 팩입니다.",
  },
  "high-roller": {
    detailSubtitle: "프라이빗 살롱 셀렉션",
    description: "가장 높은 기대감을 위한 하이엔드 워치, 백, 주얼리 리워드가 섞인 프리미엄 팩입니다.",
  },
  cartier: {
    detailSubtitle: "골든 아틀리에",
    description: "주얼리와 워치의 클래식한 광택을 담은 Cartier 중심의 프리미엄 셀렉션입니다.",
  },
  "dior-couture": {
    detailSubtitle: "파리 나이트 쿠튀르",
    description: "쿠튀르 무드의 백, 액세서리, 패션 아이템을 감각적으로 구성한 팩입니다.",
  },
  "patek-philippe": {
    detailSubtitle: "마이식 다이얼 리저브",
    description: "Patek Philippe와 하이엔드 워치 리워드를 중심으로 구성한 최상위 워치 팩입니다.",
  },
};

export const tierOrder = ["ultra", "elite", "legend", "mythic", "epic", "rare", "standard"];

export const tierConfig = {
  ultra: {
    label: "ULTRA",
    tone: "ultra",
    accent: "#f8fafc",
    glow: "rgba(248,250,252,0.28)",
    shadow: "rgba(248,250,252,0.16)",
    description: "10,000,000원 이상 최상위 하이엔드 리워드",
  },
  elite: {
    label: "ELITE",
    tone: "elite",
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.26)",
    shadow: "rgba(8,145,178,0.15)",
    description: "5,000,000원부터 10,000,000원까지의 엘리트 리워드",
  },
  legend: {
    label: "LEGEND",
    tone: "legend",
    accent: "#c8a96b",
    glow: "rgba(200,169,107,0.35)",
    shadow: "rgba(245,210,122,0.18)",
    description: "1,000,000원부터 5,000,000원까지의 LEGEND 리워드",
  },
  mythic: {
    label: "MYTHIC",
    tone: "mythic",
    accent: "#ff3b3b",
    glow: "rgba(255,59,59,0.28)",
    shadow: "rgba(185,28,28,0.16)",
    description: "500,000원부터 1,000,000원까지의 MYTHIC 리워드",
  },
  epic: {
    label: "EPIC",
    tone: "epic",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.28)",
    shadow: "rgba(126,34,206,0.15)",
    description: "200,000원부터 500,000원까지의 EPIC 리워드",
  },
  rare: {
    label: "RARE",
    tone: "rare",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.28)",
    shadow: "rgba(37,99,235,0.14)",
    description: "100,000원부터 200,000원까지의 RARE 리워드",
  },
  standard: {
    label: "STANDARD",
    tone: "standard",
    accent: "#9ca3af",
    glow: "rgba(156,163,175,0.22)",
    shadow: "rgba(156,163,175,0.11)",
    description: "0원부터 100,000원까지의 STANDARD 리워드",
  },
};

export const chanelCardWalletTiers = {
  legend: [
    {
      title: "Chanel 카드 지갑",
      englishTitle: "Chanel Classic Card Holder Grained Calfskin & Silver Metal Black",
      actualPrice: 1250000,
      displayValue: 1400000,
      quantity: 2,
      image: images["brand_chanel"],
      imageAlt: "샤넬 클래식 카드 홀더 그레인드 카프스킨 & 실버 메탈 블랙 제품 사진",
    },
  ],
  mythic: [
    {
      title: "Dior 카드 지갑",
      englishTitle: "Dior Card Holder Beige & Black Dior Oblique Jacquard",
      actualPrice: 550000,
      displayValue: 600000,
      quantity: 2,
      image: images["brand_dior"],
      imageAlt: "디올 베이지 앤 블랙 오블리크 자카드 카드 홀더 제품 사진",
    },
  ],
  epic: [
    {
      title: "Gucci 카드 지갑",
      englishTitle: "Gucci GG Marmont Leather Money Clip Black",
      actualPrice: 300000,
      displayValue: 400000,
      quantity: 2,
      image: images["brand_gucci"],
      imageAlt: "구찌 GG 마몽 블랙 레더 머니 클립 제품 사진",
    },
    {
      title: "Burberry 카드 지갑",
      englishTitle: "Burberry Check and Leather Card Case Archive Beige",
      actualPrice: 250000,
      displayValue: 350000,
      quantity: 2,
      image: images["brand_burberry"],
      imageAlt: "버버리 아카이브 베이지 체크 카드 케이스 제품 사진",
    },
  ],
  rare: [
    {
      title: "Vivienne Westwood 카드 지갑",
      englishTitle: "Vivienne Westwood Flat Card Holder Black",
      actualPrice: 125000,
      displayValue: 150000,
      quantity: 10,
      image: images["brand_vivienne"],
      imageAlt: "비비안 웨스트우드 블랙 플랫 카드 홀더 제품 사진",
    },
  ],
  standard: [
    {
      title: "랜덤 상품",
      englishTitle: "Random Physical Item",
      subtitle: "프리미엄 패션/지갑 관련 랜덤 실물 상품",
      actualPrice: 15000,
      displayValue: 20000,
      quantity: 182,
      image: images["brand_standard"],
      imageAlt: "GACHA GO 프리미엄 랜덤 실물 상품 액세서리 이미지",
    },
  ],
};

export const packTierCatalog = {
  "cos-bag-pack": {
    rare: [
      reward("COS 퀼티드 오버사이즈 숄더백 오프 화이트 라이트 베이지", "약 150,000원 상당", "RARE", "bag", {
        count: "3개",
        image: images["cosQuiltedOversizedShoulderBagOffWhiteLightBeigeImage"],
        imageAlt: "COS 퀼티드 오버사이즈 숄더백 오프 화이트 라이트 베이지 제품 이미지",
      }),
      reward("COS 퀼티드 미니백 크림", "약 120,000원 상당", "RARE", "bag", {
        count: "3개",
        image: images["cosQuiltedMiniBagCreamImage"],
        imageAlt: "COS 퀼티드 미니백 크림 제품 이미지",
      }),
      reward("COS 퀼티드 오버사이즈 숄더백 블랙", "약 150,000원 상당", "RARE", "bag", {
        count: "3개",
        image: images["cosQuiltedOversizedShoulderBagBlackImage"],
        imageAlt: "COS 퀼티드 오버사이즈 숄더백 블랙 제품 이미지",
      }),
      reward("COS 퀼티드 미니백 블랙", "약 120,000원 상당", "RARE", "bag", {
        count: "3개",
        image: images["cosQuiltedMiniBagBlackImage"],
        imageAlt: "COS 퀼티드 미니백 블랙 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "bag", {
        count: "138개",
      }),
    ],
  },  "crossbody-bag-pack": {
    rare: [
      reward("Arc'teryx 헬리아드 6 크로스바디백 블랙", "약 150,000원 상당", "RARE", "bag", {
        count: "10개",
        image: images["arcteryxHeliad6CrossbodyBagBlackImage"],
        imageAlt: "Arc'teryx 헬리아드 6 크로스바디백 블랙 제품 이미지",
      }),
      reward("Stussy 캔버스 사이드 파우치 워시드 블랙", "약 120,000원 상당", "RARE", "bag", {
        count: "10개",
        image: images["stussyCanvasSidePouchWashedBlackImage"],
        imageAlt: "Stussy 캔버스 사이드 파우치 워시드 블랙 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "bag", {
        count: "130개",
      }),
    ],
  },  "backpack-pack": {
    mythic: [
      reward("C.P. Company 나일론 B 렌즈 백팩 블랙 - 25FW", "약 150,000원 상당", "MYTHIC", "bag", {
        count: "3개",
        image: images["cpCompanyNylonBLensBackpackBlack25fwImage"],
        imageAlt: "C.P. Company 나일론 B 렌즈 백팩 블랙 - 25FW 제품 이미지",
      }),
    ],
    epic: [
      reward("CDG 백팩 블랙", "약 120,000원 상당", "EPIC", "bag", {
        count: "3개",
        image: images["cdgBackpackBlackImage"],
        imageAlt: "CDG 백팩 블랙 제품 이미지",
      }),
      reward("Arc'teryx 헬리아드 15 백팩 블랙", "약 150,000원 상당", "EPIC", "bag", {
        count: "3개",
        image: images["arcteryxHeliad15BackpackBlackImage"],
        imageAlt: "Arc'teryx 헬리아드 15 백팩 블랙 제품 이미지",
      }),
      reward("Stussy 캔버스 백팩 워시드 블랙", "약 120,000원 상당", "EPIC", "bag", {
        count: "3개",
        image: images["stussyCanvasBackpackWashedBlackImage"],
        imageAlt: "Stussy 캔버스 백팩 워시드 블랙 제품 이미지",
      }),
    ],
    rare: [
      reward("Salomon 트레일블레이저 20 블랙", "약 120,000원 상당", "RARE", "bag", {
        count: "10개",
        image: images["salomonTrailblazer20BlackImage"],
        imageAlt: "Salomon 트레일블레이저 20 블랙 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "bag", {
        count: "378개",
      }),
    ],
  },  "beanie-pack": {
    rare: [
      reward("Arc'teryx 버드 헤드 토크 오르카", "약 150,000원 상당", "RARE", "fashion", {
        count: "3개",
        image: images["arcteryxBirdHeadToqueOrcaImage"],
        imageAlt: "Arc'teryx 버드 헤드 토크 오르카 제품 이미지",
      }),
      reward("Stussy 스탁 커프 비니 블랙", "약 120,000원 상당", "RARE", "fashion", {
        count: "5개",
        image: images["stussyStockCuffBeanieBlackImage"],
        imageAlt: "Stussy 스탁 커프 비니 블랙 제품 이미지",
      }),
      reward("Matin Kim 로고 자카드 숏 비니 블랙", "약 120,000원 상당", "RARE", "fashion", {
        count: "5개",
        image: images["matinKimLogoJacquardShortBeanieBlackImage"],
        imageAlt: "Matin Kim 로고 자카드 숏 비니 블랙 제품 이미지",
      }),
      reward("Stussy 브러쉬드 아웃 스탁 스컬캡 비니 블랙", "약 120,000원 상당", "RARE", "fashion", {
        count: "5개",
        image: images["stussyBrushedOutStockSkullcapBeanieBlackImage"],
        imageAlt: "Stussy 브러쉬드 아웃 스탁 스컬캡 비니 블랙 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "fashion", {
        count: "162개",
      }),
    ],
  },  "mixed-cap-pack": {
    mythic: [
      reward("WOOYOUNGMI 자수 볼캡 블랙 - 25FW", "약 150,000원 상당", "MYTHIC", "fashion", {
        count: "5개",
        image: images["wooyoungmiEmbroideredBallCapBlack25fwImage"],
        imageAlt: "WOOYOUNGMI 자수 볼캡 블랙 - 25FW 제품 이미지",
      }),
    ],
    epic: [
      reward("Supreme 워시드 치노 트윌 캠프캡 블랙", "약 150,000원 상당", "EPIC", "fashion", {
        count: "5개",
        image: images["supremeWashedChinoCampCapBlackImage"],
        imageAlt: "Supreme 워시드 치노 트윌 캠프캡 블랙 제품 이미지",
      }),
      reward("Alex Zono 아이 디그 러닝 트러커 햇 OG 브라운", "약 120,000원 상당", "EPIC", "fashion", {
        count: "5개",
        image: images["alexJonoIDigRunningTruckerHatOgBrownImage"],
        imageAlt: "Alex Zono 아이 디그 러닝 트러커 햇 OG 브라운 제품 이미지",
      }),
      reward("Stussy New Era 9Twenty 베이직 트러커 블랙", "약 150,000원 상당", "EPIC", "fashion", {
        count: "5개",
        image: images["stussyNewEraCapBlackImage"],
        imageAlt: "Stussy New Era 9Twenty 베이직 트러커 블랙 제품 이미지",
      }),
      reward("Diesel C-세이몬 트리티드 데님 베이스볼 캡 블루 화이트", "약 150,000원 상당", "EPIC", "fashion", {
        count: "5개",
        image: images["dieselCSeimonTreatedDenimBaseballCapBlueWhiteImage"],
        imageAlt: "Diesel C-세이몬 트리티드 데님 베이스볼 캡 블루 화이트 제품 이미지",
      }),
    ],
    rare: [
      reward("Nike ACG 트레일 캡 블랙", "약 120,000원 상당", "RARE", "fashion", {
        count: "10개",
        image: images["nikeAcgTrailCapBlackImage"],
        imageAlt: "Nike ACG 트레일 캡 블랙 제품 이미지",
      }),
      reward("Oakley 리믹스 대드 햇 블랙아웃", "약 120,000원 상당", "RARE", "fashion", {
        count: "10개",
        image: images["oakleyRemixDadHatBlackoutImage"],
        imageAlt: "Oakley 리믹스 대드 햇 블랙아웃 제품 이미지",
      }),
      reward("New Era 59피프티 MLB 어센틱 뉴욕 양키스 게임 네이비", "약 120,000원 상당", "RARE", "fashion", {
        count: "10개",
        image: images["newEra59FiftyMlbAuthenticNewYorkYankeesGameNavyImage"],
        imageAlt: "New Era 59피프티 MLB 어센틱 뉴욕 양키스 게임 네이비 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "fashion", {
        count: "445개",
      }),
    ],
  },"chanel-card-wallet-pack": {
    legend: chanelCardWalletTiers.legend.map((item) => productReward("legend", "redBag", item)),
    mythic: chanelCardWalletTiers.mythic.map((item) => productReward("mythic", "fashion", item)),
    epic: chanelCardWalletTiers.epic.map((item, index) =>
      productReward("epic", index === 0 ? "bag" : "trunk", item),
    ),
    rare: chanelCardWalletTiers.rare.map((item) => productReward("rare", "jewelry", item)),
    standard: chanelCardWalletTiers.standard.map((item) => productReward("standard", "bag", item)),
  },
  "apple-macbook-neo-pack": {
    legend: [
      reward("Apple 맥북 네오", "약 1,500,000원 상당", "LEGEND", "tech", {
        count: "18개",
        image: images["appleMacbookNeoImage"],
        imageAlt: "Apple 맥북 네오 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "tech", {
        count: "782개",
      }),
    ],
  },
  "apple-airpods-pack": {
    mythic: [
      reward("Apple 에어팟 맥스 2", "약 769,000원 상당", "MYTHIC", "tech", {
        count: "3개",
        image: images["appleAirpodsMax2Image"],
        imageAlt: "Apple 에어팟 맥스 2 제품 이미지",
      }),
    ],
    epic: [
      reward("Apple 에어팟 프로 3", "약 369,000원 상당", "EPIC", "tech", {
        count: "2개",
        image: images["appleAirpodsPro3Image"],
        imageAlt: "Apple 에어팟 프로 3 제품 이미지",
      }),
      reward("Apple 에어팟 액티브 노이즈 캔슬링 모델 4", "약 269,000원 상당", "EPIC", "tech", {
        count: "2개",
        image: images["appleAirpods4AncImage"],
        imageAlt: "Apple 에어팟 액티브 노이즈 캔슬링 모델 4 제품 이미지",
      }),
      reward("Apple 에어팟 4", "약 200,000원 상당", "EPIC", "tech", {
        count: "2개",
        image: images["appleAirpods4Image"],
        imageAlt: "Apple 에어팟 4 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "tech", {
        count: "391개",
      }),
    ],
  },
  "apple-airpods-4-pack": {
    epic: [
      reward("Apple 에어팟 액티브 노이즈 캔슬링 모델 4", "약 269,000원 상당", "EPIC", "tech", {
        count: "10개",
        image: images["appleAirpods4AncImage"],
        imageAlt: "Apple 에어팟 액티브 노이즈 캔슬링 모델 4 제품 이미지",
      }),
      reward("Apple 에어팟 4", "약 200,000원 상당", "EPIC", "tech", {
        count: "8개",
        image: images["appleAirpods4Image"],
        imageAlt: "Apple 에어팟 4 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "tech", {
        count: "782개",
      }),
    ],
  },
  "apple-iphone-pack": {
    legend: [
      reward("Apple 아이폰 17 Pro", "약 1,700,000원 상당", "LEGEND", "tech", {
        count: "3개",
        image: images["appleIphone17ProImage"],
        imageAlt: "Apple 아이폰 17 Pro 제품 이미지",
      }),
      reward("Apple 아이폰 17", "약 1,300,000원 상당", "LEGEND", "tech", {
        count: "2개",
        image: images["appleIphone17Image"],
        imageAlt: "Apple 아이폰 17 제품 이미지",
      }),
      reward("Apple 아이폰 에어", "약 1,300,000원 상당", "LEGEND", "tech", {
        count: "2개",
        image: images["appleIphoneAirImage"],
        imageAlt: "Apple 아이폰 에어 제품 이미지",
      }),
    ],
    mythic: [
      reward("Apple 아이폰 17e", "약 1,000,000원 상당", "MYTHIC", "tech", {
        count: "2개",
        image: images["appleIphone17eImage"],
        imageAlt: "Apple 아이폰 17e 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "tech", {
        count: "391개",
      }),
    ],
  },
  "apple-iphone-17-pro-pack": {
    legend: [
      reward("Apple 아이폰 17 Pro", "약 1,700,000원 상당", "LEGEND", "tech", {
        count: "15개",
        image: images["appleIphone17ProImage"],
        imageAlt: "Apple 아이폰 17 Pro 제품 이미지",
      }),
      reward("Apple 아이폰 17", "약 1,300,000원 상당", "LEGEND", "tech", {
        count: "12개",
        image: images["appleIphone17Image"],
        imageAlt: "Apple 아이폰 17 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "tech", {
        count: "1173개",
      }),
    ],
  },
  "apple-ipad-pack": {
    legend: [
      reward("Apple 아이패드 프로", "약 1,500,000원 상당", "LEGEND", "tech", {
        count: "3개",
        image: images["appleIpadProImage"],
        imageAlt: "Apple 아이패드 프로 제품 이미지",
      }),
    ],
    mythic: [
      reward("Apple 아이패드 에어", "약 900,000원 상당", "MYTHIC", "tech", {
        count: "2개",
        image: images["appleIpadAirImage"],
        imageAlt: "Apple 아이패드 에어 제품 이미지",
      }),
      reward("Apple 아이패드 미니", "약 700,000원 상당", "MYTHIC", "tech", {
        count: "2개",
        image: images["appleIpadMiniImage"],
        imageAlt: "Apple 아이패드 미니 제품 이미지",
      }),
      reward("Apple 아이패드", "약 600,000원 상당", "MYTHIC", "tech", {
        count: "2개",
        image: images["appleIpadImage"],
        imageAlt: "Apple 아이패드 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "tech", {
        count: "391개",
      }),
    ],
  },
  "comme-des-garcons-tshirt-pack": {
    rare: [
      reward("Comme des Garçons 레드 하트 티셔츠 블랙", "약 150,000원 상당", "RARE", "fashion", {
        count: "10개",
        image: images["commeBlackTshirtImage"],
        imageAlt: "Comme des Garçons 레드 하트 티셔츠 블랙 제품 이미지",
      }),
      reward("Comme des Garçons 레드 하트 티셔츠 화이트", "약 150,000원 상당", "RARE", "fashion", {
        count: "10개",
        image: images["commeWhiteTshirtImage"],
        imageAlt: "Comme des Garçons 레드 하트 티셔츠 화이트 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "fashion", {
        count: "280개",
      }),
    ],
  },
  "ader-error-tshirt-pack": {
    rare: [
      reward("ADERERROR 시그니피컨트 TRS/BL 태그 티셔츠 01 블랙", "약 150,000원 상당", "RARE", "fashion", {
        count: "8개",
        image: images["aderErrorBlackTshirtImage"],
        imageAlt: "ADERERROR 시그니피컨트 TRS/BL 태그 티셔츠 01 블랙 제품 이미지",
      }),
      reward("ADERERROR 시그니피컨트 TRS/BL 태그 티셔츠 01 오프 화이트", "약 150,000원 상당", "RARE", "fashion", {
        count: "8개",
        image: images["aderErrorOffWhiteTshirtImage"],
        imageAlt: "ADERERROR 시그니피컨트 TRS/BL 태그 티셔츠 01 오프 화이트 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "fashion", {
        count: "334개",
      }),
    ],
  },
  "stussy-tshirt-pack": {
    rare: [
      reward("Stussy x Our Legacy 서프맨 피그먼트 다이드 티셔츠 블랙", "약 150,000원 상당", "RARE", "fashion", {
        count: "5개",
        image: images["stussyOurLegacySurfmanBlackImage"],
        imageAlt: "Stussy x Our Legacy 서프맨 피그먼트 다이드 티셔츠 블랙 제품 이미지",
      }),
      reward("Stussy 월드투어 티셔츠 블랙 2024,2025", "약 150,000원 상당", "RARE", "fashion", {
        count: "5개",
        image: images["stussyWorldTourBlackImage"],
        imageAlt: "Stussy 월드투어 티셔츠 블랙 2024,2025 제품 이미지",
      }),
      reward("Stussy 월드투어 티셔츠 화이트 2024,2025", "약 150,000원 상당", "RARE", "fashion", {
        count: "5개",
        image: images["stussyWorldTourWhiteImage"],
        imageAlt: "Stussy 월드투어 티셔츠 화이트 2024,2025 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "fashion", {
        count: "235개",
      }),
    ],
  },
  "stussy-new-era-cap-pack": {
    rare: [
      reward("Stussy New Era 9Twenty 베이직 트러커 블랙", "약 150,000원 상당", "RARE", "fashion", {
        count: "10개",
        image: images["stussyNewEraCapBlackImage"],
        imageAlt: "Stussy New Era 9Twenty 베이직 트러커 블랙 제품 이미지",
      }),
      reward("Stussy New Era 9Twenty 베이직 트러커 브라운", "약 150,000원 상당", "RARE", "fashion", {
        count: "10개",
        image: images["stussyNewEraCapBrownImage"],
        imageAlt: "Stussy New Era 9Twenty 베이직 트러커 브라운 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "fashion", {
        count: "280개",
      }),
    ],
  },
  "supreme-cap-pack": {
    rare: [
      reward("Supreme 워시드 치노 트윌 캠프캡 블랙", "약 150,000원 상당", "RARE", "fashion", {
        count: "5개",
        image: images["supremeWashedChinoCampCapBlackImage"],
        imageAlt: "Supreme 워시드 치노 트윌 캠프캡 블랙 제품 이미지",
      }),
      reward("Supreme 데님 캠프캡 블랙 - 24SS", "약 150,000원 상당", "RARE", "fashion", {
        count: "5개",
        image: images["supremeDenimCampCapBlack24ssImage"],
        imageAlt: "Supreme 데님 캠프캡 블랙 - 24SS 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "fashion", {
        count: "140개",
      }),
    ],
  },
"iab-studio-tshirt-pack": {
    rare: [
      reward("IAB Studio 26 아이앱 티셔츠 화이트 네이비", "약 150,000원 상당", "RARE", "fashion", {
        count: "10개",
        image: images["iabStudioWhiteNavyTshirtImage"],
        imageAlt: "IAB Studio 26 아이앱 티셔츠 화이트 네이비 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "fashion", {
        count: "90개",
      }),
    ],
  },
  "luxury-tshirt-pack": {
    mythic: [
      reward("AMI 스몰 하트 로고 티셔츠 화이트", "약 150,000원 상당", "MYTHIC", "fashion", {
        count: "3개",
        image: images["amiSmallHeartWhiteImage"],
        imageAlt: "AMI 스몰 하트 로고 티셔츠 화이트 제품 이미지",
      }),
      reward("AMI 스몰 하트 로고 티셔츠 블랙", "약 150,000원 상당", "MYTHIC", "fashion", {
        count: "3개",
        image: images["amiSmallHeartBlackImage"],
        imageAlt: "AMI 스몰 하트 로고 티셔츠 블랙 제품 이미지",
      }),
    ],
    epic: [
      reward("Stussy x Our Legacy 서프맨 피그먼트 다이드 티셔츠 블랙", "약 150,000원 상당", "EPIC", "fashion", {
        count: "3개",
        image: images["stussyOurLegacySurfmanBlackImage"],
        imageAlt: "Stussy x Our Legacy 서프맨 피그먼트 다이드 티셔츠 블랙 제품 이미지",
      }),
    ],
    rare: [
      reward("IAB Studio 26 아이앱 티셔츠 화이트 네이비", "약 150,000원 상당", "RARE", "fashion", {
        count: "3개",
        image: images["iabStudioWhiteNavyTshirtImage"],
        imageAlt: "IAB Studio 26 아이앱 티셔츠 화이트 네이비 제품 이미지",
      }),
      reward("Comme des Garçons 레드 하트 티셔츠 블랙", "약 150,000원 상당", "RARE", "fashion", {
        count: "3개",
        image: images["commeBlackTshirtImage"],
        imageAlt: "Comme des Garçons 레드 하트 티셔츠 블랙 제품 이미지",
      }),
      reward("Comme des Garçons 레드 하트 티셔츠 화이트", "약 150,000원 상당", "RARE", "fashion", {
        count: "3개",
        image: images["commeWhiteTshirtImage"],
        imageAlt: "Comme des Garçons 레드 하트 티셔츠 화이트 제품 이미지",
      }),
      reward("Stussy 월드투어 티셔츠 화이트 2024,2025", "약 150,000원 상당", "RARE", "fashion", {
        count: "3개",
        image: images["stussyWorldTourWhiteImage"],
        imageAlt: "Stussy 월드투어 티셔츠 화이트 2024,2025 제품 이미지",
      }),
      reward("Stussy 월드투어 티셔츠 블랙 2024,2025", "약 150,000원 상당", "RARE", "fashion", {
        count: "3개",
        image: images["stussyWorldTourBlackImage"],
        imageAlt: "Stussy 월드투어 티셔츠 블랙 2024,2025 제품 이미지",
      }),
    ],
    standard: [
      reward("랜덤 상품", "약 20,000원 상당", "STANDARD", "fashion", {
        count: "376개",
      }),
    ],
  },
  rolex: {
    legend: [
      reward("Rolex Daytona", "약 48,900,000원", "LEGEND", "watch"),
      reward("Patek Philippe Nautilus", "약 172,000,000원", "LEGEND", "blueWatch"),
      reward("Audemars Piguet Royal Oak", "약 78,000,000원", "LEGEND", "watch"),
    ],
    mythic: [
      reward("Rolex Submariner", "약 22,000,000원", "MYTHIC", "watch"),
      reward("Cartier Santos", "약 11,800,000원", "MYTHIC", "jewelry"),
      reward("Omega Speedmaster", "약 9,600,000원", "MYTHIC", "blueWatch"),
    ],
    epic: [
      reward("Tudor Black Bay", "약 5,200,000원", "EPIC", "watch"),
      reward("Grand Seiko Heritage", "약 7,400,000원", "EPIC", "blueWatch"),
      reward("Breitling Chronomat", "약 8,900,000원", "EPIC", "watch"),
    ],
    rare: [
      reward("Apple Watch Ultra", "약 1,149,000원", "RARE", "tech"),
      reward("Rimowa Watch Case", "약 980,000원", "RARE", "luggage"),
      reward("Luxury Watch Winder", "약 680,000원", "RARE", "voucher"),
    ],
    standard: [
      reward("Luxury Gift Card 50,000", "50,000원", "STANDARD", "voucher"),
      reward("Premium Watch Strap", "약 180,000원", "STANDARD", "watch"),
      reward("Collectible Voucher", "GACHA GO 전용", "STANDARD", "voucher"),
    ],
  },
  hermes: {
    legend: [
      reward("Hermès Birkin 25 Gold", "약 31,200,000원", "LEGEND", "bag"),
      reward("Hermès Kelly 28 Noir", "약 28,500,000원", "LEGEND", "bag"),
      reward("Hermès Constance Mini", "약 18,900,000원", "LEGEND", "redBag"),
    ],
    mythic: [
      reward("Hermès Kelly Wallet", "약 4,800,000원", "MYTHIC", "bag"),
      reward("Hermès Cape Cod Watch", "약 5,400,000원", "MYTHIC", "watch"),
      reward("Hermès Silk Scarf", "약 820,000원", "MYTHIC", "fashion"),
    ],
    epic: [
      reward("Hermès Calvi Duo", "약 760,000원", "EPIC", "bag"),
      reward("Hermès Bracelet", "약 1,200,000원", "EPIC", "jewelry"),
      reward("Hermès Twilly Set", "약 680,000원", "EPIC", "fashion"),
    ],
    rare: [
      reward("Luxury Leather Tray", "약 420,000원", "RARE", "bag"),
      reward("Luxury Orange Voucher", "100,000원", "RARE", "voucher"),
      reward("Premium Fragrance Voucher", "약 160,000원", "RARE", "voucher"),
    ],
    standard: [
      reward("Luxury Gift Card 50,000", "50,000원", "STANDARD", "voucher"),
      reward("Leather Charm Voucher", "GACHA GO 전용", "STANDARD", "bag"),
      reward("Collectible Voucher", "GACHA GO 전용", "STANDARD", "voucher"),
    ],
  },
  chanel: {
    legend: [
      reward("Chanel Wallet", "약 1,250,000원 상당", "LEGEND", "redBag", {
        count: "1개",
      }),
    ],
    mythic: [
      reward("Dior Wallet", "약 600,000원 ~ 800,000원 상당", "MYTHIC", "fashion", { count: "1개" }),
      reward("Gucci Wallet", "약 500,000원 ~ 700,000원 상당", "MYTHIC", "bag", { count: "1개" }),
      reward("Prada Wallet", "약 500,000원 ~ 700,000원 상당", "MYTHIC", "redBag", { count: "1개" }),
      reward("Saint Laurent Wallet", "약 500,000원 ~ 700,000원 상당", "MYTHIC", "trunk", { count: "1개" }),
    ],
    epic: [
      reward("Coach Wallet", "약 200,000원 ~ 300,000원 상당", "EPIC", "bag", { count: "4개" }),
      reward("Tory Burch Wallet", "약 200,000원 ~ 300,000원 상당", "EPIC", "fashion", { count: "4개" }),
      reward("Vivienne Westwood Wallet", "약 180,000원 ~ 280,000원 상당", "EPIC", "jewelry", { count: "3개" }),
      reward("MCM Wallet", "약 250,000원 ~ 350,000원 상당", "EPIC", "trunk", { count: "3개" }),
      reward("Maison Kitsuné Wallet", "약 150,000원 ~ 250,000원 상당", "EPIC", "redBag", { count: "4개" }),
    ],
    rare: [
      reward("Beanpole Wallet", "약 100,000원 ~ 150,000원 상당", "RARE", "bag", { count: "12개" }),
      reward("Daks Wallet", "약 100,000원 ~ 150,000원 상당", "RARE", "fashion", { count: "10개" }),
      reward("Hazzys Wallet", "약 90,000원 ~ 140,000원 상당", "RARE", "trunk", { count: "10개" }),
      reward("Metrocity Wallet", "약 90,000원 ~ 130,000원 상당", "RARE", "jewelry", { count: "10개" }),
      reward("J.ESTINA Wallet", "약 90,000원 ~ 130,000원 상당", "RARE", "redBag", { count: "10개" }),
    ],
    standard: [
      reward("Premium Leather Card Holder", "약 15,000원 ~ 25,000원 상당", "STANDARD", "bag", {
        koreanName: "프리미엄 카드 홀더",
        count: "30개",
      }),
      reward("Mini Coin Pouch", "약 10,000원 ~ 20,000원 상당", "STANDARD", "redBag", {
        koreanName: "미니 코인 파우치",
        count: "25개",
      }),
      reward("Premium Keyring", "약 10,000원 ~ 20,000원 상당", "STANDARD", "jewelry", {
        koreanName: "프리미엄 키링",
        count: "25개",
      }),
      reward("Wallet Strap", "약 10,000원 ~ 20,000원 상당", "STANDARD", "fashion", {
        koreanName: "카드지갑 스트랩",
        count: "20개",
      }),
      reward("Leather Care Kit", "약 8,000원 ~ 15,000원 상당", "STANDARD", "voucher", {
        koreanName: "가죽 케어 키트",
        count: "15개",
      }),
      reward("Wallet Dust Bag", "약 8,000원 ~ 12,000원 상당", "STANDARD", "trunk", {
        koreanName: "지갑 보관 더스트백",
        count: "6개",
      }),
      reward("Microfiber Cleaner", "약 5,000원 ~ 10,000원 상당", "STANDARD", "tech", {
        koreanName: "극세사 클리너",
        count: "3개",
      }),
    ],
  },
  "luxury-watch": {
    legend: [
      reward("Patek Philippe Nautilus", "약 172,000,000원", "LEGEND", "blueWatch"),
      reward("Rolex Daytona Oysterflex", "약 48,900,000원", "LEGEND", "watch"),
      reward("Vacheron Overseas", "약 42,000,000원", "LEGEND", "watch"),
    ],
    mythic: [
      reward("Cartier Tank Must", "약 7,200,000원", "MYTHIC", "jewelry"),
      reward("IWC Portugieser", "약 12,800,000원", "MYTHIC", "blueWatch"),
      reward("Panerai Luminor", "약 10,300,000원", "MYTHIC", "watch"),
    ],
    epic: [
      reward("Tudor Pelagos", "약 6,100,000원", "EPIC", "watch"),
      reward("Longines Spirit", "약 3,900,000원", "EPIC", "blueWatch"),
      reward("TAG Heuer Carrera", "약 5,800,000원", "EPIC", "watch"),
    ],
    rare: [
      reward("Rimowa Watch Case", "약 980,000원", "RARE", "luggage"),
      reward("Luxury Watch Winder", "약 680,000원", "RARE", "voucher"),
      reward("Premium Strap Set", "약 320,000원", "RARE", "watch"),
    ],
    standard: [
      reward("Luxury Gift Card 50,000", "50,000원", "STANDARD", "voucher"),
      reward("Watch Care Kit", "약 90,000원", "STANDARD", "watch"),
      reward("Collectible Voucher", "GACHA GO 전용", "STANDARD", "voucher"),
    ],
  },
  "designer-bag": {
    legend: [
      reward("Louis Vuitton Capucines MM", "약 9,600,000원", "LEGEND", "trunk"),
      reward("Hermès Mini Lindy", "약 15,800,000원", "LEGEND", "bag"),
      reward("Chanel Classic Flap Bag", "약 14,700,000원", "LEGEND", "redBag"),
    ],
    mythic: [
      reward("Dior Lady Bag", "약 8,900,000원", "MYTHIC", "fashion"),
      reward("Celine Triomphe Bag", "약 5,900,000원", "MYTHIC", "bag"),
      reward("Bottega Veneta Jodie", "약 4,800,000원", "MYTHIC", "redBag"),
    ],
    epic: [
      reward("Prada Re-Edition Bag", "약 2,600,000원", "EPIC", "bag"),
      reward("Loewe Puzzle Mini", "약 3,300,000원", "EPIC", "fashion"),
      reward("Miu Miu Matelasse", "약 3,100,000원", "EPIC", "redBag"),
    ],
    rare: [
      reward("Maison Margiela Sneakers", "약 890,000원", "RARE", "fashion"),
      reward("Designer Card Holder", "약 520,000원", "RARE", "bag"),
      reward("Luxury Gift Card 100,000", "100,000원", "RARE", "voucher"),
    ],
    standard: [
      reward("Luxury Gift Card", "50,000원", "STANDARD", "voucher"),
      reward("Premium Keyring", "약 120,000원", "STANDARD", "jewelry"),
      reward("Collectible Voucher", "GACHA GO 전용", "STANDARD", "voucher"),
    ],
  },
  "high-roller": {
    legend: [
      reward("Patek Philippe Nautilus", "약 172,000,000원", "LEGEND", "blueWatch"),
      reward("Hermès Birkin 25 Gold", "약 31,200,000원", "LEGEND", "bag"),
      reward("Rolex Daytona", "약 48,900,000원", "LEGEND", "watch"),
    ],
    mythic: [
      reward("Chanel Classic Flap Bag", "약 14,700,000원", "MYTHIC", "redBag"),
      reward("Cartier Santos", "약 11,800,000원", "MYTHIC", "jewelry"),
      reward("Louis Vuitton Trunk", "약 12,400,000원", "MYTHIC", "trunk"),
    ],
    epic: [
      reward("Dior Saddle Bag", "약 5,200,000원", "EPIC", "fashion"),
      reward("Van Cleef Bracelet", "약 6,800,000원", "EPIC", "jewelry"),
      reward("Prada Re-Nylon Bag", "약 2,300,000원", "EPIC", "bag"),
    ],
    rare: [
      reward("Apple Vision Pro", "약 5,190,000원", "RARE", "tech"),
      reward("Rimowa Cabin", "약 1,800,000원", "RARE", "luggage"),
      reward("Maison Margiela Sneakers", "약 890,000원", "RARE", "fashion"),
    ],
    standard: [
      reward("Luxury Gift Card", "100,000원", "STANDARD", "voucher"),
      reward("Premium Keyring", "약 120,000원", "STANDARD", "jewelry"),
      reward("Luxury Gift Card", "50,000원", "STANDARD", "voucher"),
    ],
  },
};

export const splitSlotTitle = (name = "") => {
  const normalized = String(name).replace(/\s+/g, " ").trim();
  if (!normalized) return { brand: "GACHA GO", item: "Mystery Reward" };

  const brandPatterns = [
    "Comme des Garçons",
    "Vivienne Westwood",
    "Apple",
    "Chanel",
    "Dior",
    "Gucci",
    "Burberry",
    "ADERERROR",
    "IAB Studio",
    "Stussy",
    "Supreme",
    "COS",
    "Rolex",
    "Patek Philippe",
    "Audemars Piguet",
    "Hermès",
    "Louis Vuitton",
    "Cartier",
  ];
  const matchedBrand = brandPatterns.find((brand) => normalized.toLowerCase().startsWith(brand.toLowerCase()));
  if (matchedBrand) {
    const item = normalized.slice(matchedBrand.length).trim() || normalized;
    return { brand: matchedBrand, item };
  }

  const [brand, ...rest] = normalized.split(" ");
  return { brand, item: rest.join(" ") || normalized };
};

export const shuffleSlotItems = (items) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
};

export const createSlotItemsFromPacks = () => {
  const seen = new Set();
  const items = [];

  customPackSlugs.forEach((slug) => {
    const tiers = packTierCatalog[slug];
    if (!tiers) return;

    Object.values(tiers).forEach((rewards = []) => {
      rewards.forEach((rewardItem) => {
        if (!rewardItem || rewardItem.name === "랜덤 상품") return;
        const key = `${rewardItem.name}-${rewardItem.rarity}`;
        if (seen.has(key)) return;
        seen.add(key);

        const titleParts = splitSlotTitle(rewardItem.name);
        items.push({
          ...titleParts,
          rarity: rewardItem.rarity,
          image: rewardItem.image || randomProductImage,
        });
      });
    });
  });

  return items.length ? items : [{ brand: "GACHA GO", item: "랜덤 상품", rarity: "STANDARD", image: randomProductImage }];
};

Object.keys(packTierCatalog).forEach((slug) => {
  packTierCatalog[slug] = normalizeTieredRewards(packTierCatalog[slug]);
});

export const reelItems = createSlotItemsFromPacks();

export const fallbackTierCatalog = packTierCatalog["high-roller"];

export const packSpecialDetails = {
  "cos-bag-pack": {
    koreanName: "COS 백 팩",
    lastDrawBonus: {
      tier: "rare",
      label: "LAST DRAW BONUS",
      title: "COS 퀼티드 오버사이즈 숄더백 블랙",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["cosQuiltedOversizedShoulderBagBlackImage"],
      imageAlt: "COS 퀼티드 오버사이즈 숄더백 블랙 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 RARE 리워드가 추가 지급됩니다!",
    },
  },  "crossbody-bag-pack": {
    koreanName: "크로스백 팩",
    lastDrawBonus: {
      tier: "rare",
      label: "LAST DRAW BONUS",
      title: "Arc'teryx 헬리아드 6 크로스바디백 블랙",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["arcteryxHeliad6CrossbodyBagBlackImage"],
      imageAlt: "Arc'teryx 헬리아드 6 크로스바디백 블랙 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 RARE 리워드가 추가 지급됩니다!",
    },
  },  "backpack-pack": {
    koreanName: "백팩 팩",
    lastDrawBonus: {
      tier: "mythic",
      label: "LAST DRAW BONUS",
      title: "C.P. Company 나일론 B 렌즈 백팩 블랙 - 25FW",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["cpCompanyNylonBLensBackpackBlack25fwImage"],
      imageAlt: "C.P. Company 나일론 B 렌즈 백팩 블랙 - 25FW 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 MYTHIC 리워드가 추가 지급됩니다!",
    },
  },  "beanie-pack": {
    koreanName: "비니 팩",
    lastDrawBonus: {
      tier: "rare",
      label: "LAST DRAW BONUS",
      title: "Arc'teryx 버드 헤드 토크 오르카",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["arcteryxBirdHeadToqueOrcaImage"],
      imageAlt: "Arc'teryx 버드 헤드 토크 오르카 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 RARE 리워드가 추가 지급됩니다!",
    },
  },  "mixed-cap-pack": {
    koreanName: "모자 팩",
    tierStats: {
      mythic: { count: 5 },
      epic: { count: 20 },
      rare: { count: 30 },
      standard: { count: 445 },
    },
    lastDrawBonus: {
      tier: "mythic",
      label: "LAST DRAW BONUS",
      title: "WOOYOUNGMI 자수 볼캡 블랙 - 25FW",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["wooyoungmiEmbroideredBallCapBlack25fwImage"],
      imageAlt: "WOOYOUNGMI 자수 볼캡 블랙 - 25FW 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 MYTHIC 리워드가 추가 지급됩니다!",
    },
  },"chanel-card-wallet-pack": {
    koreanName: "Designer 카드 지갑 팩",
    tierStats: {
      legend: { count: 2 },
      mythic: { count: 2 },
      epic: { count: 4 },
      rare: { count: 10 },
      standard: { count: 182 },
    },
    lastDrawBonus: {
      tier: "legend",
      label: "LAST DRAW BONUS",
      title: "Chanel 카드 지갑",
      englishTitle: "Chanel Classic Card Holder Grained Calfskin & Silver Metal Black",
      actualPrice: 1250000,
      displayValue: 1400000,
      quantity: 1,
      image: images["brand_chanel"],
      imageAlt: "샤넬 클래식 카드 홀더 그레인드 카프스킨 & 실버 메탈 블랙 제품 사진",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 LEGEND 리워드가 추가 지급됩니다!",
    },
  },
  "apple-macbook-neo-pack": {
    koreanName: "Apple 맥북 네오 팩",
    lastDrawBonus: {
      tier: "legend",
      label: "LAST DRAW BONUS",
      title: "Apple 맥북 네오",
      actualPrice: 1500000,
      displayValue: 1500000,
      quantity: 1,
      image: images["appleMacbookNeoImage"],
      imageAlt: "Apple 맥북 네오 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 LEGEND 리워드가 추가 지급됩니다!",
    },
  },
  "apple-airpods-pack": {
    koreanName: "Apple 에어팟 팩",
    lastDrawBonus: {
      tier: "mythic",
      label: "LAST DRAW BONUS",
      title: "Apple 에어팟 맥스 2",
      actualPrice: 769000,
      displayValue: 769000,
      quantity: 1,
      image: images["appleAirpodsMax2Image"],
      imageAlt: "Apple 에어팟 맥스 2 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 MYTHIC 리워드가 추가 지급됩니다!",
    },
  },
  "apple-airpods-4-pack": {
    koreanName: "Apple 에어팟 4 팩",
    lastDrawBonus: {
      tier: "epic",
      label: "LAST DRAW BONUS",
      title: "Apple 에어팟 액티브 노이즈 캔슬링 모델 4",
      actualPrice: 269000,
      displayValue: 269000,
      quantity: 1,
      image: images["appleAirpods4AncImage"],
      imageAlt: "Apple 에어팟 액티브 노이즈 캔슬링 모델 4 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 EPIC 리워드가 추가 지급됩니다!",
    },
  },
  "apple-iphone-pack": {
    koreanName: "Apple 아이폰 팩",
    lastDrawBonus: {
      tier: "legend",
      label: "LAST DRAW BONUS",
      title: "Apple 아이폰 17 Pro",
      actualPrice: 1700000,
      displayValue: 1700000,
      quantity: 1,
      image: images["appleIphone17ProImage"],
      imageAlt: "Apple 아이폰 17 Pro 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 LEGEND 리워드가 추가 지급됩니다!",
    },
  },
  "apple-iphone-17-pro-pack": {
    koreanName: "Apple 아이폰 17 팩",
    lastDrawBonus: {
      tier: "legend",
      label: "LAST DRAW BONUS",
      title: "Apple 아이폰 17 Pro",
      actualPrice: 1700000,
      displayValue: 1700000,
      quantity: 1,
      image: images["appleIphone17ProImage"],
      imageAlt: "Apple 아이폰 17 Pro 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 LEGEND 리워드가 추가 지급됩니다!",
    },
  },
  "apple-ipad-pack": {
    koreanName: "Apple 아이패드 팩",
    lastDrawBonus: {
      tier: "legend",
      label: "LAST DRAW BONUS",
      title: "Apple 아이패드 프로",
      actualPrice: 1500000,
      displayValue: 1500000,
      quantity: 1,
      image: images["appleIpadProImage"],
      imageAlt: "Apple 아이패드 프로 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 LEGEND 리워드가 추가 지급됩니다!",
    },
  },
  "comme-des-garcons-tshirt-pack": {
    koreanName: "Comme des Garçons 티셔츠 팩",
    lastDrawBonus: {
      tier: "rare",
      label: "LAST DRAW BONUS",
      title: "Comme des Garçons 레드 하트 티셔츠 블랙",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["commeBlackTshirtImage"],
      imageAlt: "Comme des Garçons 레드 하트 티셔츠 블랙 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 RARE 리워드가 추가 지급됩니다!",
    },
  },
  "ader-error-tshirt-pack": {
    koreanName: "ADERERROR 티셔츠 팩",
    lastDrawBonus: {
      tier: "rare",
      label: "LAST DRAW BONUS",
      title: "ADERERROR 시그니피컨트 TRS/BL 태그 티셔츠 01 블랙",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["aderErrorBlackTshirtImage"],
      imageAlt: "ADERERROR 시그니피컨트 TRS/BL 태그 티셔츠 01 블랙 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 RARE 리워드가 추가 지급됩니다!",
    },
  },
  "stussy-tshirt-pack": {
    koreanName: "Stussy 티셔츠 팩",
    lastDrawBonus: {
      tier: "rare",
      label: "LAST DRAW BONUS",
      title: "Stussy x Our Legacy 서프맨 피그먼트 다이드 티셔츠 블랙",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["stussyOurLegacySurfmanBlackImage"],
      imageAlt: "Stussy x Our Legacy 서프맨 피그먼트 다이드 티셔츠 블랙 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 RARE 리워드가 추가 지급됩니다!",
    },
  },
  "stussy-new-era-cap-pack": {
    koreanName: "Stussy New Era 모자 팩",
    lastDrawBonus: {
      tier: "rare",
      label: "LAST DRAW BONUS",
      title: "Stussy New Era 9Twenty 베이직 트러커 블랙",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["stussyNewEraCapBlackImage"],
      imageAlt: "Stussy New Era 9Twenty 베이직 트러커 블랙 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 RARE 리워드가 추가 지급됩니다!",
    },
  },
  "supreme-cap-pack": {
    koreanName: "Supreme 모자 팩",
    lastDrawBonus: {
      tier: "rare",
      label: "LAST DRAW BONUS",
      title: "Supreme 워시드 치노 트윌 캠프캡 블랙",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["supremeWashedChinoCampCapBlackImage"],
      imageAlt: "Supreme 워시드 치노 트윌 캠프캡 블랙 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 RARE 리워드가 추가 지급됩니다!",
    },
  },
"iab-studio-tshirt-pack": {
    koreanName: "IAB Studio 티셔츠 팩",
    lastDrawBonus: {
      tier: "rare",
      label: "LAST DRAW BONUS",
      title: "IAB Studio 26 아이앱 티셔츠 화이트 네이비",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["iabStudioWhiteNavyTshirtImage"],
      imageAlt: "IAB Studio 26 아이앱 티셔츠 화이트 네이비 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 RARE 리워드가 추가 지급됩니다!",
    },
  },
  "luxury-tshirt-pack": {
    koreanName: "티셔츠 팩",
    tierStats: {
      mythic: { count: 6 },
      epic: { count: 3 },
      rare: { count: 15 },
      standard: { count: 376 },
    },
    lastDrawBonus: {
      tier: "mythic",
      label: "LAST DRAW BONUS",
      title: "AMI 스몰 하트 로고 티셔츠 화이트",
      actualPrice: 150000,
      displayValue: 150000,
      quantity: 1,
      image: images["amiSmallHeartWhiteImage"],
      imageAlt: "AMI 스몰 하트 로고 티셔츠 화이트 제품 이미지",
      description: "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 MYTHIC 리워드가 추가 지급됩니다!",
    },
  },
  chanel: {
    koreanName: "샤넬 지갑 팩",
    totalQuantity: "200개",
    randomQuantity: "199개",
    lastDrawBonusQuantity: "1개",
    tierStats: {
      legend: { count: "1개" },
      mythic: { count: "4개" },
      epic: { count: "18개" },
      rare: { count: "52개" },
      standard: { count: "124개" },
    },
    lastDrawBonus: {
      label: "FINAL PACK GUARANTEE",
      title: "마지막 구매자는 Chanel Wallet을 확정으로 받습니다.",
      description: "마지막 1개에는 LEGEND 리워드가 확정 지급됩니다.",
    },
  },
};

allPacks.forEach((pack) => {
  const copy = packDetailCopy[pack.slug] || packDetailCopy["high-roller"];
  pack.name = pack.title;
  pack.price = formatWon(pack.priceValue);
  pack.detailSubtitle = copy.detailSubtitle;
  pack.description = copy.description;
  pack.tiers = packTierCatalog[pack.slug] || fallbackTierCatalog;
  Object.assign(pack, packSpecialDetails[pack.slug] || {});
  pack.tierStats = buildTierStats(pack.tiers);
});

export const getCatalogQuantity = (item) => {
  if (Number.isFinite(item.quantity)) return item.quantity;
  const parsed = Number.parseInt(item.count, 10);
  return Number.isFinite(parsed) ? parsed : 1;
};

export const buildPackCatalogPayload = () =>
  allPacks
    .filter((pack) => Number.isFinite(pack.totalQuantity) && pack.tiers)
    .map((pack) => ({
      slug: pack.slug,
      title: pack.koreanName || pack.title,
      price_value: pack.priceValue,
      total_quantity: pack.totalQuantity,
      last_one_title: pack.lastDrawBonus?.title || null,
      prizes: tierOrder.flatMap((tierKey) =>
        (pack.tiers[tierKey] || []).map((item) => ({
          prize_key: `${tierKey}:${item.name}`,
          name: item.name,
          tier: tierKey,
          initial_quantity: getCatalogQuantity(item),
        })),
      ),
    }));

export const tierMeta = tierConfig;

export const marketProducts = [
  {
    id: "market-rolex-daytona",
    brand: "Rolex",
    name: "Daytona Oysterflex",
    priceValue: 48900000,
    status: "프리미엄",
    popularity: 99,
    createdAt: 20260522,
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "market-hermes-birkin",
    brand: "Hermès",
    name: "Birkin 25 Gold",
    priceValue: 31200000,
    status: "희소",
    popularity: 97,
    createdAt: 20260521,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "market-chanel-flap",
    brand: "Chanel",
    name: "Classic Flap Bag",
    priceValue: 14700000,
    status: "즉시구매",
    popularity: 93,
    createdAt: 20260520,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "market-lv-capucines",
    brand: "Louis Vuitton",
    name: "Capucines MM",
    priceValue: 9600000,
    status: "신상품",
    popularity: 88,
    createdAt: 20260519,
    image:
      "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "market-cartier-santos",
    brand: "Cartier",
    name: "Santos De Cartier",
    priceValue: 11800000,
    status: "추천",
    popularity: 85,
    createdAt: 20260518,
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "market-dior-lady",
    brand: "Dior",
    name: "Lady Dior Noir",
    priceValue: 8900000,
    status: "한정",
    popularity: 82,
    createdAt: 20260517,
    image:
      "https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&w=900&q=85",
  },
];

export const communityPreviewPosts = [
  {
    user: "daily.archive",
    title: "Stussy x Our Legacy 티셔츠 착용 후기",
    meta: "좋아요 428 · 댓글 31",
    image: images["stussyOurLegacySurfmanBlackImage"],
  },
  {
    user: "street.fit",
    title: "Stussy New Era 모자 데일리 착용",
    meta: "좋아요 276 · 댓글 18",
    image: images["stussyNewEraCapBrownImage"],
  },
  {
    user: "minimal.code",
    title: "Comme des Garçons 티셔츠 핏 인증",
    meta: "좋아요 351 · 댓글 24",
    image: images["commeBlackTshirtImage"],
  },
];

export const feedSeed = [
  { id: "feed-1", name: "김**님", pack: "Apple 아이폰 팩", product: "Apple 아이폰 17 Pro", time: "방금 전", rarity: "LEGEND" },
  { id: "feed-2", name: "박**님", pack: "Apple 에어팟 팩", product: "Apple 에어팟 맥스 2", time: "12초 전", rarity: "MYTHIC" },
  { id: "feed-3", name: "이**님", pack: "티셔츠 팩", product: "Stussy 월드투어 티셔츠 블랙 2024,2025", time: "28초 전", rarity: "RARE" },
    { id: "feed-4", name: "최**님", pack: "백팩 팩", product: "C.P. Company 나일론 B 렌즈 백팩 블랙 - 25FW", time: "41초 전", rarity: "MYTHIC" },
  { id: "feed-5", name: "정**님", pack: "Designer 카드 지갑 팩", product: "랜덤 상품", time: "1분 전", rarity: "STANDARD" },
];

export const feedPool = [
  { name: "한**님", pack: "Apple 아이패드 팩", product: "Apple 아이패드 프로", time: "방금 전", rarity: "LEGEND" },
  { name: "윤**님", pack: "Designer 카드 지갑 팩", product: "Chanel 카드 지갑", time: "방금 전", rarity: "LEGEND" },
  { name: "서**님", pack: "모자 팩", product: "WOOYOUNGMI 자수 볼캡 블랙 - 25FW", time: "방금 전", rarity: "MYTHIC" },
  { name: "오**님", pack: "티셔츠 팩", product: "Comme des Garçons 레드 하트 티셔츠 블랙", time: "방금 전", rarity: "RARE" },
  { name: "문**님", pack: "모자 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
  { name: "강**님", pack: "Apple 맥북 네오 팩", product: "Apple 맥북 네오", time: "방금 전", rarity: "LEGEND" },
  { name: "조**님", pack: "백팩 팩", product: "C.P. Company 나일론 B 렌즈 백팩 블랙 - 25FW", time: "방금 전", rarity: "MYTHIC" },
];

export const randomWinFeedPool = [
  { name: "정**님", pack: "Designer 카드 지갑 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
  { name: "문**님", pack: "모자 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
  { name: "김**님", pack: "Apple 아이폰 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
  { name: "박**님", pack: "Apple 에어팟 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
  { name: "이**님", pack: "티셔츠 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
  { name: "최**님", pack: "백팩 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
  { name: "한**님", pack: "Apple 아이폰 17 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
  { name: "오**님", pack: "Apple 에어팟 4 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
  { name: "윤**님", pack: "티셔츠 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
  { name: "서**님", pack: "Apple 아이패드 팩", product: "랜덤 상품", time: "방금 전", rarity: "STANDARD" },
];
export const featuredWinFeedPool = feedPool.filter((item) => item.product !== "랜덤 상품");

export const communityCategories = ["전체", "공지", "이벤트", "자유", "후기", "포토후기", "질문", "1:1문의"];

export const boardPosts = [
  {
    id: "notice-1",
    pinned: true,
    category: "공지",
    title: "GACHA GO 베타 서비스 이용 안내",
    author: "운영팀",
    date: "2026.05.22",
    likes: 182,
    comments: 24,
    views: 8120,
  },
  {
    id: "event-1",
    pinned: true,
    category: "이벤트",
    title: "오렌지 럭셔리 위크 당첨 인증 이벤트",
    author: "GACHA GO",
    date: "2026.05.21",
    likes: 347,
    comments: 91,
    views: 13204,
  },
  {
    id: "post-1",
    category: "후기",
    title: "Hermès Pack 오픈하고 아직도 손이 떨려요",
    author: "maison.j",
    date: "2026.05.20",
    likes: 84,
    comments: 18,
    views: 1280,
  },
  {
    id: "post-2",
    category: "포토후기",
    title: "Rolex Pack 실물 인증 남깁니다",
    author: "seoul.archive",
    date: "2026.05.19",
    likes: 156,
    comments: 32,
    views: 2440,
  },
  {
    id: "post-3",
    category: "질문",
    title: "배송지 변경은 오픈 후에도 가능한가요?",
    author: "noir.collector",
    date: "2026.05.19",
    likes: 12,
    comments: 7,
    views: 418,
  },
  {
    id: "post-4",
    category: "자유",
    title: "오늘 라이브 오픈 분위기 정말 좋네요",
    author: "orange.room",
    date: "2026.05.18",
    likes: 63,
    comments: 16,
    views: 903,
  },
  {
    id: "post-5",
    category: "1:1문의",
    title: "결제 확인 문의드립니다",
    author: "private.user",
    date: "2026.05.18",
    likes: 2,
    comments: 1,
    views: 95,
  },
];

export const faqCategories = ["전체", "서비스 소개", "추첨 시스템", "배송", "교환/환불", "결제", "기타"];

export const faqItems = [
  ["서비스 소개", "이치방쿠지(제일복권)란 무엇인가요?", "일본식 랜덤 복권형 컬렉터블 경험을 온라인에서 즐길 수 있도록 구성한 서비스입니다."],
  ["서비스 소개", "정품인가요?", "GACHA GO에 표시되는 상품은 정품 취급 기준을 바탕으로 큐레이션되며, 상품별 검수 정보를 함께 제공합니다."],
  ["서비스 소개", "쿠지머신은 어떻게 이용하나요?", "원하는 팩을 선택하고 결제한 뒤 오픈 버튼을 누르면 랜덤 결과가 공개됩니다."],
  ["서비스 소개", "쿠지 티켓이란 무엇인가요?", "특정 팩을 오픈할 수 있는 이용권이며, 보유한 티켓은 마이페이지에서 확인할 수 있습니다."],
  ["서비스 소개", "쿠지 티켓은 어떻게 이용하나요?", "팩 상세 화면에서 티켓 사용을 선택하면 결제 없이 해당 팩을 오픈할 수 있습니다."],
  ["추첨 시스템", "추첨은 공정한가요?", "각 팩의 구성과 확률을 기준으로 독립적인 랜덤 결과가 생성되도록 설계했습니다."],
  ["추첨 시스템", "라스트원(LAST ONE)이란 무엇인가요?", "정해진 수량의 마지막 오픈 시 지급되는 특별 리워드를 의미합니다."],
  ["추첨 시스템", "당첨 확률은 어떻게 계산되나요?", "팩별 남은 상품 수량과 등급별 구성 비율을 기준으로 산정합니다."],
  ["배송", "배송은 얼마나 걸리나요?", "일반적으로 영업일 기준 2일에서 5일 정도 소요되며, 상품 특성에 따라 달라질 수 있습니다."],
  ["배송", "합배송은 어떻게 되나요?", "배송 준비 전 상품은 마이페이지에서 합배송 신청이 가능합니다."],
  ["교환/환불", "교환이나 환불이 가능한가요?", "랜덤 오픈 특성상 단순 변심 환불은 제한되며, 파손이나 오배송은 고객센터에서 확인 후 처리됩니다."],
  ["교환/환불", "파손으로 환불받으려면 어떻게 해야 하나요?", "수령 직후 사진과 영상 자료를 준비해 문의해 주시면 검수 후 안내드립니다."],
  ["결제", "결제 방법은 무엇인가요?", "카드 결제, 간편 결제 등 주요 온라인 결제 수단을 지원하는 구조로 설계되어 있습니다."],
  ["결제", "결제 후 10분이 지나면 어떻게 되나요?", "결제 세션이 만료될 수 있으며, 만료 시 다시 주문을 진행해야 합니다."],
  ["기타", "문의는 어디로 하나요?", "페이지 하단 문의 박스 또는 고객센터 채널을 통해 문의하실 수 있습니다."],
].map(([category, question, answer], index) => ({ id: `faq-${index + 1}`, category, question, answer }));
