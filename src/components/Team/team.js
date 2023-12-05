import React, { useEffect, useState } from "react";
import Image from "next/image";
import artem from "../../assets/artem.png";
import den from "../../assets/den.png";
import roma from "../../assets/roma.png";
import Carousel from "react-multi-carousel";
import styles from "./team.module.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function Team(props) {
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1050);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1050);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Project Team</h1>
      <Carousel
        swipeable={!isDesktop}
        draggable={!isDesktop}
        showDots={!isDesktop}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"mobile"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
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
              src={roma}
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
      </Carousel>
    </div>
  );
}

export default Team;
