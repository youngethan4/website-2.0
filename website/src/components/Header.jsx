import React from "react";
import { Link } from "react-router-dom";
import "../scss/nav.scss";
import Hamburger from "../images/hamburger.png";

function Header({ active }) {
  const toggleMobileNav = () => {
    let items = document.getElementById("items");
    let hamburger = document.getElementById("hamburger");

    if (items.style.display === "") {
      items.style.display = "block";
      hamburger.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    } else {
      items.style.display = "";
      hamburger.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
  };

  let contactActive,
    resumeActive,
    homeActive,
    projectsActive = "";
  switch (active) {
    case "projects":
      projectsActive = "active";
      break;
    case "resume":
      resumeActive = "active";
      break;
    case "home":
      homeActive = "active";
      break;
    case "contact":
      contactActive = "active";
      break;
    default:
      break;
  }

  return (
    <div className="nav">
      <div className="wrapper">
        <div className="mobile-wrapper">
          <Link className="title" to="/">
            Ethan Young
          </Link>
          <img
            id="hamburger"
            className="hamburger"
            src={Hamburger}
            onClick={toggleMobileNav}
            alt=""
          ></img>
        </div>
        <ul className="items" id="items">
          <li className={`item ${homeActive}`}>
            <Link to="/home">Home</Link>
          </li>
          <li className={`item ${projectsActive}`}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={`item ${resumeActive}`}>
            <Link to="/resume">Resume</Link>
          </li>
          <li className={`item ${contactActive}`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
