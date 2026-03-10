import React from "react";
import Button from "./Button";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="top">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-status"></span>
            Available for new opportunities
          </div>
          <h1 className="hero-title">
            Daniel Wood <span className="hero-title-accent">—</span> <br />
            Full-Stack Engineer
          </h1>
          <p className="hero-description">
            I build scalable web platforms and high-performance digital
            products. Specializing in React, Next.js, Node.js, GraphQL, and
            modern cloud architecture.
          </p>
          <div className="hero-actions">
            <Button as="a" href="#work" variant="primary" size="lg">
              View selected work
            </Button>
            <Button
              as="a"
              href="/Daniel-Wood-Full-Stack-Engineer-Resume.pdf"
              variant="ghost"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              download={true}
            >
              Download Resume{" "}
            </Button>
          </div>
        </div>

        <div className="hero-tech">
          <p className="hero-tech-title">Core Stack</p>
          <div className="hero-tech-list">
            <span>React</span>
            <span className="hero-tech-dot">·</span>
            <span>Next.js</span>
            <span className="hero-tech-dot">·</span>
            <span>Remix</span>
            <span className="hero-tech-dot">·</span>
            <span>TypeScript</span>
            <span className="hero-tech-dot">·</span>
            <span>Node.js</span>
            <span className="hero-tech-dot">·</span>
            <span>GraphQL</span>
          </div>
        </div>
      </div>

      <div className="hero-glow"></div>
    </section>
  );
};

export default Hero;
