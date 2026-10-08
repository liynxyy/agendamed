import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import "./verMedicos.css";
 
export default function VerMedicos() {
  const navigate = useNavigate();
 
  const medicos = [
    {
      nome: "Dr. Fernando Santos",
      especialidade: "Clínico Geral",
      crm: "CRM 123456",
    },
    {
      nome: "Dra. Bruna Dante",
      especialidade: "Odontologia",
      crm: "CRM 654321",
    },
  ];
 
  return (
    <div>
      <Menu />
 
      <main className="medicos-container">
 
        <h1>Médicos</h1>
 
        <p>
          Consulte os médicos cadastrados no sistema.
        </p>
 
        <div className="medicos-lista">
 
          {medicos.map((medico, index) => (
            <div className="medico-card" key={index}>
 
              <h2>{medico.nome}</h2>
 
              <p>
                <strong>Especialidade:</strong>{" "}
                {medico.especialidade}
              </p>
 
              <p>
                <strong>CRM:</strong>{" "}
                {medico.crm}
              </p>
 
            </div>
          ))}
 
        </div>
 
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