import { useLocation, useNavigate } from 'react-router-dom'
import { useInventario } from '../../context/InventarioContext'
import EstadoStock from '../EstadoStock'

function DetalleProducto() {
    const { articulos: productos } = useInventario()
    const { pathname } = useLocation()
    const id = pathname.split("/")[2]
    const producto = productos.find(p => p.id == id)
    const navigate = useNavigate()

    const botonPrincipal = "rounded-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700"
    const botonSecundario = "rounded-md border border-green-600 px-4 py-2 font-medium text-green-700 transition-colors hover:bg-green-600 hover:text-white"

    if (!producto) {
        return (
            <main className="mx-auto w-full max-w-6xl px-4 py-6">
                <h2 className="mb-4 text-2xl font-bold">Producto no encontrado</h2>
                <button className={botonPrincipal} onClick={() => navigate("/")}>Volver al inventario</button>
            </main>
        )
    }

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
            <div className="max-w-md overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="bg-green-700 px-4 py-2 font-bold text-white">
                    Producto #{producto.id}
                </div>
                <div className="p-4">
                    <h3 className="mb-2 text-xl font-semibold">{producto.nombre}</h3>
                    {producto.descripcion && <p className="mb-4 text-gray-600">{producto.descripcion}</p>}
                    <ul className="mb-4 divide-y divide-gray-200 border-y border-gray-200">
                        <li className="py-2"><strong>Marca:</strong> {producto.marca}</li>
                        <li className="py-2"><strong>Tipo:</strong> {producto.tipo}</li>
                        <li className="py-2"><strong>Precio:</strong> $ {producto.precio.toLocaleString('es-CL')}</li>
                        <li className="py-2"><strong>Stock:</strong> {producto.stock} <EstadoStock stock={producto.stock} /></li>
                    </ul>
                    <button className={botonSecundario} onClick={() => navigate(-1)}>Volver</button>
                </div>
            </div>
        </main>
    )
}

export default DetalleProducto