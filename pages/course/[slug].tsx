import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoChevronForwardSharp, IoTimeSharp } from "react-icons/io5";

import styles from "../../styles/CourseList.module.css";
import entslugify from "../../utils/str/entslugify";
import CourseListItem from "../../comps/dashboard/course/CourseListItem";
import CourseFilter from "../../comps/dashboard/CourseFilter";
import CourseVideoItem from "../../comps/dashboard/course/CourseVideoItem";
import CourseArticle from "../../comps/dashboard/course/item/CourseArticle";

const COURSE_ITEM_DATA = ["just", "some", "dummy", "data"];

export default function CourseList() {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div className={styles.con}>
      <h1 className={styles.title}>
        {entslugify(slug as string)}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.42 }}
          className={styles.title_underline}
        />
      </h1>

      {/* <CourseFilter /> */}

      <div className={styles.start_continue_cta}>Start</div>

      <div className={styles.course_items}>
        {/* {COURSE_ITEM_DATA.map((course, index) => {
          return <CourseListItem />;
        })} */}

        <CourseVideoItem />

        <CourseArticle />
        <div className={styles.course_item_quiz}></div>
        <div className={styles.course_item_test}></div>
      </div>
    </div>
  );
}

// getStaticPropsPaths
