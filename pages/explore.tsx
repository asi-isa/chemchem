import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../styles/Explore.module.css";
import Arrow from "../comps/arrow/Arrow";

export default function Explore() {
  return (
    <div className={styles.con}>
      <h1 className={styles.title}>
        Explore
        <div className={styles.underline} />
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.999 }}
        transition={{ duration: 1 }}
        className={styles.inner_con}
      >
        <div className={styles.header}>
          <h2 className={styles.header_title}>
            Chemchem is a modern learning platform designed for anyone who wants
            to study in the STEM field.
          </h2>
        </div>

        <div className={styles.offers}>
          <h1 className={styles.offers_title}>Our Offer</h1>

          <div className={styles.offer}>
            <h2 className={styles.offer_title}>Extraordinary Quality</h2>

            <p className={styles.offer_text}>
              Our learning content is constantly reviewed by university
              professors.
            </p>
          </div>

          <div className={styles.offer}>
            <h2 className={styles.offer_title}>University Ready</h2>

            <p className={styles.offer_text}>
              After completing our courses you will have all the necessary
              knowledge for a successful study start.
            </p>
          </div>

          <div className={styles.offer}>
            <h2 className={styles.offer_title}>Highly Interactive</h2>

            <p className={styles.offer_text}>
              The more you engage with something, the more likely you will
              retain it. So all our courses are designed with that claim in
              mind.
            </p>
          </div>

          <div className={styles.offer}>
            <h2 className={styles.offer_title}>Constantly Evolving</h2>

            <p className={styles.offer_text}>
              We put a tremendous effort to guarantee you a delightful user
              experience and give you the best possible learning opportunity.
            </p>
          </div>
        </div>

        <div className={styles.cta_con}>
          <Arrow />
          <div className={styles.cta}>
            <Link href="/signup">Signup</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
