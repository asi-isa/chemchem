import React, { useState } from "react";
import Image from "next/image";
import { IoLeafOutline } from "react-icons/io5";

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

        {/*  */}
      </div>
    </div>
  );
}
