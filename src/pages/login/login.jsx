import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
 
export default function Login() {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("paciente");
  const [erro, setErro] = useState("");
 
  function handleLogin(e) {
    e.preventDefault();
 
    setErro("");
 
    if (!email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }
 
    // Salva o e-mail do usuário que está logado
    localStorage.setItem("emailLogado", email);
 
    // Salva o tipo de usuário
    localStorage.setItem("tipo", tipo);
 
    // =========================
    // PACIENTE
    // =========================
    if (tipo === "paciente") {
 
      // Verifica se esse paciente já possui um plano
      const planoSalvo = localStorage.getItem(`plano_${email}`);
 
      if (planoSalvo) {
        // Já possui plano → vai direto para a área do paciente
        navigate("/paciente");
      } else {
        // Ainda não possui plano → escolhe um plano
        navigate("/planos");
      }
 
      return;
    }
 
    // =========================
    // MÉDICO
    // =========================
    if (tipo === "medico") {
      navigate("/medico");
      return;
    }
 
    // =========================
    // RECEPCIONISTA
    // =========================
    if (tipo === "recepcionista") {
      navigate("/recepcionista");
      return;
    }
  }
 
  return (
    <div className="login-container">
 
      <form className="login-box" onSubmit={handleLogin}>
 
        <h2>Login</h2>
 
        {erro && <p className="erro">{erro}</p>}
 
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
 
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
 
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="paciente">Paciente</option>
          <option value="medico">Médico</option>
          <option value="recepcionista">Recepcionista</option>
        </select>
 
        <button type="submit">
          Entrar
        </button>
 
        {/* CADASTRO */}
        <div className="cadastro-link">
 
          <p>
            Ainda não possui cadastro?
          </p>
 
          <button
            type="button"
            onClick={() => navigate("/cadastro")}
          >
            Cadastre-se
          </button>
 
        </div>
 
      </form>
 
    </div>
  );
}