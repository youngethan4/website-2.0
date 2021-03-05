import React from "react";
import MemoryHome from "../../images/projects/memory_home.png";
import MemoryGame from "../../images/projects/memory_game.png";
import MemoryLogin from "../../images/projects/memory_login.png";
import MemoryTheme from "../../images/projects/memory_theme.png";
import { contentToggle } from "./contentToggle";
import MyCarousel from "./MyCarousel";

function Memory() {
  const id = "memory",
    widthRatio = 1.5,
    height = "560px";

  const memoryContentToggle = () => {
    contentToggle(id);
  };

  const imgContents = [
    {
      img: MemoryHome,
      dsc: "View of the Memory homepage.",
    },
    {
      img: MemoryGame,
      dsc: "View of the 20-card, timed mode of Memory.",
    },
    {
      img: MemoryLogin,
      dsc:
        "Login fragment which can be swipped on to get to the create user fragment.",
    },
    {
      img: MemoryTheme,
      dsc: "Users can change the theme by color.",
    },
  ];

  return (
    <div className="project" id={id}>
      <div className="projectIntro">
        <h1>
          <strong>Memory</strong>
        </h1>
        <p>An Android mini-game for your mind.</p>
        <button id={id + "ShowMore"} onClick={memoryContentToggle}>
          Show more
        </button>
        <button
          onClick={() =>
            window.open("https://github.com/youngethan4/All-In-One", "_blank")
          }
        >
          View code
        </button>
      </div>

      <div className="projectContent" id={id + "Content"}>
        <div className="textContainer">
          <h3 className="textHeading">Overview</h3>
          <p className="textProject">
            This was my first experience with full-stack development, which
            required a lot of research and learning. For the back-end of the
            application, I was able to use my own personal server that I already
            owned for multiple years and utilize ssh. During development, I
            really messed around with as many options as I could as well as
            tried my hardest to focus on code reusability wherever I could. I
            was able to use the same game activity for all modes of the game
            which I was pleased by. While I really wanted to continue to make
            multiplayer support for the application, I lost interest after a
            while and did not want to continue down the gaming path.
          </p>
        </div>
        <div className="textContainer">
          <h3 className="textHeading">Features</h3>
          <p className="textProject">
            - The login and create account fragment allow users to swipe between
            them effortlessly.<br></br>- Users can choose between two modes: a
            timed mode and a move count mode. Both modes can have either 20 or
            30 cards depending on what the user wants. <br></br>- High scores
            for each mode and card count are stored on the server.<br></br>-
            Each player can pick a profile icon to represent them which is also
            stored on the server.<br></br>- The app has many themes the user can
            choose from to customize the appearance of the screen and cards.
            <br></br>- There is also some fun music that plays as well as touch
            noises. Both can be turned on or off in settings.
          </p>
        </div>
        <div className="tools">
          <p>Android Studios</p>
          <p>Java</p>
          <p>XML</p>
          <p>JSON / REST</p>
          <p>Node</p>
          <p>Express</p>
          <p>MySQL</p>
        </div>
        <MyCarousel
          contents={imgContents}
          widthRatio={widthRatio}
          height={height}
        />
        <p className="backToTop" onClick={memoryContentToggle}>
          Show less
        </p>
      </div>
    </div>
  );
}

export default Memory;
