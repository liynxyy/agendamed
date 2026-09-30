import Menu from "../../components/menu";
 
export default function Medico() {
  return (
    <div>
      <Menu />
 
      <main className="container">
        <h1>Área do Médico</h1>
 
        <h2>Consultas do Dia</h2>
 
        <div className="card">
          <p><strong>Paciente:</strong> Sabrina Alves</p>
          <p><strong>Horário:</strong> 14:00</p>
          <p><strong>Tipo:</strong> Consulta Geral</p>
        </div>
 
        <div className="card">
          <p><strong>Paciente:</strong> Jose nunes</p>
          <p><strong>Horário:</strong> 09:30</p>
          <p><strong>Tipo:</strong> Odontologia</p>
        </div>
      </main>
    </div>
  );
}