import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../../css/Servicios.css'
import '../../css/shared.css'

import FadeIn from "../../components/FadeIn";

function Verificaciones() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Servicio de Verificaciones</h1>
                    <p>Verificación profesional de información personal, laboral y domiciliaria con total confidencialidad</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-detail-content">
                        <FadeIn>
                            <div className="service-main">
                                <h2>Verificaciones Profesionales</h2>
                                <p>Nuestro servicio de verificaciones está diseñado para brindar información confiable y verificada
                                    sobre personas, contribuyendo a la toma de decisiones acertadas en procesos de contratación,
                                    evaluación crediticia, y otros escenarios donde se requiera validar información. Cada
                                    verificación es realizada por profesionales con experiencia PNP® que garantizan la veracidad y
                                    confidencialidad de los resultados.</p>

                                <h2>Tipos de Verificaciones</h2>
                                <ul>
                                    <li>Verificación de informaciones básicas de personas (identidad, antecedentes)</li>
                                    <li>Estudios socio-económicos completos para evaluación crediticia</li>
                                    <li>Verificaciones domiciliarias con visita in situ y registro fotográfico</li>
                                    <li>Verificaciones laborales de referencias y trayectoria profesional</li>
                                    <li>Verificación de datos académicos y certificaciones</li>
                                    <li>Estudios de entorno y análisis de riesgo personal</li>
                                    <li>Verificaciones para procesos de selección de personal</li>
                                </ul>

                                <h2>Proceso de Verificación</h2>
                                <p>Nuestro proceso incluye la recopilación de información a través de fuentes primarias y
                                    confiables, visitas de campo cuando es necesario, entrevistas con referencias, y la elaboración
                                    de un informe detallado con los hallazgos. Todos los informes son entregados con total
                                    confidencialidad y en los plazos acordados con el cliente.</p>

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
                                        <Link to="/servicios/traslado">Traslado y Protección Corporativa</Link>
                                        <Link to="/servicios/proteccionP">Protección a Personalidades</Link>
                                        <Link to="/servicios/eventos">Seguridad para Eventos</Link>
                                        <Link to="/servicios/verificaciones" className="active">Servicio de Verificaciones</Link>
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
export default Verificaciones