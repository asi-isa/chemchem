import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";

import styles from "./CourseItem.module.css";
import slugify from "../../utils/str/slugify";

interface CourseItemProps {
  title: string;
  text: string;
  percent: number;
  index: number;
}

export default function CourseItem({
  title,
  text,
  percent,
  index,
}: CourseItemProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 0.999 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className={styles.course}
      onClick={() => router.push(`/course/${slugify(title)}`)}
    >
      <h3 className={styles.course_title}>{title}</h3>

      <p className={styles.course_text}>{text}</p>

      <div className={styles.divider} />

      <div className={styles.exp_link_con}>
        <p className={styles.exp}>{percent}%</p>

        <IoChevronForward size={25} />
      </div>
    </motion.div>
  );
}
