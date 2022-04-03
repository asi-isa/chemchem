import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const [explore, setExplore] = useState(false);

  return (
    <div className={styles.con}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.999 }}
        transition={{ duration: 0.8 }}
        className={styles.inner_con}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>Discover the Modern Way of Learning</h1>
          <div className={styles.features}>
            <h2 className={styles.feature}>Independent</h2>
            <h2 className={styles.feature}>Effective</h2>
            <h2 className={styles.feature}>Immersive</h2>
          </div>
        </div>
        <div className={styles.ctas}>
          <motion.div
            initial={{
              width: "fit-content",
              height: "fit-content",
              position: "absolute",
            }}
            animate={
              explore && {
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                marginLeft: 0,
                backgroundColor: "#FBF8F1",
                zIndex: 9,
              }
            }
            transition={{ duration: 1.6 }}
            className={styles.cta}
            onClick={() => {
              setExplore(true);
              setTimeout(() => router.push("/explore"), 1500);
            }}
          >
            Explore
            <motion.div
              initial={{
                width: "1%",
                height: "2px",
                backgroundColor: "#000",
                margin: "0 auto",
              }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>
          <button className={styles.cta}>
            <Link href="/login">Login</Link>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
