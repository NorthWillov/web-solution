import React, { useState } from "react";
import logo from "../../assets/logodom.svg";
import ScrollLink from "../ScrollLink";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav data-testid="navbar" className={styles.navBar}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={logo}
            alt="logo"
            width="auto"
            height="auto"
          />
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i
          data-testid="menu-icon"
          className={
            active
              ? `fas fa-times ${styles.icon}`
              : `fas fa-bars ${styles.icon}`
          }
        ></i>
      </div>
      <ul
        className={`${styles.navBarMenu} ${active && styles.navBarMenuActive}`}
      >
        <li>
          <ScrollLink onClick={handleClick} to="about">
            How it works
          </ScrollLink>
        </li>
        <li>
          <ScrollLink onClick={handleClick} to="offer">
            Our Features
          </ScrollLink>
        </li>
        <li>
          <ScrollLink onClick={handleClick} to="contact">
            Roadmap
          </ScrollLink>
        </li>
        <li>
          <ScrollLink onClick={handleClick} to="contact">
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
