import React, { HTMLAttributes } from 'react';
import './Section.css';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  className = '', 
  children,
  ...props 
}) => {
  return (
    <section id={id} className={`section ${className}`} {...props}>
      <div className="container">
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
