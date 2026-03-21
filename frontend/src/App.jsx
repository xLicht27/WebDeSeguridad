// frontend/src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Noticias from './pages/Noticias';
import Custodia from './pages/Servicios/Custodia';
import Eventos from './pages/Servicios/Eventos';
import Instalaciones from './pages/Servicios/Instalaciones';
import Investigacion from './pages/Servicios/Investigacion'
import ProteccionP from './pages/Servicios/ProteccionP';
import Traslado from './pages/Servicios/Traslado';
import Verificaciones from './pages/Servicios/Verificaciones';

function App() {
  return (
    <BrowserRouter>
      {/* El Navbar y Footer están fuera de las rutas, ¡así que aparecerán en TODAS tus páginas! */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Servicios/custodia" element={<Custodia />} />
        <Route path="/Servicios/eventos" element={<Eventos />} />
        <Route path="/Servicios/instalaciones" element={<Instalaciones />} />
        <Route path="/Servicios/investigacion" element={<Investigacion />} />
        <Route path="/Servicios/proteccionP" element={<ProteccionP />} />
        <Route path="/Servicios/traslado" element={<Traslado />} />
        <Route path="/Servicios/verificaciones" element={<Verificaciones />} />
        <Route path="/noticias" element={<Noticias />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App;
