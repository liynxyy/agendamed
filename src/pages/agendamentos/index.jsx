import Menu from "../../components/Menu";
 
export default function Agendamentos() {
  return (
    <div>
      <Menu />
      <main className="conteudo">
        <h1>Meus Agendamentos</h1>
 
        <div className="lista-agendamentos">
          <div className="card">
            <h4>Consulta com Clínico Geral</h4>
            <p>Dr. Fernando Santos</p>
            <p>Data: 2026-10-11</p>
            <p>Horário: 14:00</p>
            <p>Local: Consultório 1</p>
          </div>
 
          <div className="card">
            <h4>Odontologia</h4>
            <p>Data: Bruna Alves</p>
            <p>Data: 2026-12-01</p>
            <p>Horário: 09:30</p>
            <p>Local: Consultório 2</p>
          </div>
        </div>
      </main>
    </div>
  );
}
 