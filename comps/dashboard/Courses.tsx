import React from "react";
import { motion } from "framer-motion";
import { IoLeafOutline } from "react-icons/io5";

import styles from "./Courses.module.css";

export default function Courses() {
  return (
    <div className={styles.con}>
      <h1 className={styles.title}>
        Courses
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.42 }}
          className={styles.title_underline}
        />
      </h1>

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
        </div>
      </div>
    </div>
  );
}
