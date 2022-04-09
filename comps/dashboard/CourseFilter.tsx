import React from "react";
import { IoLeafOutline } from "react-icons/io5";

import styles from "./CourseFilter.module.css";

export default function CourseFilter() {
  return (
    <div className={styles.filter_con}>
      <div className={styles.filter_first_row_con}>
        <p className={styles.filter_first_row_text} style={{ opacity: 1 }}>
          All
        </p>
        <p className={styles.filter_first_row_text} style={{ opacity: 0.7 }}>
          Active
        </p>
        <p className={styles.filter_first_row_text} style={{ opacity: 0.7 }}>
          Completed
        </p>
      </div>
      {/* 
      <div className={styles.filter_second_row_con}>
        <div className={styles.filter_item} style={{ opacity: 1 }}>
          <IoLeafOutline size={18} />

          <p className={styles.filter_second_row_text}>Biology</p>
        </div>
        <div className={styles.filter_item} style={{ opacity: 0.61 }}>
          <IoLeafOutline size={18} />

          <p className={styles.filter_second_row_text}>Chemistry</p>
        </div>
        <div className={styles.filter_item} style={{ opacity: 0.61 }}>
          <IoLeafOutline size={18} />

          <p className={styles.filter_second_row_text}>Physics</p>
        </div>
        <div className={styles.filter_item} style={{ opacity: 0.61 }}>
          <IoLeafOutline size={18} />

          <p className={styles.filter_second_row_text}>Math</p>
        </div>
      </div> */}
    </div>
  );
}
