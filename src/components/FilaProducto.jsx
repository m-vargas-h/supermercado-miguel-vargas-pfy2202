import { Link } from 'react-router-dom'
import EstadoStock from './EstadoStock'

function FilaProducto({ producto }) {
    return (
        <tr>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.categoria}</td>
            <td>$ {producto.precio.toLocaleString('es-CL')}</td>
            <td>{producto.stock}</td>
            <td><EstadoStock stock={producto.stock} /></td>
            <td>
                <Link to={"/producto/" + producto.id} className="btn btn-sm btn-outline-success">
                    Ver detalle
                </Link>
            </td>
        </tr>
    )
}

export default FilaProducto