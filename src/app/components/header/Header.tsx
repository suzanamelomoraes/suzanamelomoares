import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Suzana&apos;s Space</Link>
        </div>
        <div className={styles.links}>
          <Link href="/blog/articles">Blog</Link>
          <Link href="/community">Tech Community</Link>
          <Link href="/code/repos">Code Repos</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
