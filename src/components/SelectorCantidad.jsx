function SelectorCantidad({ valor, onDisminuir, onAumentar, puedeDisminuir = true, puedeAumentar = true }) {
    const boton = "flex h-9 w-9 items-center justify-center text-lg font-bold text-marca-700 transition-colors " +
        "hover:bg-marca-50 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent"

    return (
        <div className="inline-flex items-center overflow-hidden rounded-md border border-gray-300 bg-white">
            <button type="button" className={boton} onClick={onDisminuir}
                disabled={!puedeDisminuir} aria-label="Disminuir cantidad">
                −
            </button>
            <span className="w-10 text-center font-semibold" aria-live="polite">{valor}</span>
            <button type="button" className={boton} onClick={onAumentar}
                disabled={!puedeAumentar} aria-label="Aumentar cantidad">
                +
            </button>
        </div>
    )
}

export default SelectorCantidad