import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
 
import Inicio from "./pages/inicio/inicio";
import Login from "./pages/login/login";
import Cadastro from "./pages/Cadastro/cadastro";
import Medico from "./pages/medico/medico";
import Paciente from "./pages/paciente/paciente";
import Recepcionista from "./pages/recepcionista/recepcionista";
 import AgendarConsulta from "./pages/agendarConsulta/agendarConsulta";
 import Consultas from "./pages/consultas/consultas";
 import VerPacientes from "./pages/verPacientes/verPacientes";
 import MinhasConsultas from "./pages/minhasConsultas/minhasConsultas";
 import VerMedicos from "./pages/verMedicos/verMedicos";

import Agendamentos from "./pages/agendamentos/agendamentos";
 
import Planos from "./pages/planos/planos";
import ConfirmarPlano from "./pages/ConfirmarPlano/confirmarPlano";
import Pagamento from "./pages/pagamento/pagamento";
import PagamentoConfirmado from "./pages/pagamentoConfirmado/pagamentoConfirmado";
 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
 
        {/* ABRIR O PROJETO → LOGIN */}
        <Route
          path="/"
          element={<Login />}
        />
 
        {/* INÍCIO */}
        <Route
          path="/inicio"
          element={<Inicio />}
        />
 
        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />
 
        {/* CADASTRO */}
        <Route
          path="/cadastro"
          element={<Cadastro />}
        />
 
        {/* ÁREAS DOS USUÁRIOS */}
        <Route
  path="/pacientes"
  element={
    localStorage.getItem("tipo") === "recepcionista" ||
    localStorage.getItem("tipo") === "medico" ? (
      <VerPacientes />
    ) : (
      <Navigate to="/inicio" />
    )
  }
/>

<Route
  path="/medicos"
  element={
    localStorage.getItem("tipo") === "recepcionista" ? (
      <VerMedicos />
    ) : (
      <Navigate to="/inicio" />
    )
  }
/>
 
 <Route
  path="/medico"
  element={
    localStorage.getItem("tipo") === "medico" ? (
      <Medico />
    ) : (
      <Navigate to="/inicio" />
    )
  }
/>
 
        <Route
  path="/recepcionista"
  element={
    localStorage.getItem("tipo") === "recepcionista" ? (
      <Recepcionista />
    ) : (
      <Navigate to="/inicio" />
    )
  }
/>

        <Route
  path="/agendar-consulta"
  element={<AgendarConsulta />}
        />

        <Route
  path="/consultas"
  element={<Consultas />}
        />


<Route
  path="/minhas-consultas"
  element={
    localStorage.getItem("tipo") === "medico" ? (
      <MinhasConsultas />
    ) : (
      <Navigate to="/inicio" />
    )
  }
/>

<Route
  path="/minhas-consultas"
  element={
    localStorage.getItem("tipo") === "medico" ? (
      <MinhasConsultas />
    ) : (
      <Navigate to="/inicio" />
    )
  }
/>
        <Route
  path="/pacientes"
  element={<VerPacientes />}
/>
 
 
        {/* AGENDAMENTOS */}
        <Route
          path="/agendamentos"
          element={<Agendamentos />}
        />
 
        {/* PLANOS */}
        <Route
          path="/planos"
          element={<Planos />}
        />
 
        {/* CONFIRMAR PLANO */}
        <Route
          path="/confirmar-plano"
          element={<ConfirmarPlano />}
        />
 
        {/* PAGAMENTO */}
        <Route
          path="/pagamento"
          element={<Pagamento />}
        />
 
        {/* PAGAMENTO CONFIRMADO */}
        <Route
          path="/pagamento-confirmado"
          element={<PagamentoConfirmado />}
        />
 
      </Routes>
    </BrowserRouter>
  );
}