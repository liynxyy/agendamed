import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio.jsx';
import Agendamentos from './pages/agendamentos.jsx';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
      </Routes>
    </Router>
  );
}
 
export default App;
 