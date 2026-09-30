import { Link } from "react-router-dom";
import "./menu.css";
 
export default function Menu() {
  return (
    <nav className="menu">
      <h1>Agenda Médica</h1>
 
      <div className="links">
        <Link to="/">Página Inicial</Link>
        <Link to="/agendamentos">Meus Agendamentos</Link>
 
        <Link to="/paciente">Paciente</Link>
        <Link to="/medico">Médico</Link>
        <Link to="/recepcionista">Recepcionista</Link>
      </div>
    </nav>
  );
}