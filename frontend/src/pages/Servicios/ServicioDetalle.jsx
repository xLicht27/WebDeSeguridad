import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import useSeo from '../../hooks/useSeo';
import { SERVICIOS, getServicio } from '../../data/servicios';
import '../../css/Servicios.css';
import '../../css/shared.css';

/**
 * Página única para todos los servicios.
 * El contenido sale de `src/data/servicios.js` según el :slug de la URL.
 */
function ServicioDetalle() {
    const { slug } = useParams();
    const servicio = getServicio(slug);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useSeo({
        title: servicio?.titulo,
        description: servicio?.bajada,
    });

    // Slug desconocido -> volvemos al índice de servicios
    if (!servicio) return <Navigate to="/servicios" replace />;

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>{servicio.titulo}</h1>
                    <p>{servicio.bajada}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-detail-content">
                        <FadeIn>
                            <div className="service-main">
                                {servicio.secciones.map((seccion) => (
                                    <div key={seccion.titulo}>
                                        <h2>{seccion.titulo}</h2>
                                        {seccion.parrafos?.map((parrafo) => (
                                            <p key={parrafo.slice(0, 40)}>{parrafo}</p>
                                        ))}
                                        {seccion.items && (
                                            <ul>
                                                {seccion.items.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}

                                <Link to="/contacto" className="btn btn-primary" style={{ marginTop: "20px" }}>
                                    Solicitar Este Servicio
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="service-sidebar">
                                <div className="sidebar-card">
                                    <h3
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        className={isMobileMenuOpen ? "open" : ""}
                                    >
                                        Todos los Servicios
                                    </h3>
                                    <div className={`sidebar-links ${isMobileMenuOpen ? "open" : ""}`}>
                                        {SERVICIOS.map((item) => (
                                            <Link
                                                key={item.slug}
                                                to={`/servicios/${item.slug}`}
                                                className={item.slug === servicio.slug ? 'active' : ''}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item.navLabel}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ServicioDetalle
