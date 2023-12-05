import React from "react";
import styles from "./join.module.css";

function Join({ onSubscribeClick }) {
  const handleClick = () => {
    console.log("Button logic here");
    onSubscribeClick();
  };

  return (
    <>
      <div className={styles.main}></div>
      <div className={styles.joinBoxWrapper}>
        <div className={styles.joinBox}>
          <h1 className={styles.title}>
            Join The <span className={styles.gradient}>Clubs App</span>
          </h1>
          <p className={styles.desc}>
            Join to the community of like-minded people
          </p>
          <button className={styles.btn} onClick={handleClick}>
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default Join;
