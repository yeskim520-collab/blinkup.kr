import Link from 'next/link';

export default function Nav({ active }) {
  const link = (href, label, key) => (
    <Link href={href} className={active === key ? 'active' : ''}>{label}</Link>
  );
  return (
    <nav>
      <Link href="/" className="logo"><span className="dot"></span>BLINKUP</Link>
      <div className="nav-links">
        {link('/about', '회사소개', 'about')}
        {link('/#service', '사업분야', 'service')}
        {link('/#method', 'METHOD', 'method')}
        {link('/#contact', '문의', 'contact')}
      </div>
    </nav>
  );
}
