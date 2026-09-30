import Menu from "../../components/Menu";
 
export default function Paciente() {
  return (
    <div>
      <Menu />
 
      <main className="container">
        <h1>Área do Paciente</h1>
 
        <h2>Meus Agendamentos</h2>
 
        <div className="card">
          <p><strong>Médico:</strong> Dr. Fernando Santos</p>
          <p><strong>Data:</strong> 2026-10-11</p>
          <p><strong>Horário:</strong> 14:00</p>
          <p><strong>Local:</strong> Consultório 1</p>
        </div>
 
        <div className="card">
          <p><strong>Médico:</strong> Dra. Bruna Dante</p>
          <p><strong>Data:</strong> 2026-12-01</p>
          <p><strong>Horário:</strong> 09:30</p>
          <p><strong>Local:</strong> Consultório 2</p>
        </div>
        <div className="Botoes">
        <button> Agendar Consulta</button>
        <button> Cancelar Consulta</button>
        </div>
      </main>
    </div>
  );
}