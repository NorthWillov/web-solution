import React from "react";
import { Link } from "react-scroll";

const ScrollLink = ({ to, children, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <Link
      href={`#${to}`}
      to={to}
      smooth={true}
      offset={-120}
      duration={500}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
