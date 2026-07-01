// 이용 방법 3단계 (정적).
export function HowItWorks() {
  const steps: [string, string, string][] = [
    ["01", "팩 고르기", "원하는 상품이 들어있는 팩 골라요"],
    ["02", "주문하기", "정보 입력 후 결제하기"],
    ["03", "팩 오픈하기", "랜덤으로 상품을 뽑아요"],
  ];

  return (
    <section className="section-wrap">
      <div className="mb-9 text-center">
        <p className="section-label">HOW IT WORKS</p>
        <h2 className="section-title mt-3 font-black">이용 방법</h2>
      </div>
      <div className="how-steps-grid grid gap-5 lg:grid-cols-3">
        {steps.map(([num, title, body]) => (
          <article className="how-step-card work-card rounded-[24px] p-7" key={num}>
            <div className="mb-12 flex items-center justify-between">
              <span className="text-5xl font-black text-white/10">{num}</span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-drawzy-orange/25 bg-drawzy-orange/10 text-drawzy-glow shadow-orange">
                {num === "01" ? "◇" : num === "02" ? "◐" : "✦"}
              </span>
            </div>
            <h3 className="text-2xl font-black text-white">{title}</h3>
            <p className="mt-3 text-base font-medium leading-7 text-white/58">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
