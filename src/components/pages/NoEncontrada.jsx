import { Link } from 'react-router-dom'

function NoEncontrada() {
    return (
        <main className="container py-4 text-center">
            <h2>Página no encontrada</h2>
            <p>La ruta que buscas no existe.</p>
            <Link to="/" className="btn btn-success">Volver al inicio</Link>
        </main>
    )
}

export default NoEncontrada