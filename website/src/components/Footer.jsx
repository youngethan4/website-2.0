import React from "react";
import LinkedInLogo from "../images/icon_linkedin.png";
import GitHubLogo from "../images/icon_github.png";
import { Link } from "react-router-dom";
import "../scss/eStyle.scss";

function Footer() {
  return (
    <div className="footer">
      <Link className="link" to="/contact">
        contact
      </Link>
      <a href="https://github.com/youngethan4">
        <img src={GitHubLogo} className="github" alt="GitHub"></img>
      </a>
      <a href="https://www.linkedin.com/in/youngethan4/">
        <img src={LinkedInLogo} className="linkedin" alt="LinkedIn"></img>
      </a>
    </div>
  );
}

export default Footer;
