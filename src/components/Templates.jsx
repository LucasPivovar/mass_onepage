import './Templates.css';

const screens = [
  { title: 'Dashboard em tempo real', image: 'dashboard-demo.jpg', capture: false },
  { title: 'Análise de métricas e performance', image: 'analise.png', capture: false },
  { title: 'Planejamento de campanhas', image: 'campanhas.png', capture: true },
  { title: 'Relatórios avançados', image: 'relatorios.png', capture: false },
  { title: 'Central de inteligência artificial', image: 'central-ia.png', capture: true },
];

export default function Templates() {
  return (
    <section id="templates" className="templates-sec section-padding">
      <div className="container">
        <div className="sec-title text-center sec-title-light reveal">
          <h2 className="title">Conheça o MassFlow por dentro.</h2>
          <p className="subtitle">Campanhas, inteligência artificial e indicadores em uma única plataforma.</p>
        </div>
      </div>
      <div className="carousel-wrapper reveal-carousel">
        <div className="carousel-track">
          {[0, 1].map((copy) => screens.map((screen) => (
            <div className="carousel-slide" key={copy + screen.image} aria-hidden={copy === 1 ? true : undefined}>
              <div className="project-card">
                <div className={'project-app-image ' + (screen.capture ? 'is-capture' : '')}>
                  <img src={'/app/' + screen.image} alt={copy === 0 ? screen.title + ' — visualização do MassFlow' : ''} loading="lazy" decoding="async" />
                </div>
                <div className="project-info"><h4 className="title">{screen.title}</h4></div>
              </div>
            </div>
          )))}
        </div>
      </div>
    </section>
  );
}
