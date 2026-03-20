import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../../css/Servicios.css'
import '../../css/shared.css'

import FadeIn from "../../components/FadeIn";

function Custodia() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Protección y Custodia de Mercadería en Tránsito</h1>
                    <p>Resguardo policial de primer nivel para la seguridad de su carga en cualquier destino del Perú</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-detail-content">
                        <FadeIn>
                            <div className="service-main">
                                <h2>Servicio de Custodia Integral</h2>
                                <p>En PRESER SEGURIDAD S.A.C. brindamos un servicio de resguardo policial de primer nivel para la
                                    protección de su mercadería en tránsito. Nuestro equipo de profesionales con experiencia PNP®
                                    garantiza la seguridad de su carga desde el punto de origen hasta su destino final.</p>
                                <p>Contamos con personal altamente calificado que acompaña su mercadería en todo momento, ya sea en
                                    vehículos de escolta o directamente en cabina, asegurando la integridad de sus productos durante
                                    todo el trayecto.</p>

                                <h2>Nuestras Modalidades de Custodia</h2>
                                <ul>
                                    <li>Resguardo Policial en vehículos de escolta con personal PNP® armado</li>
                                    <li>Personal PNP® en cabina del vehículo de carga para protección directa</li>
                                    <li>Escolta de camiones y tráileres a cualquier destino de Lima, Callao y provincias del Perú</li>
                                    <li>Traslado de vehículos de reparto desde planta de producción a centro de distribución</li>
                                    <li>Custodia de carga ancha y mercadería de alto valor</li>
                                    <li>Monitoreo GPS satelital en tiempo real durante todo el recorrido</li>
                                    <li>Coordinación permanente con nuestro Centro de Control</li>
                                </ul>

                                <h2>¿Por qué elegirnos?</h2>
                                <p>Nuestra experiencia en custodia de mercadería nos ha permitido consolidarnos como una de las
                                    empresas más confiables del sector. Cada operación es planificada meticulosamente, evaluando
                                    rutas, puntos críticos y protocolos de contingencia para garantizar que su carga llegue segura a
                                    su destino.</p>
                                <p>Contamos con vehículos equipados con GPS Satelital monitoreados las 24 horas desde nuestro Centro
                                    de Control, y comunicación directa con las unidades policiales a nivel nacional.</p>

                                <Link to="/contacto" className="btn btn-primary" style={{ marginTop: "20px" }}>Solicitar Este Servicio</Link>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="service-sidebar">
                                <div className="sidebar-card">
                                    <h3>Todos los Servicios</h3>
                                    <Link to="/servicios/custodia" className="active">Custodia de Mercadería</Link>
                                    <Link to="/servicios/instalaciones">Seguridad en Instalaciones</Link>
                                    <Link to="/servicios/investigacion">Servicios de Investigación</Link>
                                    <Link to="/servicios/traslado">Traslado y Protección Corporativa</Link>
                                    <Link to="/servicios/proteccionP">Protección a Personalidades</Link>
                                    <Link to="/servicios/eventos">Seguridad para Eventos</Link>
                                    <Link to="/servicios/verificaciones">Servicio de Verificaciones</Link>
                                </div>
                                <div className="sidebar-card">
                                    <h3>¿Necesita este servicio?</h3>
                                    <p style={{ color: "var(--dark-300)", fontSize: ".9rem", marginBottom: "16px" }}>Contáctenos para una
                                        cotización personalizada.</p>
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
export default Custodia