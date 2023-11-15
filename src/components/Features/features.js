import React from "react";
import Image from "next/image";
import earth from "../../assets/earth-icon.svg";
import checkbox from "../../assets/checkbox-icon.svg";
import groth from "../../assets/groth-icon.svg";
import medal from "../../assets/medal-icon.svg";
import iphone from "../../assets/iphone14.png";
import styles from "./features.module.css";

function Features() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Our features</h1>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Image
              className={styles.icon}
              src={earth}
              alt="earth"
              width="auto"
              height="auto"
            />
            <div>
              <h4 className={styles.listItemTitle}>Lorem Ipsum</h4>
              <p className={styles.listItemDesc}>Lorem Ipsum</p>
            </div>
          </li>
          <li className={styles.listItem}>
            <Image
              className={styles.icon}
              src={checkbox}
              alt="earth"
              width="auto"
              height="auto"
            />
            <div>
              <h4 className={styles.listItemTitle}>Lorem Ipsum</h4>
              <p className={styles.listItemDesc}>Lorem Ipsum</p>
            </div>
          </li>
          <li className={styles.listItem}>
            <Image
              className={styles.icon}
              src={medal}
              alt="earth"
              width="auto"
              height="auto"
            />
            <div>
              <h4 className={styles.listItemTitle}>Lorem Ipsum</h4>
              <p className={styles.listItemDesc}>Lorem Ipsum</p>
            </div>
          </li>
          <li className={styles.listItem}>
            <Image
              className={styles.icon}
              src={groth}
              alt="earth"
              width="auto"
              height="auto"
            />
            <div>
              <h4 className={styles.listItemTitle}>Lorem Ipsum</h4>
              <p className={styles.listItemDesc}>Lorem Ipsum</p>
            </div>
          </li>
        </ul>
        <div className={styles.iphones}>
          <div className={styles.iphoneWrapperFirst}>
            <Image
              className={styles.iphone}
              src={iphone}
              alt="iphone"
              width="auto"
              height="auto"
            />
          </div>

          <div className={styles.iphoneWrapperSecond}>
            <Image
              className={styles.iphone}
              src={iphone}
              alt="iphone"
              width="auto"
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
