import { Link } from 'react-router-dom'

function NoEncontrada() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6 text-center">
            <h2 className="mb-2 text-2xl font-bold">Página no encontrada</h2>
            <p className="mb-4 text-gray-600">La ruta que buscas no existe.</p>
            <Link to="/" className="rounded-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700">
                Volver al inicio
            </Link>
        </main>
    )
}

export default NoEncontrada