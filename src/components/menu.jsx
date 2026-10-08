import { Link } from "react-router-dom";
import "./menu.css";
 
export default function Menu() {
  const tipo = localStorage.getItem("tipo");
 
  return (
    <nav className="menu">
 
      <h1>SaúdePlus</h1>
 
      <div className="links">
 
        <Link to="/inicio">
          Página Inicial
        </Link>
 
        {tipo === "paciente" && (
          <>
            <Link to="/paciente">
              Meu Perfil
            </Link>
 
            <Link to="/agendamentos">
              Meus Agendamentos
            </Link>
 
            <Link to="/planos">
              Meu Plano
            </Link>
          </>
        )}
 
        {tipo === "medico" && (
          <>
            <Link to="/medico">
              Área do Médico
            </Link>
 
            <Link to="/minhas-consultas">
            Minhas Consultas
            </Link>
 
            <Link to="/pacientes">
              Pacientes
            </Link>
          </>
        )}
 
        {tipo === "recepcionista" && (
          <>
            <Link to="/recepcionista">
              Área da Recepcionista
            </Link>
 
            <Link to="/consultas">
              Consultas
            </Link>
 
            <Link to="/pacientes">
              Pacientes
            </Link>
          </>
        )}
 
      </div>
 
    </nav>
  );
}