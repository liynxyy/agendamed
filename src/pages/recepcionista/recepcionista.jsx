import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import "./recepcionista.css";
 
export default function Recepcionista() {
  const navigate = useNavigate();
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

          <button onClick={() => navigate("/medicos")}>
  Ver Médicos
</button>
       <button onClick={() => navigate("/agendar-consulta")}>
  Agendar Consulta
</button>

<button onClick={() => navigate("/consultas")}>
    Consultas
  </button>
  
  <button onClick={() => navigate("/pacientes")}>
  Ver Pacientes
</button>

        <button> Remarcar</button>
        <button>Cancelar</button>
        </div>
      </main>
    </div>
  );
}