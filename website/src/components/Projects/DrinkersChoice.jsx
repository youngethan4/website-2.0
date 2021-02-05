import React from "react";
import DCWebsocket from "../../images/projects/dc_websocket.png";
import DCComments from "../../images/projects/dc_comments.png";
import { contentToggle } from "./contentToggle";
import MyCarousel from "./MyCarousel";

function DrinkersChoice() {
  const id = "drinkersChoice";

  const drinkersChoiceContentToggle = () => {
    contentToggle(id);
  };

  const imgContents = [
    {
      img: DCWebsocket,
      dsc: "View of the websock feature for drinkers to chat with drivers.",
    },
    {
      img: DCComments,
      dsc:
        "View of the posts that drinkers can upload with their respective comments.",
    },
  ];

  return (
    <div className="project" id={id}>
      <div className="projectIntro">
        <h1>
          <strong>Drinker's Choice</strong>
        </h1>
        <p>
          An Android application for sharing beverages, for business promotions,
          and for users to get rides.
        </p>
        <button id={id + "ShowMore"} onClick={drinkersChoiceContentToggle}>
          Show more
        </button>
      </div>

      <div className="projectContent" id={id + "Content"}>
        <div className="textContainer">
          <h3 className="textHeading">Overview</h3>
          <p className="textProject">
            Drinker's Choice was another app I did as a class project that took
            my passion to a whole new level. This app was made for people to
            post drinks, get rides, and see business promotions about drinks.
            Throughout the project, I worked on the front-end side of
            development while implementing all the various features. There were
            still some bugs at the end of the semester that would have been
            squashed given enough time.
          </p>
          <p className="textProject">
            Drinker’s Choice was my first major software team project, and the
            first time I lead a software team project. I took on this role
            because I am great at time management and always like to get
            assignments done well before their due dates. This experience taught
            me a lot about working with a team and the different schedules they
            may have. I also got to get experience with an agile-like
            development environment using the Trello board.
          </p>
        </div>
        <div className="textContainer">
          <h3 className="textHeading">Features</h3>
          <p className="textProject">
            - Three separate user types (Drinkers, Drivers, and Businesses)
            could log in with restrictions on what was visible to them.<br></br>
            - Drinker’s posts were able to be voted on, commented on, and sorted
            in various orders using a RecyclerView.<br></br>- Business users
            could post on the promotion thread to get users to buy their drinks.
            <br></br>- Drinkers were able to request a driver and talk to them
            via a chat.<br></br>- Drivers would be able to open the Drinker’s
            location via google maps for easy navigation.
          </p>
        </div>
        <div className="tools">
          <p>Android Studios</p>
          <p>Java</p>
          <p>XML</p>
          <p>JSON / REST</p>
          <p>WebSocket</p>
        </div>
        <MyCarousel contents={imgContents} />
        <p className="backToTop" onClick={drinkersChoiceContentToggle}>
          Show less
        </p>
      </div>
    </div>
  );
}

export default DrinkersChoice;
