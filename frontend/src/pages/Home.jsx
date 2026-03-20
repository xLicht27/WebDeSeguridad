import { useState, useEffect } from "react"
import axios from 'axios'
import '../css/index.css'
import '../css/shared.css'

function Home() {

    useEffect(() => {
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

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        return () => {
            if (intervalId) clearInterval(intervalId);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* ═══ Hero Carousel ═══ */}
            <section className="hero" id="hero">
                <div className="hero-slide active">
                    <img src="img/hero/hero1.png" alt="Custodia de Mercadería" />
                    <div className="hero-overlay">
                        <div className="hero-content">
                            <h1>Protección y Custodia de Mercadería</h1>
                            <p>Resguardo policial con los más altos estándares de seguridad para su carga en tránsito a cualquier destino del Perú.</p>
                            <a href="contacto.html" className="btn btn-primary">Contáctenos</a>
                        </div>
                    </div>
                </div>
                <div className="hero-slide">
                    <img src="img/hero/hero2.png" alt="Seguridad en Instalaciones" />
                    <div className="hero-overlay">
                        <div className="hero-content">
                            <h1>Seguridad en Instalaciones</h1>
                            <p>Protegemos empresas, edificios, plantas industriales y almacenes con personal PNP® altamente calificado.</p>
                            <a href="contacto.html" className="btn btn-primary">Contáctenos</a>
                        </div>
                    </div>
                </div>
                <div className="hero-slide">
                    <img src="img/hero/hero3.png" alt="Protección Corporativa" />
                    <div className="hero-overlay">
                        <div className="hero-content">
                            <h1>Protección Corporativa VIP</h1>
                            <p>Seguridad especializada para ejecutivos, funcionarios y personalidades con equipo de alto rendimiento.</p>
                            <a href="contacto.html" className="btn btn-primary">Contáctenos</a>
                        </div>
                    </div>
                </div>
                <div className="hero-dots">
                    <button className="hero-dot active" aria-label="Slide 1"></button>
                    <button className="hero-dot" aria-label="Slide 2"></button>
                    <button className="hero-dot" aria-label="Slide 3"></button>
                </div>
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
                        <a href="servicios/custodia.html" className="service-card fade-in">
                            <div className="icon">✦</div>
                            <h3>Custodia de Mercadería</h3>
                            <p>Resguardo policial en vehículos o personal PNP® en cabina, escolta a cualquier destino del Perú.</p>
                            <span className="link">Ver más →</span>
                        </a>
                        <a href="servicios/instalaciones.html" className="service-card fade-in">
                            <div className="icon">✦</div>
                            <h3>Seguridad en Instalaciones</h3>
                            <p>Protección para empresas, edificios, oficinas, plantas industriales, almacenes y predios.</p>
                            <span className="link">Ver más →</span>
                        </a>
                        <a href="servicios/investigacion.html" className="service-card fade-in">
                            <div className="icon">✦</div>
                            <h3>Servicios de Investigación</h3>
                            <p>Solución de problemas como sabotajes, robos, hurtos sistemáticos y malos manejos administrativos.</p>
                            <span className="link">Ver más →</span>
                        </a>
                        <a href="servicios/traslado.html" className="service-card fade-in">
                            <div className="icon">✦</div>
                            <h3>Traslado y Protección Corporativa</h3>
                            <p>Personal PNP® calificado para actuar ante cualquier evento de riesgo durante el traslado de personas.</p>
                            <span className="link">Ver más →</span>
                        </a>
                        <a href="servicios/proteccion-personalidades.html" className="service-card fade-in">
                            <div className="icon">✦</div>
                            <h3>Protección a Personalidades</h3>
                            <p>Seguridad para personas muy importantes, ejecutivos, funcionarios y otros cargos de alto perfil.</p>
                            <span className="link">Ver más →</span>
                        </a>
                        <a href="servicios/eventos.html" className="service-card fade-in">
                            <div className="icon">✦</div>
                            <h3>Seguridad para Eventos</h3>
                            <p>Cobertura de seguridad para eventos sociales, deportivos, conferencias, desfiles y reuniones.</p>
                            <span className="link">Ver más →</span>
                        </a>
                        <a href="servicios/verificaciones.html" className="service-card fade-in" style={{ gridColumn: 'span 1' }}>
                            <div className="icon">✦</div>
                            <h3>Servicio de Verificaciones</h3>
                            <p>Verificación de información de personas, estudios socio-económicos, domiciliarios y laborales.</p>
                            <span className="link">Ver más →</span>
                        </a>
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
                            <a href="contacto.html" className="btn btn-primary">Solicitar Servicio</a>
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
                    <div class="marquee-track">
                        <div className="marquee-logo"><img src="img/clientes/universidad-de-lima.svg" alt="Universidad de Lima" /></div>
                        <div className="marquee-logo"><img src="img/clientes/universidad-cientifica.png" alt="Universidad Científica del Sur" /></div>
                        <div className="marquee-logo"><img src="img/clientes/colegio-dante-alighieri.png" alt="Colegio Dante Alighieri" /></div>
                        <div className="marquee-logo"><img src="img/clientes/divemotor.png" alt="Divemotor" /></div>
                        <div className="marquee-logo"><img src="img/clientes/mercedes-benz.png" alt="Mercedes-Benz" /></div>
                        <div className="marquee-logo"><img src="img/clientes/dodge.png" alt="Dodge" /></div>
                        <div className="marquee-logo"><img src="img/clientes/cartavio-rum.png" alt="Cartavio Rum Company" /></div>
                        <div className="marquee-logo"><img src="img/clientes/aceros-arequipa.png" alt="Aceros Arequipa" /></div>
                        <div className="marquee-logo"><img src="img/clientes/jeep.png" alt="Jeep" /></div>
                        <div className="marquee-logo"><img src="img/clientes/fiat.png" alt="FIAT" /></div>
                        <div className="marquee-logo"><img src="img/clientes/colegio-raimondi.svg" alt="Colegio Italiano Antonio Raimondi" /></div>
                        <div className="marquee-logo"><img src="img/clientes/andesmotor.png" alt="Andesmotor" /></div>
                        {/*- Duplicated for seamless loop -->*/}
                        <div className="marquee-logo"><img src="img/clientes/universidad-de-lima.svg" alt="Universidad de Lima" /></div>
                        <div className="marquee-logo"><img src="img/clientes/universidad-cientifica.png" alt="Universidad Científica del Sur" /></div>
                        <div className="marquee-logo"><img src="img/clientes/colegio-dante-alighieri.png" alt="Colegio Dante Alighieri" /></div>
                        <div className="marquee-logo"><img src="img/clientes/divemotor.png" alt="Divemotor" /></div>
                        <div className="marquee-logo"><img src="img/clientes/mercedes-benz.png" alt="Mercedes-Benz" /></div>
                        <div className="marquee-logo"><img src="img/clientes/dodge.png" alt="Dodge" /></div>
                        <div className="marquee-logo"><img src="img/clientes/cartavio-rum.png" alt="Cartavio Rum Company" /></div>
                        <div className="marquee-logo"><img src="img/clientes/aceros-arequipa.png" alt="Aceros Arequipa" /></div>
                        <div className="marquee-logo"><img src="img/clientes/jeep.png" alt="Jeep" /></div>
                        <div className="marquee-logo"><img src="img/clientes/fiat.png" alt="FIAT" /></div>
                        <div className="marquee-logo"><img src="img/clientes/colegio-raimondi.svg" alt="Colegio Italiano Antonio Raimondi" /></div>
                        <div className="marquee-logo"><img src="img/clientes/andesmotor.png" alt="Andesmotor" /></div>
                    </div>
                </div>
            </section>
            {/* ═══ CTA ═══ */}
            <section className="cta-section">
                <div className="container fade-in">
                    <h2>¿Necesita un Servicio de Seguridad Confiable?</h2>
                    <p>Somos la empresa legalmente constituida con todas las autorizaciones vigentes para brindarle la protección que su empresa merece.</p>
                    <a href="contacto.html" className="btn btn-primary" style={{ position: 'relative' }}>Contáctenos Ahora</a>
                </div>
            </section>
        </>
    )
}
export default Home