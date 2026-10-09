import { useNavigate } from "react-router-dom";
import "./planos.css";
 
const planos = [
  {
    nome: "teste Gratis",
    preco: "R$ 0",
    periodo: "/mês",
    descricao: "Para quem está começando",
    beneficios: [
      "Até 3 agendamentos por mês",
      "Histórico de consultas",
      "Dados dos médicos",
      "Cancelamento de consultas",
    ],
  },
  {
    nome: "Básico",
    preco: "R$ 19,90",
    periodo: "/mês",
    descricao: "Para uso pessoal",
    beneficios: [
      "Agendamentos ilimitados",
      "Histórico completo",
      "Lembretes de consulta",
      "Cancelamento e reagendamento",
      "Médicos favoritos",
    ],
  },
  {
    nome: "Plus",
    preco: "R$ 34,90",
    periodo: "/mês",
    descricao: "Mais praticidade no dia a dia",
    beneficios: [
      "Tudo do plano Básico",
      "Prioridade nos agendamentos",
      "Notificações personalizadas",
      "Lista de espera",
      "Histórico médico organizado",
    ],
  },
  {
    nome: "Premium",
    preco: "R$ 59,90",
    periodo: "/mês",
    descricao: "A melhor experiência",
    destaque: true,
    beneficios: [
      "Tudo do plano Plus",
      "Agendamento prioritário",
      "Suporte prioritário",
      "Lembretes por e-mail",
      "Consultas de retorno incluídas",
      "Benefícios exclusivos",
    ],
  },
  {
    nome: "VIP",
    preco: "R$ 99,90",
    periodo: "/mês",
    descricao: "Experiência completa",
    beneficios: [
      "Tudo do plano Premium",
      "Máxima prioridade",
      "Atendimento exclusivo",
      "Retornos prioritários",
      "Suporte exclusivo",
      "Benefícios especiais",
    ],
  },
];
 
export default function Planos() {
 
  const navigate = useNavigate();
 
  function escolherPlano(plano) {
    navigate("/confirmar-plano", {
      state: {
        plano: plano,
      },
    });
  }
 
  return (
    <div className="planos-page">
 
      <div className="planos-header">
        <h1>Escolha seu plano</h1>
 
        <p>
          Encontre o plano ideal para cuidar da sua saúde.
        </p>
      </div>
 
      <div className="planos-container">
 
        {planos.map((plano) => (
 
          <div
            className={`plano-card ${
              plano.destaque ? "plano-destaque" : ""
            }`}
            key={plano.nome}
          >
 
            {plano.destaque && (
              <div className="plano-popular">
                MAIS POPULAR
              </div>
            )}
 
            <h2>{plano.nome}</h2>
 
            <p className="plano-descricao">
              {plano.descricao}
            </p>
 
            <div className="plano-preco">
 
              <strong>{plano.preco}</strong>
 
              <span>{plano.periodo}</span>
 
            </div>
 
            <ul>
 
              {plano.beneficios.map((beneficio, index) => (
 
                <li key={index}>
 
                  <span className="check">
                    ✓
                  </span>
 
                  {beneficio}
 
                </li>
 
              ))}
 
            </ul>
 
            <button
              onClick={() => escolherPlano(plano)}
            >
              Escolher plano
            </button>
 
          </div>
 
        ))}
 
      </div>
 
    </div>
  );
}