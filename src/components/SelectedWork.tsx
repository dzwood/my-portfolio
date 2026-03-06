import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import './SelectedWork.css';

const projects = [
  {
    title: 'Impact City FC - Online Course Platform',
    role: 'Lead Full-Stack Engineer',
    year: '2023',
    problem: 'The client needed a scalable, custom learning management system (LMS) to deliver structured online coaching content to thousands of youth players and coaches across multiple regions.',
    solution: 'Built a high-performance React-based learning platform integrated with a headless CMS to manage video content and coaching curriculum. Engineered a role-based access control system and Stripe-powered subscription billing.',
    impact: 'Increased engagement by delivering a frictionless video learning experience, generating new recurring subscription revenue streams and scaling to support 5,000+ active users with 99.9% uptime.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Sanity CMS', 'Vercel']
  },
  {
    title: 'Enterprise Web Platform Modernization',
    role: 'Senior React Developer',
    year: '2022',
    problem: 'A legacy monolithic application was suffering from poor Core Web Vitals, slow deployment cycles, and an unmaintainable React codebase that hindered the product team\'s ability to ship new features.',
    solution: 'Led the migration to a modern Next.js architecture using Incremental Static Regeneration (ISR). Refactored legacy components into a reusable design system and implemented GraphQL for optimized data fetching.',
    impact: 'Improved page load speeds by 65%, driving a 15% increase in conversion rates. Reduced CI/CD build times from 45 minutes to 8 minutes, dramatically improving developer velocity.',
    techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Styled Components', 'Node.js', 'AWS']
  },
  {
    title: 'Premium Membership & Digital Content Hub',
    role: 'Full-Stack Developer',
    year: '2021',
    problem: 'A creator needed to launch a gated content community fast, requiring complex user authentication, gated digital assets, and automated member onboarding without spending months on custom backend development.',
    solution: 'Architected a low-code/pro-code hybrid solution combining Webflow for the frontend, Memberstack for secure authentication, and Airtable as the database, glued together via custom Node.js webhooks and Zapier.',
    impact: 'Launched the MVP in under 4 weeks, enabling the creator to validate the business model and process over $50k in first-month revenue. The automated architecture eliminated manual admin work.',
    techStack: ['Webflow', 'Memberstack', 'Airtable', 'Node.js', 'Zapier', 'JavaScript']
  }
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
          <div key={index} className="project-wrapper" style={{ animationDelay: `${index * 0.15}s` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SelectedWork;
