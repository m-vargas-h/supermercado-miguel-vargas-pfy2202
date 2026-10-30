import { NavLink } from 'react-router-dom'

const enlaces = [
    { ruta: '/agregar', texto: 'Agregar artículo' },
    { ruta: '/articulos', texto: 'Lista de artículos' },
]

function MenuPrincipal() {
    const clasesEnlace = ({ isActive }) =>
        'block rounded-md px-3 py-2 text-sm font-medium transition-colors ' +
        (isActive ? 'bg-white text-green-700' : 'text-white hover:bg-green-600')

    return (
        <nav>
            <ul className="flex gap-2">
                {enlaces.map(enlace => (
                    <li key={enlace.ruta}>
                        <NavLink to={enlace.ruta} className={clasesEnlace}>
                            {enlace.texto}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MenuPrincipal