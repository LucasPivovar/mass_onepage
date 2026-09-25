import './WorkingProcess.css';

const steps = [
  {
    step: '01',
    title: 'Campanhas inteligentes',
    description: 'Organize o planejamento das campanhas e siga para Transmissões para configurar contas, modelos e envios em um único lugar.',
  },
  {
    step: '02',
    title: 'Automação com IA',
    description: 'Configure agentes, conecte bases de conhecimento e acompanhe a inteligência dos seus fluxos na Central de IA.',
  },
  {
    step: '03',
    title: 'Visão geral da operação',
    description: 'Acompanhe leads, mensagens, canais conectados e recursos do seu workspace no dashboard do MassFlow.',
  },
];

export default function WorkingProcess() {
  return (
    <section id="como-funciona" className="process-sec section-padding">
      <div className="container">
        <div className="sec-title text-center reveal reveal-up">
          <h2 className="title">Tudo o que sua operação precisa para escalar em um só lugar</h2>
        </div>
        <div className="process-grid">
          {steps.map((item) => (
            <article className="process-card reveal reveal-up" key={item.step}>
              <div className="card-header-info">
                <span className="step-label">Passo {item.step}</span>
                <h3 className="process-card-title">{item.title}</h3>
                <p className="process-card-desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

