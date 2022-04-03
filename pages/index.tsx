import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [explore, setExplore] = useState(false);

  return (
    <div className={styles.con}>
      {/* <motion.div
        initial={{
          width: "0vh",
          height: "0vh",
          borderRadius: "300vh",
          backgroundColor: "#FBF8F1",
          position: "fixed",
          left: "50%",
          right: "50%",
          top: "50%",
        }}
        animate={{ width: "200vh", height: "200vh" }}
        transition={{ duration: 2 }}
        className={styles.transition_filler}
      /> */}
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
            transition={{ duration: 2 }}
            className={styles.cta}
            onClick={() => setExplore(true)}
          >
            Explore
          </motion.div>
          <button className={styles.cta}>
            <Link href="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
