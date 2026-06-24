import React, { useState, useEffect } from 'react';
import './PoliticaPrivacidade.css'; // Reuse the same styles

const TermosUso = () => {
  const [activeTab, setActiveTab] = useState('channel');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <section className="legal-sec section-padding">
      <div className="container">
        <div className="legal-header text-center">
          <span className="badge">Institucional</span>
          <h1 className="legal-title">Termos de Uso</h1>
          <p className="legal-subtitle">Última atualização: 23 de Junho de 2026</p>
        </div>

        {/* Tab Toggle Buttons */}
        <div className="legal-tabs">
          <button 
            className={`legal-tab-btn ${activeTab === 'channel' ? 'active' : ''}`}
            onClick={() => setActiveTab('channel')}
          >
            MassFlow Channel
          </button>
          <button 
            className={`legal-tab-btn ${activeTab === 'sender' ? 'active' : ''}`}
            onClick={() => setActiveTab('sender')}
          >
            MassFlow Sender
          </button>
        </div>

        <div className="legal-content">
          {activeTab === 'channel' ? (
            <div>
              <div className="legal-card-info">
                <strong>Plataforma:</strong> MassFlow Channel (Central de Atendimento unificada via WhatsApp)
              </div>
              <p>
                Estes Termos de Uso (“Termos”) regulam o acesso e a utilização da plataforma MassFlow Channel (“Plataforma”, “Serviço” ou “Channel”), uma central unificada de atendimento via WhatsApp disponibilizada por <strong>MassFlow</strong>, doravante denominada simplesmente “MassFlow” ou “nós”.
              </p>
              <p>
                Ao criar uma conta, acessar ou utilizar o MassFlow Channel, você (“Usuário”, “Cliente” ou “você”) declara que leu, compreendeu e concorda integralmente com estes Termos. Caso não concorde com qualquer disposição aqui prevista, você não deve utilizar a Plataforma.
              </p>

              <h2>1. Definições</h2>
              <p>Para os fins destes Termos, considera-se:</p>
              <ul>
                <li><strong>Plataforma / Channel:</strong> o painel web de atendimento que unifica conversas de WhatsApp de uma ou mais contas de negócio (Business Manager), permitindo visualizar, responder, transferir e gerenciar atendimentos em um único ambiente.</li>
                <li><strong>Usuário / Cliente:</strong> a pessoa física ou jurídica que contrata, acessa ou utiliza o Serviço.</li>
                <li><strong>Atendente:</strong> o operador (humano ou agente de inteligência artificial) que conduz as conversas dentro da Plataforma.</li>
                <li><strong>Contato / Lead:</strong> o usuário final do WhatsApp que troca mensagens com o Cliente por meio da Plataforma.</li>
                <li><strong>Provedor de Mensageria:</strong> o serviço terceiro de integração com o WhatsApp utilizado pela Plataforma (atualmente UChat e a WhatsApp Business Platform / Meta).</li>
              </ul>

              <h2>2. Objeto e Descrição do Serviço</h2>
              <p>
                O MassFlow Channel é uma ferramenta de centralização de atendimento que se conecta a contas de WhatsApp Business por meio de integrações com provedores de mensageria. A Plataforma permite, entre outras funcionalidades:
              </p>
              <ul>
                <li>Visualização unificada de conversas provenientes de diferentes contas/números;</li>
                <li>Envio e recebimento de mensagens de texto e mídia (imagem, áudio, vídeo, documentos);</li>
                <li>Transferência e atribuição de atendimentos entre atendentes humanos e agentes de inteligência artificial;</li>
                <li>Organização de conversas por status, etiquetas, rótulos e filtros;</li>
                <li>Exibição de métricas e informações de contato.</li>
              </ul>
              <p>
                O MassFlow Channel é uma camada de software intermediária. Ele não substitui, não é afiliado e não representa oficialmente o WhatsApp, a Meta Platforms, Inc. ou o provedor UChat. A disponibilidade e o funcionamento do Serviço dependem da disponibilidade desses serviços de terceiros.
              </p>

              <h2>3. Cadastro e Conta de Acesso</h2>
              <p>
                3.1. Para utilizar o Serviço, o Usuário deve fornecer informações verdadeiras, completas e atualizadas, bem como manter credenciais de acesso (token de API, chaves de integração e senhas) sob sigilo.
              </p>
              <p>
                3.2. O Usuário é o único responsável por todas as atividades realizadas em sua conta, devendo notificar imediatamente a MassFlow em caso de uso não autorizado ou suspeita de violação de segurança, pelo e-mail <strong>contato@massflow.com.br</strong>.
              </p>
              <p>
                3.3. A MassFlow poderá suspender ou encerrar contas que apresentem indícios de fraude, uso indevido ou violação destes Termos.
              </p>

              <h2>4. Integração com WhatsApp e Provedores Terceiros</h2>
              <p>
                4.1. O funcionamento do MassFlow Channel depende de integrações com a WhatsApp Business Platform (Meta) e com o provedor UChat. O Usuário reconhece e concorda que tais serviços possuem termos, políticas e limites próprios, incluindo, sem limitação:
              </p>
              <ul>
                <li>a Política de Negócios do WhatsApp e a Política Comercial do WhatsApp;</li>
                <li>limites de taxa de requisições (rate limits) que podem restringir temporariamente o volume de chamadas à API;</li>
                <li>a regra da janela de atendimento de 24 horas, segundo a qual mensagens de texto livre só podem ser enviadas a um Contato dentro de 24 horas a partir da última mensagem enviada por esse Contato; fora desse período, é exigido o uso de modelos de mensagem (templates) previamente aprovados.</li>
              </ul>
              <p>
                4.2. O Usuário é o único responsável por obter, manter e operar suas próprias contas, números e credenciais junto ao WhatsApp/Meta e ao provedor de mensageria, bem como por cumprir integralmente as políticas desses terceiros.
              </p>
              <p>
                4.3. Eventuais bloqueios, suspensões, banimentos ou limitações aplicados pelo WhatsApp, pela Meta ou pelo provedor de mensageria às contas do Usuário são de responsabilidade exclusiva do Usuário, não cabendo à MassFlow qualquer responsabilidade por tais medidas.
              </p>

              <h2>5. Uso Permitido e Condutas Proibidas</h2>
              <p>
                5.1. O Usuário compromete-se a utilizar o Serviço de forma lícita, ética e em conformidade com a legislação aplicável, incluindo a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) e o Código de Defesa do Consumidor.
              </p>
              <p>5.2. É expressamente proibido ao Usuário:</p>
              <ul>
                <li>Enviar mensagens não solicitadas (spam), conteúdo enganoso, fraudulento ou ilegal;</li>
                <li>Utilizar a Plataforma para assédio, discriminação, disseminação de ódio ou qualquer atividade ilícita;</li>
                <li>Comercializar, alugar ou compartilhar o acesso à Plataforma sem autorização expressa da MassFlow;</li>
                <li>Tentar burlar limites técnicos, realizar engenharia reversa, ou comprometer a segurança e a integridade do Serviço;</li>
                <li>Enviar mensagens em desacordo com as políticas do WhatsApp/Meta, especialmente fora da janela de 24 horas sem template aprovado;</li>
                <li>Coletar ou tratar dados de Contatos sem a devida base legal e consentimento, quando aplicável.</li>
              </ul>
              <p>
                5.3. O descumprimento desta cláusula poderá resultar na suspensão imediata do acesso, sem prejuízo das demais medidas cabíveis.
              </p>

              <h2>6. Tratamento de Dados Pessoais e Privacidade</h2>
              <p>
                6.1. No âmbito da operação do Serviço, a MassFlow poderá atuar como operadora de dados pessoal, tratando dados de Contatos e de atendimentos em nome do Usuário, que figura como controlador dessas informações, nos termos da LGPD.
              </p>
              <p>
                6.2. O Usuário é responsável por garantir a existência de base legal adequada para o tratamento dos dados de seus Contatos, bem como por atender às solicitações dos titulares de dados.
              </p>
              <p>
                6.3. A MassFlow adota medidas técnicas e organizacionais razoáveis para proteger os dados tratados, mas não garante segurança absoluta contra eventos fora de seu controle. O tratamento de dados está detalhado na Política de Privacidade, disponível em <a href="/politica-de-privacidade">Política de Privacidade</a>.
              </p>
              <p>
                6.4. Dados de credenciais de integração (como tokens de API) são armazenados de forma segura e utilizados exclusivamente para viabilizar o funcionamento do Serviço.
              </p>

              <h2>7. Disponibilidade, Limites e Suporte</h2>
              <p>
                7.1. A MassFlow envida esforços para manter o Serviço disponível, porém não garante funcionamento ininterrupto ou livre de erros, podendo ocorrer indisponibilidades por manutenção, falhas de terceiros ou eventos de força maior.
              </p>
              <p>
                7.2. Em razão dos limites impostos pelos provedores de mensageria, o Serviço pode apresentar atrasos, limitações temporárias de envio ou exibição de conversas (por exemplo, em situações de limite de requisições — “Too Many Attempts”). Nesses casos, a Plataforma poderá exibir avisos de indisponibilidade temporária e tentar restabelecer a operação automaticamente.
              </p>
              <p>
                7.3. O suporte ao Usuário será prestado pelos canais informados pela MassFlow, por meio do e-mail <strong>contato@massflow.com.br</strong>.
              </p>

              <h2>8. Propriedade Intelectual</h2>
              <p>
                8.1. Todo o software, a marca “MassFlow”, o layout, os textos, o design e os demais elementos da Plataforma são de titularidade da MassFlow ou de seus licenciadores, protegidos pela legislação de propriedade intelectual.
              </p>
              <p>
                8.2. Estes Termos não transferem ao Usuário qualquer direito de propriedade sobre a Plataforma, concedendo apenas uma licença limitada, não exclusiva, intransferível e revogável de uso, durante a vigência da contratação.
              </p>

              <h2>9. Limitação de Responsabilidade</h2>
              <p>9.1. Na máxima extensão permitida pela legislação aplicável, a MassFlow não será responsável por:</p>
              <ul>
                <li>danos indiretos, lucros cessantes, perda de dados ou de oportunidades de negócio;</li>
                <li>falhas, indisponibilidades, bloqueios ou limitações decorrentes de serviços de terceiros (WhatsApp/Meta, UChat, provedores de hospedagem e conectividade);</li>
                <li>conteúdo das mensagens enviadas ou recebidas pelo Usuário e seus atendentes;</li>
                <li>consequências de uso indevido do Serviço pelo Usuário ou por terceiros por ele autorizados.</li>
              </ul>
              <p>
                9.2. Caso, em qualquer hipótese, seja reconhecida alguma responsabilidade da MassFlow, esta limitar-se-á, em qualquer caso, exclusivamente ao valor efetivamente pago pelo Usuário pela operação ou disparo específico que originou a controvérsia, não abrangendo mensalidades, assinaturas, demais operações ou quaisquer outros valores.
              </p>

              <h2>10. Vigência e Rescisão</h2>
              <p>
                10.1. Estes Termos vigoram enquanto o Usuário mantiver conta ativa ou utilizar o Serviço.
              </p>
              <p>
                10.2. O Usuário pode encerrar o uso a qualquer momento. A MassFlow poderá suspender ou rescindir o acesso em caso de violação destes Termos, mediante comunicação quando cabível.
              </p>

              <h2>11. Alterações dos Termos</h2>
              <p>
                A MassFlow poderá alterar estes Termos a qualquer momento, publicando a versão atualizada na Plataforma. O uso continuado após a publicação implica concordância com as alterações.
              </p>

              <h2>12. Disposições Gerais e Foro</h2>
              <p>
                12.1. Estes Termos são regidos pelas leis da República Federativa do Brasil.
              </p>
              <p>
                12.2. Fica eleito o foro da Comarca do cliente para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.
              </p>
              <p>
                12.3. A eventual tolerância quanto ao descumprimento de qualquer cláusula não implica novação ou renúncia de direitos.
              </p>
            </div>
          ) : (
            <div>
              <div className="legal-card-info">
                <strong>Plataforma:</strong> MassFlow Sender (Ferramenta de disparo e automação de mensagens em massa)
              </div>
              <p>
                Estes Termos de Uso (“Termos”) regulam o acesso e a utilização da plataforma MassFlow Sender (“Plataforma”, “Serviço” ou “Sender”), uma ferramenta de disparo de mensagens via WhatsApp disponibilizada por <strong>MassFlow</strong>, doravante denominada simplesmente “MassFlow” ou “nós”.
              </p>
              <p>
                Ao criar uma conta, acessar ou utilizar o MassFlow Sender, você (“Usuário”, “Cliente” ou “você”) declara que leu, compreendeu e concorda integralmente com estes Termos. Caso não concorde com qualquer disposição aqui prevista, você não deve utilizar a Plataforma.
              </p>

              <h2>1. Definições</h2>
              <p>Para os fins destes Termos, considera-se:</p>
              <ul>
                <li><strong>Plataforma / Sender:</strong> a ferramenta que permite a criação, o agendamento e o envio de mensagens em massa (disparos) e fluxos automatizados para contatos de WhatsApp.</li>
                <li><strong>Disparo:</strong> o envio de uma ou mais mensagens, simultâneas ou agendadas, para um ou mais Contatos.</li>
                <li><strong>Template / Modelo de mensagem:</strong> modelo de mensagem previamente aprovado pelo WhatsApp/Meta, exigido para iniciar conversas fora da janela de 24 horas.</li>
                <li><strong>Fluxo (Subflow):</strong> sequência automatizada de mensagens disparada dentro da janela de atendimento ativa.</li>
                <li><strong>Usuário / Cliente:</strong> a pessoa física ou jurídica que contrata, acessa ou utiliza o Serviço.</li>
                <li><strong>Contato / Lead:</strong> o usuário final do WhatsApp destinatário das mensagens enviadas pelo Cliente.</li>
                <li><strong>Provedor de Mensageria:</strong> o serviço terceiro de integração com o WhatsApp utilizado pela Plataforma (atualmente UChat e a WhatsApp Business Platform / Meta).</li>
              </ul>

              <h2>2. Objeto e Descrição do Serviço</h2>
              <p>
                O MassFlow Sender é uma ferramenta de automação de mensagens que se conecta a contas de WhatsApp Business por meio de integrações com provedores de mensageria, permitindo, entre outras funcionalidades:
              </p>
              <ul>
                <li>Envio individual e em massa de mensagens e modelos (templates);</li>
                <li>Disparo de fluxos automatizados dentro da janela de atendimento;</li>
                <li>Seleção de destinatários por conta de negócio (Business Manager), grupos, etiquetas ou filtros;</li>
                <li>Personalização de variáveis em modelos de mensagem;</li>
                <li>Agendamento e acompanhamento do histórico de disparos.</li>
              </ul>
              <p>
                O MassFlow Sender é uma camada de software intermediária. Ele não substitui, não é afiliado e não representa oficialmente o WhatsApp, a Meta Platforms, Inc. ou o provedor UChat. A disponibilidade e o funcionamento do Serviço dependem da disponibilidade desses serviços de terceiros.
              </p>

              <h2>3. Cadastro e Conta de Acesso</h2>
              <p>
                3.1. Para utilizar o Serviço, o Usuário deve fornecer informações verdadeiras, completas e atualizadas, bem como manter credenciais de acesso (token de API, chaves de integração e senhas) sob sigilo.
              </p>
              <p>
                3.2. O Usuário é o único responsável por todas as atividades e disparos realizados em sua conta, devendo notificar imediatamente a MassFlow em caso de uso não autorizado, pelo e-mail <strong>contato@massflow.com.br</strong>.
              </p>
              <p>
                3.3. A MassFlow poderá suspender ou encerrar contas que apresentem indícios de fraude, uso indevido ou violação destes Termos.
              </p>

              <h2>4. Conformidade com Políticas do WhatsApp e Regras de Envio</h2>
              <p>
                4.1. O Usuário reconhece que o disparo de mensagens via WhatsApp está sujeito às políticas e regras da WhatsApp Business Platform (Meta) e do provedor UChat, comprometendo-se a cumpri-las integralmente, em especial:
              </p>
              <ul>
                <li>a regra da janela de 24 horas: mensagens de texto livre e fluxos só podem ser enviados a um Contato dentro de 24 horas a partir da última mensagem enviada por esse Contato; fora desse período, é obrigatório o uso de um template previamente aprovado pelo WhatsApp;</li>
                <li>a obrigatoriedade de obter consentimento prévio (opt-in) dos Contatos antes de enviar comunicações ativas;</li>
                <li>a obrigatoriedade de oferecer mecanismo de descadastramento (opt-out) aos Contatos;</li>
                <li>os limites de qualidade e de taxa de envio (rate limits e quality rating) impostos pelo WhatsApp/Meta.</li>
              </ul>
              <p>
                4.2. O envio em massa é uma atividade de alto risco de bloqueio. O Usuário reconhece e aceita que o uso indevido do disparo — incluindo envio sem consentimento, conteúdo de baixa qualidade, denúncias por parte dos Contatos ou descumprimento das políticas do WhatsApp — pode resultar em redução de qualidade, suspensão ou banimento de seus números e contas pelo WhatsApp/Meta.
              </p>
              <p>
                4.3. Tais consequências são de responsabilidade exclusiva do Usuário, não cabendo à MassFlow qualquer responsabilidade por bloqueios, suspensões ou banimentos decorrentes do uso do Serviço.
              </p>

              <h2>5. Uso Permitido e Condutas Proibidas</h2>
              <p>
                5.1. O Usuário compromete-se a utilizar o Serviço de forma lícita e em conformidade com a legislação aplicável, incluindo a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), o Código de Defesa do Consumidor e a legislação de combate ao spam.
              </p>
              <p>5.2. É expressamente proibido ao Usuário:</p>
              <ul>
                <li>Enviar mensagens não solicitadas (spam) ou para Contatos que não concederam consentimento;</li>
                <li>Enviar conteúdo enganoso, fraudulento, ilegal, ofensivo ou que viole direitos de terceiros;</li>
                <li>Disparar mensagens fora da janela de 24 horas sem template aprovado;</li>
                <li>Comprar, alugar ou utilizar listas de contatos obtidas sem base legal adequada;</li>
                <li>Utilizar o Serviço para golpes, phishing, esquemas financeiros ou qualquer prática ilícita;</li>
                <li>Tentar burlar limites técnicos, mecanismos antifraude ou políticas dos provedores de mensageria;</li>
                <li>Realizar engenharia reversa ou comprometer a segurança e a integridade do Serviço.</li>
              </ul>
              <p>
                5.3. O descumprimento desta cláusula poderá resultar na suspensão imediata do acesso, sem prejuízo das demais medidas cabíveis e da responsabilização do Usuário por eventuais danos.
              </p>

              <h2>6. Tratamento de Dados Pessoais e Privacidade</h2>
              <p>
                6.1. No âmbito da operação do Serviço, a MassFlow poderá atuar como operadora de dados pessoais, tratando dados de Contatos e de disparos em nome do Usuário, que figura como controlador dessas informações, nos termos da LGPD.
              </p>
              <p>
                6.2. O Usuário é o único responsável por garantir a existência de base legal e de consentimento (opt-in) válidos para o envio de mensagens aos seus Contatos, bem como por atender às solicitações dos titulares de dados, incluindo pedidos de descadastramento.
              </p>
              <p>
                6.3. A MassFlow adota medidas técnicas e organizacionais razoáveis para proteger os dados tratados, mas não garante segurança absoluta contra eventos fora de seu controle. O tratamento de dados está detalhado na Política de Privacidade, disponível em <a href="/politica-de-privacidade">Política de Privacidade</a>.
              </p>
              <p>
                6.4. Dados de credenciais de integração (como tokens de API) são armazenados de forma segura e utilizados exclusivamente para viabilizar o funcionamento do Serviço.
              </p>

              <h2>7. Disponibilidade, Limites e Suporte</h2>
              <p>
                7.1. A MassFlow envida esforços para manter o Serviço disponível, porém não garante funcionamento ininterrupto, livre de erros, nem a entrega de 100% das mensagens disparadas, uma vez que a entrega depende do WhatsApp/Meta, do provedor de mensageria e da disponibilidade dos Contatos.
              </p>
              <p>
                7.2. Em razão dos limites impostos pelos provedores de mensageria, o Serviço pode aplicar atrasos, limitações temporárias de envio ou enfileiramento de disparos (por exemplo, em situações de limite de requisições — “Too Many Attempts”), a fim de preservar a saúde das contas do Usuário.
              </p>
              <p>
                7.3. O suporte ao Usuário será prestado pelos canais informados pela MassFlow, por meio do e-mail <strong>contato@massflow.com.br</strong>.
              </p>

              <h2>8. Propriedade Intelectual</h2>
              <p>
                8.1. Todo o software, a marca “MassFlow”, o layout, os textos, o design e os demais elementos da Plataforma são de titularidade da MassFlow ou de seus licenciadores, protegidos pela legislação de propriedade intelectual.
              </p>
              <p>
                8.2. Estes Termos não transferem ao Usuário qualquer direito de propriedade sobre a Plataforma, concedendo apenas uma licença limitada, não exclusiva, intransferível e revogável de uso, durante a vigência da contratação.
              </p>

              <h2>9. Limitação de Responsabilidade</h2>
              <p>9.1. Na máxima extensão permitida pela legislação aplicável, a MassFlow não será responsável por:</p>
              <ul>
                <li>danos indiretos, lucros cessantes, perda de dados ou de oportunidades de negócio;</li>
                <li>falhas, atrasos, não entrega de mensagens, bloqueios ou banimentos decorrentes de serviços de terceiros (WhatsApp/Meta, UChat, provedores de hospedagem e conectividade);</li>
                <li>conteúdo das mensagens e dos disparos realizados pelo Usuário;</li>
                <li>consequências de uso indevido do Serviço pelo Usuário ou por terceiros por ele autorizados, incluindo envios sem consentimento dos Contatos.</li>
              </ul>
              <p>
                9.2. Caso, em qualquer hipótese, seja reconhecida alguma responsabilidade da MassFlow, esta limitar-se-á, em qualquer caso, exclusivamente ao valor efetivamente pago pelo Usuário pelo disparo específico que originou a controvérsia, não abrangendo mensalidades, assinaturas, demais disparos ou quaisquer outros valores.
              </p>

              <h2>10. Vigência e Rescisão</h2>
              <p>
                10.1. Estes Termos vigoram enquanto o Usuário mantiver conta ativa ou utilizar o Serviço.
              </p>
              <p>
                10.2. O Usuário pode encerrar o uso a qualquer momento. A MassFlow poderá suspender ou rescindir o acesso em caso de violação destes Termos, mediante comunicação quando cabível.
              </p>

              <h2>11. Alterações dos Termos</h2>
              <p>
                A MassFlow poderá alterar estes Termos a qualquer momento, publicando a versão atualizada na Plataforma. O uso continuado após a publicação implica concordância com as alterações.
              </p>

              <h2>12. Disposições Gerais e Foro</h2>
              <p>
                12.1. Estes Termos são regidos pelas leis da República Federativa do Brasil.
              </p>
              <p>
                12.2. Fica eleito o foro da Comarca do cliente para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.
              </p>
              <p>
                12.3. A eventual tolerância quanto ao descumprimento de qualquer cláusula não implica novação ou renúncia de direitos.
              </p>
            </div>
          )}

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
