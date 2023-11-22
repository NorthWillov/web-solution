import React from "react";
import Image from "next/image";
import earth from "../../assets/earth-icon.svg";
import checkbox from "../../assets/checkbox-icon.svg";
import groth from "../../assets/groth-icon.svg";
import medal from "../../assets/medal-icon.svg";
import iphone1 from "../../assets/iphone1.png";
import iphone2 from "../../assets/iphone2.png";
import styles from "./features.module.css";

function Features() {
  return (
    <div data-testid="features" id="features" className={styles.main}>
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
              <h4 className={styles.listItemTitle}>Worldwide Community</h4>
              <p className={styles.listItemDesc}>
                Our platform connects you with a global community of of
                like-minded people
              </p>
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
              <h4 className={styles.listItemTitle}>No pay</h4>
              <p className={styles.listItemDesc}>
                Create or find clubs of similar interests absolutely free of
                charge
              </p>
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
              <h4 className={styles.listItemTitle}>Quality Control</h4>
              <p className={styles.listItemDesc}>
                All participants are verified and you can be sure that you are
                communicating with real people
              </p>
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
              <h4 className={styles.listItemTitle}>Increased Foot Traffic</h4>
              <p className={styles.listItemDesc}>
                Our platform helps increase foot traffic and boost sales for
                business
              </p>
            </div>
          </li>
        </ul>
        <div className={styles.iphones}>
          <div className={styles.iphoneWrapperFirst}>
            <Image
              className={styles.iphone}
              src={iphone1}
              alt="iphone"
              width="auto"
              height="auto"
            />
          </div>

          <div className={styles.iphoneWrapperSecond}>
            <Image
              className={styles.iphone}
              src={iphone2}
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
