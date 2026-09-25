import './WorkingProcess.css';

const previews = [
  { title: 'Campanhas inteligentes', description: 'Organize o planejamento das campanhas e siga para Transmissões para configurar contas, modelos e envios em um único lugar.', image: 'campanhas.png', capture: true },
  { title: 'Automação com IA', description: 'Configure agentes, conecte bases de conhecimento e acompanhe a inteligência dos seus fluxos na Central de IA.', image: 'central-ia.png', capture: true },
  { title: 'Visão geral da operação', description: 'Acompanhe leads, mensagens, canais conectados e recursos do seu workspace no dashboard do MassFlow.', image: 'dashboard-demo.jpg', capture: false },
];

export default function WorkingProcess() {
  return (
    <section id="como-funciona" className="process-sec section-padding">
      <div className="container">
        <div className="sec-title text-center reveal reveal-up">
          <h2 className="title">Tudo o que sua operação precisa para escalar em um só lugar</h2>
        </div>
        <div className="process-grid">
          {previews.map((preview) => (
            <article className="process-card reveal reveal-up" key={preview.image}>
              <div className="card-header-info">
                <h3 className="process-card-title">{preview.title}</h3>
                <p className="process-card-desc">{preview.description}</p>
              </div>
              <figure className="process-app-preview">
                <div className={preview.capture ? 'app-capture-window' : 'app-dashboard-window'}>
                  <img src={'/app/' + preview.image} alt={'Tela do MassFlow: ' + preview.title} loading="lazy" decoding="async" />
                </div>
                <figcaption>{preview.capture ? 'Captura da plataforma' : 'Dados demonstrativos'}</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
