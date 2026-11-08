import FilaProducto from './FilaProducto'
import TarjetaArticulo from './TarjetaArticulo'

const COLUMNAS = ["ID", "Producto", "Marca", "Tipo", "Precio", "Stock", "Estado", ""]

function TablaArticulos({ articulos, mensajeVacio = "No hay artículos para mostrar." }) {
    if (articulos.length === 0) {
        return <p className="tarjeta p-6 text-center text-gray-600">{mensajeVacio}</p>
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
            <div className="tarjeta hidden overflow-x-auto md:block">
                <table className="tabla">
                    <thead className="tabla-encabezado">
                        <tr>
                            {COLUMNAS.map((columna, i) => (
                                <th key={i} className="tabla-th">{columna}</th>
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