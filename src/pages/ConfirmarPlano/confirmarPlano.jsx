import { useLocation, useNavigate } from "react-router-dom";
import "./confirmarPlano.css";
 
export default function ConfirmarPlano() {
  const location = useLocation();
  const navigate = useNavigate();
 
  const plano = location.state?.plano;
 
  // Se alguém entrar diretamente na página sem escolher um plano
  if (!plano) {
    return (
      <div className="confirmar-page">
        <div className="confirmar-box">
          <h2>Nenhum plano selecionado</h2>
 
          <p>
            Escolha um plano antes de continuar.
          </p>
 
          <button onClick={() => navigate("/planos")}>
            Ver planos
          </button>
        </div>
      </div>
    );
  }
 
  function continuarPagamento() {
    navigate("/pagamento", {
      state: {
        plano: plano,
      },
    });
  }
 
  return (
    <div className="confirmar-page">
 
      <div className="confirmar-box">
 
        <h1>Confirmar plano</h1>
 
        <p className="confirmar-subtitulo">
          Confira os detalhes do plano escolhido.
        </p>
 
        <div className="plano-escolhido">
 
          <h2>{plano.nome}</h2>
 
          <div className="preco-confirmacao">
            <strong>{plano.preco}</strong>
            <span>{plano.periodo}</span>
          </div>
 
          <p>{plano.descricao}</p>
 
          <h3>Benefícios:</h3>
 
          <ul>
            {plano.beneficios.map((beneficio, index) => (
              <li key={index}>
                ✓ {beneficio}
              </li>
            ))}
          </ul>
 
        </div>
 
        <div className="confirmar-botoes">
 
          <button
            className="botao-voltar"
            onClick={() => navigate("/planos")}
          >
            Voltar
          </button>
 
          <button
            className="botao-continuar"
            onClick={continuarPagamento}
          >
            Continuar para pagamento
          </button>
 
        </div>
 
      </div>
 
    </div>
  );
}