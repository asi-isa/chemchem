import React from "react";
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

interface SideMenuProps {
  showSideMenu: boolean;
}

export default function SideMenu({ showSideMenu }: SideMenuProps) {
  return (
    <motion.div
      initial={{ width: "0vw" }}
      animate={{
        width: showSideMenu ? "33vw" : ["33vw", "0vw"],
      }}
      transition={{
        duration: 0.8,
      }}
      className={styles.side_menu}
    >
      <h1 className={styles.firma}>cc</h1>

      <div className={styles.middle_icons}>
        <IconTitle Icon={<IoAppsOutline size={21} />} title="Main" />
        <IconTitle Icon={<IoAlbumsOutline size={21} />} title="Courses" />
        <IconTitle
          Icon={<IoCalendarClearOutline size={21} />}
          title="Schedule"
        />
        <IconTitle Icon={<IoBookOutline size={21} />} title="Materials" />
        <IconTitle Icon={<IoRibbonOutline size={21} />} title="Certificats" />
        <IconTitle
          Icon={<IoChatbubbleEllipsesOutline size={21} />}
          title="Messages"
        />
        <IconTitle Icon={<IoSettingsOutline size={21} />} title="Settings" />
      </div>

      <IconTitle Icon={<IoLogOutOutline size={24} />} title="Logout" />
    </motion.div>
  );
}
