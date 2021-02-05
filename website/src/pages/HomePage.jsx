import React from "react";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import "../scss/eStyle.scss";

function HomePage() {
  return (
    <div>
      <Header active="home" />
      <AboutMe />
    </div>
  );
}

export default HomePage;
