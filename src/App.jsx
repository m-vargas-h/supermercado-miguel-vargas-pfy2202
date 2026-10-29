import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InventarioProvider from './context/InventarioProvider'
import Header from './components/Header'
import MenuInferior from './components/MenuInferior'
import Home from './components/pages/Home'
import DetalleProducto from './components/pages/DetalleProducto'
import AgregarArticulo from './components/pages/AgregarArticulo'
import ListaArticulos from './components/pages/ListaArticulos'
import QuienesSomos from './components/pages/QuienesSomos'
import PreguntasFrecuentes from './components/pages/PreguntasFrecuentes'
import NoEncontrada from './components/pages/NoEncontrada'

function App() {
  return (
    <InventarioProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/agregar" element={<AgregarArticulo />} />
            <Route path="/articulos" element={<ListaArticulos />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="*" element={<NoEncontrada />} />
          </Routes>
          <MenuInferior />
        </div>
      </Router>
    </InventarioProvider>
  )
}

export default App