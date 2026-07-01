// 카탈로그 데이터(catalog.ts)를 소비할 때 사용할 타입 정의.
// catalog.ts 자체는 원본 JS 이전본이라 @ts-nocheck 이지만,
// 컴포넌트에서는 아래 타입으로 캐스팅해 안전하게 다룬다.

export interface Pack {
  id: string;
  slug: string;
  title: string;
  englishName?: string;
  subtitle?: string;
  category?: string;
  priceValue: number;
  totalQuantity?: number;
  soldQuantity?: number;
  remainingQuantity?: number;
  randomQuantity?: number;
  lastDrawQuantity?: number;
  odds?: string;
  cardHighlight?: string;
  topPrize?: string;
  popularity?: number;
  createdAt?: number;
  image: string;
  heroImage?: string;
  imageAlt?: string;
}

export interface RewardItem {
  name: string;
  rarity?: string;
  tier?: string;
  value?: number | string;
  image?: string;
  quantity?: number;
}

export interface MarketProduct {
  id: string;
  brand: string;
  name: string;
  priceValue: number;
  status?: string;
  popularity?: number;
  createdAt?: number;
  image: string;
}

export interface BoardPost {
  id?: string | number;
  category?: string;
  title: string;
  author?: string;
  date?: string;
  views?: number;
  likes?: number;
  [key: string]: unknown;
}

export interface FaqItem {
  category?: string;
  question: string;
  answer: string;
}

export interface FeedItem {
  [key: string]: unknown;
}
