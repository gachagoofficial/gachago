import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer footer-glow">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">GACHA GO</span>
          <p>
            미래적인 럭셔리 부티크에서 명품 미스터리 팩을 여는 듯한 프리미엄 컬렉터블
            플랫폼.
          </p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <div className="footer-link-list">
            <Link href="/packs">팩</Link>
            <Link href="/market">마켓</Link>
            <Link href="/community">커뮤니티</Link>
          </div>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <div className="footer-link-list">
            <Link href="/faq">FAQ</Link>
            <Link href="/terms">이용약관</Link>
            <Link href="/privacy">개인정보처리방침</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GACHA GO. All rights reserved.</p>
        <div className="footer-social">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="YouTube">YT</a>
          <a href="#" aria-label="X">X</a>
        </div>
      </div>
    </footer>
  );
}
