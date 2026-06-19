import React, { useEffect, useRef } from 'react';
import './Templates.css';

const Templates = () => {
  const sectionRef = useRef(null);

  const templates = [
    { title: 'Integração com OpenAI' },
    { title: 'WhatsApp Business' },
    { title: 'Instagram Direct' },
    { title: 'TikTok Business' },
    { title: 'Telegram Bots' },
    { title: 'Fluxos Inteligentes' },
    { title: 'Construtor de Bots' },
    { title: 'Inbox Omnichannel' },
    { title: 'Gestão de Contatos' },
    { title: 'Webhooks e APIs' },
    { title: 'Integrações Externas' },
    { title: 'Chat ao Vivo' },
    { title: 'Agentes de IA' },
    { title: 'Multiusuários' },
    { title: 'Gestão de Equipes' },
    { title: 'Controle de Permissões' },
    { title: 'Relatórios Analíticos' },
    { title: 'Dashboard em Tempo Real' },
    { title: 'Tags Inteligentes' },
    { title: 'Integrações com E-Commerce' }
  ];

  return (
    <section id="templates" ref={sectionRef} className="templates-sec section-padding">
      {/* Inverted U dome shape behind the text */}
      <div className="dome-shape"></div>

      <div className="container">
        <div className="sec-title text-center sec-title-light reveal">
          <h2 className="title">Mais de 50 funcionalidades para<br/>Automatizar e Escalar sua Operação.</h2>
          <p className="subtitle">Da automação de conversas ao atendimento omnichannel, a MassFlow reúne<br/>tudo o que sua empresa precisa para crescer sem depender de múltiplas plataformas.</p>
        </div>
      </div>

      <div className="carousel-wrapper reveal reveal-delay-2">
        <div className="carousel-track">
          {templates.map((tpl, index) => (
            <div className="carousel-slide" key={`a-${index}`}>
              <div className="project-card">
                <div className="project-img-placeholder">
                  <div className="mockup-content"></div>
                </div>
                <div className="project-info">
                  <h4 className="title">{tpl.title}</h4>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for infinite loop */}
          {templates.map((tpl, index) => (
            <div className="carousel-slide" key={`b-${index}`}>
              <div className="project-card">
                <div className="project-img-placeholder">
                  <div className="mockup-content"></div>
                </div>
                <div className="project-info">
                  <h4 className="title">{tpl.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
