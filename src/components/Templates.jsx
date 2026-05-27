import React, { useEffect, useRef } from 'react';
import './Templates.css';

const Templates = () => {
  const sectionRef = useRef(null);

  const templates = [
    { title: 'Digital Marketing Agency Landing Pages' },
    { title: 'Task Management SaaS Landing Pages' },
    { title: 'Next-Gen Tools SaaS Landing Pages' },
    { title: 'Task Management SaaS Landing Pages' },
    { title: 'Next-Gen Tools SaaS Landing Pages' },
  ];

  return (
    <section id="templates" ref={sectionRef} className="templates-sec section-padding">
      {/* Inverted U dome shape behind the text */}
      <div className="dome-shape"></div>

      <div className="container">
        <div className="sec-title text-center sec-title-light reveal">
          <span className="badge badge-dark">500+ Pre-Made Templates</span>
          <h2 className="title">Save Time with Over 500<br/>Designer-Ready Templates</h2>
          <p className="subtitle">Speed up your design process with over 500 professionally<br/>crafted, ready-to-use templates.</p>
        </div>
      </div>

      <div className="carousel-wrapper reveal reveal-delay-2">
        <div className="carousel-track">
          {templates.map((tpl, index) => (
            <div className="carousel-slide" key={index}>
              <div className="project-card">
                <div className="project-img-placeholder">
                  <div className="mockup-content"></div>
                </div>
                <div className="project-info">
                  <h4 className="title">{tpl.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
