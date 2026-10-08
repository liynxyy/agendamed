import { useLocation, useNavigate } from "react-router-dom";
import "./pagamentoConfirmado.css";
 
export default function PagamentoConfirmado() {
  const location = useLocation();
  const navigate = useNavigate();
 
  const plano = location.state?.plano;
  const metodo = location.state?.metodo;
 
  const nomeMetodo = {
    pix: "PIX",
    cartao: "Cartão de crédito",
    boleto: "Boleto bancário",
  };
 
  // Caso a pessoa tente acessar a página sem realizar o pagamento
  if (!plano) {
    return (
      <div className="pagamento-confirmado-page">
        <div className="pagamento-confirmado-box">
          <h1>Nenhum pagamento encontrado</h1>
 
          <p>
            Escolha um plano para continuar.
          </p>
 
          <button onClick={() => navigate("/planos")}>
            Ver planos
          </button>
        </div>
      </div>
    );
  }
 
  function voltarParaPaciente() {
    navigate("/paciente");
  }
 
  return (
    <div className="pagamento-confirmado-page">
 
      <div className="pagamento-confirmado-box">
 
        <div className="icone-sucesso">
          ✓
        </div>
 
        <h1>Pagamento confirmado!</h1>
 
        <p className="mensagem-sucesso">
          Seu plano foi ativado com sucesso.
        </p>
 
        <div className="resumo-pagamento">
 
          <div className="item-resumo">
            <span>Plano</span>
            <strong>{plano.nome}</strong>
          </div>
 
          <div className="item-resumo">
            <span>Valor</span>
            <strong>
              {plano.preco}
              <small>{plano.periodo}</small>
            </strong>
          </div>
 
          <div className="item-resumo">
            <span>Forma de pagamento</span>
            <strong>
              {nomeMetodo[metodo] || "Não informado"}
            </strong>
          </div>
 
          <div className="item-resumo">
            <span>Status</span>
            <strong className="status">
              Pago
            </strong>
          </div>
 
        </div>
 
        <p className="texto-final">
          Agora você já pode aproveitar os benefícios do seu plano
          e realizar seus agendamentos.
        </p>
 
        <button
          className="botao-paciente"
          onClick={voltarParaPaciente}
        >
          Ir para minha área
        </button>
 
      </div>
 
    </div>
  );
}