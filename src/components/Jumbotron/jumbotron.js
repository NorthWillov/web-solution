import React from "react";
import Image from "next/image";
import styles from "./jumbotron.module.css";
import iphone from "../../assets/jumb-iphone.png";

function Jumbotron({ onSubscribeClick }) {
  const handleClick = () => {
    console.log("Subscibe button logic here");
    onSubscribeClick();
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p className={styles.contentUpperText}>communication solutions</p>
          <h1 className={styles.title}>Clubs App</h1>
          <p className={styles.contentLowerText}>
            Unlock the Potential of Communication with Clubs App
          </p>

          <button onClick={handleClick} className={styles.button}>
            Subscribe
          </button>
        </div>

        <Image
          src={iphone}
          alt="logo"
          className={styles.iphone}
          height="auto"
          width="auto"
        />
      </div>
    </div>
  );
}

export default Jumbotron;
