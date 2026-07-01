import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // 원본 marketProducts 등에서 쓰는 외부 이미지 도메인 허용.
    // (점진적으로 로컬 이미지로 교체 후 제거 가능)
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
