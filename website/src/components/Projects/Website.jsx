import React from "react";
import { contentToggle } from "./contentToggle";

function Website() {
  const id = "website";

  const websiteContentToggle = () => {
    contentToggle(id);
  };

  return (
    <div className="project" id={id}>
      <div className="projectIntro">
        <h1>
          <strong>Portfolio Website</strong>
        </h1>
        <p>
          More insight of what it took to build the website you are currently
          viewing.
        </p>
        <button id={id + "ShowMore"} onClick={websiteContentToggle}>
          Show more
        </button>
        <button
          onClick={() =>
            window.open("https://github.com/airrazor013/Web-Server", "_blank")
          }
        >
          View code
        </button>
      </div>

      <div className="projectContent" id={id + "Content"}>
        <div className="textContainer">
          <h3 className="textHeading">Overview</h3>
          <p className="textProject">
            This website you are viewing now is hosted on my personal server.
            Throughout the time it has been alive, I have changed it many times
            to make it look more inviting and more usable which includes my
            recent change to using React. While I was using bootstrap for the
            navigation bar in an earlier version, I decided to create a custom
            navigation bar for experience and better control/ customizability.
          </p>
        </div>

        <div className="tools">
          <p>HTML</p>
          <p>SCSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Node</p>
          <p>Express</p>
        </div>
        <p className="backToTop" onClick={websiteContentToggle}>
          Show less
        </p>
      </div>
    </div>
  );
}

export default Website;
