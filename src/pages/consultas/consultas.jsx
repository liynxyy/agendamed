import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import "./consultas.css";
 
export default function Consultas() {
  const navigate = useNavigate();
 
  const [consultas, setConsultas] = useState([]);
 
  useEffect(() => {
    const consultasSalvas =
      JSON.parse(localStorage.getItem("consultas")) || [];
 
    setConsultas(consultasSalvas);
  }, []);
 
  return (
    <div>
      <Menu />
 
      <main className="consultas-container">
 
        <h1>Consultas</h1>
 
        <p>
          Consulte e gerencie os agendamentos.
        </p>
 
        {consultas.length === 0 ? (
          <div className="sem-consultas">
            <p>Nenhuma consulta agendada.</p>
          </div>
        ) : (
          consultas.map((consulta, index) => (
            <div className="consulta-card" key={index}>
 
              <p>
                <strong>Paciente:</strong>{" "}
                {consulta.paciente}
              </p>
 
              <p>
                <strong>Médico:</strong>{" "}
                {consulta.medico}
              </p>
 
              <p>
                <strong>Data:</strong>{" "}
                {consulta.data}
              </p>
 
              <p>
                <strong>Horário:</strong>{" "}
                {consulta.horario}
              </p>
 
              <div className="botoes-consulta">
 
               <button
  onClick={() => {
    const novaData = window.prompt(
      "Digite a nova data (AAAA-MM-DD):",
      consulta.data
    );
 
    if (!novaData) {
      return;
    }
 
    const novoHorario = window.prompt(
      "Digite o novo horário (HH:MM):",
      consulta.horario
    );
 
    if (!novoHorario) {
      return;
    }
 
    const novasConsultas = [...consultas];
 
    novasConsultas[index] = {
      ...novasConsultas[index],
      data: novaData,
      horario: novoHorario,
    };
 
    localStorage.setItem(
      "consultas",
      JSON.stringify(novasConsultas)
    );
 
    setConsultas(novasConsultas);
  }}
>
  Remarcar
</button>
 
                <button
  onClick={() => {
    const confirmar = window.confirm(
      "Tem certeza que deseja cancelar esta consulta?"
    );
 
    if (!confirmar) {
      return;
    }
 
    const novasConsultas = consultas.filter(
      (_, i) => i !== index
    );
 
    localStorage.setItem(
      "consultas",
      JSON.stringify(novasConsultas)
    );
 
    setConsultas(novasConsultas);
  }}
>
  Cancelar
</button>
 
              </div>
 
            </div>
          ))
        )}
 
        <button
          className="botao-voltar"
          onClick={() => navigate("/recepcionista")}
        >
          Voltar
        </button>
 
      </main>
    </div>
  );
}