import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Usuarios from "../pages/Usuarios"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import NoEncontrado from "../pages/NoEncontrado"
import UsuariosDetalle from "../pages/UsuariosDetalle"

const Rutas = () => {
    const rutasApp = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/usuarios',
                element: <Usuarios />
            },
            {
                path: '/usuarios/detalle/:id',
                element: <UsuariosDetalle />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '*',
                element: <NoEncontrado />
            }
        ]
    )

    return rutasApp
}

export default Rutas