import React from "react";
import { motion } from "framer-motion";
import { IoLeafOutline } from "react-icons/io5";

import styles from "./Courses.module.css";
import CourseFilter from "./CourseFilter";

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

      <CourseFilter />
    </div>
  );
}
