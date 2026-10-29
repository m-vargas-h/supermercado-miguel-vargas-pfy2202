import { useState } from 'react'
import { useInventario } from '../../context/InventarioContext'
import FilaProducto from '../FilaProducto'

function Home() {
    const { articulos: productos } = useInventario()
    const [tipo, setTipo] = useState("Todos")

    const tipos = ["Todos", ...new Set(productos.map(p => p.tipo))]

    const productosFiltrados = tipo === "Todos"
        ? productos
        : productos.filter(p => p.tipo === tipo)

    const sinStock = productos.filter(p => p.stock === 0).length
    const stockBajo = productos.filter(p => p.stock > 0 && p.stock < 10).length

    const th = 'px-4 py-3 font-semibold'

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
            <h2 className="mb-6 text-2xl font-bold">Inventario</h2>

            <div className="mb-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
                    <p className="text-3xl font-bold">{productos.length}</p>
                    <p className="text-gray-600">Productos registrados</p>
                </div>
                <div className="rounded-lg border border-yellow-400 bg-white p-4 text-center shadow-sm">
                    <p className="text-3xl font-bold">{stockBajo}</p>
                    <p className="text-gray-600">Con stock bajo</p>
                </div>
                <div className="rounded-lg border border-red-400 bg-white p-4 text-center shadow-sm">
                    <p className="text-3xl font-bold">{sinStock}</p>
                    <p className="text-gray-600">Sin stock</p>
                </div>
            </div>

            <div className="mb-4 max-w-xs">
                <label htmlFor="filtro-tipo" className="mb-1 block text-sm font-medium">Filtrar por tipo</label>
                <select
                    id="filtro-tipo"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                    value={tipo}
                    onChange={e => setTipo(e.target.value)}
                >
                    {tipos.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-green-100 text-green-900">
                        <tr>
                            <th className={th}>ID</th>
                            <th className={th}>Producto</th>
                            <th className={th}>Marca</th>
                            <th className={th}>Tipo</th>
                            <th className={th}>Precio</th>
                            <th className={th}>Stock</th>
                            <th className={th}>Estado</th>
                            <th className={th}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosFiltrados.map(producto => (
                            <FilaProducto key={producto.id} producto={producto} />
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Home