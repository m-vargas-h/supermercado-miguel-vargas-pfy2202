import { Link, useLocation } from 'react-router-dom'
import { useInventario } from '../../context/InventarioContext'

function ListaArticulos() {
    const { articulos } = useInventario()
    const { state } = useLocation()

    const th = "px-4 py-3 font-semibold"
    const td = "px-4 py-3"

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

            <p className="mb-3 text-sm text-gray-600">Total: {articulos.length} artículos en inventario</p>

            {articulos.length === 0 ? (
                <p className="rounded-lg border border-gray-200 bg-white p-6 text-center text-gray-600">
                    No hay artículos en el inventario.
                </p>
            ) : (
                <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
                    <table className="min-w-full text-left text-sm">
                        <thead className="bg-green-100 text-green-900">
                            <tr>
                                <th className={th}>#</th>
                                <th className={th}>Nombre</th>
                                <th className={th}>Marca</th>
                                <th className={th}>Tipo</th>
                                <th className={th}>Precio</th>
                                <th className={th}>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articulos.map(articulo => (
                                <tr key={articulo.id}
                                    className="border-b border-gray-200 odd:bg-white even:bg-gray-50 hover:bg-green-50">
                                    <td className={td}>{articulo.id}</td>
                                    <td className={td}>{articulo.nombre}</td>
                                    <td className={td}>{articulo.marca}</td>
                                    <td className={td}>{articulo.tipo}</td>
                                    <td className={td}>$ {articulo.precio.toLocaleString('es-CL')}</td>
                                    <td className={td}>{articulo.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    )
}

export default ListaArticulos