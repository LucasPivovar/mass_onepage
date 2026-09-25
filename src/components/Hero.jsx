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

      <div className="floating-badge-container badge-telegram-pos">
        <div className="platform-badge badge-telegram">
          <i className="fa-brands fa-telegram"></i>
          <span>Telegram</span>
        </div>
      </div>



      <div className="floating-badge-container badge-webchat-pos">
        <div className="platform-badge badge-webchat">
          <i className="fa-solid fa-comments"></i>
          <span>Chat no Site</span>
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
            <h1 className="title">Tudo o que sua operação precisa para escalar em um só lugar</h1>
            <p className="subtitle">
              Automatize atendimentos, organize seus contatos e gerencie múltiplos canais sem trocar de plataforma.
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
                  <img src="/app/dashboard-demo.jpg" alt="Dashboard MassFlow com indicadores e dados demonstrativos" className="laptop-screen-image" fetchPriority="high" width="1704" height="924" />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Ticker - Overlapped by Laptop Mockup */}
      <div className="hero-logos-container reveal reveal-up">
        <p className="logos-title">Atendimento, campanhas e automação em um só lugar</p>
        <div className="verified-capabilities" aria-label="Recursos da plataforma">
          <span>WhatsApp</span><span>Telegram</span><span>Chat no Site</span><span>Agentes de IA</span><span>Bots e fluxos</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
