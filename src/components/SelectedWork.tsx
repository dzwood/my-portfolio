import React from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import "./SelectedWork.css";

const projects = [
  {
    title: "Impact City FC — Online Course Platform",
    role: "Product / Platform Developer (Contract)",
    year: "2023",
    problem:
      "Impact City FC needed a scalable way to deliver structured coaching content and training resources online to players and coaches across multiple regions.",
    solution:
      "Designed and launched an online course platform using Webflow and Memberstack with Stripe-powered subscription billing. Built a scalable structure for video lessons, gated training resources, and member accounts while enabling non-technical staff to manage course content through a CMS.",
    architecture:
      "Webflow frontend with Memberstack handling authentication and gated content, Stripe managing subscription billing, and a CMS-driven content structure for course management.",
    impact:
      "Enabled Impact City FC to deliver digital coaching programs nationwide and distribute structured training content and gated resources to players and coaches across multiple regions.",
    techStack: [
      "Webflow",
      "Memberstack",
      "Stripe",
      "JavaScript",
      "CMS Architecture",
    ],
  },
  {
    title: "Volunteer Platform",
    role: "Product / Platform Developer (Contract)",
    year: "2024",
    problem:
      "Organizations needed a simple system to manage volunteers, track participation, and process payments without building a custom backend from scratch.",
    solution:
      "Built a volunteer management platform using Softr with Airtable as the database and Stripe for payments. Designed the data structure for volunteers, organizations, and participation records while enabling organizations to manage operations through a simple interface.",
    architecture:
      "Softr frontend interface backed by Airtable as the relational data layer with Stripe handling payments and registration workflows.",
    impact:
      "Delivered a production-ready platform that automated volunteer registration, payments, and participation tracking while providing organizations with a centralized system to manage operations.",
    techStack: ["Softr", "Airtable", "Stripe", "JavaScript", "Database Design"],
  },
];

const SelectedWork: React.FC = () => {
  return (
    <Section
      id="work"
      title="Selected Work"
      subtitle="A showcase of digital products, scalable platforms, and architectural solutions I've engineered."
      className="selected-work-section"
    >
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-wrapper"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SelectedWork;
