import React, { useEffect } from 'react';
import './PoliticaPrivacidade.css'; // Reuse the same styles

const TermosUso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="legal-sec section-padding">
      <div className="container">
        <div className="legal-header text-center">
          <span className="badge">Institucional</span>
          <h1 className="legal-title">Termos de Uso</h1>
          <p className="legal-subtitle">Última atualização: 22 de Junho de 2026</p>
        </div>

        <div className="legal-content">
          <p>
            Ao acessar e usar a plataforma <strong>MassFlow</strong>, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Leia-os atentamente antes de utilizar nossos serviços.
          </p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao criar uma conta ou utilizar os serviços da MassFlow, você manifesta sua concordância integral com estes termos. Se você não concorda com alguma das disposições aqui descritas, não deve utilizar a plataforma.
          </p>

          <h2>2. Cadastro e Uso da Conta</h2>
          <p>
            Você é responsável por fornecer informações de registro corretas e por manter a confidencialidade de sua senha e credenciais de acesso. Qualquer atividade realizada através de sua conta será de sua total responsabilidade.
          </p>

          <h2>3. Conduta do Usuário e Mensagens em Massa</h2>
          <p>
            A MassFlow fornece ferramentas de disparo de mensagens e automação. Ao utilizar estas funcionalidades, você se compromete a:
          </p>
          <ul>
            <li>Não enviar spam, mensagens não autorizadas ou conteúdo ilegal;</li>
            <li>Respeitar as políticas e termos de serviços de terceiros (incluindo as diretrizes do WhatsApp, Telegram e Instagram);</li>
            <li>Garantir que possui a autorização necessária de seus contatos antes de realizar envios em massa.</li>
          </ul>

          <h2>4. Limitação de Responsabilidade</h2>
          <p>
            A MassFlow não se responsabiliza por bloqueios, banimentos ou limitações de contas impostas por redes sociais ou serviços de terceiros decorrentes do uso inadequado de nossas automações. O serviço é fornecido "como está" e não oferecemos garantias de resultados comerciais específicos.
          </p>

          <h2>5. Propriedade Intelectual</h2>
          <p>
            Todos os direitos autorais, marcas e softwares associados à MassFlow pertencem exclusivamente à nossa empresa. O uso de nosso serviço não confere a você qualquer direito de propriedade sobre nossa marca, código ou design.
          </p>

          <h2>6. Cancelamento e Modificações</h2>
          <p>
            Reservamo-nos o direito de alterar, suspender ou descontinuar nossos serviços, bem como modificar estes Termos de Uso a qualquer momento. Mudanças significativas serão comunicadas através do site ou e-mail registrado.
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

export default TermosUso;
