const rateLimit = require('express-rate-limit');

/**
 * Limitador para el formulario de contacto.
 * Máximo 3 envíos cada 15 minutos por IP.
 */
const contactoLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 3,
    message: { error: 'Has enviado demasiados mensajes. Por favor, intenta más tarde.' },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = { contactoLimiter };
