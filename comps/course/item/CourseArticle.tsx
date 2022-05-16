import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";

import styles from "./CourseArticle.module.css";
import ItemDivider from "../../divider/ItemDivider";

export default function CourseArticle() {
  return (
    <div className={styles.con}>
      <div className={styles.header}>
        <IoNewspaperOutline size={21} />|{" "}
        <h3 className={styles.header_title}>Article</h3>
      </div>

      <ItemDivider />

      <h2 className={styles.title}>Where does oxygen come from?</h2>

      <p className={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        accusamus architecto iusto quia, ducimus tenetur veritatis dicta
        excepturi. A, fugit recusandae.
      </p>
    </div>
  );
}
