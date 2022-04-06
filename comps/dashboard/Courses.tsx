import React from "react";
import { motion } from "framer-motion";

import styles from "./Courses.module.css";
import CourseFilter from "./CourseFilter";
import CourseItem from "./course/CourseItem";

const COURSE_DATA = [
  {
    title: "Biology I",
    text: `How are cells structured? Where does oxygen come from? Why do we need to breathe? What is the secret of life? Learn the most important fundamentals.`,
    xp: 400,
  },
  {
    title: "Biology II",
    text: `How does inheritance work? What are genes? Take your knowledge to the next level.`,
    xp: 800,
  },
  {
    title: "Biology III",
    text: `What are mRNA vaccines? How is insulin produced? How do antidepressants affect the brain? Apply your new knowledge.`,
    xp: 1200,
  },
  // {
  //   title: "Chemistry I",
  //   text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolorem
  //       tenetur distinctio modi impedit!`,
  // },
  // {
  //   title: "Chemistry II",
  //   text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolorem
  //       tenetur distinctio modi impedit!`,
  // },
  // {
  //   title: "Chemistry III",
  //   text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolorem
  //       tenetur distinctio modi impedit!`,
  // },
  // {
  //   title: "Chemistry IV",
  //   text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolorem
  //       tenetur distinctio modi impedit!`,
  // },
];

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

      <div className={styles.courses}>
        {COURSE_DATA.map((course, index) => {
          return <CourseItem {...course} index={index} />;
        })}
      </div>
    </div>
  );
}
