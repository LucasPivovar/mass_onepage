import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-sec section-padding">
      {/* Background Dots */}
      <div className="hero-dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
        <div className="dot dot-6"></div>
        <div className="dot dot-7"></div>
        <div className="dot dot-8"></div>
      </div>

      {/* Floating Cursors — positioned near the laptop card */}
      <div className="floating-cursor cursor-saas">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3L19 12L5 21V3Z" fill="#FF5722"/>
        </svg>
        <div className="cursor-label label-orange">SaaS</div>
      </div>

      <div className="floating-cursor cursor-website">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3L19 12L5 21V3Z" fill="#8B5CF6"/>
        </svg>
        <div className="cursor-label label-purple">Website</div>
      </div>

      <div className="container">
        <div className="hero-info">
          <div className="hero-content reveal revealed">
            <span className="badge">500k+ Global trust our platform.</span>
            <h1 className="title">Build Quality Website <br/> Faster With AI</h1>
            <p className="subtitle">
              AI transforms the way you build. Craft beautiful, responsive, and high-performing websites faster than ever with intelligence.
            </p>
            <div className="hero-btn">
              <a href="#" className="btn btn-primary">Start for free &rarr;</a>
              <a href="#" className="btn btn-outline">Build with AI &rarr;</a>
            </div>
          </div>
          
          <div className="hero-image-wrapper reveal reveal-scale revealed">
            <div className="placeholder-laptop">
               <div className="placeholder-screen">
                  <div className="placeholder-ui"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
