import React from "react";
import Image from "next/image";
import styles from "./jumbotron.module.css";
import iphone from "../../assets/jumb-iphone.png";

function Jumbotron() {
  const handleClick = () => {
    console.log("Subscibe button logic here");
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p className={styles.contentUpperText}>lorem ipsum</p>
          <h1 className={styles.title}>Lorem Ipsum</h1>
          <p className={styles.contentLowerText}>Lorem ipsum</p>

          <button onClick={handleClick} className={styles.button}>
            Subscribe
          </button>
        </div>

        <Image
          src={iphone}
          alt="logo"
          className={styles.logo}
          height="auto"
          width="auto"
        />
      </div>
    </div>
  );
}

export default Jumbotron;
