import React, { Dispatch, SetStateAction } from "react";
import { IoAppsOutline, IoApps } from "react-icons/io5";

import styles from "./Badge.module.css";

interface BadgeProps {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
  showSideMenu: boolean;
}

export default function Badge({ setShowSideMenu, showSideMenu }: BadgeProps) {
  return (
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
  );
}
