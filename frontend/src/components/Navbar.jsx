import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Lógica del scroll al estilo React
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Se limpia al salir
    }, []);

    const toggleDropdown = (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                {/* LOGO */}
                <Link to="/" className="navbar-brand">
                    <img src="/img/logo.png" alt="Preser Seguridad Logo" />
                    <span>PRESER SEGURIDAD</span>
                </Link>

                {/* ENLACES */}
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/">Inicio</Link>
                    <Link to="/nosotros">Nosotros</Link>

                    {/* MENÚ DESPLEGABLE */}
                    <div className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                        <a href="#" onClick={toggleDropdown}>Servicios</a>
                        <div className="dropdown-menu">
                            <Link to="/servicios/custodia">Custodia de Mercadería en Tránsito</Link>
                            <Link to="/servicios/instalaciones">Seguridad en Instalaciones</Link>
                            <Link to="/servicios/investigacion">Servicios de Investigación</Link>
                            <Link to="/servicios/traslado">Traslado y Protección Corporativa</Link>
                            <Link to="/servicios/proteccion-personalidades">Protección a Personalidades</Link>
                            <Link to="/servicios/eventos">Seguridad para Eventos</Link>
                            <Link to="/servicios/verificaciones">Servicio de Verificaciones</Link>
                        </div>
                    </div>

                    <Link to="/noticias">Noticias</Link>
                    <Link to="/contacto">Contáctanos</Link>
                </div>

                {/* BOTÓN MÓVIL (Hamburguesa) */}
                <button
                    className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menú"
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
}
