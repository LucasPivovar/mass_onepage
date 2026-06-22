import React, { useEffect, useState } from 'react';
import './Status.css';

const Status = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock services status with uptime bars (30 days)
  const services = [
    {
      name: 'API de Envio de Mensagens',
      description: 'Responsável pelo disparo e entrega das mensagens.',
      uptime: '99.98%',
      status: 'Operacional',
      statusType: 'operational',
      history: Array(30).fill('operational'), // All green
    },
    {
      name: 'Gerenciador de Fluxos (Chatbots)',
      description: 'Motor de automação e árvores de decisão.',
      uptime: '99.95%',
      status: 'Operacional',
      statusType: 'operational',
      history: [...Array(14).fill('operational'), 'warning', ...Array(15).fill('operational')], // one warning day
    },
    {
      name: 'Dashboard & Painel do Cliente',
      description: 'Interface web administrativa e relatórios.',
      uptime: '100.00%',
      status: 'Operacional',
      statusType: 'operational',
      history: Array(30).fill('operational'),
    },
    {
      name: 'Conexões de Canais (WhatsApp/APIs)',
      description: 'Sincronização e emparelhamento de números ativos.',
      uptime: '99.85%',
      status: 'Operacional',
      statusType: 'operational',
      history: [...Array(22).fill('operational'), 'outage', ...Array(7).fill('operational')], // one outage day
    },
    {
      name: 'Integrações de Inteligência Artificial',
      description: 'Agentes inteligentes e processamento de linguagem natural.',
      uptime: '99.91%',
      status: 'Operacional',
      statusType: 'operational',
      history: Array(30).fill('operational'),
    }
  ];

  return (
    <section className="status-sec section-padding">
      <div className="container">
        
        {/* Overall Status Header */}
        <div className="status-header text-center reveal reveal-up">
          <span className="badge badge-status">Rede & Infraestrutura</span>
          <h1 className="status-title">Status do Sistema</h1>
          
          <div className="overall-status-box">
            <span className="pulse-indicator"></span>
            <span className="overall-text">Todos os sistemas operacionais e online.</span>
          </div>
        </div>

        {/* Services List */}
        <div className="services-status-list">
          {services.map((service, index) => (
            <div className="service-card reveal reveal-up" key={index}>
              <div className="service-info">
                <div>
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>
                <div className="service-meta">
                  <span className={`status-pill ${service.statusType}`}>
                    {service.status}
                  </span>
                  <span className="uptime-percentage">{service.uptime} uptime</span>
                </div>
              </div>

              {/* Visual Uptime History Bar (30 bars) */}
              <div className="uptime-history">
                <div className="uptime-bars">
                  {service.history.map((dayStatus, idx) => (
                    <div 
                      key={idx} 
                      className={`bar ${dayStatus}`} 
                      title={`Dia ${30 - idx} atrás: ${dayStatus === 'operational' ? 'Sem problemas' : dayStatus === 'warning' ? 'Lentidão parcial' : 'Instabilidade temporária'}`}
                    ></div>
                  ))}
                </div>
                <div className="uptime-labels">
                  <span>30 dias atrás</span>
                  <span className="divider-line"></span>
                  <span>Hoje</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Incident History */}
        <div className="incidents-section reveal reveal-up">
          <h2 className="incidents-title">Histórico de Incidentes</h2>
          <div className="incidents-card">
            <div className="incident-month">Junho, 2026</div>
            <div className="incident-item">
              <span className="incident-dot green"></span>
              <div className="incident-details">
                <h4>Nenhum incidente registrado</h4>
                <p>Todos os serviços permaneceram estáveis e sem interrupções reportadas neste mês.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="status-action text-center reveal reveal-up">
          <a href="/" className="btn btn-primary">
            &larr; Voltar para a Página Inicial
          </a>
        </div>

      </div>
    </section>
  );
};

export default Status;
