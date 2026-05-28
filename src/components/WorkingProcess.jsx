import React from 'react';
import './WorkingProcess.css';

const WorkingProcess = () => {
  return (
    <section id="working-process" className="process-sec section-padding">
      <div className="container">
        {/* Title */}
        <div className="sec-title text-center reveal reveal-up">
          <span className="badge badge-dark">Working Process</span>
          <h2 className="title">Build Conversion-Ready<br/>Pages Effortlessly in 3 Steps.</h2>
        </div>

        {/* Energy Flow Cables Overlay */}
        <div className="energy-cables-wrapper">
          <svg className="energy-svg" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
            {/* The Main Cable paths */}
            {/* Cable 1: Left branch */}
            <path d="M500 10 L500 40 L125 40 L125 120" className="cable-line" />
            <path d="M500 10 L500 40 L125 40 L125 120" className="energy-spark spark-left" />

            {/* Cable 2: Center branch */}
            <path d="M500 10 L500 120" className="cable-line" />
            <path d="M500 10 L500 120" className="energy-spark spark-center" />

            {/* Cable 3: Right branch */}
            <path d="M500 10 L500 40 L875 40 L875 120" className="cable-line" />
            <path d="M500 10 L500 40 L875 40 L875 120" className="energy-spark spark-right" />
          </svg>
        </div>

        {/* 3 Columns Cards Grid */}
        <div className="process-grid">
          
          {/* Card 1: Start Plan */}
          <div className="process-card reveal reveal-left">
            <div className="card-header-info">
              <span className="step-label">Start Plan</span>
              <h3 className="process-card-title">Use a Template or Design<br/>Your Own Mind!</h3>
              <p className="process-card-desc">Start your website journey by selecting a ready-made template or creating your design from scratch.</p>
            </div>
            
            {/* Card 1 Inner Preview Graphic */}
            <div className="process-graphic graphic-1">
              <div className="badge-gen">Welcome to AI website builder</div>
              <h4>Let AI Generate your modern website in a minute</h4>
              <div className="btn-mock"><i className="fa-solid fa-wand-magic-sparkles"></i> Create a website</div>
              
              {/* Decorative bright balls in background */}
              <div className="glow-ball ball-lime"></div>
              <div className="glow-ball ball-blue"></div>
            </div>
          </div>

          {/* Card 2: Structure */}
          <div className="process-card reveal reveal-up">
            <div className="card-header-info">
              <span className="step-label">Structure</span>
              <h3 className="process-card-title">Customize with Drag &<br/>Drop Editor</h3>
              <p className="process-card-desc">Easily personalize your website using our intuitive drag-and-drop editor, no coding required.</p>
            </div>

            {/* Card 2 Inner Preview Graphic */}
            <div className="process-graphic graphic-2">
              <div className="editor-mockup">
                <div className="editor-top">
                  <span className="tag-lime">Drag & drop</span>
                </div>
                <div className="editor-preview">
                  <h5>Next-Gen Tools for High-Performing Teams</h5>
                  <div className="preview-chart">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Go Live */}
          <div className="process-card reveal reveal-right">
            <div className="card-header-info">
              <span className="step-label">Go Live</span>
              <h3 className="process-card-title">Polish Your Site and<br/>Launch</h3>
              <p className="process-card-desc">Finalize every detail of your website and get it ready for the world. Optimize performance, ensure mobile.</p>
            </div>

            {/* Card 3 Inner Preview Graphic */}
            <div className="process-graphic graphic-3">
              <div className="live-box">
                <span className="live-link">Click here to live website</span>
                <div className="publish-glow-container">
                  <button className="btn-publish">Publish</button>
                  <div className="dark-glow-circle"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
