import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../../css/Servicios.css'
import '../../css/shared.css'

import FadeIn from "../../components/FadeIn";

function Instalaciones() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Seguridad en Instalaciones</h1>
                    <p>Protección integral para sus instalaciones con personal especializado PNP®</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-detail-content">
                        <FadeIn>
                            <div className="service-main">
                                <h2>Protección Integral para sus Instalaciones</h2>
                                <p>Nuestro servicio de seguridad en instalaciones está diseñado para brindar protección completa a
                                    todo tipo de infraestructura empresarial. Contamos con personal PNP® con experiencia comprobada
                                    en vigilancia y protección de activos, preparados para responder ante cualquier situación de
                                    riesgo.</p>
                                <p>Realizamos una evaluación exhaustiva de sus instalaciones para diseñar un plan de seguridad
                                    personalizado que cubra todos los puntos vulnerables y garantice la protección de sus bienes,
                                    personal y procesos.</p>

                                <h2>Tipos de Instalaciones que Protegemos</h2>
                                <ul>
                                    <li>Empresas y corporaciones de todos los sectores</li>
                                    <li>Edificios comerciales y residenciales</li>
                                    <li>Oficinas administrativas</li>
                                    <li>Plantas industriales y de producción</li>
                                    <li>Almacenes y centros de distribución</li>
                                    <li>Terrenos y predios en desarrollo</li>
                                    <li>Centros comerciales y establecimientos</li>
                                </ul>

                                <h2>Características del Servicio</h2>
                                <p>Nuestro personal cuenta con equipos de comunicación enlazados con la red policial, armamento con
                                    licencia vigente, y supervisión permanente desde nuestro Centro de Control. Implementamos
                                    protocolos de seguridad perimetral, control de accesos, rondas programadas y sistemas de reporte
                                    en tiempo real para garantizar la máxima protección.</p>

                                <Link to="/contacto" className="btn btn-primary" style={{ marginTop: "20px" }}>Solicitar Este Servicio</Link>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="service-sidebar">
                                <div className="sidebar-card">
                                    <h3>Todos los Servicios</h3>
                                    <Link to="/servicios/custodia">Custodia de Mercadería</Link>
                                    <Link to="/servicios/instalaciones" className="active">Seguridad en Instalaciones</Link>
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
export default Instalaciones