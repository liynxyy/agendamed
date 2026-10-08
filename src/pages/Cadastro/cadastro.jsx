import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cadastro.css";
 
export default function Cadastro() {
 
  const navigate = useNavigate();
 
  const [tipo, setTipo] = useState("paciente");
 
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
 
  const [crm, setCrm] = useState("");
  const [especialidade, setEspecialidade] = useState("");
 
  function cadastrar(e) {
    e.preventDefault();
 
    if (senha !== confirmarSenha) {
      alert("As senhas não são iguais.");
      return;
    }
 
    const usuario = {
      nome,
      email,
      senha,
      tipo,
      crm: tipo === "medico" ? crm : null,
      especialidade: tipo === "medico" ? especialidade : null,
    };
 
    console.log("Usuário cadastrado:", usuario);
 
    alert("Cadastro realizado com sucesso!");
 
    navigate("/");
  }
 
  return (
    <div className="cadastro-page">
 
      <div className="cadastro-container">
 
        <h1>Criar conta</h1>
 
        <p>Preencha os dados para realizar seu cadastro.</p>
 
        <form onSubmit={cadastrar}>
 
          <label>Nome completo</label>
 
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
 
          <label>E-mail</label>
 
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
 
          <label>Tipo de usuário</label>
 
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="paciente">Paciente</option>
            <option value="medico">Médico</option>
            <option value="recepcionista">Recepcionista</option>
          </select>
 
          {tipo === "medico" && (
            <>
              <label>CRM</label>
 
              <input
                type="text"
                placeholder="Digite o CRM"
                value={crm}
                onChange={(e) => setCrm(e.target.value)}
                required
              />
 
              <label>Especialidade</label>
 
              <input
                type="text"
                placeholder="Digite a especialidade"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
                required
              />
            </>
          )}
 
          <label>Senha</label>
 
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
 
          <label>Confirmar senha</label>
 
          <input
            type="password"
            placeholder="Digite sua senha novamente"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
 
          <button type="submit">
            Criar cadastro
          </button>
 
        </form>
 
        <div className="login-link">
 
          <p>Já possui uma conta?</p>
 
          <button
            type="button"
            onClick={() => navigate("/")}
          >
            Voltar para o login
          </button>
 
        </div>
 
      </div>
 
    </div>
  );
}
 