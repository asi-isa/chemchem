import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import {
  IoLogOutOutline,
  IoCalendarClearOutline,
  IoBookOutline,
  IoAlbumsOutline,
  IoAppsOutline,
  IoRibbonOutline,
  IoChatbubbleEllipsesOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import styles from "./SideMenu.module.css";
import IconTitle from "../icon/IconTitle";
import { DashboardItem } from "../../utils/dashboard";

interface SideMenuProps {
  showSideMenu: boolean;
  setCurrentDashboardItem: Dispatch<SetStateAction<DashboardItem>>;
}

export default function SideMenu({
  showSideMenu,
  setCurrentDashboardItem,
}: SideMenuProps) {
  return (
    <motion.div
      initial={{ width: "0vw" }}
      animate={{
        width: showSideMenu ? "33vw" : "0vw",
        paddingRight: showSideMenu ? "1rem" : "0rem",
        paddingLeft: showSideMenu ? "1rem" : "0rem",
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={styles.side_menu}
    >
      <h1 className={styles.firma}>cc</h1>

      <div className={styles.middle_icons}>
        <IconTitle
          Icon={<IoAppsOutline size={21} />}
          title="Main"
          onClick={() => setCurrentDashboardItem("Main")}
        />
        <IconTitle
          Icon={<IoAlbumsOutline size={21} />}
          title="Courses"
          onClick={() => setCurrentDashboardItem("Courses")}
        />
        <IconTitle
          Icon={<IoCalendarClearOutline size={21} />}
          title="Schedule"
          onClick={() => setCurrentDashboardItem("Schedule")}
        />
        <IconTitle
          Icon={<IoBookOutline size={21} />}
          title="Materials"
          onClick={() => setCurrentDashboardItem("Materials")}
        />
        <IconTitle
          Icon={<IoRibbonOutline size={21} />}
          title="Certificats"
          onClick={() => setCurrentDashboardItem("Certificats")}
        />
        <IconTitle
          Icon={<IoChatbubbleEllipsesOutline size={21} />}
          title="Messages"
          onClick={() => setCurrentDashboardItem("Messages")}
        />
        <IconTitle
          Icon={<IoSettingsOutline size={21} />}
          title="Settings"
          onClick={() => setCurrentDashboardItem("Settings")}
        />
      </div>

      <IconTitle Icon={<IoLogOutOutline size={24} />} title="Logout" />
    </motion.div>
  );
}
