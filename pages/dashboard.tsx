import React, { useState } from "react";
import Image from "next/image";
import { IoLeafOutline } from "react-icons/io5";

import styles from "../styles/Dashboard.module.css";
import SideMenu from "../comps/menu/SideMenu";
import CircleSVG from "../comps/svg/CircleSVG";
import Badge from "../comps/badge/Badge";
import CheckpointItem from "../comps/checkpoint/CheckpointItem";
import ActivityHeatmap from "../comps/activity/ActivityHeatmap";
import Main from "../comps/dashboard/Main";

export default function Dashboard() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div className={styles.con}>
      <SideMenu showSideMenu={showSideMenu} />

      <div className={styles.main}>
        <Badge setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu} />

        <Main />
      </div>
    </div>
  );
}
