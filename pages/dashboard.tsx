import React, { useState } from "react";

import styles from "../styles/Dashboard.module.css";
import SideMenu from "../comps/menu/SideMenu";
import { IoAppsOutline, IoApps } from "react-icons/io5";

export default function Dashboard() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div className={styles.con}>
      <SideMenu showSideMenu={showSideMenu} />

      <div className={styles.main}>
        <div
          className={styles.badge}
          onClick={() => setShowSideMenu(!showSideMenu)}
        >
          {!showSideMenu ? (
            <IoApps size={28} color="#fbf8f1" />
          ) : (
            <IoAppsOutline size={28} color="#fbf8f1" />
          )}
        </div>

        <h1 className={styles.title}>Hello, isa!</h1>
      </div>
    </div>
  );
}
