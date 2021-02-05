import React from "react";
import NoteOne from "../../images/projects/note_one.png";
import NoteThree from "../../images/projects/note_three.png";
import NoteColor from "../../images/projects/note_color.png";
import NoteChat from "../../images/projects/note_chat.png";
import NoteRoom from "../../images/projects/note_room.png";
import { contentToggle } from "./contentToggle";
import MyCarousel from "./MyCarousel";

function NoteCollab() {
  const id = "noteCollab";

  const noteCollabContentToggle = () => {
    contentToggle(id);
  };

  const imgContents = [
    {
      img: NoteOne,
      dsc: "View of a singular note when hovered over.",
    },
    {
      img: NoteThree,
      dsc: "Support for resizing and rich text editing.",
    },
    {
      img: NoteColor,
      dsc: "Users can change between 4 color options and delete the note.",
    },
    {
      img: NoteChat,
      dsc:
        "Users can see who is online as well as chat (can hover over users connected to see names).",
    },
    {
      img: NoteRoom,
      dsc: "Anyone can create a room or join an exsiting room.",
    },
  ];

  return (
    <div className="project" id={id}>
      <div className="projectIntro">
        <h1>
          <strong>Note Collab</strong>
        </h1>
        <p>A real-time sticky note web application.</p>
        <button id={id + "ShowMore"} onClick={noteCollabContentToggle}>
          Show more
        </button>
        <button
          onClick={() =>
            window.open("https://github.com/youngethan4/Note-Collab", "_blank")
          }
        >
          View code
        </button>
      </div>

      <div className="projectContent" id={id + "Content"}>
        <div className="textContainer">
          <h3 className="textHeading">Overview</h3>
          <p className="textProject">
            Note Collab is a project that started out as a school project and
            was evolved to a far greater point afterward for fun. The app is
            geared towards idea generation sessions for designers and engineers
            as well as throughout the Agile process. In a nutshell, the teams
            can create sticky notes and collaborate with one another as they
            would on a whiteboard. During the initial development in class, I
            had a partner that was working on the front-end while I worked on
            the back-end. However, towards the end, after many tries of trying
            to get him to learn and understand React, I had to take over as a
            full-stack developer to finish the project on time.
          </p>
        </div>
        <div className="textContainer">
          <h3 className="textHeading">Features</h3>
          <p className="textProject">
            - Any number of socket namespaces or rooms can be created for
            multiple groups working on the site at once.<br></br>- Users can see
            who is online in their room as well as chat with the team in case
            they are not in a call or together in person.<br></br>- Room codes
            can be directly copied with the click of a button for easy sharing.
            <br></br>- Users can create, move, resize, and change the color of
            each singular note.<br></br>- Each note includes rich text editing
            through the Implementation of Facebook’s Draft framework.
          </p>
        </div>
        <div className="tools">
          <p>HTML</p>
          <p>CSS</p>
          <p>React</p>
          <p>Draft</p>
          <p>Node</p>
          <p>Socket.io</p>
        </div>
        <MyCarousel contents={imgContents} />
        <p className="backToTop" onClick={noteCollabContentToggle}>
          Show less
        </p>
      </div>
    </div>
  );
}

export default NoteCollab;
