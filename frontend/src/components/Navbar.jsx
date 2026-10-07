import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SERVICIOS } from '../data/servicios';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();

    // Cerrar todo al cambiar de ruta (patrón "adjusting state during render")
    const [rutaPrevia, setRutaPrevia] = useState(location.pathname);
    if (rutaPrevia !== location.pathname) {
        setRutaPrevia(location.pathname);
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    }

    // Scroll para darle sombra a la navbar
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar con click fuera y con la tecla Escape
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const closeMenus = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    const isServiciosActive = location.pathname.toLowerCase().startsWith('/servicios');

    return (
        <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                {/* LOGO */}
                <Link to="/" className="navbar-brand" onClick={closeMenus}>
                    <img src="/img/logo.png" alt="Preser Seguridad Logo" />
                    <span>PRESER SEGURIDAD S.A.C.</span>
                </Link>

                {/* ENLACES */}
                <div id="nav-links" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <NavLink to="/" onClick={closeMenus} end>Inicio</NavLink>
                    <NavLink to="/nosotros" onClick={closeMenus}>Nosotros</NavLink>

                    {/* MENÚ DESPLEGABLE */}
                    <div className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                        <button
                            type="button"
                            aria-expanded={isDropdownOpen}
                            aria-controls="servicios-menu"
                            aria-haspopup="true"
                            className={isServiciosActive ? 'is-active' : ''}
                            onClick={() => setIsDropdownOpen((open) => !open)}
                        >
                            Servicios
                        </button>
                        <div id="servicios-menu" className="dropdown-menu">
                            <Link to="/servicios" onClick={closeMenus} className="dropdown-all">
                                Ver todos los servicios
                            </Link>
                            {SERVICIOS.map((servicio) => (
                                <Link key={servicio.slug} to={`/servicios/${servicio.slug}`} onClick={closeMenus}>
                                    {servicio.menuLabel || servicio.navLabel}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <NavLink to="/noticias" onClick={closeMenus}>Noticias</NavLink>
                    <NavLink to="/contacto" onClick={closeMenus}>Contáctanos</NavLink>
                </div>

                {/* BOTÓN MÓVIL (Hamburguesa) */}
                <button
                    type="button"
                    className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label="Abrir menú"
                    aria-expanded={isMenuOpen}
                    aria-controls="nav-links"
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
}
