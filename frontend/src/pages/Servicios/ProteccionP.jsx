import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../../css/Servicios.css'
import '../../css/shared.css'

import FadeIn from "../../components/FadeIn";

function ProteccionP() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Protección y Seguridad a Personalidades</h1>
                    <p>Seguridad especializada para personas muy importantes, ejecutivos, funcionarios y personalidades de alto
                        perfil</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-detail-content">
                        <FadeIn>
                            <div className="service-main">
                                <h2>Servicio de Protección VIP</h2>
                                <p>En PRESER SEGURIDAD S.A.C. ofrecemos un servicio de protección personal de élite, diseñado para
                                    personalidades que requieren un nivel superior de seguridad. Nuestros agentes PNP® están
                                    entrenados específicamente en técnicas de protección de personas importantes, con capacidad de
                                    reacción inmediata ante cualquier amenaza.</p>

                                <h2>Perfiles que Protegemos</h2>
                                <ul>
                                    <li>Personas Muy Importantes (VIP) nacionales e internacionales</li>
                                    <li>Ejecutivos y directivos de alto nivel corporativo</li>
                                    <li>Funcionarios públicos y diplomáticos</li>
                                    <li>Personalidades del mundo empresarial y financiero</li>
                                    <li>Figuras públicas y personalidades mediáticas</li>
                                    <li>Familias de alto perfil que requieran protección especial</li>
                                </ul>

                                <h2>Nivel de Servicio Premium</h2>
                                <p>Nuestro servicio incluye la evaluación de riesgos del protegido, diseño de protocolos de
                                    seguridad personalizados, selección de agentes según el perfil requerido, y coordinación
                                    permanente con nuestro Centro de Control. Cada detalle es cuidadosamente planificado para
                                    brindar la máxima protección con la menor intrusión en la rutina del protegido.</p>
                                <p>Garantizamos discreción absoluta, profesionalismo y capacidad de respuesta ante cualquier
                                    situación de emergencia.</p>

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
                                        <Link to="/servicios/proteccionP" className="active">Protección a Personalidades</Link>
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
export default ProteccionP