import Boton from '../Boton'

function NoEncontrada() {
    return (
        <main className="contenedor text-center">
            <h2 className="mb-2 text-2xl font-bold">Página no encontrada</h2>
            <p className="mb-4 text-gray-600">La ruta que buscas no existe.</p>
            <Boton to="/">Volver al inicio</Boton>
        </main>
    )
}

export default NoEncontrada