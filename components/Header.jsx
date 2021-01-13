import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    &nbsp;
    <Link href="/about">
      <a>About</a>
    </Link>
    &nbsp;
    <Link href="/ssr-test">
      <a>SSR-TEST</a>
    </Link>
  </div>
);

export default Header;
