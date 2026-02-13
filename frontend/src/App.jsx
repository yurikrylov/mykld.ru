import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Walk from './pages/Walk';
import Drink from './pages/Drink';
import Run from './pages/Run';
import RunCard from './pages/RunCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/run" element={<Run />} />
          <Route path="/run/:id" element={<RunCard />} />
          <Route path="/walk" element={<Walk />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
