import React from "react";
import Image from "next/image";
import roadmap from "../../assets/roadmap.png";
import roadmapMini from "../../assets/roadmap-mini.png";
import styles from "./roadmap.module.css";

function Roadmap() {
  return (
    <div data-testid="roadmap" id="roadmap" className={styles.main}>
      <h1 className={styles.title}>Project Roadmap</h1>
      <div className={styles.imgWrapper}>
        <Image className={styles.roadmap} src={roadmap} alt="roadmap" />
      </div>
      <div className={styles.imgWrapperMini}>
        <Image className={styles.roadmapMini} src={roadmapMini} alt="roadmap" />
      </div>
    </div>
  );
}

export default Roadmap;
