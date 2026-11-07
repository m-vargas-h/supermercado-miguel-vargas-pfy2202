import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'

const Home = lazy(() => import('../components/pages/Home'))
const DetalleProducto = lazy(() => import('../components/pages/DetalleProducto'))
const AgregarArticulo = lazy(() => import('../components/pages/AgregarArticulo'))
const ListaArticulos = lazy(() => import('../components/pages/ListaArticulos'))
const Carrito = lazy(() => import('../components/pages/Carrito'))
const QuienesSomos = lazy(() => import('../components/pages/QuienesSomos'))
const PreguntasFrecuentes = lazy(() => import('../components/pages/PreguntasFrecuentes'))
const NoEncontrada = lazy(() => import('../components/pages/NoEncontrada'))

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="producto/:id" element={<DetalleProducto />} />
                <Route path="agregar" element={<AgregarArticulo />} />
                <Route path="articulos" element={<ListaArticulos />} />
                <Route path="carrito" element={<Carrito />} />
                <Route path="quienes-somos" element={<QuienesSomos />} />
                <Route path="preguntas-frecuentes" element={<PreguntasFrecuentes />} />
                <Route path="*" element={<NoEncontrada />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes