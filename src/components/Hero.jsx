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

      {/* Floating Platform Badges */}
      <div className="floating-badge-container badge-whatsapp-pos">
        <div className="platform-badge badge-whatsapp">
          <i className="fa-brands fa-whatsapp"></i>
          <span>WhatsApp</span>
        </div>
      </div>

      <div className="floating-badge-container badge-instagram-pos">
        <div className="platform-badge badge-instagram">
          <i className="fa-brands fa-instagram"></i>
          <span>Instagram</span>
        </div>
      </div>

      <div className="floating-badge-container badge-tiktok-pos">
        <div className="platform-badge badge-tiktok">
          <i className="fa-brands fa-tiktok"></i>
          <span>TikTok</span>
        </div>
      </div>

      <div className="floating-badge-container badge-messenger-pos">
        <div className="platform-badge badge-messenger">
          <i className="fa-brands fa-facebook-messenger"></i>
          <span>Messenger</span>
        </div>
      </div>

      <div className="floating-badge-container badge-phone-pos">
        <div className="platform-badge badge-phone">
          <i className="fa-solid fa-phone"></i>
          <span>Telefone</span>
        </div>
      </div>

      <div className="floating-badge-container badge-bot-pos">
        <div className="platform-badge badge-bot">
          <i className="fa-solid fa-robot"></i>
          <span>Bot / Robô</span>
        </div>
      </div>

      <div className="container">
        <div className="hero-info">
          <div className="hero-content">
            <h1 className="title">Tudo o que sua operação precisa para escalar em um só Lugar</h1>
            <p className="subtitle">
              Automatize atendimentos, alcance milhares de contatos e gerencie múltiplos canais sem trocar de plataforma.
            </p>
            <div className="hero-btn">
              <a href="/#contato" className="btn btn-primary">Falar Conosco &rarr;</a>
              <a href="#templates" className="btn btn-outline">Ver Recursos &rarr;</a>
            </div>
          </div>
          
          {/* Laptop Mockup Wrapper with Negative Margin-Bottom to Overlap the Next Section */}
          <div id="quem-somos" className="hero-image-wrapper">
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
        <p className="logos-title">Confiado por mais de 10 mil empresas em todo o mundo</p>
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
