import React from 'react';
import './QuemSomos.css';

const QuemSomos = () => {
  return (
    <section className="about-sec section-padding">
      <div className="container">
        
        {/* Header Section */}
        <div className="sec-title text-center reveal reveal-up">
          <span className="badge badge-purple">Quem Somos</span>
          <h1 className="about-title">Impulsionando a Comunicação do Futuro</h1>
          <p className="about-subtitle">
            Conectamos empresas a seus clientes através de tecnologia inteligente e fluxos automatizados de alta performance.
          </p>
        </div>

        {/* Story & Solution Grid */}
        <div className="about-grid">
          
          {/* Card 1: Our Story */}
          <div className="about-card reveal reveal-left">
            <h3 className="about-card-title">Nossa História</h3>
            <p className="about-card-desc">
              A MassFlow nasceu com o propósito de descomplicar o atendimento ao cliente e a automação de vendas. Percebemos que as empresas perdiam muito tempo alternando entre diversas ferramentas para gerenciar canais como WhatsApp, Instagram e Telegram. 
            </p>
            <p className="about-card-desc">
              Por isso, criamos uma solução consolidada e robusta que centraliza e otimiza todas as interações da sua operação em um único lugar, trazendo mais eficiência, clareza e resultados.
            </p>
          </div>

          {/* Card 2: Our Solution (Nossa Solução) */}
          <div className="about-card card-purple reveal reveal-right">
            <h3 className="about-card-title">Nossa Solução</h3>
            <p className="about-card-desc">
              Ajudamos a sua empresa a escalar através de disparos inteligentes em massa, construtor visual de chatbots sem código, integrações dinâmicas com OpenAI (agentes de IA personalizados) e relatórios em tempo real.
            </p>
            <p className="about-card-desc">
              Com a MassFlow, sua operação reduz o tempo ocioso dos atendentes e conecta-se instantaneamente com milhares de leads de forma personalizada e eficiente.
            </p>
          </div>

        </div>

        {/* Back Home Button */}
        <div className="about-action text-center reveal reveal-up">
          <a href="/" className="btn btn-primary">
            &larr; Voltar para a Página Inicial
          </a>
        </div>

      </div>
    </section>
  );
};

export default QuemSomos;
