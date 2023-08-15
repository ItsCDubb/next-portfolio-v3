import { useEffect } from "react";
import { scroll_, stickyNav } from "../utilits";

const Header = ({ dark }) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scroll_);
  });
  return (
    <div className="aali_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <a className="light current" href="#home">
              <img src="img/logo/logo.png" alt="Chris Warren Logo" />
            </a>
            <a className="dark current" href="#home">
              <img src="img/logo/logo.png" alt="Chris Warren Logo" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#portfolio">My Portfolio</a>
              </li>
              <li>
                <a href="#service">My Services</a>
              </li>
              {/* <li>
                <a href="#blog">My Blog</a>
              </li> */}
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
