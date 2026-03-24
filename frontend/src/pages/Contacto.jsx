import { useState, useEffect } from "react";
import axios from "axios";
import '../css/Contacto.css'
import '../css/shared.css'

import FadeIn from "../components/FadeIn";

function Contacto() {
    const [enviado, setEnviado] = useState(false);
    const [resultado, setResultado] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setEnviado(true);
        setResultado(null);

        const form = event.target;

        try {
            const apiUrl = import.meta.env.VITE_API_URL
            await axios.post(`${apiUrl}/api/contacto`, {
                full_name: form.contacto.value,
                email: form.email.value,
                phone: form.telefono.value,
                company: form.empresa.value,
                service_interested: form.servicio.value,
                message: form.mensaje.value,
                ruc: form.ruc.value,
                position: form.cargo.value,
            });
            setResultado("ok");
            form.reset();
        } catch (err) {
            console.error(err);
            setResultado("error");
        } finally {
            setEnviado(false)
        }
    };

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Contáctanos</h1>
                    <p>Estamos listos para brindarle la seguridad integral que su empresa necesita</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">

                        <FadeIn>
                            <div className="contact-info-card">
                                <h3>Información de Contacto</h3>

                                <div className="contact-item">
                                    <div className="icon-circle">✦</div>
                                    <div className="info">
                                        <h4>Dirección</h4>
                                        <p>Jr. Los Mirtos N° 280, Lince<br />Distrito de Lince, Provincia y Departamento de Lima</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="icon-circle">✦</div>
                                    <div className="info">
                                        <h4>Teléfonos de Recepción</h4>
                                        <a href="tel:+51979776518">979 776 518</a>
                                        <a>  /  </a>
                                        <a href="tel:+51941283800">941 283 800</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="icon-circle">✦</div>
                                    <div className="info">
                                        <h4>Correo Electrónico</h4>
                                        <a href="mailto:contacto@preserseguridad.com">gerencia@preserseguridad.com</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="icon-circle">✦</div>
                                    <div className="info">
                                        <h4>RUC</h4>
                                        <p>20613021494</p>
                                    </div>
                                </div>

                                <div className="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6!2d-77.0365!3d-12.0854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f0e6e6e6e7%3A0x0!2sJr.+Los+Mirtos+280%2C+Lince+15073!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
                                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                        title="Ubicación de PRESER SEGURIDAD">
                                    </iframe>
                                </div>
                            </div>
                        </FadeIn>


                        <FadeIn>
                            <div className="contact-form">
                                <h3>Solicite Nuestros Servicios</h3>
                                <p>Complete el formulario y nos pondremos en contacto con usted a la brevedad.</p>

                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="empresa">Nombre de la Empresa *</label>
                                            <input type="text" id="empresa" name="empresa" required
                                                placeholder="Ej: Empresa XYZ S.A.C." />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="ruc">RUC</label>
                                            <input
                                                type="text"
                                                id="ruc"
                                                name="ruc"
                                                placeholder="Ej: 20XXXXXXXXX"
                                                pattern="^(10|15|17|20)[0-9]{9}$"
                                                maxLength="11"
                                                minLength="11"
                                                title="El RUC debe tener 11 digitos y empezar con 10, 15, 17 y 20."
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="contacto">Persona de Contacto *</label>
                                            <input type="text" id="contacto" name="contacto" required placeholder="Nombre completo" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cargo">Cargo</label>
                                            <input type="text" id="cargo" name="cargo" placeholder="Ej: Gerente General" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="telefono">Teléfono *</label>
                                            <input
                                                type="tel"
                                                id="telefono"
                                                name="telefono"
                                                required placeholder="Ej: 999 999 999"
                                                pattern="[0-9]{7,9}"
                                                maxLength="9"
                                                minLength="7"
                                                title="El teléfono debe contener entre 7 y 9 números sin espacios."
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Correo Electrónico *</label>
                                            <input type="email" id="email" name="email" required placeholder="correo@empresa.com" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="servicio">Servicio de Interés *</label>
                                        <select id="servicio" name="servicio" required>
                                            <option value="">Seleccione un servicio...</option>
                                            <option value="custodia">Protección y Custodia de Mercadería en Tránsito</option>
                                            <option value="instalaciones">Seguridad en Instalaciones</option>
                                            <option value="investigacion">Servicios de Investigación</option>
                                            <option value="traslado">Traslado de Personal y Protección Corporativa</option>
                                            <option value="personalidades">Protección a Personalidades VIP</option>
                                            <option value="eventos">Seguridad para Eventos</option>
                                            <option value="verificaciones">Servicio de Verificaciones</option>
                                            <option value="otro">Otro / Consulta General</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="mensaje">Mensaje / Detalles del Servicio Requerido *</label>
                                        <textarea id="mensaje" name="mensaje" required
                                            placeholder="Describa sus necesidades de seguridad, cantidad de personal requerido, ubicación, horarios, etc."></textarea>
                                    </div>

                                    {resultado === "ok" && (
                                        <p style={{ color: "green", marginBottom: "12px" }}>
                                            mensaje enviado
                                        </p>
                                    )}
                                    {resultado === "error" && (
                                        <p style={{ color: "red", marginBottom: "12px" }}>
                                            Error al enviar, vuelva a intentar
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ width: "100%", justifyContent: "center" }}
                                        disabled={enviado}>
                                        {enviado ? "enviando..." : "Enviar solicitud"}
                                    </button>
                                </form>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Contacto