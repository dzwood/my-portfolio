import React from "react";
import Section from "./Section";
import "./Approach.css";

const Approach: React.FC = () => {
  const principles = [
    {
      title: "Performance First",
      description:
        "I prioritize fast, responsive applications by optimizing rendering, caching strategies, and bundle size. Strong Core Web Vitals and performance budgets are part of the development process from the start.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      title: "Scalable Architecture",
      description:
        "I design systems that grow with product needs by focusing on modular components, clear separation of concerns, and maintainable TypeScript codebases.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      title: "Developer Experience",
      description:
        "I build systems that are easy for other engineers to work with — clear abstractions, reusable components, documentation, and maintainable patterns.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Ship & Iterate",
      description:
        "I focus on delivering value quickly while maintaining quality, enabling teams to launch features, gather feedback, and iterate on real user needs.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      ),
    },
  ];

  return (
    <Section
      id="approach"
      title="Engineering Principles"
      subtitle="The principles that guide how I design and build systems."
    >
      <div className="approach-grid">
        {principles.map((principle, index) => (
          <div key={index} className="approach-card">
            <div className="approach-icon">{principle.icon}</div>
            <h3 className="approach-title">{principle.title}</h3>
            <p className="approach-description">{principle.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Approach;
