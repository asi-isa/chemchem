import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoChevronForwardSharp, IoTimeSharp } from "react-icons/io5";

import styles from "./CourseVideoItem.module.css";
import ItemDivider from "../divider/ItemDivider";

export default function CourseVideoItem() {
  return (
    <div className={styles.course_item_video}>
      <div className={styles.img_con}>
        <Image src="/biology_1.jpg" layout="fill" />
      </div>

      <div className={styles.video_body}>
        <h2 className={styles.video_title}>How are cells structured?</h2>

        <p className={styles.video_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          molestias, tenetur nemo repellendus cumque nulla!
        </p>

        <ItemDivider />

        <div className={styles.video_footer}>
          <div className={styles.minute_con}>
            <IoTimeSharp size={22} />
            33 min
          </div>

          <IoChevronForwardSharp size={25} />
        </div>
      </div>
    </div>
  );
}
