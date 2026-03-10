import React from "react";
import Section from "./Section";
import Button from "./Button";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Ready to scale your next platform?</h2>
          <p className="contact-description">
            I'm currently open to new opportunities. Whether you're a startup
            founder looking for a technical partner or an engineering leader
            needing senior IC impact, let's talk.
          </p>
          <div className="contact-actions">
            <Button
              as="a"
              href="mailto:dzwood327@gmail.com"
              variant="primary"
              size="lg"
            >
              Get in touch
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/daniel-wood-973322198"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <h4 className="info-label">Location</h4>
            <p className="info-value">Palm Beach County, FL</p>
          </div>
          <div className="info-item">
            <h4 className="info-label">Email</h4>
            <p className="info-value">dzwood327@gmail.com</p>
          </div>
          <div className="info-item">
            <h4 className="info-label">Socials</h4>
            <div className="info-socials">
              <a
                href="https://github.com/dzwood"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
