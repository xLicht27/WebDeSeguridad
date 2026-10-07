import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ShieldCheck, Radio, Satellite, Truck } from "lucide-react"
import FadeIn from "../components/FadeIn"
import useSeo from "../hooks/useSeo"
import { getSlides, getServicios, getClientes } from '../supabaseClient'
import '../css/index.css'
import '../css/shared.css'

const INDICADORES = [
    { icon: ShieldCheck, titulo: 'Personal PNP®', texto: 'Efectivos con experiencia policial y licencias vigentes' },
    { icon: Radio, titulo: 'Centro de Control 24/7', texto: 'Supervisión permanente y comunicación enlazada' },
    { icon: Satellite, titulo: 'Monitoreo GPS', texto: 'Vehículos rastreados por satélite durante todo el recorrido' },
    { icon: Truck, titulo: 'Cobertura nacional', texto: 'Lima, Callao y provincias del Perú' },
];

function Home() {
    useSeo({
        title: 'Seguridad Integral en Lima',
        description: 'PRESER SEGURIDAD S.A.C. ofrece seguridad integral con personal PNP®, centro de control 24/7 y monitoreo GPS: custodia de mercadería, instalaciones, investigación, traslado, protección VIP, eventos y verificaciones.',
    });

    const [carrusel, setCarrusel] = useState([]);
    const [servicios, setServicios] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [slideActivo, setSlideActivo] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [slidesData, serviciosData, clientesData] = await Promise.all([
                    getSlides(),
                    getServicios(),
                    getClientes()
                ]);
                setCarrusel(slidesData);
                setServicios(serviciosData);
                setClientes(clientesData);
            } catch (error) {
                console.error("Error cargando datos desde Supabase:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    // Autoavance del carrusel (sin tocar el DOM)
    useEffect(() => {
        if (carrusel.length < 2) return;
        const intervalo = setInterval(() => {
            setSlideActivo((actual) => (actual + 1) % carrusel.length);
        }, 5000);
        return () => clearInterval(intervalo);
    }, [carrusel.length]);

    // Reinicia si cambia la cantidad de slides
    useEffect(() => {
        if (slideActivo >= carrusel.length) setSlideActivo(0);
    }, [carrusel.length, slideActivo]);

    if (isLoading) {
        return (
            <div className="global-loader">
                <img src="/img/logo.png" alt="PRESER SEGURIDAD" className="loader-logo" />
            </div>
        );
    }

    return (
        <>
            {/* ═══ Hero Carousel ═══ */}
            <section className="hero" id="hero">
                {carrusel.length > 0 ? carrusel.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slide ${index === slideActivo ? 'active' : ''}`}
                        aria-hidden={index !== slideActivo}
                        inert={index !== slideActivo}
                    >
                        <img
                            src={slide.image_url}
                            alt={slide.title || ''}
                            fetchPriority={index === 0 ? 'high' : 'low'}
                            loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        <div className="hero-overlay">
                            <div className="hero-content">
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                                <a href={slide.button_link} className="btn btn-primary">{slide.button_text}</a>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="hero-slide active">
                        <img src="img/hero/hero1.jpeg" alt="" />
                        <div className="hero-overlay">
                            <div className="hero-content">
                                <h1>Cargando...</h1>
                            </div>
                        </div>
                    </div>
                )}

                {carrusel.length > 1 && (
                    <div className="hero-dots" role="tablist" aria-label="Seleccionar imagen de portada">
                        {carrusel.map((slide, index) => (
                            <button
                                key={slide.id}
                                type="button"
                                role="tab"
                                className={`hero-dot ${index === slideActivo ? 'active' : ''}`}
                                aria-label={`Ir al slide ${index + 1}`}
                                aria-selected={index === slideActivo}
                                onClick={() => setSlideActivo(index)}
                            ></button>
                        ))}
                    </div>
                )}
            </section>

            {/* ═══ Intro Band ═══ */}
            <section className="intro-band">
                <div className="container">
                    <FadeIn>
                        <p>
                            <strong>PRESER SEGURIDAD S.A.C.</strong> es una empresa de seguridad integral con los más altos estándares de calidad. Contamos con un equipo de profesionales con amplia experiencia PNP®, provistos de armamento, licencias vigentes, equipos de comunicación enlazados con la red policial y un centro de control para la adecuada supervisión de cada servicio. <strong>Nuestra experiencia es el mejor respaldo</strong> para consolidar la seguridad que su empresa necesita.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ═══ Indicadores de confianza ═══ */}
            <section className="section indicadores">
                <div className="container">
                    <div className="indicadores-grid">
                        {INDICADORES.map(({ icon: Icon, titulo, texto }, index) => (
                            <FadeIn key={titulo} delay={index * 0.08} className="indicador">
                                <span className="indicador-icono"><Icon size={28} strokeWidth={1.8} aria-hidden="true" /></span>
                                <h3>{titulo}</h3>
                                <p>{texto}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Services Overview ═══ */}
            <section className="section section-light-gold" id="servicios">
                <div className="container">
                    <FadeIn className="section-header">
                        <h2>Nuestros Servicios</h2>
                        <p>Soluciones integrales de seguridad adaptadas a las necesidades de cada cliente</p>
                    </FadeIn>
                    <div className="services-grid">
                        {servicios.length > 0 ? servicios.map((servicio, index) => (
                            <FadeIn key={servicio.id} delay={index * 0.06} className="fade-card">
                                <Link to={`/servicios/${servicio.slug}`} className="service-card">
                                    <div className="icon" aria-hidden="true">{servicio.icon || '✦'}</div>
                                    <h3>{servicio.title}</h3>
                                    <p>{servicio.short_description}</p>
                                    <span className="link">Ver más →</span>
                                </Link>
                            </FadeIn>
                        )) : <p>Cargando servicios...</p>}
                    </div>
                </div>
            </section>

            {/* ═══ Worker Quality ═══ */}
            <section className="section" id="equipo">
                <div className="container">
                    <FadeIn className="worker-section">
                        <div className="worker-text">
                            <h2>Nuestro Equipo: La Clave de Nuestra Excelencia</h2>
                            <p>
                                En PRESER SEGURIDAD S.A.C. sabemos que la calidad de nuestro servicio reside en la calidad de nuestra gente. Cada uno de nuestros efectivos cuenta con experiencia vivida en la PNP, lo que les permite realizar una apreciación profesional de la situación de seguridad en cada zona de responsabilidad.
                            </p>
                            <ul className="highlight-list">
                                <li>Personal con amplia experiencia en la Policía Nacional del Perú</li>
                                <li>Licencias vigentes para portar arma de fuego</li>
                                <li>Equipos de comunicación enlazados con la red policial</li>
                                <li>Capacitación continua y actualización constante</li>
                                <li>Supervisión permanente desde nuestro Centro de Control</li>
                                <li>Vehículos con GPS satelital monitoreados 24/7</li>
                            </ul>
                            <Link to="/contacto" className="btn btn-primary">Solicitar Servicio</Link>
                        </div>
                        <div className="worker-image">
                            <img src="/img/workers.jpeg" alt="Equipo de seguridad PRESER" loading="lazy" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ═══ Clients ═══ */}
            <section className="section section-light-gold" id="clientes">
                <div className="container">
                    <FadeIn className="section-header">
                        <h2>Principales Clientes</h2>
                        <p>Empresas líderes confían en nuestra experiencia y profesionalismo</p>
                    </FadeIn>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {clientes.length > 0 ? (
                            <>
                                {clientes.map(cliente => (
                                    <div key={cliente.id} className="marquee-logo"><img src={cliente.logo_url} alt={cliente.name} loading="lazy" /></div>
                                ))}
                                {/* Duplicated for seamless loop */}
                                {clientes.map(cliente => (
                                    <div key={`dup-${cliente.id}`} className="marquee-logo" aria-hidden="true"><img src={cliente.logo_url} alt="" loading="lazy" /></div>
                                ))}
                            </>
                        ) : (
                            <p>Cargando clientes...</p>
                        )}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="cta-section">
                <div className="container">
                    <FadeIn>
                        <h2>¿Necesita un Servicio de Seguridad Confiable?</h2>
                        <p>Somos la empresa legalmente constituida con todas las autorizaciones vigentes para brindarle la protección que su empresa merece.</p>
                        <Link to="/contacto" className="btn btn-primary">Contáctenos Ahora</Link>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
export default Home
