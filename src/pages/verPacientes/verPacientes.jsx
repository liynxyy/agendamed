import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import "./verPacientes.css";
 
export default function VerPacientes() {
  const navigate = useNavigate();
 
  const pacientes = [
    {
      nome: "Sabrina Alves",
      email: "sabrina@email.com",
      telefone: "(11) 99999-1111",
    },
    {
      nome: "Jose Nunes",
      email: "jose@email.com",
      telefone: "(11) 98888-2222",
    },
  ];
 
  return (
    <div>
      <Menu />
 
      <main className="pacientes-container">
 
        <h1>Pacientes</h1>
 
        <p>
          Consulte os pacientes cadastrados no sistema.
        </p>
 
        <div className="pacientes-lista">
 
          {pacientes.map((paciente, index) => (
            <div className="paciente-card" key={index}>
 
              <h2>{paciente.nome}</h2>
 
              <p>
                <strong>Email:</strong>{" "}
                {paciente.email}
              </p>
 
              <p>
                <strong>Telefone:</strong>{" "}
                {paciente.telefone}
              </p>
 
            </div>
          ))}
 
        </div>
      <button
  className="botao-voltar"
  onClick={() => {
    const tipo = localStorage.getItem("tipo");
 
    if (tipo === "recepcionista") {
      navigate("/recepcionista");
    } else if (tipo === "medico") {
      navigate("/medico");
    } else {
      navigate("/inicio");
    }
  }}
>
  Voltar
</button>
 
      </main>
    </div>
  );
}