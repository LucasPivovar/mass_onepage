import React, { useState, useEffect } from 'react';
import './PoliticaPrivacidade.css';

const PoliticaPrivacidade = () => {
  const [activeTab, setActiveTab] = useState('channel');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <section className="legal-sec section-padding">
      <div className="container">
        <div className="legal-header text-center">
          <span className="badge">Institucional</span>
          <h1 className="legal-title">Política de Privacidade</h1>
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
                <strong>Escopo:</strong> Política de Privacidade aplicável à plataforma MassFlow Channel.
              </div>
              <p>
                A sua privacidade é de extrema importância para nós. Esta Política de Privacidade explica como a plataforma <strong>MassFlow Channel</strong> (“Channel”) coleta, trata, armazena e protege os dados pessoais dos Usuários e dos Contatos finais atendidos pela ferramenta, em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
              </p>

              <h2>1. O Papel da MassFlow no Tratamento de Dados (LGPD)</h2>
              <p>
                Para fins da LGPD, a MassFlow atua primordialmente como <strong>Operadora</strong> de dados pessoais no que tange às informações de Contatos e Atendimentos processadas no painel. O <strong>Cliente/Usuário</strong> (sua empresa) figura como <strong>Controlador</strong> dessas informações, sendo responsável por obter o consentimento ou base legal legítima para a coleta e o envio de mensagens.
              </p>

              <h2>2. Informações que Coletamos</h2>
              <p>O MassFlow Channel pode coletar e processar as seguintes categorias de dados:</p>
              <ul>
                <li><strong>Dados do Usuário/Cliente:</strong> Nome, e-mail corporativo, número de telefone corporativo, credenciais de acesso, tokens de API de integração e dados de pagamento.</li>
                <li><strong>Dados de Atendimento e Contatos:</strong> Nome de exibição do WhatsApp, número do telefone do Contato (Lead), histórico das mensagens trocadas (textos, imagens, áudios, vídeos e documentos), tags de categorização e status do atendimento.</li>
                <li><strong>Metadados Técnicos:</strong> Endereço IP, tipo de navegador, registros de data/hora de acessos e interações com a interface web da Plataforma.</li>
              </ul>

              <h2>3. Finalidade do Tratamento</h2>
              <p>Os dados tratados no âmbito do MassFlow Channel são utilizados para:</p>
              <ul>
                <li>Centralizar conversas de múltiplos números de WhatsApp Business em um único painel operacional;</li>
                <li>Habilitar e registrar atendimentos realizados por operadores humanos e agentes de inteligência artificial (Bots);</li>
                <li>Transferir atendimentos entre operadores e equipes de forma organizada;</li>
                <li>Exibir relatórios operacionais, tempos de resposta e métricas de desempenho interno;</li>
                <li>Garantir a segurança da conta e combater fraudes ou uso indevido da API.</li>
              </ul>

              <h2>4. Compartilhamento com Terceiros</h2>
              <p>
                A viabilização do MassFlow Channel depende da integração com serviços terceiros de mensageria. Os dados de mensagens e contatos são compartilhados com:
              </p>
              <ul>
                <li>A infraestrutura da <strong>WhatsApp Business Platform (Meta Platforms, Inc.)</strong>;</li>
                <li>O provedor de barramento de integração parceiro (atualmente <strong>UChat</strong>);</li>
                <li>Provedores de nuvem e hospedagem de banco de dados seguros contratados pela MassFlow.</li>
              </ul>
              <p>Não comercializamos nem compartilhamos dados para fins publicitários de terceiros.</p>

              <h2>5. Retenção e Segurança dos Dados</h2>
              <p>
                Os dados de conversas e credenciais são armazenados sob rigorosos padrões de segurança de dados (criptografia e controle de acesso restrito). As mensagens permanecem armazenadas na plataforma durante a vigência do contrato comercial ou até a solicitação de exclusão por parte do Controlador.
              </p>

              <h2>6. Direitos dos Titulares de Dados</h2>
              <p>
                Os Contatos finais (leads) que desejarem exercer seus direitos de confirmação, acesso, correção ou eliminação de dados nos termos da LGPD devem direcionar suas solicitações diretamente ao Controlador (o Cliente que opera o canal de atendimento). A MassFlow, enquanto operadora, auxiliará o controlador no atendimento destas demandas. Para dúvidas institucionais, entre em contato através de <strong>contato@massflow.com.br</strong>.
              </p>
            </div>
          ) : (
            <div>
              <div className="legal-card-info">
                <strong>Escopo:</strong> Política de Privacidade aplicável à plataforma MassFlow Sender.
              </div>
              <p>
                A sua privacidade é de extrema importância para nós. Esta Política de Privacidade explica como a plataforma <strong>MassFlow Sender</strong> (“Sender”) coleta, trata, armazena e protege os dados pessoais nas ações de disparo de mensagens em massa e fluxos de automação ativa via WhatsApp, em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
              </p>

              <h2>1. Relação Controlador e Operador (LGPD)</h2>
              <p>
                No envio ativo de mensagens, o <strong>Cliente/Usuário</strong> atua como <strong>Controlador</strong> e é o único responsável por coletar o consentimento prévio e explícito (opt-in) dos destinatários. A <strong>MassFlow</strong> atua exclusivamente como <strong>Operadora</strong> tecnológica no processamento dos envios, disparo de subflows e consolidação dos relatórios de entrega.
              </p>

              <h2>2. Dados Tratados no Sender</h2>
              <p>Para executar as automações de envio em massa, o Sender processa:</p>
              <ul>
                <li><strong>Dados do Cliente:</strong> Informações de cadastro, e-mail de contato, chaves de API do WhatsApp Business e UChat, tokens de integração e planos contratados.</li>
                <li><strong>Dados de Destinatários (Disparos):</strong> Números de telefone de destino, variáveis de personalização (como nome do lead, valores, datas de vencimento de faturas, etc.) e o conteúdo da mensagem a ser disparada.</li>
                <li><strong>Métricas de Envio:</strong> Histórico de status das mensagens (enfileiradas, enviadas, entregues, lidas ou com falhas de envio).</li>
              </ul>

              <h2>3. Finalidades do Tratamento no Sender</h2>
              <p>Os dados processados no Sender têm a finalidade exclusiva de:</p>
              <ul>
                <li>Disparar mensagens em massa e agendar campanhas de comunicação ativa;</li>
                <li>Processar e conduzir fluxos de conversação automatizados (subflows) que iniciam após o opt-in do contato;</li>
                <li>Consolidar estatísticas de leitura, cliques e performance das campanhas enviadas;</li>
                <li>Prevenir abusos e evitar bloqueios operacionais de números seguindo as taxas máximas de envio permitidas.</li>
              </ul>

              <h2>4. Políticas Antispam e Opt-out</h2>
              <p>
                O MassFlow Sender exige que o Cliente disponibilize um mecanismo fácil de descadastramento (opt-out) para os leads no corpo das mensagens. Caso um contato solicite a exclusão ou manifestar que não deseja mais receber mensagens, o Controlador deverá atualizar suas listas imediatamente para cessar os disparos.
              </p>

              <h2>5. Segurança e Compartilhamento</h2>
              <p>
                As informações são processadas de forma segura e criptografada e enviadas à API do WhatsApp Business da Meta e ao UChat para transmissão. A MassFlow não utiliza as listas de contatos fornecidas pelo Cliente para quaisquer outros fins que não sejam os disparos contratados.
              </p>

              <h2>6. Exercício de Direitos e Contato</h2>
              <p>
                Como operadora do serviço de disparo, a MassFlow exclui ou retifica informações sob instrução do Controlador. Solicitações de titulares de dados devem ser feitas diretamente à empresa controladora que realizou o disparo de mensagens. Contatos para suporte institucional e privacidade com a MassFlow podem ser realizados através do e-mail <strong>contato@massflow.com.br</strong>.
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

export default PoliticaPrivacidade;
