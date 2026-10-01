import Menu from "../../components/Menu"
import "./style.css"
 
export default function Agendamentos() {
  return (
    <div>
      <Menu />
 
      <main className="container">
        <h1>Meus Agendamentos</h1>
 
        <div className="cards">
          <div className="card">
            <h4>Consulta com Clínico Geral</h4>
            <p><strong>Médico:</strong> Dr. Fernando Santos</p>
            <p><strong>Data:</strong> 2026-10-11</p>
            <p><strong>Horário:</strong> 14:00</p>
            <p><strong>Local:</strong> Consultório 1</p>
          </div>
 
          <div className="card">
            <h4>Odontologia</h4>
            <p><strong>Médico:</strong> Dra. Bruna Dante</p>
            <p><strong>Data:</strong> 2026-12-01</p>
            <p><strong>Horário:</strong> 09:30</p>
            <p><strong>Local:</strong> Consultório 2</p>
          </div>
        </div>
 
        <div className="botoes">
          <button>Nova Consulta</button>
          <button className="cancelar">Cancelar</button>
        </div>
 
      </main>
    </div>
  )
}
 