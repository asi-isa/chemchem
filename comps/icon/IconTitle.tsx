import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./IconTitle.module.css";

interface IconTitleProps {
  Icon: JSX.Element;
  title: string;
  onClick?: () => void;
}

export default function IconTitle({ Icon, title, onClick }: IconTitleProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className={styles.icon_con}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setTimeout(() => setIsHovering(false), 100)}
      onClick={onClick}
    >
      {Icon}

      <p className={styles.icon_text}>{title}</p>

      <div
        className={`${styles.hover_dot} ${
          isHovering && styles.hover_dot_active
        }`}
      />
    </motion.div>
  );
}
