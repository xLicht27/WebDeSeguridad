import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navRef = useRef(null);

    // Lógica del scroll al estilo React
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Se limpia al salir
    }, []);

    // Lógica para cerrar el menú al hacer click fuera de la navbar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
            }
        };

        if (isMenuOpen || isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen, isDropdownOpen]);

    const closeMenus = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    return (
        <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                {/* LOGO */}
                <Link to="/" className="navbar-brand">
                    <img src="/img/logo.png" alt="Preser Seguridad Logo" />
                    <span>PRESER SEGURIDAD</span>
                </Link>

                {/* ENLACES */}
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={closeMenus}>Inicio</Link>
                    <Link to="/nosotros" onClick={closeMenus}>Nosotros</Link>

                    {/* MENÚ DESPLEGABLE */}
                    <div className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                        <a href="#" onClick={toggleDropdown}>Servicios</a>
                        <div className="dropdown-menu">
                            <Link to="/servicios/custodia" onClick={closeMenus}>Custodia de Mercadería en Tránsito</Link>
                            <Link to="/servicios/instalaciones" onClick={closeMenus}>Seguridad en Instalaciones</Link>
                            <Link to="/servicios/investigacion" onClick={closeMenus}>Servicios de Investigación</Link>
                            <Link to="/servicios/traslado" onClick={closeMenus}>Traslado y Protección Corporativa</Link>
                            <Link to="/servicios/proteccionP" onClick={closeMenus}>Protección a Personalidades</Link>
                            <Link to="/servicios/eventos" onClick={closeMenus}>Seguridad para Eventos</Link>
                            <Link to="/servicios/verificaciones" onClick={closeMenus}>Servicio de Verificaciones</Link>
                        </div>
                    </div>

                    <Link to="/noticias" onClick={closeMenus}>Noticias</Link>
                    <Link to="/contacto" onClick={closeMenus}>Contáctanos</Link>
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
