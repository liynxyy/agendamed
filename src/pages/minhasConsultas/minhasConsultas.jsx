import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import "./minhasConsultas.css";
 
export default function MinhasConsultas() {
  const navigate = useNavigate();
 
  const consultas = [
    {
      paciente: "Sabrina Alves",
      data: "2026-10-11",
      horario: "14:00",
      tipo: "Consulta Geral",
    },
    {
      paciente: "Jose Nunes",
      data: "2026-12-01",
      horario: "09:30",
      tipo: "Odontologia",
    },
  ];
 
  return (
    <div>
      <Menu />
 
      <main className="minhas-consultas-container">
 
        <h1>Minhas Consultas</h1>
 
        <p>
          Consulte os atendimentos agendados para você.
        </p>
 
        {consultas.map((consulta, index) => (
          <div className="minha-consulta-card" key={index}>
 
            <p>
              <strong>Paciente:</strong>{" "}
              {consulta.paciente}
            </p>
 
            <p>
              <strong>Data:</strong>{" "}
              {consulta.data}
            </p>
 
            <p>
              <strong>Horário:</strong>{" "}
              {consulta.horario}
            </p>
 
            <p>
              <strong>Tipo:</strong>{" "}
              {consulta.tipo}
            </p>
 
          </div>
        ))}
 
        <button
          className="botao-voltar"
          onClick={() => navigate("/medico")}
        >
          Voltar
        </button>
 
      </main>
    </div>
  );
}