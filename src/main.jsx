import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Rutas from './routes/Rutas.jsx'
import Navbar from './components/NavBar.jsx'
import { UsuariosProvider } from './contexts/UsuariosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <UsuariosProvider>
      <BrowserRouter>

        <Navbar />

        <div className='container mx-auto'>
          <Rutas />
        </div>

      </BrowserRouter>
    </UsuariosProvider>
  </StrictMode>,
)
