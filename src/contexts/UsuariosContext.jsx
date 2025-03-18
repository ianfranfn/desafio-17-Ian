import { createContext, useState, useEffect } from "react"

const UsuariosContext = createContext()

const UsuariosProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState(null)
    const [usuariosAEditar, setUsuariosAEditar] = useState(null)

    useEffect(() => {
        getAllUsuarios()
    }, [])
 
    const getAllUsuarios = async () => {

        try {
            const res = await fetch(import.meta.env.VITE_BACKEND)
            if (!res.ok) {
                throw new Error('No se pudo hacer la peticion')
            }

            const data = await res.json()

            setUsuarios(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    const agregarUsuario = async (nuevoUsuario) => {
        delete nuevoUsuario.id

        try {
            const res = await fetch(import.meta.env.VITE_BACKEND, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(nuevoUsuario)
            })

            if (!res.ok) {
                throw new Error("No se pudo hacer la peticion");
            }

            const usuarioAgregadoEnBackend = await res.json()

            const nuevoEstadoUsuarios = [...usuarios, usuarioAgregadoEnBackend]
            setUsuarios(nuevoEstadoUsuarios)
        } catch (error) {
            console.error(error.message);
            
        }
    }


    const editarUsuario = async (usuarioEditado) => {
        const urlEditar = import.meta.env.VITE_BACKEND + usuarioEditado.id
    
        try {
    
          const res = await fetch(urlEditar, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(usuarioEditado)
          })
    
          if (!res.ok) {
            throw new Error('No se puede hacer la peticion')
          }
    
          const usuarioEditadoBackend = await res.json()
          console.log(usuarioEditadoBackend);
    
          const nuevoEstadoUsuarios = usuarios.map(prod => prod.id === usuarioEditadoBackend.id ? usuarioEditado : prod)
    
          setUsuarios(nuevoEstadoUsuarios)
        } catch (error) {
          console.error(error.message);
        }
      }

    const borrarUsuario = async (id) => {
        const urlBorrado = import.meta.env.VITE_BACKEND + id
    
        try {
          const res = await fetch(urlBorrado, {
            method: 'DELETE'
          })
    
          if (!res.ok) {
            throw new Error('No se pudo hacer la peticion')
          }
    
          const usuarioEliminadoDelBackend = await res.json()
          console.log(usuarioEliminadoDelBackend);
    
    
        } catch (error) {
          console.error(error.message);
        }
    
        const nuevoEstadoUsuarios = usuarios.filter(prod => prod.id !== id)
        setUsuarios(nuevoEstadoUsuarios)    

}

const data = {
    usuarios,
    usuariosAEditar,
    setUsuariosAEditar,
    agregarUsuario,
    editarUsuario,
    borrarUsuario,
} 

return <UsuariosContext.Provider value={data}>{children}</UsuariosContext.Provider>

}

export { UsuariosProvider }
export default UsuariosContext