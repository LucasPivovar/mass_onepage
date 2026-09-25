import './Status.css';
export default function Status() {
  return <section className="status-sec section-padding"><div className="container">
    <div className="status-header text-center"><span className="badge badge-status">Suporte MassFlow</span>
      <h1 className="status-title">Status do Sistema</h1>
      <p>Esta página ainda não oferece monitoramento público em tempo real. Para consultar a disponibilidade dos serviços, entre em contato com nossa equipe.</p>
    </div>
    <div className="status-action text-center"><a href="/#contato" className="btn btn-primary">Falar com a equipe</a></div>
  </div></section>;
}
