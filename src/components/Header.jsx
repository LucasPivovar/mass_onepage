import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-main">
      <div className="container">
        <div className="header-inner">
          
          <div className="header-logo">
            <a href="/" className="logo-text">
              <span className="logo-icon"></span>
              MassFlow
            </a>
          </div>

          <nav className="main-menu" aria-label="Main Navigation">
            <ul>
              <li><a href="/quem-somos">Quem Somos</a></li>
              <li><a href="/#como-funciona">Como Funciona</a></li>
              <li><a href="/#templates">Funcionalidades</a></li>
              <li><a href="/#pricing">Planos</a></li>
              <li><a href="/#footer">Contato</a></li>
            </ul>
          </nav>

          <div className="header-btn">
            <a href="#" className="login-btn">Entrar</a>
            <a href="#" className="btn btn-secondary sign-btn">Criar Conta</a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
