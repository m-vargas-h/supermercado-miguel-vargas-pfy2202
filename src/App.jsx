import './App.css'
import { BrowserRouter as Router } from 'react-router'
import InventarioProvider from './context/InventarioProvider'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <InventarioProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </Router>
    </InventarioProvider>
  )
}

export default App