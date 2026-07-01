import { Link } from 'react-router-dom';
import './Menu.css';
 
export default function Menu() {
  return (
    <nav className="menu">
      <h2>Agenda Médica</h2>
      <div className="links">
        <Link to="/">Página Inicial</Link>
        <Link to="/agendamentos">Meus Agendamentos</Link>
      </div>
    </nav>
  );
}