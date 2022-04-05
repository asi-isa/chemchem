import React from "react";
import { getDaysInMonth, startOfMonth } from "date-fns";

import styles from "./ActivityHeatmap.module.css";

const today = new Date();
const daysInMonth = getDaysInMonth(today);
const offset = startOfMonth(today).getDay() + 1;

export default function ActivityHeatmap() {
  return (
    <div className={styles.con}>
      <h1 className={styles.title}>Activity</h1>

      <div className={styles.heatmap_con}>
        {Array.from({ length: offset }).map((_, i) => {
          return <div key={`offset-${i}`} className={styles.offset} />;
        })}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          return (
            <div
              key={`day-${i}`}
              className={styles.day}
              style={{
                backgroundColor: `rgba(180, 251, 222, ${Math.random()})`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
