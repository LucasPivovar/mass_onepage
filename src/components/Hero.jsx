import './Hero.css';

const clientLogos = [
  { src: '/assets/logos/AcessoSaude.webp', alt: 'Acesso Saúde', className: 'logo-sm' },
  { src: '/assets/logos/Almanza.webp', alt: 'Almanza', className: 'logo-xl' },
  { src: '/assets/logos/Disc.webp', alt: 'Disc', className: 'logo-sm' },
  { src: '/assets/logos/Duo.webp', alt: 'Duo' },
  { src: '/assets/logos/Fluency.webp', alt: 'Fluency' },
  { src: '/assets/logos/bemcash.webp', alt: 'Bemcash', className: 'logo-xl' },
  { src: '/assets/logos/change.webp', alt: 'Change', className: 'logo-lg' },
  { src: '/assets/logos/creator.webp', alt: 'Creator', className: 'logo-lg' },
  { src: '/assets/logos/english.webp', alt: 'English', className: 'logo-lg' },
  { src: '/assets/logos/motor.webp', alt: 'Motorush' },
  { src: '/assets/logos/novimotos.webp', alt: 'Novimotos' },
  { src: '/assets/logos/teto.webp', alt: 'Teto' },
  { src: '/assets/logos/tindeas.webp', alt: 'Tindeas', className: 'logo-xl' },
  { src: '/assets/logos/venit.webp', alt: 'Venit', className: 'logo-xl' },
];

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
        <p className="logos-title">Confiado por empresas do mundo todo</p>
        <div className="hero-logos-carousel">
          <div className="hero-logos-track">
            {clientLogos.map((logo, index) => (
              <img
                key={`logo-1-${index}`}
                src={logo.src}
                alt={logo.alt}
                className={logo.className || ''}
                loading="lazy"
                decoding="async"
              />
            ))}
            {/* Duplicated for smooth infinite loop */}
            {clientLogos.map((logo, index) => (
              <img
                key={`logo-2-${index}`}
                src={logo.src}
                alt=""
                className={logo.className || ''}
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
