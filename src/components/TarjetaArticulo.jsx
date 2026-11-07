import { Link } from 'react-router-dom'
import EstadoStock from './EstadoStock'

function TarjetaArticulo({ producto }) {
    return (
        <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-start justify-between gap-3">
                <div>
                    <Link to={"/producto/" + producto.id} className="font-semibold text-green-800 hover:underline">
                        {producto.nombre}
                    </Link>
                    <p className="text-sm text-gray-600">{producto.marca} · {producto.tipo}</p>
                </div>
                <EstadoStock stock={producto.stock} />
            </div>

            <div className="flex items-end justify-between gap-3">
                <div>
                    <p className="whitespace-nowrap text-lg font-bold">$ {producto.precio.toLocaleString('es-CL')}</p>
                    <p className="text-sm text-gray-600">Stock: {producto.stock} · ID {producto.id}</p>
                </div>
                <Link
                    to={"/producto/" + producto.id}
                    className="whitespace-nowrap rounded-md border border-green-600 px-3 py-1 text-sm text-green-700 transition-colors hover:bg-green-600 hover:text-white"
                >
                    Ver detalle
                </Link>
            </div>
        </li>
    )
}

export default TarjetaArticulo