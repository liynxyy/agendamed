import Menu from '../components/Menu';
 
export default function Inicio() {
  return (
    <div>
      <Menu />
      <main className="conteudo">
        <h1>Bem-vindo à Agenda Médica</h1>
        <p>Sistema para gerenciar consultas, horários e atendimentos de forma prática e organizada.</p>
 
        <div className="info">
          <h3>Funcionalidades:</h3>
          <ul>
            <li>Agendar consultas</li>
            <li>Visualizar horários disponíveis</li>
            <li>Editar ou cancelar agendamentos</li>
            <li>Histórico de atendimentos</li>
          </ul>
        </div>
      </main>
    </div>
  );
}