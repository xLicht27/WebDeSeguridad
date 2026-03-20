import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../../css/Servicios.css'
import '../../css/shared.css'

import FadeIn from "../../components/FadeIn";

function Eventos() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Seguridad para Eventos</h1>
                    <p>Cobertura profesional de seguridad para todo tipo de eventos con personal PNP® experimentado</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-detail-content">
                        <FadeIn>
                            <div className="service-main">
                                <h2>Seguridad Integral para Eventos</h2>
                                <p>En PRESER SEGURIDAD S.A.C. brindamos servicios de seguridad especializados para todo tipo de
                                    eventos. Nuestro equipo de profesionales PNP® se encarga de planificar, coordinar y ejecutar los
                                    protocolos de seguridad necesarios para que su evento se desarrolle sin contratiempos,
                                    garantizando la tranquilidad de organizadores y asistentes.</p>

                                <h2>Tipos de Eventos que Cubrimos</h2>
                                <ul>
                                    <li>Eventos sociales y ceremonias corporativas</li>
                                    <li>Eventos deportivos de cualquier escala</li>
                                    <li>Conferencias y congresos nacionales e internacionales</li>
                                    <li>Desfiles y eventos al aire libre</li>
                                    <li>Reuniones culturales y festivales</li>
                                    <li>Ferias comerciales y exposiciones</li>
                                    <li>Lanzamientos de productos y eventos empresariales</li>
                                    <li>Otros eventos que requieran seguridad profesional</li>
                                </ul>

                                <h2>Nuestro Enfoque</h2>
                                <p>Antes de cada evento, realizamos un análisis completo de la locación, evaluamos los puntos de
                                    acceso, establecemos protocolos de evacuación y coordinamos con las autoridades locales. Durante
                                    el evento, nuestro personal mantiene comunicación constante con el Centro de Control para
                                    asegurar una respuesta inmediata ante cualquier incidencia.</p>

                                <Link to="/contacto" className="btn btn-primary" style={{ marginTop: "20px" }}>Solicitar Este Servicio</Link>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="service-sidebar">
                                <div className="sidebar-card">
                                    <h3>Todos los Servicios</h3>
                                    <Link to="/servicios/custodia">Custodia de Mercadería</Link>
                                    <Link to="/servicios/instalaciones">Seguridad en Instalaciones</Link>
                                    <Link to="/servicios/investigacion">Servicios de Investigación</Link>
                                    <Link to="/servicios/traslado">Traslado y Protección Corporativa</Link>
                                    <Link to="/servicios/proteccionP">Protección a Personalidades</Link>
                                    <Link to="/servicios/eventos" className="active">Seguridad para Eventos</Link>
                                    <Link to="/servicios/verificaciones">Servicio de Verificaciones</Link>
                                </div>
                                <div className="sidebar-card">
                                    <h3>¿Necesita este servicio?</h3>
                                    <p style={{ color: "var(--dark-300)", fontSize: ".9rem", marginBottom: "16px" }}>Cotización según tipo y tamaño de evento.</p>
                                    <Link to="/contacto" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>Contáctenos</Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Eventos