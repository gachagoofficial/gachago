import { FaqList } from "@/components/faq/FaqList";

export default function FAQPage() {
  return (
    <section className="subpage">
      <div className="faq-panel">
        <div className="page-hero compact">
          <p className="section-label">GACHA GO Help Center</p>
          <h1>자주 묻는 질문</h1>
        </div>
        <FaqList />
        <div className="contact-box">
          <div>
            <h3>찾는 질문이 없으신가요?</h3>
            <p>카카오 채널을 통해 문의해 주시면 빠르게 답변드리겠습니다.</p>
          </div>
          <button>카카오 채널 문의하기</button>
        </div>
      </div>
    </section>
  );
}
