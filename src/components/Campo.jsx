function Campo({ id, etiqueta, error, children }) {
    return (
        <div>
            <label htmlFor={id} className="mb-1 block text-sm font-medium">{etiqueta}</label>
            {children}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    )
}

export default Campo