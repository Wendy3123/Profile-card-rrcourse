import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "plum",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "hotpink",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "skyblue",
  },
  {
    skill: "Git and Github",
    level: "advanced",
    color: "lightgreen",
  },
  {
    skill: "React",
    level: "beginner",
    color: "DarkOrchid",
  },
  {
    skill: "Backend Dev",
    level: "beginner",
    color: "lightpink",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="./girl.png"
      alt="pic of avatar"
      height={400}
    ></img>
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>Wendy Wang</h1>
      <p>
        Future full-stack web developer from NYU. When not coding, I enjoy
        figure skating, shopping and spending the day at the spa.{" "}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
    //this span above shows if level === 'beginner' then it will show the baby emoji if intermediate then it will show thumbs up etc
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
