import { Link } from 'react-router-dom';
import { Truck, Building2, Search, Car, Crown, CalendarCheck, ClipboardCheck, ArrowRight } from 'lucide-react';
import FadeIn from '../../components/FadeIn';
import useSeo from '../../hooks/useSeo';
import { SERVICIOS } from '../../data/servicios';
import '../../css/Servicios.css';
import '../../css/shared.css';

const ICONOS = {
    custodia: Truck,
    instalaciones: Building2,
    investigacion: Search,
    traslado: Car,
    proteccionP: Crown,
    eventos: CalendarCheck,
    verificaciones: ClipboardCheck,
};

/** Índice general de servicios: /servicios */
function ServiciosIndex() {
    useSeo({
        title: 'Servicios de Seguridad',
        description: 'Conozca los servicios de seguridad integral de PRESER SEGURIDAD S.A.C.: custodia, instalaciones, investigación, traslado, protección VIP, eventos y verificaciones.',
    });

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Nuestros Servicios</h1>
                    <p>Siete líneas de servicio de seguridad integral, todas con personal PNP® y supervisión desde nuestro Centro de Control</p>
                </div>
            </section>

            <section className="section section-light-gold">
                <div className="container">
                    <div className="services-grid">
                        {SERVICIOS.map((servicio, index) => {
                            const Icono = ICONOS[servicio.slug] || ArrowRight;
                            return (
                                <FadeIn key={servicio.slug} delay={index * 0.06} className="fade-card">
                                    <Link to={`/servicios/${servicio.slug}`} className="service-card">
                                        <div className="icon" aria-hidden="true"><Icono size={26} strokeWidth={1.8} /></div>
                                        <h3>{servicio.navLabel}</h3>
                                        <p>{servicio.bajada}</p>
                                        <span className="link">Ver más →</span>
                                    </Link>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <FadeIn>
                        <h2>¿No sabe cuál servicio necesita?</h2>
                        <p>Cuéntenos su situación y nuestro equipo le recomienda la solución de seguridad más adecuada.</p>
                        <Link to="/contacto" className="btn btn-primary">Hablar con un asesor</Link>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
export default ServiciosIndex;
