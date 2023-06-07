import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Suzana&apos;s Space</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
