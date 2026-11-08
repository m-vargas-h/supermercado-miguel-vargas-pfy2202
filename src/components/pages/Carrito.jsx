import { Link } from 'react-router'
import { useInventario } from '../../context/InventarioContext'
import { vaciarCarrito } from '../../context/inventarioAcciones'
import { obtenerItemsCarrito, contarUnidades, calcularTotal } from '../../utils/carrito'
import ItemCarrito from '../ItemCarrito'
import Boton from '../Boton'

function Carrito() {
    const { articulos, carrito, dispatch } = useInventario()

    const items = obtenerItemsCarrito(carrito, articulos)
    const unidades = contarUnidades(carrito)
    const total = calcularTotal(items)

    if (items.length === 0) {
        return (
            <main className="contenedor">
                <h2 className="titulo-pagina">Carrito de compras</h2>
                <div className="tarjeta p-6 text-center">
                    <p className="mb-4 text-gray-600">Tu carrito está vacío.</p>
                    <Boton to="/articulos">Ver artículos</Boton>
                </div>
            </main>
        )
    }

    return (
        <main className="contenedor">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-bold">Carrito de compras</h2>
                <Link to="/articulos" className="enlace text-sm">
                    ← Seguir agregando artículos
                </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_18rem] lg:items-start">
                <ul className="tarjeta overflow-hidden">
                    {items.map(item => <ItemCarrito key={item.id} item={item} />)}
                </ul>

                <aside className="tarjeta p-4">
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
                    <Boton variante="peligro" className="w-full" onClick={() => dispatch(vaciarCarrito())}>
                        Vaciar carrito
                    </Boton>
                </aside>
            </div>
        </main>
    )
}

export default Carrito