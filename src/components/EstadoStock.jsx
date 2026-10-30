function EstadoStock({ stock }) {
    const base = 'inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold'

    if (stock === 0)
        return <span className={base + ' bg-red-100 text-red-700'}>Sin stock</span>

    if (stock < 10)
        return <span className={base + ' bg-yellow-100 text-yellow-800'}>Stock bajo</span>

    return <span className={base + ' bg-green-100 text-green-700'}>Disponible</span>
}

export default EstadoStock