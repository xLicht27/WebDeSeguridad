import '../css/PoliticaPrivacidad.css';
import '../css/shared.css';
import FadeIn from '../components/FadeIn';

export default function PoliticaPrivacidad() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1>Política de Privacidad</h1>
                    <p>Cumplimiento de la Ley N° 29733 — Ley de Protección de Datos Personales en el Perú</p>
                </div>
            </section>

            {/* Content Body */}
            <section className="privacy-page">
                <div className="container">
                    <FadeIn>
                        <div className="privacy-card">
                            <h2>1. Responsable del Tratamiento de Datos</h2>
                            <p>
                                El presente documento establece los términos bajo los cuales <strong>PRESER SEGURIDAD S.A.C.</strong>, 
                                con <strong>RUC 20613021494</strong> y domicilio fiscal en <strong>Jr. Los Mirtos N° 280, Lince, Lima</strong>, 
                                recopila y trata sus datos personales de acuerdo con las disposiciones de la Ley N° 29733 (Ley de Protección de Datos Personales) 
                                y su Reglamento (D.S. 003-2013-JUS).
                            </p>

                            <h2>2. Datos Personales Recopilados</h2>
                            <p>
                                Cuando usted interactúa con nuestra plataforma a través del formulario de "Solicite Nuestros Servicios", recopilamos los siguientes datos:
                            </p>
                            <ul>
                                <li><strong>Datos de la empresa:</strong> Razón Social (Nombre de la empresa) y Registro Único de Contribuyentes (RUC).</li>
                                <li><strong>Datos de contacto del representante:</strong> Nombre completo, cargo dentro de la empresa, teléfono de contacto y correo electrónico corporativo o personal.</li>
                                <li><strong>Detalles de la solicitud:</strong> Tipo de servicio de seguridad de su interés y cualquier mensaje o requerimiento específico redactado por el usuario.</li>
                            </ul>

                            <h2>3. Finalidad del Tratamiento</h2>
                            <p>
                                Sus datos personales e institucionales serán tratados exclusivamente para las siguientes finalidades legítimas:
                            </p>
                            <ul>
                                <li>Atender y gestionar sus consultas comerciales y cotizaciones de servicios de seguridad integral.</li>
                                <li>Establecer contacto directo con el representante de la empresa interesada vía telefónica o correo electrónico.</li>
                                <li>Llevar un registro interno de potenciales clientes comerciales para responder de manera óptima a sus requerimientos de seguridad.</li>
                            </ul>

                            <h2>4. Consentimiento y Base Legal</h2>
                            <p>
                                Al cumplimentar nuestro formulario y hacer clic en el botón de **"Enviar Solicitud"**, usted otorga su **consentimiento libre, previo, expreso, informado e inequívoco** a favor de PRESER SEGURIDAD S.A.C. para tratar sus datos bajo las condiciones aquí indicadas. Usted no está obligado a proporcionar los datos, no obstante, de no hacerlo, no será posible procesar su cotización ni ponernos en contacto comercial con usted.
                            </p>

                            <h2>5. Ejercicio de Derechos ARCO</h2>
                            <p>
                                Como titular de sus datos personales, la legislación peruana le reconoce el derecho a ejercer sus derechos de **Acceso, Rectificación, Cancelación y Oposición (ARCO)** en cualquier momento. 
                            </p>
                            <p>
                                Para ejercer cualquiera de estos derechos, o si tiene alguna consulta respecto a esta política, puede remitir una solicitud por correo electrónico a nuestra dirección de contacto: <a href="mailto:gerencia@preserseguridad.com">gerencia@preserseguridad.com</a>, indicando en el asunto "Derechos ARCO" y adjuntando una copia digital de su documento de identidad (DNI/CE) para validar su identidad.
                            </p>

                            <h2>6. Medidas de Seguridad</h2>
                            <p>
                                PRESER SEGURIDAD S.A.C. cuenta con las medidas de seguridad técnicas, organizativas y legales necesarias para garantizar la confidencialidad, integridad y disponibilidad de sus datos personales, evitando su alteración, pérdida o tratamiento no autorizado de acuerdo con los requerimientos exigidos por la normativa peruana.
                            </p>

                            <h2>7. Actualizaciones de esta Política</h2>
                            <p>
                                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio significativo será publicado en esta página para el conocimiento de todos los usuarios.
                            </p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--dark-500)', marginTop: '40px', borderTop: '1px solid var(--dark-100)', paddingTop: '15px' }}>
                                Última actualización: Julio de 2026.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
