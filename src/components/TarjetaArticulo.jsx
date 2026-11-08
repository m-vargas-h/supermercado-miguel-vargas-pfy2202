import { Link } from 'react-router'
import EstadoStock from './EstadoStock'
import Boton from './Boton'

function TarjetaArticulo({ producto }) {
    return (
        <li className="tarjeta p-4">
            <div className="mb-2 flex items-start justify-between gap-3">
                <div>
                    <Link to={"/producto/" + producto.id} className="enlace font-semibold">
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
                <Boton to={"/producto/" + producto.id} variante="secundario" chico>Ver detalle</Boton>
            </div>
        </li>
    )
}

export default TarjetaArticulo