import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="navbar navbar-dark bg-success">
            <div className="container">
                <Link to="/" className="navbar-brand fw-bold">
                    SuperMercado Inventario
                </Link>
            </div>
        </header>
    )
}

export default Header