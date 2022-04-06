import React, { useState } from "react";

import styles from "../styles/Dashboard.module.css";
import SideMenu from "../comps/menu/SideMenu";
import Badge from "../comps/badge/Badge";
import { DashboardItem, getCurrentDashboardItem } from "../utils/dashboard";

export default function Dashboard() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const [currentDashboardItem, setCurrentDashboardItem] =
    useState<DashboardItem>("Courses");

  return (
    <div className={styles.con}>
      <SideMenu
        showSideMenu={showSideMenu}
        setCurrentDashboardItem={setCurrentDashboardItem}
      />

      <div className={styles.main}>
        <Badge setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu} />

        {getCurrentDashboardItem(currentDashboardItem)}
      </div>
    </div>
  );
}
