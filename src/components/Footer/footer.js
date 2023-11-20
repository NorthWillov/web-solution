import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.main}>
      <span className={styles.copyright}>
        © 2022 Clubs Fun. All Rights Reserved
      </span>
    </footer>
  );
}

export default Footer;
