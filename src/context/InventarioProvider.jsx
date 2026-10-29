import { useReducer } from 'react'
import datos from '../datos.json'
import { InventarioContext, inventarioReducer } from './InventarioContext'

function InventarioProvider({ children }) {
    const [articulos, dispatch] = useReducer(inventarioReducer, datos)

    return (
        <InventarioContext.Provider value={{ articulos, dispatch }}>
            {children}
        </InventarioContext.Provider>
    )
}

export default InventarioProvider