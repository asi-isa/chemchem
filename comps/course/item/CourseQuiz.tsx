import React from "react";
import { BsQuestionSquare } from "react-icons/bs";

import styles from "./CourseQuiz.module.css";
import ItemDivider from "../../divider/ItemDivider";
import QuizItem from "./QuizItem";

export default function CourseQuiz() {
  return (
    <div className={styles.con}>
      <div className={styles.header}>
        <BsQuestionSquare size={21} />|
        <h3 className={styles.header_title}>Quiz</h3>
      </div>

      <ItemDivider />

      <h2 className={styles.title}>What is the secret of life?</h2>

      <div className={styles.quiz_con}>
        <QuizItem responseOption="Don&#39;t count the days, make the days count. " />
        <QuizItem responseOption="#hwpo" />
        <QuizItem responseOption="Well done is better than well said." />
        <QuizItem responseOption="42" />
      </div>

      <div className={styles.check}>Check</div>
    </div>
  );
}
