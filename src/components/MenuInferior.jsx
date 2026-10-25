import { NavLink } from 'react-router-dom'

function MenuInferior() {
    return (
        <footer className="bg-dark mt-auto py-3">
            <nav className="container">
                <ul className="nav nav-pills justify-content-center gap-2">
                    <li className="nav-item">
                        <NavLink to="/" end className="nav-link text-white">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/quienes-somos" className="nav-link text-white">Quiénes somos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/preguntas-frecuentes" className="nav-link text-white">Preguntas frecuentes</NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default MenuInferior