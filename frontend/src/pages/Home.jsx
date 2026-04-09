import { useState, useEffect } from "react"
import axios from 'axios'
import '../css/index.css'
import '../css/shared.css'

function Home() {
    const [carrusel, setCarrusel] = useState([]);
    const [servicios, setServicios] = useState([]);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const [resCarrusel, resServicios, resClientes] = await Promise.all([
                    axios.get(`${apiUrl}/api/carrusel`),
                    axios.get(`${apiUrl}/api/servicios`),
                    axios.get(`${apiUrl}/api/clientes`)
                ]);
                setCarrusel(resCarrusel.data);
                setServicios(resServicios.data);
                setClientes(resClientes.data);
            } catch (error) {
                console.error("Error cargando datos desde la DB:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (carrusel.length === 0) return;

        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dot');
        let intervalId;

        if (slides.length > 0) {
            let current = 0;
            const total = slides.length;

            const goToSlide = (n) => {
                slides[current]?.classList.remove('active');
                dots[current]?.classList.remove('active');
                current = (n + total) % total;
                slides[current]?.classList.add('active');
                dots[current]?.classList.add('active');
            };

            dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));
            intervalId = setInterval(() => goToSlide(current + 1), 5000);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [carrusel]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, [servicios, clientes]); // Se vuelve a ejecutar cuando los elementos dinámicos cargan

    return (
        <>
            {/* ═══ Hero Carousel ═══ */}
            <section className="hero" id="hero">
                {carrusel.length > 0 ? carrusel.map((slide, index) => (
                    <div key={slide.id} className={`hero-slide ${index === 0 ? 'active' : ''}`}>
                        <img src={slide.image_url} alt={slide.title} />
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
                        <img src="img/hero/hero1.png" alt="Cargando..." />
                        <div className="hero-overlay">
                            <div className="hero-content">
                                <h1>Cargando...</h1>
                            </div>
                        </div>
                    </div>
                )}

                {carrusel.length > 0 && (
                    <div className="hero-dots">
                        {carrusel.map((slide, index) => (
                            <button key={slide.id} className={`hero-dot ${index === 0 ? 'active' : ''}`} aria-label={`Slide ${index + 1}`}></button>
                        ))}
                    </div>
                )}
            </section>

            {/* ═══ Intro Band ═══ */}
            <section className="intro-band">
                <div className="container">
                    <p className="fade-in">
                        <strong>PRESER SEGURIDAD S.A.C.</strong> es una empresa de seguridad integral con los más altos estándares de calidad. Contamos con un equipo de profesionales con amplia experiencia PNP®, provistos de armamento, licencias vigentes, equipos de comunicación enlazados con la red policial y un centro de control para la adecuada supervisión de cada servicio. <strong>Nuestra experiencia es el mejor respaldo</strong> para consolidar la seguridad que su empresa necesita.
                    </p>
                </div>
            </section>

            {/* ═══ Services Overview ═══ */}
            <section className="section section-light-gold" id="servicios">
                <div className="container">
                    <div className="section-header fade-in">
                        <h2>Nuestros Servicios</h2>
                        <p>Soluciones integrales de seguridad adaptadas a las necesidades de cada cliente</p>
                    </div>
                    <div className="services-grid">
                        {servicios.length > 0 ? servicios.map((servicio, index) => (
                            <a
                                href={`servicios/${servicio.slug}`}
                                key={servicio.id}
                                className="service-card fade-in"
                                style={index === servicios.length - 1 && servicios.length % 2 !== 0 ? { gridColumn: 'span 1' } : {}}
                            >
                                <div className="icon">{servicio.icon || '✦'}</div>
                                <h3>{servicio.title}</h3>
                                <p>{servicio.short_description}</p>
                                <span className="link">Ver más →</span>
                            </a>
                        )) : <p className="fade-in">Cargando servicios...</p>}
                    </div>
                </div>
            </section>

            {/* ═══ Worker Quality ═══ */}
            <section className="section" id="equipo">
                <div className="container">
                    <div className="worker-section fade-in">
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
                            <a href="contacto" className="btn btn-primary">Solicitar Servicio</a>
                        </div>
                        <div className="worker-image">
                            <img src="/img/workers.png" alt="Equipo de seguridad PRESER" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Clients ═══ */}
            <section className="section section-light-gold" id="clientes">
                <div className="container">
                    <div className="section-header fade-in">
                        <h2>Principales Clientes</h2>
                        <p>Empresas líderes confían en nuestra experiencia y profesionalismo</p>
                    </div>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {clientes.length > 0 ? (
                            <>
                                {clientes.map(cliente => (
                                    <div key={cliente.id} className="marquee-logo"><img src={cliente.logo_url} alt={cliente.name} /></div>
                                ))}
                                {/* Duplicated for seamless loop */}
                                {clientes.map(cliente => (
                                    <div key={`dup-${cliente.id}`} className="marquee-logo"><img src={cliente.logo_url} alt={cliente.name} /></div>
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
                <div className="container fade-in">
                    <h2>¿Necesita un Servicio de Seguridad Confiable?</h2>
                    <p>Somos la empresa legalmente constituida con todas las autorizaciones vigentes para brindarle la protección que su empresa merece.</p>
                    <a href="contacto" className="btn btn-primary" style={{ position: 'relative' }}>Contáctenos Ahora</a>
                </div>
            </section>
        </>
    )
}
export default Home