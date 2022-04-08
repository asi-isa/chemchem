import React from "react";
import { BsFlag } from "react-icons/bs";

import styles from "./CourseTest.module.css";
import ItemDivider from "../../../divider/ItemDivider";

export default function CourseTest() {
  return (
    <div className={styles.con}>
      <div className={styles.header}>
        <BsFlag size={21} />| <h3 className={styles.header_title}>Test</h3>
      </div>

      <ItemDivider />

      <h2 className={styles.title}>Final Test Biology I</h2>

      {/* <p className={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        accusamus architecto iusto quia, ducimus tenetur veritatis dicta
        excepturi. A, fugit recusandae.
      </p> */}

      <div className={styles.cta}>Let&#39;s Go</div>
    </div>
  );
}
