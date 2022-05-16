import React, { useState } from "react";

import styles from "./QuizItem.module.css";

interface QuizItemProps {
  responseOption: string;
}

export default function QuizItem({ responseOption }: QuizItemProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.con}>
      <div
        className={`${styles.check_box} ${clicked && styles.check_box_active}`}
        onClick={() => setClicked((pv) => !pv)}
      />

      <p className={styles.response_option}>{responseOption}</p>
    </div>
  );
}
