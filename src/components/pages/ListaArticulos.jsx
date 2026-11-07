import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useInventario } from '../../context/InventarioContext'
import { TODAS } from '../../constants/categorias'
import FiltroCategoria from '../FiltroCategoria'
import TablaArticulos from '../TablaArticulos'

function ListaArticulos() {
    const { articulos } = useInventario()
    const { state } = useLocation()
    const [categoria, setCategoria] = useState(TODAS)

    // Lista derivada: el inventario original del estado global no se modifica
    const articulosFiltrados = categoria === TODAS
        ? articulos
        : articulos.filter(articulo => articulo.tipo === categoria)

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-bold">Lista de artículos</h2>
                <Link to="/agregar"
                    className="rounded-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700">
                    + Agregar artículo
                </Link>
            </div>

            {state?.mensaje && (
                <div className="mb-4 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800">
                    {state.mensaje}
                </div>
            )}

            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <FiltroCategoria valor={categoria} onCambiar={setCategoria} />
                <p className="text-sm text-gray-600">
                    Mostrando {articulosFiltrados.length} de {articulos.length} artículos
                </p>
            </div>

            <TablaArticulos
                articulos={articulosFiltrados}
                mensajeVacio={categoria === TODAS
                    ? "No hay artículos en el inventario."
                    : `No hay artículos en la categoría "${categoria}".`}
            />
        </main>
    )
}

export default ListaArticulos