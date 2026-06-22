import React, { useEffect } from 'react';
import './PoliticaPrivacidade.css';

const PoliticaPrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="legal-sec section-padding">
      <div className="container">
        <div className="legal-header text-center">
          <span className="badge">Institucional</span>
          <h1 className="legal-title">Política de Privacidade</h1>
          <p className="legal-subtitle">Última atualização: 22 de Junho de 2026</p>
        </div>

        <div className="legal-content">
          <p>
            Bem-vindo à <strong>MassFlow</strong>. A sua privacidade é de extrema importância para nós. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações ao utilizar nosso site e nossos serviços.
          </p>

          <h2>1. Coleta de Informações</h2>
          <p>
            Coletamos informações que você nos fornece diretamente ao se cadastrar, configurar fluxos de automação ou entrar em contato conosco. Isso pode incluir seu nome, endereço de e-mail, número de telefone e dados de cobrança.
          </p>

          <h2>2. Uso das Informações</h2>
          <p>
            Utilizamos as informações coletadas para:
          </p>
          <ul>
            <li>Prover, operar e manter nossa plataforma;</li>
            <li>Melhorar e personalizar sua experiência de usuário;</li>
            <li>Processar transações e enviar atualizações financeiras;</li>
            <li>Enviar comunicações de suporte, técnicas e promocionais;</li>
            <li>Prevenir fraudes e garantir a segurança do sistema.</li>
          </ul>

          <h2>3. Compartilhamento de Dados</h2>
          <p>
            Não vendemos seus dados pessoais a terceiros. Seus dados podem ser compartilhados com provedores de serviços de confiança apenas para fins operacionais (como processadores de pagamento e serviços de hospedagem) ou quando exigido por lei.
          </p>

          <h2>4. Segurança</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, lembre-se de que nenhum método de transmissão pela internet é 100% seguro.
          </p>

          <h2>5. Seus Direitos</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato com nosso suporte através do e-mail de atendimento disponível em nosso site.
          </p>

          <h2>6. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. Avisaremos sobre quaisquer alterações postando a nova política nesta página e atualizando a data de modificação no topo do documento.
          </p>

          <div className="legal-action text-center">
            <a href="/" className="btn btn-primary">
              Voltar para a Página Inicial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliticaPrivacidade;
