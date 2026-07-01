import Link from "next/link";

// 홈 최상단 히어로 (애니메이션 로고 + CTA).
export function Hero() {
  return (
    <section id="home" className="hero-stage">
      <div className="hero-content mx-auto max-w-5xl">
        <h1 className="hero-title animated-hero-logo reveal font-black">
          <span className="animated-logo" aria-label="GACHA GO">
            <span className="animated-logo-word animated-logo-gacha" aria-hidden="true">
              <span className="animated-logo-anchor">G</span>
              <span className="animated-logo-expand">ACHA</span>
            </span>
            <span className="animated-logo-word animated-logo-go" aria-hidden="true">
              <span className="animated-logo-anchor">G</span>
              <span className="animated-logo-expand">O</span>
            </span>
          </span>
        </h1>
        <p className="reveal delay-1 mt-4 text-xl font-extrabold text-white sm:text-2xl">
          온라인 뽑기가 명품으로 왔다
        </p>
        <p className="reveal delay-2 mx-auto mt-3 max-w-xl text-sm font-medium leading-7 text-drawzy-mute sm:text-base">
          럭셔리 아이템을 가장 짜릿하게 만나는 방법
        </p>
        <div className="reveal delay-3 mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/packs"
            className="magnetic-btn rounded-full bg-drawzy-orange px-7 py-4 text-sm font-black text-white shadow-orange"
          >
            팩 구경하기
          </Link>
          <Link
            href="/#live"
            className="magnetic-btn rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-black text-white backdrop-blur-xl"
          >
            실시간 오픈 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
