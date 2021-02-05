import React from "react";
import Header from "../components/Header";
import Resume from "../components/Resume";

function ResumePage() {
  return (
    <div>
      <Header active="resume" />
      <Resume />
    </div>
  );
}

export default ResumePage;
