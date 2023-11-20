import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.contacts}>
        <div className={styles.contactsQuote}>
          <p>Unlock the Potential of Communication with LOREM IPSON</p>
        </div>
        <div className={styles.contact}>
          <h4 className={styles.contactInfoTitle}>contact info</h4>
          <div className={styles.contactInfo}>
            <i class="fa-solid fa-envelope"></i>
            <span>business@clubs.fun</span>
          </div>
          <div className={styles.contactInfo}>
            <i class="fa-solid fa-envelope"></i>
            <span>support@clubs.fun</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
