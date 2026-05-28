import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-sec">
      {/* Background Dots - Expanded to 16 particles for rich background density */}
      <div className="hero-dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
        <div className="dot dot-6"></div>
        <div className="dot dot-7"></div>
        <div className="dot dot-8"></div>
        <div className="dot dot-9"></div>
        <div className="dot dot-10"></div>
        <div className="dot dot-11"></div>
        <div className="dot dot-12"></div>
        <div className="dot dot-13"></div>
        <div className="dot dot-14"></div>
        <div className="dot dot-15"></div>
        <div className="dot dot-16"></div>
      </div>

      {/* Floating Cursors — positioned near the laptop card */}
      <div className="floating-cursor cursor-saas">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 3px 5px rgba(0,0,0,0.35))' }}>
          <path d="M4.5 3v13.6a1 1 0 0 0 1.62.78l3.85-3.12a1 1 0 0 1 .63-.22h6.1a1 1 0 0 0 .78-1.62L6.12 3.22A1 1 0 0 0 4.5 3Z" fill="#22c55e" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
        <div className="cursor-label label-green">SaaS</div>
      </div>

      <div className="floating-cursor cursor-website">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 3px 5px rgba(0,0,0,0.35))' }}>
          <path d="M4.5 3v13.6a1 1 0 0 0 1.62.78l3.85-3.12a1 1 0 0 1 .63-.22h6.1a1 1 0 0 0 .78-1.62L6.12 3.22A1 1 0 0 0 4.5 3Z" fill="#d4f84b" stroke="#d4f84b" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
        <div className="cursor-label label-lime">Website</div>
      </div>

      <div className="container">
        <div className="hero-info">
          <div className="hero-content">
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
          
          {/* Laptop Mockup Wrapper with Negative Margin-Bottom to Overlap the Next Section */}
          <div className="hero-image-wrapper">
            <div className="placeholder-laptop">
               <div className="placeholder-screen">
                  {/* Detailed screen preview imitating real SaaS UI */}
                  <div className="placeholder-ui">
                    <div className="ui-header">
                      <div className="ui-dots"><span className="ui-dot"></span><span className="ui-dot"></span><span className="ui-dot"></span></div>
                      <div className="ui-search">sasico.com/editor</div>
                    </div>
                    <div className="ui-body">
                      <div className="ui-sidebar">
                        <div className="ui-nav-item active">Overview</div>
                        <div className="ui-nav-item">Campaigns</div>
                        <div className="ui-nav-item">Analytics</div>
                        <div className="ui-nav-item">Settings</div>
                      </div>
                      <div className="ui-content">
                        <div className="ui-card">
                          <h3>Next-Gen Tools for High-Performing Teams</h3>
                          <div className="ui-chart-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Ticker - Overlapped by Laptop Mockup */}
      <div className="hero-logos-container reveal reveal-up">
        <p className="logos-title">Trusted by over 1.7 million companies worldwide</p>
        <div className="logos-slider">
          <div className="logos-track">
            <span><i className="fa-brands fa-dropbox"></i> Dropbox</span>
            <span><i className="fa-brands fa-hubspot"></i> HubSpot</span>
            <span><i className="fa-brands fa-quora"></i> Quora</span>
            <span><i className="fa-brands fa-medium"></i> Medium</span>
            <span><i className="fa-brands fa-figma"></i> Figma</span>
            <span><i className="fa-brands fa-slack"></i> Slack</span>
            <span><i className="fa-brands fa-stripe"></i> Stripe</span>
            <span><i className="fa-solid fa-link"></i> Linktree</span>
            
            {/* Duplicated for smooth loop */}
            <span><i className="fa-brands fa-dropbox"></i> Dropbox</span>
            <span><i className="fa-brands fa-hubspot"></i> HubSpot</span>
            <span><i className="fa-brands fa-quora"></i> Quora</span>
            <span><i className="fa-brands fa-medium"></i> Medium</span>
            <span><i className="fa-brands fa-figma"></i> Figma</span>
            <span><i className="fa-brands fa-slack"></i> Slack</span>
            <span><i className="fa-brands fa-stripe"></i> Stripe</span>
            <span><i className="fa-solid fa-link"></i> Linktree</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
