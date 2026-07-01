import Link from "next/link";
import { AuthButton } from "@/components/auth/AuthButton";

const navItems = [
  { label: "팩", href: "/packs" },
  { label: "마켓", href: "/market" },
  { label: "커뮤니티", href: "/community" },
  { label: "FAQ", href: "/faq" },
  { label: "마이페이지", href: "/account" },
];

export function Nav() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link href="/" className="brand-mark">
          GACHA GO
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <AuthButton />
      </nav>
    </header>
  );
}
