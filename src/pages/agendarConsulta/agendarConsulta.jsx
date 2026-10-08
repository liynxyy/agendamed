import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import "./agendarConsulta.css";
 
export default function AgendarConsulta() {
  const navigate = useNavigate();
 
  const [paciente, setPaciente] = useState("");
  const [medico, setMedico] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [mensagem, setMensagem] = useState("");
 
  function agendarConsulta(e) {
  e.preventDefault();
 
  if (!paciente || !medico || !data || !horario) {
    setMensagem("Preencha todos os campos!");
    return;
  }
 
  const novaConsulta = {
    paciente: paciente,
    medico: medico,
    data: data,
    horario: horario,
  };
 
  const consultasSalvas =
    JSON.parse(localStorage.getItem("consultas")) || [];
 
  consultasSalvas.push(novaConsulta);
 
  localStorage.setItem(
    "consultas",
    JSON.stringify(consultasSalvas)
  );
 
  setMensagem("Consulta agendada com sucesso!");
 
  // Limpa os campos
  setPaciente("");
  setMedico("");
  setData("");
  setHorario("");
  }
 
  return (
    <div>
      <Menu />
 
      <main className="agendar-container">
 
        <h1>Agendar Consulta</h1>
 
        <p>
          Preencha os dados da consulta abaixo.
        </p>
 
        <form
          className="agendar-form"
          onSubmit={agendarConsulta}
        >
 
          <label>Paciente</label>
 
          <select
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
          >
            <option value="">
              Selecione o paciente
            </option>
 
            <option value="Sabrina Alves">
              Sabrina Alves
            </option>
 
            <option value="Jose Nunes">
              Jose Nunes
            </option>
          </select>
 
 
          <label>Médico</label>
 
          <select
            value={medico}
            onChange={(e) => setMedico(e.target.value)}
          >
            <option value="">
              Selecione o médico
            </option>
 
            <option value="Dr. Fernando Santos">
              Dr. Fernando Santos
            </option>
 
            <option value="Dra. Bruna Dante">
              Dra. Bruna Dante
            </option>
          </select>
 
 
          <label>Data</label>
 
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
 
 
          <label>Horário</label>
 
          <input
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
 
 
          {mensagem && (
            <p className="mensagem">
              {mensagem}
            </p>
          )}
 
 
          <button type="submit">
            Agendar Consulta
          </button>
 
          <button
            type="button"
            className="voltar"
            onClick={() => navigate("/recepcionista")}
          >
            Voltar
          </button>
 
        </form>
 
      </main>
    </div>
  );
}