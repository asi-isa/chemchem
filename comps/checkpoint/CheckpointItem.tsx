import React from "react";
import { motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";

import styles from "./CheckpointItem.module.css";

interface CheckpointItemProps {
  title: string;
  lecture: number;
  chapter: number;
  color: string;
}

export default function CheckpointItem({
  color,
  lecture,
  chapter,
  title,
}: CheckpointItemProps) {
  return (
    <motion.div
      className={styles.checkpoint_item}
      style={{ backgroundColor: color }}
    >
      <div className="">
        <p className={styles.checkpoint_item_title}>{title}</p>
        <p className={styles.checkpoint_text}>
          Lecture {lecture} / Chapter {chapter}
        </p>
      </div>

      <IoChevronForward size={33} color="#170600b3" />
    </motion.div>
  );
}
