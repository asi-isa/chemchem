import React from "react";
import Image from "next/image";
import { IoLeafOutline } from "react-icons/io5";

import styles from "./Main.module.css";
import CircleSVG from "../svg/CircleSVG";
import CheckpointItem from "../checkpoint/CheckpointItem";
import ActivityHeatmap from "../activity/ActivityHeatmap";

export default function Main() {
  return (
    <>
      {/* header */}
      <div className={styles.header}>
        <div className={styles.firma_con_con}>
          <div className={styles.firma_con}>
            <IoLeafOutline size={21} />
            <h2 className={styles.firma}>chemchem</h2>
          </div>

          <p className={styles.greeting}>Good evening, isa!</p>
        </div>

        <div className={styles.progress_circle}>
          <CircleSVG /> 33
        </div>

        <div className={styles.avatar_con}>
          <Image src="/avatar_21.jpg" layout="fill" quality={7} />
        </div>
      </div>

      {/* Activity */}

      <ActivityHeatmap />

      {/* checkpoint */}

      <div className={styles.checkpoint_con}>
        <h3 className={styles.checkpoint_title}>Checkpoints</h3>

        <CheckpointItem
          title="Biology"
          chapter={1}
          lecture={1}
          color="#cee5d0"
        />
        <CheckpointItem
          title="Chemistry"
          chapter={3}
          lecture={3}
          color="#FEF7DC"
        />
        <CheckpointItem title="Math" chapter={2} lecture={1} color="#B7CADB" />
      </div>
    </>
  );
}
