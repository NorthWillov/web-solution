import React from "react";
import styles from "./join.module.css";

function Join() {
  const handleClick = () => {
    console.log("Button logic here");
  };

  return (
    <>
      <div className={styles.main}></div>
      <div className={styles.joinBoxWrapper}>
        <div className={styles.joinBox}>
          <h1 className={styles.title}>
            Join The <span className={styles.gradient}>lorem</span>
          </h1>
          <p className={styles.desc}>Lorem ipsum</p>
          <button className={styles.btn} onClick={handleClick}>
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default Join;