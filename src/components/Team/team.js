import React from "react";
import Image from "next/image";
import artem from "../../assets/artem.png";
import den from "../../assets/den.png";
import styles from "./team.module.css";

function Team(props) {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Project Team</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.man}
              src={artem}
              alt="team member"
              width="auto"
              height="auto"
            />
          </div>
          <div className={styles.cardDesc}>
            <h4 className={styles.cardName}>Artem</h4>
            <p className={styles.cardPosition}>Co-Founder</p>
            <div className={styles.cardDescIcons}>
              <a href="#">
                {" "}
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.man}
              src={den}
              alt="team member"
              width="auto"
              height="auto"
            />
          </div>
          <div className={styles.cardDesc}>
            <h4 className={styles.cardName}>Den</h4>
            <p className={styles.cardPosition}>Co-Founder</p>
            <div className={styles.cardDescIcons}>
              <a href="#">
                {" "}
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.man}
              src={den}
              alt="team member"
              width="auto"
              height="auto"
            />
          </div>
          <div className={styles.cardDesc}>
            <h4 className={styles.cardName}>Roma</h4>
            <p className={styles.cardPosition}>Co-Founder</p>
            <div className={styles.cardDescIcons}>
              <a href="#">
                {" "}
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
