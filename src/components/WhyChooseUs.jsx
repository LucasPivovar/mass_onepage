import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-sec section-padding">
      <div className="container">
        <div className="sec-title text-center reveal">
          <h2 className="title">Transforme suas ligações em uma Máquina de Venda</h2>
          <p className="subtitle">Reduza tempo ocioso, aumente o volume de contatos e acompanhe toda a performance da sua equipe em uma única plataforma.</p>
        </div>

        <div className="why-grid">
          {/* Card 1: Blue Background */}
          <div className="why-card card-blue reveal reveal-left">
            <div className="why-icon">
              <i className="fa-solid fa-window-restore"></i>
            </div>
            <h3 className="why-card-title">Transforme listas em oportunidades</h3>
            <p className="why-card-desc">Automatize chamadas, reduza tempo ocioso da equipe e conecte seus operadores apenas quando houver uma pessoa do outro lado da linha.</p>
          </div>

          {/* Card 2: Tall Central Card with Blue Arc */}
          <div className="why-card card-tall card-dark reveal reveal-up">
            <div className="why-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3 className="why-card-title">Fale com mais clientes sem aumentar sua equipe</h3>
            <p className="why-card-desc">Automatize processos de discagem, reduza tempo entre chamadas e maximize a utilização dos operadores.</p>
            
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
            <h3 className="why-card-title">Gestão de Campanhas</h3>
            <p className="why-card-desc">Organize listas, distribua contatos e acompanhe resultados em tempo real. Tenha total controle sobre suas operações de vendas, cobrança e atendimento.</p>
          </div>

          {/* Card 4: Colored Background with Special Effects */}
          <div className="why-card card-colored-effect reveal reveal-left">
            <div className="why-icon">
              <i className="fa-solid fa-palette"></i>
            </div>
            <h3 className="why-card-title">Monitoramento Operacional</h3>
            <p className="why-card-desc">Acompanhe chamadas, resultados e desempenho dos operadores. Tome decisões baseadas em dados e identifique oportunidades de melhoria rapidamente.</p>
            {/* Ambient neon decorative background spheres for visual effects */}
            <div className="card-effect-sphere sphere-1"></div>
            <div className="card-effect-sphere sphere-2"></div>
          </div>

          {/* Card 5: Lime Background */}
          <div className="why-card card-lime reveal reveal-right">
            <div className="why-icon">
              <i className="fa-solid fa-display"></i>
            </div>
            <h3 className="why-card-title">Telefonia em Nuvem</h3>
            <p className="why-card-desc">Acesse sua operação de qualquer lugar. Sem infraestrutura complexa, sem equipamentos caros e com total escalabilidade para sua equipe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
