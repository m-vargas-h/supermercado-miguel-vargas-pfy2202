import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ACCIONES, useInventario } from '../../context/InventarioContext'
import EstadoStock from '../EstadoStock'
import SelectorCantidad from '../SelectorCantidad'

function DetalleProducto() {
    const { id } = useParams()
    const { articulos, carrito, dispatch } = useInventario()
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const [mensaje, setMensaje] = useState("")

    const producto = articulos.find(p => p.id === Number(id))

    const botonPrincipal = "rounded-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
    const botonSecundario = "rounded-md border border-green-600 px-4 py-2 font-medium text-green-700 transition-colors hover:bg-green-600 hover:text-white"

    if (!producto) {
        return (
            <main className="mx-auto w-full max-w-6xl px-4 py-6">
                <h2 className="mb-4 text-2xl font-bold">Producto no encontrado</h2>
                <button className={botonPrincipal} onClick={() => navigate("/articulos")}>Volver a la lista</button>
            </main>
        )
    }

    const sinStock = producto.stock === 0
    // La cantidad elegida nunca puede superar el stock disponible
    const cantidadValida = Math.max(1, Math.min(cantidad, producto.stock))
    const enCarrito = carrito.find(item => item.id === producto.id)?.cantidad ?? 0

    const handleAgregar = () => {
        dispatch({
            type: ACCIONES.AGREGAR_AL_CARRITO,
            payload: { id: producto.id, cantidad: cantidadValida },
        })
        setMensaje(`Se ${cantidadValida === 1 ? "agregó 1 unidad" : `agregaron ${cantidadValida} unidades`} al carrito`)
        setCantidad(1)
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
                        <li className="py-2"><strong>Stock disponible:</strong> {producto.stock} <EstadoStock stock={producto.stock} /></li>
                        {enCarrito > 0 && (
                            <li className="py-2"><strong>En tu carrito:</strong> {enCarrito}</li>
                        )}
                    </ul>

                    {mensaje && (
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800">
                            <span>{mensaje}</span>
                            <Link to="/carrito" className="font-medium underline hover:text-green-900">Ver carrito</Link>
                        </div>
                    )}

                    {sinStock ? (
                        <p className="mb-4 text-sm font-medium text-red-600">
                            Este producto no tiene stock disponible para agregar al carrito.
                        </p>
                    ) : (
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                            <SelectorCantidad
                                valor={cantidadValida}
                                onDisminuir={() => setCantidad(cantidadValida - 1)}
                                onAumentar={() => setCantidad(cantidadValida + 1)}
                                puedeDisminuir={cantidadValida > 1}
                                puedeAumentar={cantidadValida < producto.stock}
                            />
                            <button className={botonPrincipal} onClick={handleAgregar}>
                                Agregar al carrito
                            </button>
                        </div>
                    )}

                    <button className={botonSecundario} onClick={() => navigate(-1)}>Volver</button>
                </div>
            </div>
        </main>
    )
}

export default DetalleProducto