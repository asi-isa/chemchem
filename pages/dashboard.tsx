import React, { useState } from "react";

import styles from "../styles/Dashboard.module.css";
import SideMenu from "../comps/menu/SideMenu";

export default function Dashboard() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div className={styles.con}>
      <SideMenu showSideMenu={showSideMenu} />

      <div className={styles.main}>
        <h1 className={styles.title}></h1>
      </div>
    </div>
  );
}
