import { motion } from "framer-motion";
import React from "react";

import styles from "./ItemDivider.module.css";

export default function ItemDivider() {
  return (
    <motion.div
      initial={{ width: "0%" }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 0.42 }}
      className={styles.divider}
    />
  );
}
