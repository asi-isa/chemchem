import Image from "next/image";
import React from "react";

import styles from "./CourseListItem.module.css";

interface CourseListItemProps {}

export default function CourseListItem({}: CourseListItemProps) {
  return (
    <div className={styles.con}>
      <div className={styles.img_con}>
        <Image src="/biology_1.jpg" layout="fill" />
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>Title</h2>

        <p className={styles.description}>
          some cutted description, so no distortion happens
        </p>
      </div>
    </div>
  );
}
