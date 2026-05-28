import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-sec section-padding">
      <div className="container">
        <div className="sec-title text-center reveal">
          <span className="badge badge-dark">Why Choose Us</span>
          <h2 className="title">Simplify Work, Achieve High<br/>Results</h2>
          <p className="subtitle">Our platform comes packed with powerful features that make<br/>building and scaling your website effortless.</p>
        </div>

        <div className="why-grid">
          {/* Card 1: Blue Background */}
          <div className="why-card card-blue reveal reveal-left">
            <div className="why-icon">
              <i className="fa-solid fa-object-group"></i>
            </div>
            <h3 className="why-card-title">Drag-and-Drop Builders</h3>
            <p className="why-card-desc">Build stunning websites effortlessly with our intuitive drag-and-drop builder.</p>
          </div>

          {/* Card 2: Tall Central Card with Blue Arc */}
          <div className="why-card card-tall card-dark reveal reveal-up">
            <div className="why-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3 className="why-card-title">Higher Conversions & Revenue</h3>
            <p className="why-card-desc">Boost your business performance with higher conversions and increased revenue. AI-driven platform helps you optimize.</p>
            
            {/* The beautiful blue arc in the background */}
            <div className="card-blue-arc"></div>

            <a href="#" className="why-btn-premium">
              <span>Read More</span>
              <span className="btn-arrow-circle">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>

          {/* Card 3: Dark Background (Top Right) */}
          <div className="why-card card-dark-light reveal reveal-right">
            <div className="why-icon">
              <i className="fa-solid fa-border-all"></i>
            </div>
            <h3 className="why-card-title">Use Smart Grid (Bootstrap)</h3>
            <p className="why-card-desc">Build with precision and flexibility using the Smart Grid by Bootstrap.</p>
          </div>

          {/* Card 4: Dark Background (Bottom Left) */}
          <div className="why-card card-dark-deep reveal reveal-left">
            <div className="why-icon">
              <i className="fa-solid fa-palette"></i>
            </div>
            <h3 className="why-card-title">Change Colors & Fonts</h3>
            <p className="why-card-desc">Easily customize your website's look by changing colors and fonts.</p>
          </div>

          {/* Card 5: Lime Background */}
          <div className="why-card card-lime reveal reveal-right">
            <div className="why-icon">
              <i className="fa-solid fa-display"></i>
            </div>
            <h3 className="why-card-title">Desktop & Mobile Editing</h3>
            <p className="why-card-desc">Design and edit your website seamlessly on both desktop and mobile.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
