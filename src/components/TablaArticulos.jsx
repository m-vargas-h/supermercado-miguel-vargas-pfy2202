import FilaProducto from './FilaProducto'
import TarjetaArticulo from './TarjetaArticulo'

const COLUMNAS = ["ID", "Producto", "Marca", "Tipo", "Precio", "Stock", "Estado", ""]

function TablaArticulos({ articulos, mensajeVacio = "No hay artículos para mostrar." }) {
    if (articulos.length === 0) {
        return (
            <p className="rounded-lg border border-gray-200 bg-white p-6 text-center text-gray-600">
                {mensajeVacio}
            </p>
        )
    }

    return (
        <>
            {/* Celular: tarjetas */}
            <ul className="grid gap-3 sm:grid-cols-2 md:hidden">
                {articulos.map(articulo => (
                    <TarjetaArticulo key={articulo.id} producto={articulo} />
                ))}
            </ul>

            {/* Tablet y escritorio: tabla */}
            <div className="hidden overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm md:block">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-green-100 text-green-900">
                        <tr>
                            {COLUMNAS.map((columna, i) => (
                                <th key={i} className="px-4 py-3 font-semibold">{columna}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {articulos.map(articulo => (
                            <FilaProducto key={articulo.id} producto={articulo} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TablaArticulos