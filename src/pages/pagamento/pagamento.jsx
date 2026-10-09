import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./pagamento.css";
 
export default function Pagamento() {
  const navigate = useNavigate();
  const location = useLocation();
 
  const plano = location.state?.plano;
 
  const [metodo, setMetodo] = useState("pix");
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");
  const [mensagem, setMensagem] = useState("");
 
  if (!plano) {
    return (
      <div className="pagamento-page">
        <div className="pagamento-box">
          <h1>Nenhum plano selecionado</h1>
 
          <p>Escolha um plano antes de continuar.</p>
 
          <button onClick={() => navigate("/planos")}>
            Ver planos
          </button>
        </div>
      </div>
    );
  }
 
  function finalizarPagamento(e) {
    e.preventDefault();
    setMensagem("");
 
    if (metodo === "cartao") {
      if (
        !nomeCartao.trim() ||
        !numeroCartao.trim() ||
        !validade.trim() ||
        !cvv.trim()
      ) {
        setMensagem("Preencha todos os campos do cartão.");
        return;
      }
    }
 
    // =========================
    // SALVAR PLANO DO PACIENTE
    // =========================
 
    const email = localStorage.getItem("emailLogado");
 
    if (email) {
      localStorage.setItem(`plano_${email}`, JSON.stringify(plano));
    }
 
    // Simulação para o projeto acadêmico.
    // Não realiza cobrança nem salva dados bancários.
 
    navigate("/pagamento-confirmado", {
      state: {
        plano: plano,
        metodo: metodo,
      },
    });
  }
 
  return (
    <div className="pagamento-page">
 
      <div className="pagamento-box">
 
        <h1>Pagamento</h1>
 
        <p className="pagamento-subtitulo">
          Confira seu plano e escolha a forma de pagamento.
        </p>
 
        <div className="resumo-plano">
 
          <span>Plano escolhido</span>
 
          <h2>{plano.nome}</h2>
 
          <strong>
            {plano.preco}
            <small>{plano.periodo}</small>
          </strong>
 
          <p>{plano.descricao}</p>
 
        </div>
 
        <form onSubmit={finalizarPagamento}>
 
          <h3>Forma de pagamento</h3>
 
          <div className="metodos-pagamento">
 
            <label className={metodo === "pix" ? "metodo ativo" : "metodo"}>
 
              <input
                type="radio"
                name="metodo"
                value="pix"
                checked={metodo === "pix"}
                onChange={(e) => setMetodo(e.target.value)}
              />
 
              PIX
 
            </label>
 
            <label className={metodo === "cartao" ? "metodo ativo" : "metodo"}>
 
              <input
                type="radio"
                name="metodo"
                value="cartao"
                checked={metodo === "cartao"}
                onChange={(e) => setMetodo(e.target.value)}
              />
 
              Cartão
 
            </label>
 
            <label className={metodo === "boleto" ? "metodo ativo" : "metodo"}>
 
              <input
                type="radio"
                name="metodo"
                value="boleto"
                checked={metodo === "boleto"}
                onChange={(e) => setMetodo(e.target.value)}
              />
 
              Boleto
 
            </label>
 
          </div>
 
          {metodo === "pix" && (
            <div className="detalhes-pagamento">
 
              <h3>Pagamento via PIX</h3>
 
              <p>
                Em um sistema real, o código PIX seria gerado por um
                serviço de pagamento. Aqui, o pagamento é simulado.
              </p>
 
            </div>
          )}
 
          {metodo === "cartao" && (
            <div className="campos-cartao">
 
              <label>Nome impresso no cartão</label>
 
              <input
                type="text"
                placeholder="Nome do titular"
                value={nomeCartao}
                onChange={(e) => setNomeCartao(e.target.value)}
              />
 
              <label>Número do cartão</label>
 
              <input
                type="text"
                placeholder="Digite o número do cartão"
                value={numeroCartao}
                onChange={(e) => setNumeroCartao(e.target.value)}
                maxLength={19}
                inputMode="numeric"
              />
 
              <div className="dados-cartao">
 
                <div>
 
                  <label>Validade</label>
 
                  <input
                    type="text"
                    placeholder="MM/AA"
                    value={validade}
                    onChange={(e) => setValidade(e.target.value)}
                    maxLength={5}
                  />
 
                </div>
 
                <div>
 
                  <label>CVV</label>
 
                  <input
                    type="password"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={4}
                    inputMode="numeric"
                  />
 
                </div>
 
              </div>
 
              <p className="aviso-seguranca">
                Demonstração acadêmica. Não use dados reais de cartão.
              </p>
 
            </div>
          )}
 
          {metodo === "boleto" && (
            <div className="detalhes-pagamento">
 
              <h3>Pagamento via boleto</h3>
 
              <p>
                Em uma integração real, o boleto seria emitido por um
                serviço de pagamento. Nenhum boleto será gerado nesta
                demonstração.
              </p>
 
            </div>
          )}
 
          {mensagem && (
            <p className="erro-pagamento">
              {mensagem}
            </p>
          )}
 
          <button
            type="submit"
            className="botao-pagar"
          >
            Confirmar pagamento
          </button>
 
          <button
            type="button"
            className="botao-voltar"
            onClick={() =>
              navigate("/confirmar-plano", {
                state: { plano: plano },
              })
            }
          >
            Voltar para o plano
          </button>
 
        </form>
 
      </div>
 
    </div>
  );
}