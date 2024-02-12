import React from "react";
import { projects } from "../../portfolioDetails";
import ProjectContainer from "./ProjectContainer";
import "./projects.css";

export default function Projects() {
  return (
    <>
      <section id="projects" className="section projects">
        <h2 className="section__title">Projects</h2>

        <div className="projects__grid">
          {projects.map((project, idx) => (
            <ProjectContainer key={idx} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
