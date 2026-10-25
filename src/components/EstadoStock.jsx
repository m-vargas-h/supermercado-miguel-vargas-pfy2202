function EstadoStock({ stock }) {
    if (stock === 0)
        return <span className="badge bg-danger">Sin stock</span>

    if (stock < 10)
        return <span className="badge bg-warning text-dark">Stock bajo</span>

    return <span className="badge bg-success">Disponible</span>
}

export default EstadoStock