import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: '01',
      title: 'Múltiplas Conexões',
      description: 'Conecte e gerencie múltiplos números em uma única plataforma. Organize operações por cliente, equipe ou campanha mantendo total controle sobre cada conexão ativa.',
      imgClass: 'feature-img-1'
    },
    {
      id: '02',
      title: 'Painel de Controle em Tempo Real',
      description: 'Acompanhe contatos ativos, disparos realizados, taxa de leitura, volume mensal e desempenho das campanhas em um único dashboard.',
      imgClass: 'feature-img-2'
    },
    {
      id: '03',
      title: 'Campanhas Inteligentes',
      description: 'Crie campanhas segmentadas, acompanhe entregas, leituras e resultados em tempo real. Controle campanhas ativas, agendadas, pausadas ou concluídas com total visibilidade operacional.',
      imgClass: 'feature-img-3'
    },
    {
      id: '04',
      title: 'Automações Pós-Disparo',
      description: 'Transforme respostas em processos automatizados. Acione fluxos, aplique tags, valide informações, distribua leads e conduza cada contato automaticamente através da jornada definida.',
      imgClass: 'feature-img-4'
    }
  ];

  return (
    <section id="features" className="features-sec section-padding">
      <div className="container">
        <div className="sec-title text-center reveal">
          <h2 className="title">Transforme disparos em Operações Inteligentes</h2>
          <p className="subtitle">Gerencie múltiplas conexões, automatize campanhas, acompanhe resultados em tempo real e transforme cada contato em uma nova oportunidade.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card reveal" key={index}>
              <div className="feature-content">
                <span className="feature-dot">{feature.id}</span>
                <h4 className="title">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
              <div className={`feature-img-placeholder ${feature.imgClass}`}>
                {/* Placeholder for the little cards/images in the feature */}
                <div className="inner-card"></div>
              </div>
            </div>
          ))}

          {/* Full width feature card */}
          <div className="feature-card full-width reveal">
             <div className="feature-content">
                <span className="feature-dot">05</span>
                <h4 className="title">Relatórios e Performance</h4>
                <p>Acompanhe métricas de entrega, leitura, engajamento e desempenho por campanha. Identifique oportunidades, compare resultados e tome decisões baseadas em dados reais.</p>
             </div>
             <div className="feature-img-placeholder feature-img-5">
                <div className="inner-card"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
