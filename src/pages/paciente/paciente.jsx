import Menu from "../../components/Menu";
import { useEffect, useState } from "react";
import "./paciente.css";

export default function Paciente() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const consultasSalvas =
      JSON.parse(localStorage.getItem("consultas")) || [];

    const emailLogado = localStorage.getItem("emailLogado");

    const minhasConsultas = consultasSalvas.filter(
      (consulta) => consulta.emailPaciente === emailLogado
    );

    setConsultas(minhasConsultas);
  }, []);

  return (
    <div>
      <Menu />

      <main className="container">

        <h1>Área do Paciente</h1>

        <p>
          Consulte seus agendamentos.
        </p>

        <h2>Meus Agendamentos</h2>

        {consultas.length === 0 ? (
          <div className="card">
            <p>Nenhuma consulta agendada.</p>
          </div>
        ) : (
          consultas.map((consulta, index) => (
            <div className="card" key={index}>

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

            </div>
          ))
        )}

      </main>
    </div>
  );
}