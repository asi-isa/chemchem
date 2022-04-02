import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.con}>
      <div className={styles.inner_con}>
        <div className={styles.header}>
          <h1 className={styles.title}>Discover the Modern Way of Learning</h1>
          <div className={styles.features}>
            <h2 className={styles.feature}>Independent</h2>
            <h2 className={styles.feature}>Effective</h2>
            <h2 className={styles.feature}>Immersive</h2>
          </div>
        </div>
        <div className={styles.ctas}>
          <button className={styles.cta}>Explore</button>
          <button className={styles.cta}>
            <Link href="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
