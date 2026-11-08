import { useState } from 'react'
import { useLocation } from 'react-router'
import { useInventario } from '../../context/InventarioContext'
import { TODAS } from '../../constants/categorias'
import FiltroCategoria from '../FiltroCategoria'
import TablaArticulos from '../TablaArticulos'
import Boton from '../Boton'

function ListaArticulos() {
    const { articulos } = useInventario()
    const { state } = useLocation()
    const [categoria, setCategoria] = useState(TODAS)

    // Lista derivada: el inventario original del estado global no se modifica
    const articulosFiltrados = categoria === TODAS
        ? articulos
        : articulos.filter(articulo => articulo.tipo === categoria)

    return (
        <main className="contenedor">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-bold">Lista de artículos</h2>
                <Boton to="/agregar">+ Agregar artículo</Boton>
            </div>

            {state?.mensaje && <div className="alerta-exito mb-4">{state.mensaje}</div>}

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