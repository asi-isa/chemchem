import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "../../styles/CourseList.module.css";
import entslugify from "../../utils/str/entslugify";
import CourseListItem from "../../comps/dashboard/course/CourseListItem";
import CourseFilter from "../../comps/dashboard/CourseFilter";
import CourseVideoItem from "../../comps/dashboard/course/CourseVideoItem";
import CourseArticle from "../../comps/dashboard/course/item/CourseArticle";
import CourseQuiz from "../../comps/dashboard/course/item/CourseQuiz";
import CourseTest from "../../comps/dashboard/course/item/CourseTest";
import { IoBarChartOutline } from "react-icons/io5";
import ItemDivider from "../../comps/divider/ItemDivider";
import CourseQuickStats from "../../comps/dashboard/course/item/CourseQuickStats";

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

      <div className={styles.course_items}>
        <CourseQuickStats />
        {/* {COURSE_ITEM_DATA.map((course, index) => {
          return <CourseListItem />;
        })} */}
        <CourseFilter />

        <CourseVideoItem />

        <CourseArticle />

        <CourseQuiz />

        <CourseVideoItem />

        <CourseArticle />

        <CourseQuiz />

        <CourseTest />
      </div>
    </div>
  );
}

// getStaticPropsPaths
