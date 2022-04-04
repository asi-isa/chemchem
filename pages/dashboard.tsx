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

import styles from "../styles/Dashboard.module.css";
import IconTitle from "../comps/icon/IconTitle";

export default function Dashboard() {
  return (
    <div className={styles.con}>
      <motion.div
        initial={{ width: "0vw" }}
        animate={{ width: "33vw" }}
        transition={{ duration: 1 }}
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
      <div className={styles.main}>
        <h1 className={styles.title}></h1>
      </div>
    </div>
  );
}
