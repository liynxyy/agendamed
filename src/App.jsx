import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Inicio from "./pages/inicio";
import Agendamentos from "./pages/agendamentos";
import Paciente from "./pages/paciente";
import Medico from "./pages/medico";
import Recepcionista from "./pages/recepcionista";
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/paciente" element={<Paciente />} />
        <Route path="/medico" element={<Medico />} />
        <Route path="/recepcionista" element={<Recepcionista />} />
      </Routes>
    </Router>
  );
}
 
export default App;