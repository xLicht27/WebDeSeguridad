import '../css/PoliticaPrivacidad.css'; // Reutiliza los estilos simétricos de lectura
import '../css/shared.css';
import FadeIn from '../components/FadeIn';

export default function TerminosCondiciones() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1>Términos y Condiciones</h1>
                    <p>Condiciones de Uso del Sitio Web Informativo y Solicitudes de Cotización</p>
                </div>
            </section>

            {/* Content Body */}
            <section className="privacy-page">
                <div className="container">
                    <FadeIn>
                        <div className="privacy-card">
                            <h2>1. Objeto</h2>
                            <p>
                                Los presentes Términos y Condiciones regulan el acceso, navegación y uso del sitio web informativo de 
                                <strong> PRESER SEGURIDAD S.A.C.</strong>. Al ingresar y hacer uso de este portal web, el usuario acepta de manera 
                                plena y sin reservas todas las disposiciones contenidas en este documento. Si no está de acuerdo con alguno de estos términos, 
                                le solicitamos abstenerse de utilizar el portal.
                            </p>

                            <h2>2. Uso Correcto del Formulario de Cotización</h2>
                            <p>
                                El sitio web pone a disposición del público un formulario denominado "Solicite Nuestros Servicios". Al utilizar esta herramienta, el usuario se compromete expresamente a:
                            </p>
                            <ul>
                                <li>Ingresar información de contacto y corporativa <strong>verdadera, vigente, exacta y verificable</strong> (Razón Social, RUC, nombre completo del representante, cargo, teléfono y correo electrónico).</li>
                                <li>No suplantar identidades, utilizar nombres falsos ni proporcionar datos de terceras personas (naturales o jurídicas) sin contar con su autorización expresa por escrito.</li>
                                <li>Utilizar el formulario exclusivamente con fines lícitos de consulta comercial, cotización e información sobre servicios de seguridad.</li>
                            </ul>
                            <p>
                                PRESER SEGURIDAD S.A.C. se reserva el derecho de descartar cualquier solicitud que presente indicios de falsedad, spam o que atente contra la buena fe comercial.
                            </p>

                            <h2>3. Exclusión de Responsabilidad y Naturaleza del Servicio</h2>
                            <p>
                                El usuario reconoce y acepta que:
                            </p>
                            <ul>
                                <li>El envío del formulario a través de la web constituye una **solicitud de información y cotización comercial**, y en ningún caso representa una aceptación, reserva, contratación automática ni inicio inmediato de la prestación de los servicios de seguridad privada.</li>
                                <li>La contratación definitiva y formalización de cualquier servicio estará estrictamente sujeta a una **evaluación técnica de riesgos previa** efectuada por nuestros especialistas y a la posterior **suscripción de un contrato físico formal escrito** firmado por los representantes legales de ambas partes.</li>
                                <li>PRESER SEGURIDAD S.A.C. no garantiza que el sitio web funcione de manera ininterrumpida o libre de errores, aunque realiza sus mejores esfuerzos técnicos para garantizar la continuidad y seguridad de la plataforma.</li>
                            </ul>

                            <h2>4. Propiedad Intelectual e Industrial</h2>
                            <p>
                                Todos los derechos de propiedad intelectual e industrial sobre este sitio web, incluyendo de forma enunciativa pero no limitativa: textos, códigos de programación, diseños, gráficos, logotipos, el isotipo del felino/escudo y cualquier otro elemento distintivo, son propiedad exclusiva de <strong>PRESER SEGURIDAD S.A.C.</strong> o de terceros licenciantes. 
                            </p>
                            <p>
                                Queda estrictamente prohibida la reproducción total o parcial, modificación, distribución o comunicación pública de dichos contenidos sin la autorización expresa y por escrito de sus titulares.
                            </p>

                            <h2>5. Enlaces a Terceros</h2>
                            <p>
                                Nuestro sitio web puede contener enlaces a redes sociales (como LinkedIn) o canales externos de comunicación (WhatsApp). Estos enlaces se proveen únicamente para comodidad del usuario. PRESER SEGURIDAD S.A.C. no ejerce control sobre dichos sitios externos y no se hace responsable por sus políticas de privacidad, términos de servicio o los contenidos en ellos alojados.
                            </p>

                            <h2>6. Ley Aplicable y Jurisdicción</h2>
                            <p>
                                Estos Términos y Condiciones se rigen bajo las leyes de la **República del Perú**. Cualquier controversia, desacuerdo o reclamación que se derive del acceso, uso o interpretación de este portal web será sometido y resuelto de forma definitiva ante los tribunales y juzgados competentes del **Distrito Judicial de Lima**, Perú, renunciando las partes a cualquier otro fuero.
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
