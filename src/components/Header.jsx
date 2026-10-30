import { Link } from 'react-router-dom'
import MenuPrincipal from './MenuPrincipal'

function Header() {
    return (
        <header className="bg-green-700 shadow-md">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <Link to="/" className="text-xl font-bold text-white">
                    SuperMercado Inventario
                </Link>
                <MenuPrincipal />
            </div>
        </header>
    )
}

export default Header