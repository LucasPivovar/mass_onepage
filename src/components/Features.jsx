import './Features.css';

const Features = () => {
  const features = [
    {
      id: '01',
      title: 'Múltiplas Conexões',
      description: 'Conecte e gerencie múltiplos números em uma única plataforma. Organize operações por cliente, equipe ou campanha mantendo total controle sobre cada conexão ativa.',
      image: '/icons/conexoes.jpg'
    },
    {
      id: '02',
      title: 'Painel de Controle em Tempo Real',
      description: 'Acompanhe leads cadastrados e ativos, mensagens enviadas e recebidas, contas de envio, templates, fluxos e canais no dashboard.',
      image: '/icons/painel.jpg'
    },
    {
      id: '03',
      title: 'Campanhas Inteligentes',
      description: 'Organize o planejamento e o histórico de campanhas. Em Transmissões, configure contas, modelos de mensagem e o envio para sua operação.',
      image: '/icons/campanhas.jpg'
    },
    {
      id: '04',
      title: 'Automações Pós-Disparo',
      description: 'Transforme respostas em processos automatizados. Acione fluxos, aplique tags, valide informações, distribua leads e conduza cada contato automaticamente através da jornada definida.',
      image: '/icons/automacao.jpg'
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
          {features.map((feature) => (
            <div className="feature-card reveal" key={feature.id}>
              <img className="feature-illustration" src={feature.image} alt="" width="320" height="320" loading="lazy" decoding="async" />
              <div className="feature-content">
                <span className="feature-dot">{feature.id}</span>
                <h4 className="title">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}

          {/* Full width feature card */}
          <div className="feature-card full-width reveal">
             <div className="feature-content">
                <span className="feature-dot">05</span>
                <h4 className="title">Relatórios e Performance</h4>
                <p>Consulte métricas e relatórios do seu workspace, aplique filtros de período e acompanhe os indicadores da operação.</p>
             </div>
             <figure className="feature-app-preview"><img src="/app/dashboard-demo.jpg" alt="Indicadores do dashboard MassFlow com dados demonstrativos" width="1704" height="924" loading="lazy" decoding="async" /><figcaption>Visão da plataforma · dados demonstrativos</figcaption></figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

