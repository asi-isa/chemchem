import React, { useState } from "react";
import Image from "next/image";
import { IoChevronForward, IoLeafOutline } from "react-icons/io5";

import styles from "../styles/Dashboard.module.css";
import SideMenu from "../comps/menu/SideMenu";
import CircleSVG from "../comps/svg/CircleSVG";
import Badge from "../comps/badge/Badge";

export default function Dashboard() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div className={styles.con}>
      <SideMenu showSideMenu={showSideMenu} />

      <div className={styles.main}>
        <Badge setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu} />

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
            <Image src="/avatar_21.jpg" layout="fill" quality={10} />
          </div>
        </div>

        {/* checkpoint */}

        <div className={styles.checkpoint_con}>
          <h3 className={styles.checkpoint_title}>Where you left off</h3>

          <div
            className={styles.checkpoint_item}
            style={{ backgroundColor: "#cee5d0" }}
          >
            <div className="">
              <p className={styles.checkpoint_item_title}>Biology</p>
              <p className={styles.checkpoint_text}>Lecture 1 / Chapter 3</p>
            </div>

            <IoChevronForward size={33} />
          </div>

          <div
            className={styles.checkpoint_item}
            style={{ backgroundColor: "#FEF7DC" }}
          >
            <div className="">
              <p className={styles.checkpoint_item_title}>Chemistry</p>
              <p className={styles.checkpoint_text}>Lecture 4 / Chapter 2</p>
            </div>

            <IoChevronForward size={33} />
          </div>

          <div
            className={styles.checkpoint_item}
            style={{ backgroundColor: "#B7CADB" }}
          >
            <div className="">
              <p className={styles.checkpoint_item_title}>Chemistry</p>
              <p className={styles.checkpoint_text}>Lecture 4 / Chapter 2</p>
            </div>

            <IoChevronForward size={33} />
          </div>
        </div>
      </div>
    </div>
  );
}
