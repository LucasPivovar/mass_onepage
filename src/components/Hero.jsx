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
            <h1 className="title">Tudo o que sua operação precisa para escalar em um só Lugar</h1>
            <p className="subtitle">
              Automatize atendimentos, alcance milhares de contatos e gerencie múltiplos canais sem trocar de plataforma.
            </p>
            <div className="hero-btn">
              <a href="#" className="btn btn-primary">Começar Grátis &rarr;</a>
              <a href="#" className="btn btn-outline">Ver Recursos &rarr;</a>
            </div>
          </div>
          
          {/* Laptop Mockup Wrapper with Negative Margin-Bottom to Overlap the Next Section */}
          <div id="como-funciona" className="hero-image-wrapper">
            <div className="placeholder-laptop">
               <div className="placeholder-screen">
                  {/* Detailed screen preview displaying a live demo loop video */}
                  <video 
                    loop 
                    autoPlay 
                    muted 
                    playsInline 
                    className="laptop-screen-video"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  >
                    <source src="https://cdn.pixabay.com/video/2021/04/12/70868-537482598_tiny.mp4" type="video/mp4" />
                  </video>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Ticker - Overlapped by Laptop Mockup */}
      <div className="hero-logos-container reveal reveal-up">
        <p className="logos-title">Confiado por mais de 1,7 milhão de empresas em todo o mundo</p>
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
