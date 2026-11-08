import { Link } from 'react-router'
import { useInventario } from '../../context/InventarioContext'
import TablaArticulos from '../TablaArticulos'

function TarjetaResumen({ valor, texto, borde = "" }) {
    return (
        <div className={"tarjeta p-4 text-center " + borde}>
            <p className="text-3xl font-bold">{valor}</p>
            <p className="text-gray-600">{texto}</p>
        </div>
    )
}

function Home() {
    const { articulos } = useInventario()

    const sinStock = articulos.filter(a => a.stock === 0).length
    const stockBajo = articulos.filter(a => a.stock > 0 && a.stock < 10).length
    const porReponer = articulos.filter(a => a.stock < 10)

    return (
        <main className="contenedor">
            <h2 className="titulo-pagina">Inventario</h2>

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
                <TarjetaResumen valor={articulos.length} texto="Productos registrados" />
                <TarjetaResumen valor={stockBajo} texto="Con stock bajo" borde="border-yellow-400" />
                <TarjetaResumen valor={sinStock} texto="Sin stock" borde="border-red-400" />
            </div>

            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">Artículos por reponer</h3>
                <Link to="/articulos" className="enlace text-sm">
                    Ver todos los artículos →
                </Link>
            </div>

            <TablaArticulos
                articulos={porReponer}
                mensajeVacio="Todos los artículos tienen stock suficiente."
            />
        </main>
    )
}

export default Home