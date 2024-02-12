import React from "react";

import { skills } from "../../portfolioDetails";
import "./skills.css";

export default function Skills() {
  return (
    <>
      <section className="section skills" id="skills">
        <h2 className="section__title">Skills</h2>
        <ul className="skills__list">
          {skills.map((skill, idx) => (
            <li key={idx} className="skills__list-item btn btn--plain">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
