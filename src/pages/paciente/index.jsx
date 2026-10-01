import Menu from "../../components/Menu";
import { useState } from "react";
import "./style.css";
 
export default function Paciente() {
  const [nome, setNome] = useState("");
const [data, setData] = useState("");
const [hora, setHora] = useState("");
const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Menu />
 
      <main className="container">
        <h1>Área do Paciente</h1>
        <p>Agende suas consultas de forma rapida e facil</p>

        <button onClick={() => setIsOpen(true)}>
  Agendar Consulta
</button>

{isOpen && (
  <div className="modal">
    <h2>Nova Consulta</h2>
 
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Consulta agendada!");
        setIsOpen(false);
      }}
    >
      <input
        type="text"
        placeholder="Nome do paciente"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
 
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
 
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />
 
      <button type="submit">Confirmar</button>
    </form>
 
    <button onClick={() => setIsOpen(false)}>
      Fechar
    </button>
  </div>
)}
 
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