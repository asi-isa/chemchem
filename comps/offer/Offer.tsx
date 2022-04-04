import React from "react";
import { motion } from "framer-motion";

import styles from "./Offer.module.css";

interface OfferProps {
  title: string;
  text: string;
}

export default function Offer({ title, text }: OfferProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: "-50px" }}
      whileInView={{ opacity: 0.999, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={styles.offer}
    >
      <h2 className={styles.offer_title}>{title}</h2>

      <p className={styles.offer_text}>{text}</p>
    </motion.article>
  );
}
