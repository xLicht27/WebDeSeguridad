// frontend/src/App.jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Código por ruta: cada página baja su propio chunk al entrar
const Home = lazy(() => import('./pages/Home'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Noticias = lazy(() => import('./pages/Noticias'));
const NoticiaDetalle = lazy(() => import('./pages/NoticiaDetalle'));
const ServiciosIndex = lazy(() => import('./pages/Servicios/ServiciosIndex'));
const ServicioDetalle = lazy(() => import('./pages/Servicios/ServicioDetalle'));
const PoliticaPrivacidad = lazy(() => import('./pages/PoliticaPrivacidad'));
const TerminosCondiciones = lazy(() => import('./pages/TerminosCondiciones'));
const NoEncontrado = lazy(() => import('./pages/NoEncontrado'));

function Cargando() {
  return (
    <div className="global-loader" role="status" aria-live="polite">
      <img src="/img/logo.png" alt="" className="loader-logo" />
      <span className="sr-only">Cargando...</span>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Cargando />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Índice + detalle de servicios (mismas URLs de siempre) */}
          <Route path="/servicios" element={<ServiciosIndex />} />
          <Route path="/servicios/:slug" element={<ServicioDetalle />} />

          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<NoticiaDetalle />} />
          <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />

          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
