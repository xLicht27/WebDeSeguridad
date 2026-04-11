const pool = require('../db');
const nodemailer = require('nodemailer');
const { sanitize } = require('../middlewares/sanitize');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    //connectionTimeout: 10000,
});

/**
 * POST /api/contacto
 * Guarda el mensaje en la BD y envía una notificación por email.
 */
const postContacto = async (req, res) => {
    // 1. Sanitizar entradas para prevenir XSS
    const full_name = sanitize(req.body.full_name);
    const email = sanitize(req.body.email);
    const phone = sanitize(req.body.phone);
    const company = sanitize(req.body.company);
    const ruc = sanitize(req.body.ruc);
    const position = sanitize(req.body.position);
    const service_interested = sanitize(req.body.service_interested);
    const message = sanitize(req.body.message);

    // 2. Validaciones básicas
    if (!full_name || !email || !message) {
        return res.status(400).json({ error: 'Nombre, email y mensaje son obligatorios.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'El correo electrónico proporcionado no es válido.' });
    }

    if (ruc) {
        const rucRegex = /^(10|15|17|20)\d{9}$/;
        if (!rucRegex.test(ruc)) {
            return res.status(400).json({ error: 'El RUC no tiene un formato válido (debe tener 11 dígitos numéricos válidos).' });
        }
    }

    if (phone) {
        const phoneRegex = /^[0-9]{7,9}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ error: 'El teléfono debe contener solo entre 7 y 9 números.' });
        }
    }

    try {
        // 3. Guardar en la base de datos
        const result = await pool.query(
            `INSERT INTO messages (full_name, email, phone, company, ruc, position, service_interested, message)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
            [full_name, email, phone, company, ruc, position, service_interested, message]
        );

        // 4. Enviar notificación por correo
        const mailOptions = {
            from: "operaciones@preserseguridad.com", 
            to: process.env.EMAIL_DESTINO,
            subject: `NUEVA SOLICITUD WEB: ${company || full_name}`,
            text: `Tienes un nuevo formulario de contacto de la página web de PRESER:

  - Datos de la Empresa:
  Empresa: ${company || 'No especificado'}
  RUC: ${ruc || 'No especificado'}

  - Datos del Contacto:
  Nombre: ${full_name}
  Cargo: ${position || 'No especificado'}
  Teléfono: ${phone || 'No especificado'}
  Email: ${email}

  - Detalles del requerimiento:
  Servicio solicitado: ${service_interested || 'No especificado'}
  Mensaje:
  ${message}
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ ok: true, id: result.rows[0].id });
    } catch (err) {
        console.error('Error en postContacto:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = { postContacto };
