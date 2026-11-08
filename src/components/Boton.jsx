import { Link } from 'react-router'

const VARIANTES = {
    primario: 'btn-primario',
    secundario: 'btn-secundario',
    peligro: 'btn-peligro',
    neutro: 'btn-neutro',
}

// Botón reutilizable
function Boton({ variante = 'primario', chico = false, to, type = 'button', className = '', children, ...props }) {
    const clases = ['btn', VARIANTES[variante], chico && 'btn-chico', className].filter(Boolean).join(' ')

    if (to) {
        return <Link to={to} className={clases} {...props}>{children}</Link>
    }

    return <button type={type} className={clases} {...props}>{children}</button>
}

export default Boton