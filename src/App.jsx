import Formulario from "./components/Formulario"
import ListadoUsuarios from "./components/ListadoUsuarios"

const App = () => {

  return (
    <>
      <h1 className="text-4xl my-5">CRUD Usuarios</h1>
      <hr />
      <Formulario/>
      <ListadoUsuarios/>
    </>
  )
}

export default App