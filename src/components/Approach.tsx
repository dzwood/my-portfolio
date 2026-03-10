import React from "react";
import Section from "./Section";
import "./Approach.css";

const Approach: React.FC = () => {
  const principles = [
    {
      title: "Performance First",
      description:
        "I build fast, responsive applications that score high on Core Web Vitals. Optimizing assets, leveraging edge caching, and minimizing main-thread work are default practices, not afterthoughts.",
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
        "From monolithic refactors to micro-frontends, I design systems that grow with the business. I favor clean separation of concerns, robust TypeScript typing, and reusable design systems.",
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
      title: "Production Readiness",
      description:
        "Shipping code is only half the job. I ensure platforms are observable, securely tested, and deployed via resilient CI/CD pipelines to guarantee 99.9% uptime for mission-critical products.",
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
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  return (
    <Section
      id="approach"
      title="Engineering Approach"
      subtitle="How I design and ship scalable production platforms with strong performance, maintainability, and developer experience."
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
