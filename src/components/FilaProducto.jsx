import { Link } from 'react-router'
import EstadoStock from './EstadoStock'
import Boton from './Boton'

function FilaProducto({ producto }) {
    return (
        <tr className="tabla-fila">
            <td className="tabla-td">{producto.id}</td>
            <td className="tabla-td">
                <Link to={"/producto/" + producto.id} className="enlace">
                    {producto.nombre}
                </Link>
            </td>
            <td className="tabla-td">{producto.marca}</td>
            <td className="tabla-td">{producto.tipo}</td>
            <td className="tabla-td whitespace-nowrap">$ {producto.precio.toLocaleString('es-CL')}</td>
            <td className="tabla-td">{producto.stock}</td>
            <td className="tabla-td"><EstadoStock stock={producto.stock} /></td>
            <td className="tabla-td">
                <Boton to={"/producto/" + producto.id} variante="secundario" chico>Ver detalle</Boton>
            </td>
        </tr>
    )
}

export default FilaProducto