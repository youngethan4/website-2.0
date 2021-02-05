import React from "react";

function AboutMe() {
  return (
    <div className="content" id="content">
      <div className="aboutMe">
        <h1 className="heading">About me</h1>
        <p className="text">
          My name is Ethan Young and I graduated from Iowa State University in
          spring 2020 with a degree in computer engineering with a focus area in
          software engineering. I have been interested in technology and
          engineering since my early days of high school where I was fortunate
          enough to take the PLTW pathway as well as a software development
          course. While I was unsure of what specific path I wanted to go as I
          started college as a computer engineer, I later found out that my
          passion resided in software.
        </p>
        <br></br>
        <p className="text">
          My personal research project was the best thing that I have ever done
          and it was a major stepping stone for me and my software development
          learning. I really started to understand the architecture of a
          full-stack application and all the bits and pieces that put it
          together. Previously in class, I was only doing the front-end coding,
          so learning the whole stack was an amazing experience for my first
          time. I took this knowledge I learned and continued throughout my
          school projects and emphasized learning about principals and patterns
          in design to ensure that I came up with industry-standard code. I also
          have made a lot of progress with testing my code through Junit in Java
          and Jest and Enzyme in JavaScript. My Jest and Enzyme testing was for
          my recent React project. This project was a single-page web
          application focusing on real-time collaboration with sticky notes. I
          am now transitioning to a multi-page app with React Router as well as
          starting to figure out the Redux pattern. If you would like more
          information about these projects, click{" "}
          <a href="projects" className="link">
            here
          </a>
          .
        </p>
        <br></br>
        <p className="text">
          If you like what you see throughout my portfolio and would like to
          extend an opportunity, I encourage you to message me{" "}
          <a className="link" href="contact">
            here
          </a>{" "}
          if you do not already have my contact information. Also check out my{" "}
          <a href="https://github.com/youngethan4" className="link">
            github
          </a>{" "}
          if you would like to see some code and algorithms from my projects.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
