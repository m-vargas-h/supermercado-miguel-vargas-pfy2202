import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MenuInferior from './components/MenuInferior'
import Home from './components/pages/Home'
import QuienesSomos from './components/pages/QuienesSomos'
import PreguntasFrecuentes from './components/pages/PreguntasFrecuentes'
import NoEncontrada from './components/pages/NoEncontrada'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
        <MenuInferior />
      </div>
    </Router>
  )
}

export default App