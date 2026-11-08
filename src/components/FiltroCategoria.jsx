import { CATEGORIAS, TODAS } from '../constants/categorias'

function FiltroCategoria({ valor, onCambiar }) {
    return (
        <div className="w-full max-w-xs">
            <label htmlFor="filtro-categoria" className="mb-1 block text-sm font-medium">
                Filtrar por categoría
            </label>
            <select
                id="filtro-categoria"
                className="campo-input"
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