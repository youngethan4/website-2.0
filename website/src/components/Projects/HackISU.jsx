import React from "react";
import HackISUSecret from "../../images/projects/hackisu_secret.png";
import { contentToggle } from "./contentToggle";

function HackISU() {
  const id = "hackISU";

  const hackISUContentToggle = () => {
    contentToggle(id);
  };

  return (
    <div className="project" id={id}>
      <div className="projectIntro">
        <h1>
          <strong>HackISU Fall 2018</strong>
        </h1>
        <p>Creation of a tool for information hiding called SECRET.</p>
        <button id={id + "ShowMore"} onClick={hackISUContentToggle}>
          Show more
        </button>
        <button
          onClick={() =>
            window.open(
              "https://github.com/youngethan4/HackISUProject",
              "_blank"
            )
          }
        >
          View code
        </button>
      </div>

      <div className="projectContent" id={id + "Content"}>
        <div className="textContainer">
          <h3 className="textHeading">Overview</h3>
          <p className="textProject">
            At HackISU in November 2018, my team of four achieved first place in
            hardware hack and first place in ethical hack with our creation
            called SECRET. The main use of this system is for oppressed citizens
            living without free speech so they will be able to share sensitive
            information around the world. The device works by encrypting
            information and hiding it, as well as the encryption key, into
            photos so as to not be obvious. The information can then be
            retrieved after going through security and getting to a place that
            does allow for free speech.
          </p>
        </div>
        <div className="textContainer">
          <h3 className="textHeading">Features</h3>
          <p className="textProject">
            - A microphone was used to gather atmospheric noise to achieve a
            random key and initialization vector for encrypting data. Through
            algorithms, we were easily able to convert the analog data from the
            microphone into digital I/O then to characters.<br></br>- The
            encryption key and encrypted data were embedded into photos using
            steganography and thrown on two separate hard drives.<br></br>-
            There are two buttons that can be pressed to encrypt and decrypt
            data with a light used as an indicator.
          </p>
        </div>
        <div className="tools">
          <p>Arduino</p>
          <p>C</p>
          <p>Python</p>
          <p>Debian</p>
        </div>
        <div className="pictureContainer">
          <div className="pictureDesciption">
            <img src={HackISUSecret} alt="" />
            <p>Picture of SECRET embedded system.</p>
          </div>
        </div>
        <p className="backToTop" onClick={hackISUContentToggle}>
          Show less
        </p>
      </div>
    </div>
  );
}

export default HackISU;
