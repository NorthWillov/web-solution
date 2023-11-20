import React from "react";
import Image from "next/image";
import suitcase from "../../assets/suitcase.svg";
import arrow from "../../assets/arrow.svg";
import family from "../../assets/family.svg";
import checkicon from "../../assets/check-circle.svg";
import styles from "./works.module.css";

function Works(props) {
  const handleClick = () => {
    console.log("Subscibe button logic here");
  };

  return (
    <div data-testid="works" id="works" className={styles.main}>
      <h1 className={styles.title}>
        <span className={styles.how}>How</span> The Lorem Ipsum <br />{" "}
        <span className={styles.works}>Works</span>
      </h1>
      <p className={styles.desc}>Lorem Ipsum</p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            className={styles.suitcase}
            src={suitcase}
            alt="suitcase"
            width="auto"
            height="auto"
          />
          <h2 className={styles.subtitle}>business</h2>
          <ul className={styles.list}>
            <li>
              <Image
                className={styles.icon}
                src={checkicon}
                alt="suitcase"
                width="21"
                height="20"
              />
              Lorem Ipsum
            </li>
            <li>
              <Image
                className={styles.icon}
                src={checkicon}
                alt="suitcase"
                width="21"
                height="20"
              />
              Lorem Ipsum
            </li>
          </ul>
        </div>

        <Image
          className={styles.arrow1}
          src={arrow}
          alt="arrow"
          width="auto"
          height="auto"
        />

        <div className={styles.reverseOnMobile}>
          <div className={styles.subscribeCard}>
            <h2 className={styles.subtitleMain}>
              Join the{" "}
              <span className={styles.subtitleMainFocus}>lorem ipsum</span>{" "}
              today and enjoy it!
            </h2>
            <button onClick={handleClick} className={styles.button}>
              Subscribe
            </button>
          </div>

          <Image
            className={styles.arrow2}
            src={arrow}
            alt="arrow"
            width="auto"
            height="auto"
          />

          <div className={styles.card}>
            <Image
              className={styles.family}
              src={family}
              alt="family"
              width="auto"
              height="auto"
            />
            <h2 className={styles.subtitle}>lorem ipsum</h2>
            <ul className={styles.list}>
              <li>
                <Image
                  className={styles.icon}
                  src={checkicon}
                  alt="suitcase"
                  width="21"
                  height="20"
                />
                Lorem Ipsum
              </li>
              <li>
                <Image
                  className={styles.icon}
                  src={checkicon}
                  alt="suitcase"
                  width="21"
                  height="20"
                />
                Lorem Ipsum
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
