import React from "react";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import {
  AiOutlineGoogle,
  AiOutlineGithub,
  AiOutlineApple,
  AiOutlineFacebook,
} from "react-icons/ai";

import styles from "../styles/Login.module.css";

export default function Signup() {
  return (
    <div className={styles.con}>
      <div className={styles.inner_con_con}>
        <div className={styles.inner_con}>
          <div className={styles.header}>
            <Link href="/">
              <IoChevronBack size={42} />
            </Link>
            <h1 className={styles.title}>Signup</h1>
          </div>
          <div className={styles.auths_con}>
            <p className={styles.text}>Use a Auth-Provider to sign up</p>
            <div className={styles.auths}>
              <div className={styles.auth}>
                <AiOutlineGoogle size={33} />
              </div>
              <div className={styles.auth}>
                <AiOutlineGithub size={33} />
              </div>
              <div className={styles.auth}>
                <AiOutlineApple size={33} />
              </div>
              <div className={styles.auth}>
                <AiOutlineFacebook size={33} />
              </div>
            </div>
          </div>

          <div className={styles.email_con}>
            <p className={styles.text}>
              Use your Email &amp; Password to sign up
            </p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input
                className={styles.input}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                className={styles.input}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button className={styles.btn}>Signup</button>
            </form>
          </div>
        </div>
        <p className={styles.text}>
          Already have an account?{" "}
          <Link href="/login">
            <span className={styles.link}>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
