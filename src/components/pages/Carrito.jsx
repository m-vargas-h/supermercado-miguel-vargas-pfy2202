import { Link } from 'react-router'
import { useInventario } from '../../context/InventarioContext'
import { vaciarCarrito } from '../../context/inventarioAcciones'
import { obtenerItemsCarrito, contarUnidades, calcularTotal } from '../../utils/carrito'
import ItemCarrito from '../ItemCarrito'

function Carrito() {
    const { articulos, carrito, dispatch } = useInventario()

    const items = obtenerItemsCarrito(carrito, articulos)
    const unidades = contarUnidades(carrito)
    const total = calcularTotal(items)

    if (items.length === 0) {
        return (
            <main className="mx-auto w-full max-w-6xl px-4 py-6">
                <h2 className="mb-6 text-2xl font-bold">Carrito de compras</h2>
                <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                    <p className="mb-4 text-gray-600">Tu carrito está vacío.</p>
                    <Link to="/articulos"
                        className="rounded-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700">
                        Ver artículos
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-bold">Carrito de compras</h2>
                <Link to="/articulos" className="text-sm font-medium text-green-700 hover:underline">
                    ← Seguir agregando artículos
                </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_18rem] lg:items-start">
                <ul className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                    {items.map(item => <ItemCarrito key={item.id} item={item} />)}
                </ul>

                <aside className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <h3 className="mb-3 text-lg font-semibold">Resumen</h3>
                    <dl className="mb-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <dt className="text-gray-600">Productos distintos</dt>
                            <dd>{items.length}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-gray-600">Unidades</dt>
                            <dd>{unidades}</dd>
                        </div>
                        <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-bold">
                            <dt>Total</dt>
                            <dd>$ {total.toLocaleString('es-CL')}</dd>
                        </div>
                    </dl>
                    <button type="button" onClick={() => dispatch(vaciarCarrito())}
                        className="w-full rounded-md border border-red-500 px-4 py-2 font-medium text-red-600 transition-colors hover:bg-red-500 hover:text-white">
                        Vaciar carrito
                    </button>
                </aside>
            </div>
        </main>
    )
}

export default Carrito