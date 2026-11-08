import { NavLink } from 'react-router'
import { useInventario } from '../context/InventarioContext'
import { contarUnidades } from '../utils/carrito'

const enlaces = [
    { ruta: '/agregar', texto: 'Agregar artículo' },
    { ruta: '/articulos', texto: 'Lista de artículos' },
    { ruta: '/carrito', texto: 'Carrito' },
]

function MenuPrincipal() {
    const { carrito } = useInventario()
    const unidades = contarUnidades(carrito)

    const clasesEnlace = ({ isActive }) =>
        'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ' +
        (isActive ? 'bg-white text-marca-700' : 'text-white hover:bg-marca-600')

    return (
        <nav>
            <ul className="flex flex-wrap gap-2">
                {enlaces.map(enlace => (
                    <li key={enlace.ruta}>
                        <NavLink to={enlace.ruta} className={clasesEnlace}>
                            {enlace.texto}
                            {enlace.ruta === '/carrito' && unidades > 0 && (
                                <span className="rounded-full bg-yellow-400 px-2 py-0.5 text-xs font-bold text-gray-900">
                                    {unidades}
                                </span>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MenuPrincipal