import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="/" className="logo-text">
              <img src="/logo-.webp" alt="MassFlow" className="logo-img" />
            </a>
            <p>MassFlow transforma a forma como você se comunica. Crie fluxos, automatize atendimentos e escale sua operação de vendas de forma simples e inteligente.</p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="social-icon" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
              <a href="#" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h5>Empresa</h5>
              <ul>
                <li><a href="/quem-somos">Quem Somos</a></li>
                <li><a href="/#features">Nossa Solução</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Institucional</h5>
              <ul>
                <li><a href="/termos-de-uso">Termos de Uso</a></li>
                <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Suporte</h5>
              <ul>
                <li><a href="/status">Status de Rede</a></li>
                <li><a href="/#contato">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 MassFlow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
