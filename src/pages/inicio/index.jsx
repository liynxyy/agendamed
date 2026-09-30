import Menu from "../../components/menu";
 
export default function Inicio() {
  return (
    <div>
      <Menu />
 
      <main className="container">
        <h1>Bem-vindo à Agenda Médica 🏥</h1>
        <p>
          Sistema para gerenciar consultas, pacientes e atendimentos de forma prática.
        </p>
 
        <div className="cards">
          <div className="card">
            <h3>👤 Pacientes</h3>
            <p>Visualize e gerencie seus dados e consultas.</p>
          </div>
 
          <div className="card">
            <h3>🩺 Médicos</h3>
            <p>Acompanhe consultas e atendimentos do dia.</p>
          </div>
 
          <div className="card">
            <h3>📅 Agendamentos</h3>
            <p>Organize horários e marque consultas.</p>
          </div>
 
          <div className="card">
            <h3>🧾 Recepção</h3>
            <p>Controle e gerencie todos os atendimentos.</p>
          </div>
        </div>
      </main>
    </div>
  );
}