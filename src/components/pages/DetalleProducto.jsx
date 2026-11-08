import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { useInventario } from '../../context/InventarioContext'
import { agregarAlCarrito } from '../../context/inventarioAcciones'
import EstadoStock from '../EstadoStock'
import SelectorCantidad from '../SelectorCantidad'
import Boton from '../Boton'

function DetalleProducto() {
    const { id } = useParams()
    const { articulos, carrito, dispatch } = useInventario()
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const [mensaje, setMensaje] = useState("")

    const producto = articulos.find(p => p.id === Number(id))

    if (!producto) {
        return (
            <main className="contenedor">
                <h2 className="mb-4 text-2xl font-bold">Producto no encontrado</h2>
                <Boton to="/articulos">Volver a la lista</Boton>
            </main>
        )
    }

    const sinStock = producto.stock === 0
    // La cantidad elegida nunca puede superar el stock disponible
    const cantidadValida = Math.max(1, Math.min(cantidad, producto.stock))
    const enCarrito = carrito.find(item => item.id === producto.id)?.cantidad ?? 0

    const handleAgregar = () => {
        dispatch(agregarAlCarrito(producto.id, cantidadValida))
        setMensaje(`Se ${cantidadValida === 1 ? "agregó 1 unidad" : `agregaron ${cantidadValida} unidades`} al carrito`)
        setCantidad(1)
    }

    return (
        <main className="contenedor">
            <div className="tarjeta max-w-md overflow-hidden">
                <div className="bg-marca-700 px-4 py-2 font-bold text-white">
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
                        <div className="alerta-exito mb-4 flex flex-wrap items-center justify-between gap-2">
                            <span>{mensaje}</span>
                            <Link to="/carrito" className="font-medium underline">Ver carrito</Link>
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
                            <Boton onClick={handleAgregar}>Agregar al carrito</Boton>
                        </div>
                    )}

                    <Boton variante="secundario" onClick={() => navigate(-1)}>Volver</Boton>
                </div>
            </div>
        </main>
    )
}

export default DetalleProducto