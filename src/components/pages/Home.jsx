import { useState } from 'react'
import FilaProducto from '../FilaProducto'

function Home({ productos }) {
    const [categoria, setCategoria] = useState("Todas")

    const categorias = ["Todas", ...new Set(productos.map(p => p.categoria))]

    const productosFiltrados = categoria === "Todas"
        ? productos
        : productos.filter(p => p.categoria === categoria)

    const sinStock = productos.filter(p => p.stock === 0).length
    const stockBajo = productos.filter(p => p.stock > 0 && p.stock < 10).length

    return (
        <main className="container py-4">
            <h2 className="mb-4">Inventario</h2>

            <div className="row g-3 mb-4">
                <div className="col-sm-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">{productos.length}</h5>
                            <p className="card-text">Productos registrados</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card text-center border-warning">
                        <div className="card-body">
                            <h5 className="card-title">{stockBajo}</h5>
                            <p className="card-text">Con stock bajo</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card text-center border-danger">
                        <div className="card-body">
                            <h5 className="card-title">{sinStock}</h5>
                            <p className="card-text">Sin stock</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3" style={{ maxWidth: "300px" }}>
                <label htmlFor="filtro-categoria" className="form-label">Filtrar por categoría</label>
                <select
                    id="filtro-categoria"
                    className="form-select"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                >
                    {categorias.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                    <thead className="table-success">
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Estado</th>
                            <th></th>
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