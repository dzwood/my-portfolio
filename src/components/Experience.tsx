import React from "react";
import Section from "./Section";
import "./Experience.css";

const experience = [
  {
    role: "Senior Software Developer",
    company: "Christ Fellowship Church",
    period: "2022 — Present",
    bullets: [
      "Architect full-stack applications using TypeScript, React, GraphQL, and REST APIs",
      "Design scalable frontend architecture and reusable component systems",
      "Build backend services and API integrations using Node.js",
      "Improve performance and reliability of production web platforms",
      "Mentor interns and junior developers who transitioned into full-time engineering roles",
    ],
  },
  {
    role: "Software Developer",
    company: "Christ Fellowship Church",
    period: "2020 — 2022",
    bullets: [
      "Built React-based applications and internal tools",
      "Implemented API integrations and backend services",
      "Contributed to application architecture and platform improvements",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional roles and key contributions."
      className="experience-section"
    >
      <div className="experience-list">
        {experience.map((job, index) => (
          <article key={index} className="experience-entry">
            <div className="experience-header">
              <h3 className="experience-role">{job.role}</h3>
              <p className="experience-meta">
                {job.company}
                <span className="experience-period"> · {job.period}</span>
              </p>
            </div>
            <ul className="experience-bullets">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
