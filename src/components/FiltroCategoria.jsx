import { CATEGORIAS, TODAS } from '../constants/categorias'

function FiltroCategoria({ valor, onCambiar }) {
    return (
        <div className="w-full max-w-xs">
            <label htmlFor="filtro-categoria" className="mb-1 block text-sm font-medium">
                Filtrar por categoría
            </label>
            <select
                id="filtro-categoria"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                value={valor}
                onChange={e => onCambiar(e.target.value)}
            >
                {[TODAS, ...CATEGORIAS].map(categoria => (
                    <option key={categoria} value={categoria}>{categoria}</option>
                ))}
            </select>
        </div>
    )
}

export default FiltroCategoria