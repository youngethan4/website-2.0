import React from "react";
import ResumePic from "../images/ethan_resume.png";
import ResumeDoc from "../documents/Resume Ethan Young Website.pdf";
import "../scss/eStyle.scss";
import "../scss/resume.scss";

function Resume() {
  return (
    <div className="content">
      <div className="resume">
        <img className="resumePicture" src={ResumePic} alt="Resume" />
        <p>
          Click <a href={ResumeDoc}>here</a> to download my resume instead.
        </p>
      </div>
    </div>
  );
}

export default Resume;
