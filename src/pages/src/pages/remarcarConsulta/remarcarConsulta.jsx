import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import "./remarcarConsulta.css";

export default function RemarcarConsulta() {
  const navigate = useNavigate();

  const [consultas, setConsultas] = useState([]);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const consultasSalvas =
      JSON.parse(localStorage.getItem("consultas")) || [];

    setConsultas(consultasSalvas);
  }, []);

  function remarcar(index) {
    const novaData = window.prompt(
      "Digite a nova data (AAAA-MM-DD):",
      consultas[index].data
    );

    if (!novaData) {
      return;
    }

    const novoHorario = window.prompt(
      "Digite o novo horário (HH:MM):",
      consultas[index].horario
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
    setMensagem("Consulta remarcada com sucesso!");
  }

  return (
    <div>
      <Menu />

      <main className="remarcar-container">

        <h1>Remarcar Consulta</h1>

        <p>
          Selecione uma consulta para alterar a data e o horário.
        </p>

        {mensagem && (
          <p className="mensagem">
            {mensagem}
          </p>
        )}

        {consultas.length === 0 ? (
          <div className="consulta-card">
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

              <button onClick={() => remarcar(index)}>
                Remarcar
              </button>

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