import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import "./medico.css";
 
export default function Medico() {
  const navigate = useNavigate();
 
  return (
    <div>
      <Menu />
 
      <main className="container">
 
        <h1>Área do Médico</h1>
 
        <button onClick={() => alert("Consulta finalizada")}>
          Finalizar Consulta
        </button>
 
        <h2>Consultas do Dia</h2>
 
        <div className="card">
          <p>
            <strong>Paciente:</strong> Sabrina Alves
          </p>
 
          <p>
            <strong>Horário:</strong> 14:00
          </p>
 
          <p>
            <strong>Tipo:</strong> Consulta Geral
          </p>
        </div>
 
        <div className="card">
          <p>
            <strong>Paciente:</strong> Jose Nunes
          </p>
 
          <p>
            <strong>Horário:</strong> 09:30
          </p>
 
          <p>
            <strong>Tipo:</strong> Odontologia
          </p>
        </div>
 
        <div className="Botoes">
 
          <button onClick={() => navigate("/minhas-consultas")}>
            Minhas Consultas
          </button>
 
          <button>
            Finalizar Atendimento
          </button>
 
        </div>
 
      </main>
    </div>
  );
}