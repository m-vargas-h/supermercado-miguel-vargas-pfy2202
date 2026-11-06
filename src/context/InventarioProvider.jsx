import { useReducer } from 'react'
import datos from '../datos.json'
import { InventarioContext, inventarioReducer } from './InventarioContext'

const ESTADO_INICIAL = {
    articulos: datos,
    carrito: [],
}

function InventarioProvider({ children }) {
    const [estado, dispatch] = useReducer(inventarioReducer, ESTADO_INICIAL)

    return (
        <InventarioContext.Provider value={{ articulos: estado.articulos, carrito: estado.carrito, dispatch }}>
            {children}
        </InventarioContext.Provider>
    )
}

export default InventarioProvider