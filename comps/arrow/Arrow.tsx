import React from "react";
import { motion } from "framer-motion";

import styles from "./Arrow.module.css";

type DirectionType = "down" | "up" | "left" | "right";

interface ArrowProps {
  size?: number;
  direction?: DirectionType;
}

function directionToDeg(direction: DirectionType) {
  if (direction === "left") return "90deg";
  if (direction === "right") return "-90deg";
  if (direction === "up") return "180deg";
  if (direction === "down") return "0deg";
}

export default function Arrow({ size = 0.6, direction = "right" }: ArrowProps) {
  return (
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.arrow}
      style={{
        transform: `scale(${size}) rotate(${directionToDeg(direction)})`,
      }}
    >
      <motion.path
        animate={{ y: [7, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        d="M54 28C49.9024 32.0976 32.4878 48.4878 32.4878 48.4878C24.4868 40.4868 20.001 36.001 12 28"
        stroke="#BCBCBC"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        animate={{ y: [7, 0] }}
        transition={{
          duration: 2,
          delay: 0.33,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        d="M54 8C49.9024 12.0976 32.4878 28.4878 32.4878 28.4878C24.4868 20.4868 20.001 16.001 12 8"
        stroke="#686868"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
