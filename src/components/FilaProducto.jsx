import { Link } from 'react-router-dom'
import EstadoStock from './EstadoStock'

function FilaProducto({ producto }) {
    const td = 'px-4 py-3'

    return (
        <tr className="border-b border-gray-200 odd:bg-white even:bg-gray-50 hover:bg-green-50">
            <td className={td}>{producto.id}</td>
            <td className={td}>{producto.nombre}</td>
            <td className={td}>{producto.marca}</td>
            <td className={td}>{producto.tipo}</td>
            <td className={td}>$ {producto.precio.toLocaleString('es-CL')}</td>
            <td className={td}>{producto.stock}</td>
            <td className={td}><EstadoStock stock={producto.stock} /></td>
            <td className={td}>
                <Link
                    to={"/producto/" + producto.id}
                    className="whitespace-nowrap rounded-md border border-green-600 px-3 py-1 text-sm text-green-700 transition-colors hover:bg-green-600 hover:text-white"
                >
                    Ver detalle
                </Link>
            </td>
        </tr>
    )
}

export default FilaProducto