import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div data-testid="contact" id="contact" className={styles.main}>
      <div className={styles.contacts}>
        <div className={styles.contactsQuote}>
          <p>Unlock the Potential of Communication with Clubs App</p>
        </div>
        <div className={styles.contact}>
          <h4 className={styles.contactInfoTitle}>contact info</h4>
          <div className={styles.contactInfo}>
            <i className="fa-solid fa-envelope"></i>
            <span>business@clubs.fun</span>
          </div>
          <div className={styles.contactInfo}>
            <i className="fa-solid fa-envelope"></i>
            <span>support@clubs.fun</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
