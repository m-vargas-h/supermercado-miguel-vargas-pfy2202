import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import datos from './datos.json'
import Header from './components/Header'
import MenuInferior from './components/MenuInferior'
import Home from './components/pages/Home'
import DetalleProducto from './components/pages/DetalleProducto'
import QuienesSomos from './components/pages/QuienesSomos'
import PreguntasFrecuentes from './components/pages/PreguntasFrecuentes'
import NoEncontrada from './components/pages/NoEncontrada'

function App() {
  const [productos] = useState(datos)

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home productos={productos} />} />
          <Route path="/producto/:id" element={<DetalleProducto productos={productos} />} />
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