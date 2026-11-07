import { Link } from 'react-router-dom'
import { ACCIONES, useInventario } from '../context/InventarioContext'
import SelectorCantidad from './SelectorCantidad'

function ItemCarrito({ item }) {
    const { dispatch } = useInventario()
    const { articulo, cantidad } = item
    const subtotal = articulo.precio * cantidad

    const despachar = (type) => dispatch({ type, payload: { id: articulo.id } })

    return (
        <li className="grid gap-3 border-b border-gray-200 p-4 last:border-b-0 sm:grid-cols-[1fr_auto_8rem_auto] sm:items-center">
            <div>
                <Link to={"/producto/" + articulo.id} className="font-semibold text-green-800 hover:underline">
                    {articulo.nombre}
                </Link>
                <p className="text-sm text-gray-600">
                    {articulo.marca} · $ {articulo.precio.toLocaleString('es-CL')} c/u
                </p>
                <p className={"text-xs " + (articulo.stock === 0 ? "text-red-600" : "text-gray-500")}>
                    {articulo.stock === 0 ? "Sin stock adicional disponible" : `Quedan ${articulo.stock} en inventario`}
                </p>
            </div>

            <div>
                <SelectorCantidad
                    valor={cantidad}
                    onDisminuir={() => despachar(ACCIONES.DISMINUIR_CANTIDAD)}
                    onAumentar={() => despachar(ACCIONES.AUMENTAR_CANTIDAD)}
                    puedeAumentar={articulo.stock > 0}
                />
            </div>

            <p className="font-semibold sm:text-right">
                <span className="text-sm font-normal text-gray-600 sm:hidden">Subtotal: </span>
                $ {subtotal.toLocaleString('es-CL')}
            </p>

            <button type="button" onClick={() => despachar(ACCIONES.QUITAR_DEL_CARRITO)}
                className="justify-self-start text-sm font-medium text-red-600 hover:underline sm:justify-self-end">
                Quitar
            </button>
        </li>
    )
}

export default ItemCarrito