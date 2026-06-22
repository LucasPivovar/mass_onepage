import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section id="cta" className="cta-sec section-padding">
      <div className="container">
        <div className="cta-inner">

          {/* Left content */}
          <div className="cta-content reveal reveal-left">
            <span className="badge badge-gray">All-In-One Solutions</span>
            <h2 className="title">Launch Your Site in<br/>Minutes with the AI<br/>Website Builder</h2>
            <p>Start creating your website today with the power of<br/>AI. Our intuitive AI website builder makes designing<br/>effortless.</p>
            <div className="cta-btns">
              <a href="#" className="btn btn-secondary">Start For Free &rarr;</a>
              <a href="#" className="btn btn-outline">Generate With AI &rarr;</a>
            </div>
          </div>

          {/* Right mockup */}
          <div className="cta-mockup reveal reveal-right">
            {/* Floating cursors near the card */}
            <div className="floating-cursor cta-cursor-saas">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" fill="#b366ff"/>
              </svg>
              <div className="cursor-label" style={{ background: '#b366ff', color: '#fff', padding: '8px 16px', borderRadius: '100px', fontSize: '15px', fontWeight: '700' }}>SaaS</div>
            </div>
            <div className="floating-cursor cta-cursor-website">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" fill="#b366ff"/>
              </svg>
              <div className="cursor-label" style={{ background: '#b366ff', color: '#fff', padding: '8px 16px', borderRadius: '100px', fontSize: '15px', fontWeight: '700' }}>Website</div>
            </div>

            {/* App mockup card */}
            <div className="mockup-frame">
              <div className="mockup-topbar">
                <div className="dot-red"></div>
                <div className="dot-yellow"></div>
                <div className="dot-green"></div>
              </div>
              <div className="mockup-body">
                <div className="mockup-sidebar">
                  <div className="sidebar-item active">Overview</div>
                  <div className="sidebar-item">eCommerce</div>
                  <div className="sidebar-item">Projects</div>
                  <div className="sidebar-item">Pages</div>
                  <div className="sidebar-item">Campaigns</div>
                  <div className="sidebar-item">Documents</div>
                </div>
                <div className="mockup-main">
                  <h5>Website Library</h5>
                  <p className="mockup-sub">100+ pre-build template fully ready for use</p>
                  <div className="create-btn">
                    <span>+ Create a Website</span>
                  </div>
                  {/* Inner dark card */}
                  <div className="inner-mockup-card">
                    <p className="inner-title">Next-Gen Tools for High-Performing Teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
