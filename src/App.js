import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Series,Movies } from './pages';
import { Layout } from './components';

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/" element={<h2>Bienvenido a la Plataforma de Streaming</h2>} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
