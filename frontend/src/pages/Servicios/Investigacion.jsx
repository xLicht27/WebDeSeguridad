import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../../css/Servicios.css'
import '../../css/shared.css'

import FadeIn from "../../components/FadeIn";

function Investigacion() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Servicios de Investigación</h1>
                    <p>Investigaciones profesionales con equipos especializados de la PNP® para resolver problemas complejos</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-detail-content">
                        <FadeIn>
                            <div className="service-main">
                                <h2>Investigaciones Profesionales</h2>
                                <p>Nuestro equipo de investigación, conformado por profesionales con amplia experiencia en la PNP,
                                    está preparado para abordar situaciones complejas que requieren un análisis profundo y una
                                    resolución efectiva. Utilizamos metodologías probadas y recursos especializados para llegar al
                                    fondo de cualquier situación.</p>
                                <p>Cada caso es tratado con la máxima confidencialidad y discreción, garantizando la protección de
                                    la información de nuestros clientes en todo momento.</p>

                                <h2>Áreas de Investigación</h2>
                                <ul>
                                    <li>Sabotajes corporativos e industriales</li>
                                    <li>Robo agravado y hurtos sistemáticos de materiales</li>
                                    <li>Investigación de homicidios y delitos graves</li>
                                    <li>Casos de adulterio e infidelidad</li>
                                    <li>Sustracción de documentación confidencial</li>
                                    <li>Malos manejos administrativos y fraude interno</li>
                                    <li>Corrupción dentro de organizaciones</li>
                                    <li>Agitación laboral y conflictos internos</li>
                                    <li>Otras investigaciones especializadas según requerimiento</li>
                                </ul>

                                <h2>Nuestra Metodología</h2>
                                <p>Nuestro equipo de investigadores PNP® especializados aplica técnicas profesionales de
                                    recopilación de evidencia, análisis de información, vigilancia discreta y elaboración de
                                    informes detallados. Cada investigación culmina con un reporte completo que puede ser utilizado
                                    como soporte para acciones legales si el cliente lo requiere.</p>

                                <Link to="/contacto" className="btn btn-primary" style={{ marginTop: "20px" }}>Solicitar Este Servicio</Link>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="service-sidebar">
                                <div className="sidebar-card">
                                    <h3>Todos los Servicios</h3>
                                    <Link to="/servicios/custodia">Custodia de Mercadería</Link>
                                    <Link to="/servicios/instalaciones">Seguridad en Instalaciones</Link>
                                    <Link to="/servicios/investigacion" className="active">Servicios de Investigación</Link>
                                    <Link to="/servicios/traslado">Traslado y Protección Corporativa</Link>
                                    <Link to="/servicios/proteccionP">Protección a Personalidades</Link>
                                    <Link to="/servicios/eventos">Seguridad para Eventos</Link>
                                    <Link to="/servicios/verificaciones">Servicio de Verificaciones</Link>
                                </div>
                                <div className="sidebar-card">
                                    <h3>¿Necesita este servicio?</h3>
                                    <p style={{ color: "var(--dark-300)", fontSize: ".9rem", marginBottom: "16px" }}>Consultas confidenciales.
                                        Contáctenos.</p>
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
export default Investigacion