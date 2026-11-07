import { Suspense } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import MenuInferior from './MenuInferior'
import Cargando from './Cargando'

function Layout() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
            <Header />
            <Suspense fallback={<Cargando />}>
                <Outlet />
            </Suspense>
            <MenuInferior />
        </div>
    )
}

export default Layout