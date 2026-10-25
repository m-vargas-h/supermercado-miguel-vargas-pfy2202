import { useLocation, useNavigate } from 'react-router-dom'
import EstadoStock from '../EstadoStock'

function DetalleProducto({ productos }) {
    const { pathname } = useLocation()
    const id = pathname.split("/")[2]
    const producto = productos.find(p => p.id == id)
    const navigate = useNavigate()

    if (!producto) {
        return (
            <main className="container py-4">
                <h2>Producto no encontrado</h2>
                <button className="btn btn-success" onClick={() => navigate("/")}>Volver al inventario</button>
            </main>
        )
    }

    return (
        <main className="container py-4">
            <div className="card" style={{ maxWidth: "500px" }}>
                <div className="card-header bg-success text-white fw-bold">
                    Producto #{producto.id}
                </div>
                <div className="card-body">
                    <h3 className="card-title">{producto.nombre}</h3>
                    <p className="card-text">{producto.descripcion}</p>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item"><strong>Categoría:</strong> {producto.categoria}</li>
                        <li className="list-group-item"><strong>Precio:</strong> $ {producto.precio.toLocaleString('es-CL')}</li>
                        <li className="list-group-item"><strong>Stock:</strong> {producto.stock} <EstadoStock stock={producto.stock} /></li>
                    </ul>
                    <button className="btn btn-outline-success" onClick={() => navigate(-1)}>Volver</button>
                </div>
            </div>
        </main>
    )
}

export default DetalleProducto