import React from 'react';
import './WorkingProcess.css';

const WorkingProcess = () => {
  return (
    <section id="working-process" className="process-sec section-padding">
      <div className="container">
        {/* Title */}
        <div className="sec-title text-center reveal reveal-up">
          <h2 className="title">Tudo o que sua operação precisa para escalar em uma só Lugar</h2>
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
              <h3 className="process-card-title">Disparos em Massa<br/>Inteligentes</h3>
              <p className="process-card-desc">Envie campanhas para milhares de contatos através do WhatsApp, Telegram e outros canais. Segmente audiências, personalize mensagens e acompanhe resultados em tempo real.</p>
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
              <h3 className="process-card-title">Centralização<br/>Omnichannel</h3>
              <p className="process-card-desc">Conecte WhatsApp, Instagram, Telegram, TikTok e outros canais em uma única caixa de entrada. Sua equipe acompanha todas as conversas sem perder contexto.</p>
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
              <h3 className="process-card-title">Discador e<br/>Chamadas Integradas</h3>
              <p className="process-card-desc">Realize e receba chamadas diretamente pela plataforma. Automatize processos comerciais, registre interações e mantenha todo o histórico centralizado.</p>
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
