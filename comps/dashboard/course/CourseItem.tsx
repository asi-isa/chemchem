import React from "react";
import { motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";

import styles from "./CourseItem.module.css";
import Link from "next/link";
import slugify from "../../../utils/str/slugify";
import { useRouter } from "next/router";

interface CourseItemProps {
  title: string;
  text: string;
  xp: number;
  index: number;
}

export default function CourseItem({
  title,
  text,
  xp,
  index,
}: CourseItemProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 0.999 }}
      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
      className={styles.course}
      onClick={() => router.push(`/course/${slugify(title)}`)}
    >
      <h3 className={styles.course_title}>{title}</h3>

      <p className={styles.course_text}>{text}</p>

      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={styles.divider}
      />

      <div className={styles.exp_link_con}>
        <p className={styles.exp}>{xp} XP</p>

        <IoChevronForward size={25} />
      </div>
    </motion.div>
  );
}
