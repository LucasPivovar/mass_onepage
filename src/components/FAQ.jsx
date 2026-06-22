import React, { useState, useEffect } from 'react';
import './FAQ.css';

const faqs = [
  { q: 'O que é a MassFlow?', a: 'A MassFlow é uma plataforma omnichannel de comunicação e automação que centraliza canais como WhatsApp, Instagram e Telegram para escalar suas vendas e atendimento.' },
  { q: 'Preciso saber programar para usar a plataforma?', a: 'Não! Nosso construtor de fluxos e chatbots é totalmente visual e sem código (no-code), permitindo que qualquer pessoa crie automações inteligentes em minutos.' },
  { q: 'Quais canais de comunicação posso integrar?', a: 'Você pode integrar WhatsApp Business, Instagram Direct, Telegram, Facebook Messenger e diversos outros canais diretamente na nossa caixa de entrada centralizada.' },
  { q: 'Como funcionam os disparos em massa?', a: 'Você pode importar sua lista de contatos, segmentar seu público e programar disparos automáticos e personalizados via WhatsApp de forma segura e eficiente.' },
  { q: 'A plataforma oferece integração com Inteligência Artificial?', a: 'Sim, a MassFlow possui integração direta com a OpenAI, permitindo que você crie agentes de IA personalizados para atender seus clientes de forma humana e autônoma.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq-sec">

      <div className="container">

        {/* ── Part 1: FAQ ── */}
        <div className="faq-inner">
          <div className="faq-left reveal">
            <span className="badge badge-dark">Perguntas Frequentes</span>
            <h2 className="title">Ainda com Dúvidas?<br/>Encontre as Respostas</h2>
            <p>Reunimos as principais perguntas para te ajudar<br/>a entender como a MassFlow funciona.</p>
            <a href="#contato" className="btn btn-primary faq-btn">
              <span>Fale com Especialista</span>
              <span className="arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          <div className="faq-right">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item reveal ${open === i ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{i + 1}. {faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={`faq-arrow ${open === i ? 'rotated' : ''}`}>
                    <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {open === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Part 2: Contato (Substitui CTA) ── */}
        <div id="contato" className="cta-inner" style={{ scrollMarginTop: '100px' }}>
          <div className="cta-content reveal">
            <span className="badge badge-gray">Fale Conosco</span>
            <h2 className="title">Pronto para escalar<br/>sua operação de vendas?</h2>
            <p>Preencha o formulário ao lado e um de nossos especialistas entrará em contato para apresentar a solução perfeita para o seu modelo de negócio.</p>
          </div>

          <div className="cta-form-wrap reveal">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="form-title">Envie uma mensagem</h3>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail Corporativo</label>
                <input type="email" id="email" placeholder="seuemail@empresa.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefone / WhatsApp</label>
                <input type="tel" id="phone" placeholder="(11) 99999-9999" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" rows="4" placeholder="Como podemos ajudar sua empresa?" required></textarea>
              </div>
              <button type="submit" className="btn btn-secondary btn-submit">Enviar Mensagem &rarr;</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
