import { useState, useEffect } from "react"
import axios from "axios"
import '../css/Nosotros.css'
import '../css/shared.css'

import FadeIn from "../components/FadeIn";

function Nosotros() {

    return (
        <>
            <section className="about-hero">
                <div className="container">
                    <h1>Nosotros</h1>
                    <p>Conoce quiénes somos, nuestra misión, visión y los valores que guían nuestro servicio de excelencia.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <FadeIn>
                        <div className="section-header">
                            <h2>Quiénes Somos</h2>
                            <p>Una empresa comprometida con la seguridad integral del Perú</p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="about-description-container">
                            <p className="about-description-text">
                                <strong>PRESER SEGURIDAD S.A.C.</strong> es una empresa de
                                intermediación laboral
                                especializada en actividades de vigilancia privada y servicio de seguridad integral con los más
                                altos estándares
                                de calidad. Para ello contamos con un equipo de profesionales con amplia experiencia PNP® provisto
                                de armamento,
                                licencia para portar arma, equipos de comunicación enlazados con la red policial y nuestro centro de
                                control
                                para una adecuada supervisión, control y comunicación del servicio.
                            </p>
                            <p className="about-description-text">
                                Nuestra experiencia es el mejor respaldo para consolidarnos en el mercado empresarial. Somos una
                                empresa
                                legalmente constituida con todas las autorizaciones vigentes y actualizadas. Contamos con
                                profesionales de
                                seguridad cuyos efectivos tienen la experiencia vivida en la PNP que les permite realizar una
                                apreciación
                                profesional de la situación de cada zona de responsabilidad.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-light-gold">
                <div className="container">
                    <FadeIn>
                        <div className="mission-vision">
                            <div className="mv-card">
                                <h3>Misión</h3>
                                <p>"Brindar siempre el mejor servicio de seguridad integral y satisfacer las necesidades de nuestros
                                    clientes,
                                    cumpliendo los lineamientos de nuestros sistemas de gestión, búsqueda de la mejora continua y la
                                    fidelización
                                    de nuestros clientes."</p>
                            </div>
                            <div className="mv-card">
                                <h3>Visión</h3>
                                <p>"Constituirnos entre las empresas líderes en servicio de seguridad y vigilancia privada y ser
                                    reconocidos
                                    como los mejores desarrolladores de seguridad del país."</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container">
                    <FadeIn>
                        <div className="section-header">
                            <h2>Nuestros Valores: PRESER</h2>
                            <p>Los principios que nos definen y guían cada acción de nuestro equipo</p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="values-grid">
                            <div className="value-card">
                                <div className="letter">P</div>
                                <h4>Proactivo</h4>
                                <p>Iniciativa y capacidad para anticiparse a necesidades futuras.</p>
                            </div>
                            <div className="value-card">
                                <div className="letter">R</div>
                                <h4>Responsabilidad</h4>
                                <p>Llegar puntual al servicio y cumplir el rol asignado con compromiso total.</p>
                            </div>
                            <div className="value-card">
                                <div className="letter">E</div>
                                <h4>Excelencia</h4>
                                <p>Hacer las cosas siempre mejor, buscando la mejora continua en cada servicio.</p>
                            </div>
                            <div className="value-card">
                                <div className="letter">S</div>
                                <h4>Solidaridad</h4>
                                <p>Perseguir una causa noble y justa, apoyando a nuestro equipo y clientes.</p>
                            </div>
                            <div className="value-card">
                                <div className="letter">E</div>
                                <h4>Ética</h4>
                                <p>Actuar de manera honesta y transparente en cada operación que realizamos.</p>
                            </div>
                            <div className="value-card">
                                <div className="letter">R</div>
                                <h4>Reto</h4>
                                <p>Asumir todos los compromisos como propios, superando las expectativas.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <FadeIn>
                        <div className="section-header">
                            <h2>Nuestra Logística</h2>
                            <p>Equipamiento de última generación para garantizar un servicio eficiente</p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="icon">✦</div>
                                <h3>Comunicaciones</h3>
                                <p>Teléfonos celulares conectados con las diferentes unidades policiales a nivel nacional para una
                                    coordinación inmediata.</p>
                            </div>
                            <div className="service-card">
                                <div className="icon">✦</div>
                                <h3>Vehículos con GPS</h3>
                                <p>Automóviles y camionetas con GPS SATELITAL PERU S.A., monitoreados por nuestro Centro de Control
                                    para custodia, escoltas e investigación.</p>
                            </div>
                            <div className="service-card">
                                <div className="icon">✦</div>
                                <h3>Vehículos Menores</h3>
                                <p>Motos lineales para el control y supervisión constante de los diferentes puestos de servicios en
                                    la ciudad.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-light-gold">
                <div className="container">
                    <FadeIn>
                        <div className="section-header">
                            <h2>Pólizas de Seguros</h2>
                            <p>Respaldo para brindar un servicio confiable y seguro</p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="icon">✦</div>
                                <h3>Seguro de Deshonestidad</h3>
                                <p>Cobertura integral que protege a nuestros clientes ante cualquier eventualidad relacionada con el
                                    servicio de seguridad.</p>
                            </div>
                            <div className="service-card">
                                <div className="icon">✦</div>
                                <h3>Seguro de Responsabilidad Civil</h3>
                                <p>Protección legal completa para garantizar la tranquilidad de nuestros clientes durante la
                                    prestación de servicios.</p>
                            </div>
                            <div className="service-card">
                                <div className="icon">✦</div>
                                <h3>SCTR</h3>
                                <p>Seguro Complementario de Trabajo de Riesgo para la protección de todos nuestros colaboradores en
                                    servicio.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <FadeIn>
                        <div className="about-workers">
                            <h3> Nuestro Compromiso con Nuestro Equipo Humano</h3>
                            <p>
                                En PRESER SEGURIDAD S.A.C. creemos que la excelencia del servicio comienza con el bienestar de
                                nuestra gente.
                                Cada miembro de nuestro equipo es tratado con el respeto y la dignidad que merece. Ofrecemos
                                condiciones laborales
                                justas, capacitación continua y un ambiente de trabajo que fomenta el crecimiento profesional.
                                Nuestros colaboradores
                                no son solo empleados, son la columna vertebral de nuestra empresa y la razón de nuestro éxito.
                                Invertimos en
                                su desarrollo porque sabemos que un equipo valorado brinda un servicio excepcional. Cuando cuidamos
                                a los nuestros,
                                ellos cuidan de los suyos.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
export default Nosotros