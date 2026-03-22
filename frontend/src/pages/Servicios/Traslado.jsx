import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../../css/Servicios.css'
import '../../css/shared.css'

import FadeIn from "../../components/FadeIn";

function Traslado() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Traslado de Personal y Protección Corporativa</h1>
                    <p>Personal PNP® altamente calificado para actuar ante cualquier evento de riesgo durante el traslado de personas</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-detail-content">
                        <FadeIn>
                            <div className="service-main">
                                <h2>Protección Corporativa de Alto Nivel</h2>
                                <p>Nuestro servicio de traslado de personal y protección corporativa está diseñado para garantizar
                                    la seguridad de ejecutivos, funcionarios y personal clave de su organización durante sus
                                    desplazamientos. Contamos con agentes PNP® especializados en protección de personas, capacitados
                                    para actuar de manera rápida y efectiva ante cualquier situación de riesgo.</p>

                                <h2>Características del Servicio</h2>
                                <ul>
                                    <li>Personal PNP® altamente calificado en protección de personas</li>
                                    <li>Vehículos de escolta equipados con GPS satelital</li>
                                    <li>Evaluación previa de rutas y puntos críticos</li>
                                    <li>Planes de contingencia para situaciones de emergencia</li>
                                    <li>Comunicación permanente con el Centro de Control</li>
                                    <li>Coordinación con unidades policiales en la zona de tránsito</li>
                                    <li>Protección puerta a puerta con máxima discreción</li>
                                </ul>

                                <h2>Servicio Personalizado</h2>
                                <p>Cada servicio de traslado es planificado de acuerdo a las necesidades específicas del cliente.
                                    Evaluamos el nivel de riesgo, diseñamos la ruta más segura y asignamos el personal adecuado para
                                    garantizar un traslado sin contratiempos. Nuestro equipo mantiene comunicación constante con
                                    nuestro Centro de Control las 24 horas.</p>

                                <Link to="/contacto" className="btn btn-primary" style={{ marginTop: "20px" }}>Solicitar Este Servicio</Link>
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
                                        <Link to="/servicios/custodia">Custodia de Mercadería</Link>
                                        <Link to="/servicios/instalaciones">Seguridad en Instalaciones</Link>
                                        <Link to="/servicios/investigacion">Servicios de Investigación</Link>
                                        <Link to="/servicios/traslado" className="active">Traslado y Protección Corporativa</Link>
                                        <Link to="/servicios/proteccionP">Protección a Personalidades</Link>
                                        <Link to="/servicios/eventos">Seguridad para Eventos</Link>
                                        <Link to="/servicios/verificaciones">Servicio de Verificaciones</Link>
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
export default Traslado