import { motion } from "framer-motion";
import React from "react";

export default function CircleSVG() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute" }}
    >
      <motion.path
        initial={{ pathLength: 0, rotate: "-90deg" }}
        animate={{ pathLength: 0.71 }}
        transition={{ duration: 2 }}
        d="M62 32C62 48.5685 48.5685 62 32 62C15.4315 62 2 48.5685 2 32C2 15.4315 15.4315 2 32 2C48.5685 2 62 15.4315 62 32Z"
        stroke="#fbf8f16b"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
