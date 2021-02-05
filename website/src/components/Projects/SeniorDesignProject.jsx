import React from "react";
import SeniorProto from "../../images/projects/senior_proto.jpg";
import SeniorUpload from "../../images/projects/senior_upload.png";
import { contentToggle } from "./contentToggle";
import MyCarousel from "./MyCarousel";

function SeniorDesignProject() {
  const id = "seniorDesign";

  const seniorContentToggle = () => {
    contentToggle(id);
  };

  const imgContents = [
    {
      img: SeniorProto,
      dsc: "Prototype of the Arduino Uno that will be in the vehicles.",
    },
    {
      img: SeniorUpload,
      dsc: "React component to upload driving logs.",
    },
  ];

  return (
    <div className="project" id={id}>
      <div className="projectIntro">
        <h1>
          <strong>Senior Design Project</strong>
        </h1>
        <p>A smart-sensing road roughness collector.</p>
        <button id={id + "ShowMore"} onClick={seniorContentToggle}>
          Show more
        </button>
      </div>

      <div className="projectContent" id={id + "Content"}>
        <div className="textContainer">
          <h3 className="textHeading">Overview</h3>
          <p className="textProject">
            Throughout my Senior Design project, I was collaborating among a
            team of three other talented individuals as we set foot creating a
            black box for Iowa’s Department of Transportation vehicles. The goal
            entailed engineering smart-sensing hardware and software to collect
            road roughness data using the International Roughness Index (IRI)
            standard. We achieved this goal by using an Arduino Uno along with a
            GPS module, an accelerometer module, and an SD card module. I
            personally contributed to the front-end website, back-end, and
            database creation as well as assisting debugging on the Arduino when
            we had complex issues.
          </p>
        </div>
        <div className="textContainer">
          <h3 className="textHeading">Features</h3>
          <p className="textProject">
            - IRI calculations based on the Golden Car Model.<br></br>- The
            Arduino itself had on-board speed and g-force filtering to extend SD
            card space with compliance of the IRI standard.<br></br>- Once data
            has been collected on the SD card after driving around, the user can
            eject the SD card and upload the data via a laptop or computer
            through a website that uploads the data to the Cloud.<br></br>- We
            did realize that having multi-threading support would have
            significantly improved our prototype by providing the capability to
            directly upload data from the black box to the Cloud in good
            coverage zones as well as increasing the polling speed of the
            accelerometer.
          </p>
        </div>
        <div className="tools">
          <p>C</p>
          <p>React</p>
          <p>Node</p>
          <p>Express</p>
          <p>Azure</p>
          <p>MySQL</p>
        </div>
        <MyCarousel contents={imgContents} />
        <p className="backToTop" onClick={seniorContentToggle}>
          Show less
        </p>
      </div>
    </div>
  );
}

export default SeniorDesignProject;
