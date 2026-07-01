import Menu from '../components/Menu';
 
export default function Agendamentos() {
  return (
    <div>
      <Menu />
      <main className="conteudo">
        <h1>Meus Agendamentos</h1>
 
        <div className="lista-agendamentos">
          <div className="card">
            <h4>Consulta com Clínico Geral</h4>
            <p>Data: 15/07/2026</p>
            <p>Horário: 09:00</p>
            <p>Local: Consultório 3</p>
          </div>
 
          <div className="card">
            <h4>Retorno - Cardiologia</h4>
            <p>Data: 22/07/2026</p>
            <p>Horário: 14:30</p>
            <p>Local: Consultório 7</p>
          </div>
        </div>
      </main>
    </div>
  );
}
 