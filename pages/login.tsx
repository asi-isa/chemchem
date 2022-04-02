import React from "react";
import Link from "next/link";

import styles from "../styles/Login.module.css";
import { IoChevronBack } from "react-icons/io5";
import {
  AiOutlineGoogle,
  AiOutlineGithub,
  AiOutlineApple,
  AiOutlineFacebook,
} from "react-icons/ai";

export default function Login() {
  return (
    <div className={styles.con}>
      <div className={styles.header}>
        <Link href="/">
          <IoChevronBack size={42} />
        </Link>
        <h1 className={styles.title}>Login</h1>
      </div>

      <div className={styles.auths_con}>
        <p className={styles.text}>Use a Auth-Provider to log in</p>

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
        <p className={styles.text}>Use your Email &amp; Password to log in</p>

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

          <button className={styles.btn}>Login</button>
        </form>
      </div>

      <p className={styles.text}>
        Don&apos;t have an account? <Link href="/signup">Signup</Link>
      </p>
    </div>
  );
}
