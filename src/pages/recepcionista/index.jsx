import Menu from "../../components/Menu";
import "./style.css";
 
export default function Recepcionista() {
  return (
    <div>
      <Menu />
 
      <main className="container">
        <h1>Área da Recepcionista</h1>

        <button onClick={() => alert("Consulta criada")}>
  Nova Consulta
</button>
 
        <h2>Gerenciar Agendamentos</h2>
 
        <div className="card">
          <p><strong>Paciente:</strong> Sabrina Alves</p>
          <p><strong>Médico:</strong> Dr. Fernando Santos</p>
          <p><strong>Data:</strong> 2026-10-11</p>
          <p><strong>Horário:</strong> 14:00</p>
        </div>
 
        <div className="card">
          <p><strong>Paciente:</strong> Jose nunes</p>
          <p><strong>Médico:</strong> Dra. Bruna Dante</p>
          <p><strong>Data:</strong> 2026-12-01</p>
          <p><strong>Horário:</strong> 09:30</p>
        </div>
        <div className="Botoes">
        <button>Agendar Consulta</button>
        <button> Remarcar</button>
        <button>Cancelar</button>
        </div>
      </main>
    </div>
  );
}