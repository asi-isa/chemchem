import React from "react";
import { IoBarChartOutline } from "react-icons/io5";

import styles from "./CourseQuickStats.module.css";
import ItemDivider from "../../../divider/ItemDivider";

export default function CourseQuickStats() {
  return (
    <div className={styles.con}>
      <div className={styles.stats_header}>
        <IoBarChartOutline size={21} />|
        <h3 className={styles.stats_header_title}>Quick Stats</h3>
      </div>

      <ItemDivider />

      <div className={styles.items}>
        <p className={styles.stats_item}>Course started: 06. April 2022</p>
        <p className={styles.stats_item}>Course finished: -</p>
        <p className={styles.stats_item}>Progress: 33%</p>
      </div>

      <div className={styles.ctas}>
        <div className={styles.reset_cta}>Reset</div>
        <div className={styles.start_continue_cta}>Continue</div>
      </div>
    </div>
  );
}
