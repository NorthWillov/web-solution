import React, { useState, useEffect } from "react";
import logo from "../../assets/logodom.svg";
import ScrollLink from "../ScrollLink";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`${styles.navBar} ${
        isScrolled || active ? styles.white : styles.transparent
      }`}
    >
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
          <ScrollLink onClick={handleClick} to="works">
            How it works
          </ScrollLink>
        </li>
        <li>
          <ScrollLink onClick={handleClick} to="features">
            Our Features
          </ScrollLink>
        </li>
        <li>
          <ScrollLink onClick={handleClick} to="roadmap">
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
