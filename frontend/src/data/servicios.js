/**
 * Contenido de las páginas de servicios.
 *
 * Antes cada servicio vivía duplicado en `src/pages/Servicios/*.jsx`.
 * Ahora un solo componente (`ServicioDetalle`) renderiza este contenido,
 * así agregar o editar un servicio no toca código.
 *
 * Para editar el texto de una página: cambia este archivo.
 */
export const SERVICIOS = [
    {
        slug: 'custodia',
        navLabel: 'Custodia de Mercadería',
        menuLabel: 'Custodia de Mercadería en Tránsito',
        titulo: 'Protección y Custodia de Mercadería en Tránsito',
        bajada: 'Resguardo policial de primer nivel para la seguridad de su carga en cualquier destino del Perú',
        secciones: [
            {
                titulo: 'Servicio de Custodia Integral',
                parrafos: [
                    'En PRESER SEGURIDAD S.A.C. brindamos un servicio de resguardo policial de primer nivel para la protección de su mercadería en tránsito. Nuestro equipo de profesionales con experiencia PNP® garantiza la seguridad de su carga desde el punto de origen hasta su destino final.',
                    'Contamos con personal altamente calificado que acompaña su mercadería en todo momento, ya sea en vehículos de escolta o directamente en cabina, asegurando la integridad de sus productos durante todo el trayecto.',
                ],
            },
            {
                titulo: 'Nuestras Modalidades de Custodia',
                items: [
                    'Resguardo Policial en vehículos de escolta con personal PNP® armado',
                    'Personal PNP® en cabina del vehículo de carga para protección directa',
                    'Escolta de camiones y tráileres a cualquier destino de Lima, Callao y provincias del Perú',
                    'Traslado de vehículos de reparto desde planta de producción a centro de distribución',
                    'Custodia de carga ancha y mercadería de alto valor',
                    'Monitoreo GPS satelital en tiempo real durante todo el recorrido',
                    'Coordinación permanente con nuestro Centro de Control',
                ],
            },
            {
                titulo: '¿Por qué elegirnos?',
                parrafos: [
                    'Nuestra experiencia en custodia de mercadería nos ha permitido consolidarnos como una de las empresas más confiables del sector. Cada operación es planificada meticulosamente, evaluando rutas, puntos críticos y protocolos de contingencia para garantizar que su carga llegue segura a su destino.',
                    'Contamos con vehículos equipados con GPS Satelital monitoreados las 24 horas desde nuestro Centro de Control, y comunicación directa con las unidades policiales a nivel nacional.',
                ],
            },
        ],
    },
    {
        slug: 'instalaciones',
        navLabel: 'Seguridad en Instalaciones',
        titulo: 'Seguridad en Instalaciones',
        bajada: 'Protección integral para sus instalaciones con personal especializado PNP®',
        secciones: [
            {
                titulo: 'Protección Integral para sus Instalaciones',
                parrafos: [
                    'Nuestro servicio de seguridad en instalaciones está diseñado para brindar protección completa a todo tipo de infraestructura empresarial. Contamos con personal PNP® con experiencia comprobada en vigilancia y protección de activos, preparados para responder ante cualquier situación de riesgo.',
                    'Realizamos una evaluación exhaustiva de sus instalaciones para diseñar un plan de seguridad personalizado que cubra todos los puntos vulnerables y garantice la protección de sus bienes, personal y procesos.',
                ],
            },
            {
                titulo: 'Tipos de Instalaciones que Protegemos',
                items: [
                    'Empresas y corporaciones de todos los sectores',
                    'Edificios comerciales y residenciales',
                    'Oficinas administrativas',
                    'Plantas industriales y de producción',
                    'Almacenes y centros de distribución',
                    'Terrenos y predios en desarrollo',
                    'Centros comerciales y establecimientos',
                ],
            },
            {
                titulo: 'Características del Servicio',
                parrafos: [
                    'Nuestro personal cuenta con equipos de comunicación enlazados con la red policial, armamento con licencia vigente, y supervisión permanente desde nuestro Centro de Control. Implementamos protocolos de seguridad perimetral, control de accesos, rondas programadas y sistemas de reporte en tiempo real para garantizar la máxima protección.',
                ],
            },
        ],
    },
    {
        slug: 'investigacion',
        navLabel: 'Servicios de Investigación',
        titulo: 'Servicios de Investigación',
        bajada: 'Investigaciones profesionales con equipos especializados de la PNP® para resolver problemas complejos',
        secciones: [
            {
                titulo: 'Investigaciones Profesionales',
                parrafos: [
                    'Nuestro equipo de investigación, conformado por profesionales con amplia experiencia en la PNP, está preparado para abordar situaciones complejas que requieren un análisis profundo y una resolución efectiva. Utilizamos metodologías probadas y recursos especializados para llegar al fondo de cualquier situación.',
                    'Cada caso es tratado con la máxima confidencialidad y discreción, garantizando la protección de la información de nuestros clientes en todo momento.',
                ],
            },
            {
                titulo: 'Áreas de Investigación',
                items: [
                    'Sabotajes corporativos e industriales',
                    'Robo agravado y hurtos sistemáticos de materiales',
                    'Investigación de homicidios y delitos graves',
                    'Casos de adulterio e infidelidad',
                    'Sustracción de documentación confidencial',
                    'Malos manejos administrativos y fraude interno',
                    'Corrupción dentro de organizaciones',
                    'Agitación laboral y conflictos internos',
                    'Otras investigaciones especializadas según requerimiento',
                ],
            },
            {
                titulo: 'Nuestra Metodología',
                parrafos: [
                    'Nuestro equipo de investigadores PNP® especializados aplica técnicas profesionales de recopilación de evidencia, análisis de información, vigilancia discreta y elaboración de informes detallados. Cada investigación culmina con un reporte completo que puede ser utilizado como soporte para acciones legales si el cliente lo requiere.',
                ],
            },
        ],
    },
    {
        slug: 'traslado',
        navLabel: 'Traslado y Protección Corporativa',
        titulo: 'Traslado de Personal y Protección Corporativa',
        bajada: 'Personal PNP® altamente calificado para actuar ante cualquier evento de riesgo durante el traslado de personas',
        secciones: [
            {
                titulo: 'Protección Corporativa de Alto Nivel',
                parrafos: [
                    'Nuestro servicio de traslado de personal y protección corporativa está diseñado para garantizar la seguridad de ejecutivos, funcionarios y personal clave de su organización durante sus desplazamientos. Contamos con agentes PNP® especializados en protección de personas, capacitados para actuar de manera rápida y efectiva ante cualquier situación de riesgo.',
                ],
            },
            {
                titulo: 'Características del Servicio',
                items: [
                    'Personal PNP® altamente calificado en protección de personas',
                    'Vehículos de escolta equipados con GPS satelital',
                    'Evaluación previa de rutas y puntos críticos',
                    'Planes de contingencia para situaciones de emergencia',
                    'Comunicación permanente con el Centro de Control',
                    'Coordinación con unidades policiales en la zona de tránsito',
                    'Protección puerta a puerta con máxima discreción',
                ],
            },
            {
                titulo: 'Servicio Personalizado',
                parrafos: [
                    'Cada servicio de traslado es planificado de acuerdo a las necesidades específicas del cliente. Evaluamos el nivel de riesgo, diseñamos la ruta más segura y asignamos el personal adecuado para garantizar un traslado sin contratiempos. Nuestro equipo mantiene comunicación constante con nuestro Centro de Control las 24 horas.',
                ],
            },
        ],
    },
    {
        slug: 'proteccionP',
        navLabel: 'Protección a Personalidades',
        titulo: 'Protección y Seguridad a Personalidades',
        bajada: 'Seguridad especializada para personas muy importantes, ejecutivos, funcionarios y personalidades de alto perfil',
        secciones: [
            {
                titulo: 'Servicio de Protección VIP',
                parrafos: [
                    'En PRESER SEGURIDAD S.A.C. ofrecemos un servicio de protección personal de élite, diseñado para personalidades que requieren un nivel superior de seguridad. Nuestros agentes PNP® están entrenados específicamente en técnicas de protección de personas importantes, con capacidad de reacción inmediata ante cualquier amenaza.',
                ],
            },
            {
                titulo: 'Perfiles que Protegemos',
                items: [
                    'Personas Muy Importantes (VIP) nacionales e internacionales',
                    'Ejecutivos y directivos de alto nivel corporativo',
                    'Funcionarios públicos y diplomáticos',
                    'Personalidades del mundo empresarial y financiero',
                    'Figuras públicas y personalidades mediáticas',
                    'Familias de alto perfil que requieran protección especial',
                ],
            },
            {
                titulo: 'Nivel de Servicio Premium',
                parrafos: [
                    'Nuestro servicio incluye la evaluación de riesgos del protegido, diseño de protocolos de seguridad personalizados, selección de agentes según el perfil requerido, y coordinación permanente con nuestro Centro de Control. Cada detalle es cuidadosamente planificado para brindar la máxima protección con la menor intrusión en la rutina del protegido.',
                    'Garantizamos discreción absoluta, profesionalismo y capacidad de respuesta ante cualquier situación de emergencia.',
                ],
            },
        ],
    },
    {
        slug: 'eventos',
        navLabel: 'Seguridad para Eventos',
        titulo: 'Seguridad para Eventos',
        bajada: 'Cobertura profesional de seguridad para todo tipo de eventos con personal PNP® experimentado',
        secciones: [
            {
                titulo: 'Seguridad Integral para Eventos',
                parrafos: [
                    'En PRESER SEGURIDAD S.A.C. brindamos servicios de seguridad especializados para todo tipo de eventos. Nuestro equipo de profesionales PNP® se encarga de planificar, coordinar y ejecutar los protocolos de seguridad necesarios para que su evento se desarrolle sin contratiempos, garantizando la tranquilidad de organizadores y asistentes.',
                ],
            },
            {
                titulo: 'Tipos de Eventos que Cubrimos',
                items: [
                    'Eventos sociales y ceremonias corporativas',
                    'Eventos deportivos de cualquier escala',
                    'Conferencias y congresos nacionales e internacionales',
                    'Desfiles y eventos al aire libre',
                    'Reuniones culturales y festivales',
                    'Ferias comerciales y exposiciones',
                    'Lanzamientos de productos y eventos empresariales',
                    'Otros eventos que requieran seguridad profesional',
                ],
            },
            {
                titulo: 'Nuestro Enfoque',
                parrafos: [
                    'Antes de cada evento, realizamos un análisis completo de la locación, evaluamos los puntos de acceso, establecemos protocolos de evacuación y coordinamos con las autoridades locales. Durante el evento, nuestro personal mantiene comunicación constante con el Centro de Control para asegurar una respuesta inmediata ante cualquier incidencia.',
                ],
            },
        ],
    },
    {
        slug: 'verificaciones',
        navLabel: 'Servicio de Verificaciones',
        titulo: 'Servicio de Verificaciones',
        bajada: 'Verificación profesional de información personal, laboral y domiciliaria con total confidencialidad',
        secciones: [
            {
                titulo: 'Verificaciones Profesionales',
                parrafos: [
                    'Nuestro servicio de verificaciones está diseñado para brindar información confiable y verificada sobre personas, contribuyendo a la toma de decisiones acertadas en procesos de contratación, evaluación crediticia, y otros escenarios donde se requiera validar información. Cada verificación es realizada por profesionales con experiencia PNP® que garantizan la veracidad y confidencialidad de los resultados.',
                ],
            },
            {
                titulo: 'Tipos de Verificaciones',
                items: [
                    'Verificación de informaciones básicas de personas (identidad, antecedentes)',
                    'Estudios socio-económicos completos para evaluación crediticia',
                    'Verificaciones domiciliarias con visita in situ y registro fotográfico',
                    'Verificaciones laborales de referencias y trayectoria profesional',
                    'Verificación de datos académicos y certificaciones',
                    'Estudios de entorno y análisis de riesgo personal',
                    'Verificaciones para procesos de selección de personal',
                ],
            },
            {
                titulo: 'Proceso de Verificación',
                parrafos: [
                    'Nuestro proceso incluye la recopilación de información a través de fuentes primarias y confiables, visitas de campo cuando es necesario, entrevistas con referencias, y la elaboración de un informe detallado con los hallazgos. Todos los informes son entregados con total confidencialidad y en los plazos acordados con el cliente.',
                ],
            },
        ],
    },
];

/** Devuelve el servicio por su slug (o undefined). */
export const getServicio = (slug) => SERVICIOS.find((servicio) => servicio.slug === slug);
