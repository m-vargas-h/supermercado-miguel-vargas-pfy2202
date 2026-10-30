import { NavLink } from 'react-router-dom'

function MenuInferior() {
    const clasesEnlace = ({ isActive }) =>
        'block rounded-md px-3 py-2 text-sm text-white transition-colors ' +
        (isActive ? 'bg-green-600' : 'hover:bg-gray-700')

    return (
        <footer className="mt-auto bg-gray-800 py-3">
            <nav className="mx-auto max-w-6xl px-4">
                <ul className="flex flex-wrap justify-center gap-2">
                    <li>
                        <NavLink to="/" end className={clasesEnlace}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/quienes-somos" className={clasesEnlace}>Quiénes somos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/preguntas-frecuentes" className={clasesEnlace}>Preguntas frecuentes</NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default MenuInferior