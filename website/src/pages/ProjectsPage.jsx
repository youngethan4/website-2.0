import React from "react";
import Header from "../components/Header";
import SeniorDesignProject from "../components/Projects/SeniorDesignProject";
import NoteCollab from "../components/Projects/NoteCollab";
import Memory from "../components/Projects/Memory";
import DrinkersChoice from "../components/Projects/DrinkersChoice";
import HackISU from "../components/Projects/HackISU";
import Website from "../components/Projects/Website";
import "../scss/eStyle.scss";
import "../scss/projects.scss";

function ProjectsPage() {
  return (
    <div>
      <Header active="projects" />
      <div className="content" id="content">
        <div className="project-wrapper">
          <SeniorDesignProject />
          <NoteCollab />
          <Memory />
          <DrinkersChoice />
          <HackISU />
          <Website />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
