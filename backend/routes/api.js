const express = require("express");
const router = express.Router();
const pool = require("../db");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const xss = require("xss");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const contactoLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3,
    message: { error: "Has enviado demasiados mensajes. Por favor, intenta mas tarde." },
    standardHeaders: true,
    legacyHeaders: false,
})

router.get("/mensaje", (req, res) => {
    res.json({ texto: "Backend funcionando correctamente ✅" });
});

router.post("/contacto", contactoLimiter, async (req, res) => {

    const full_name = xss(req.body.full_name);
    const email = xss(req.body.email);
    const phone = xss(req.body.phone);
    const company = xss(req.body.company);
    const ruc = xss(req.body.ruc);
    const position = xss(req.body.position);
    const service_interested = xss(req.body.service_interested);
    const message = xss(req.body.message);

    // Validación básica
    if (!full_name || !email || !message) {
        return res.status(400).json({ error: "Nombre, email y mensaje son obligatorios." });
    }

    if (ruc) {
        const rucRegex = /^(10|15|17|20)\d{9}$/;

        if (!rucRegex.test(ruc)) {
            return res.status(400).json({ error: "El RUC proporcionado no tiene un formato válido (debe tener 11 dígitos numéricos válidos)." });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "el correo electronico proporcionado no es valido" });
        }

        if (phone) {
            const phoneRegex = /^[0-9]{7,9}$/;
            if (!phoneRegex.test(phone)) {
                return res.status(400).json({ error: "El telefono debe contener solo entre 7 y 9 números." })
            }
        }
    }

    try {
        // 1. Guardar en PostgreSQL
        const result = await pool.query(
            `INSERT INTO messages (full_name, email, phone, company, ruc, position, service_interested, message)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
            [full_name, email, phone, company, ruc, position, service_interested, message]
        );

        // 2. Preparar el contenido del correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_DESTINO, // Tu correo donde llegarán las respuestas
            subject: `NUEVA SOLICITUD WEB: ${company || full_name}`,
            text: `Tienes un nuevo formulario de contacto de la página web de PRESER:

        - Datos de la Empresa:
        Empresa: ${company || "No especificado"}
        RUC: ${ruc || "No especificado"}

        - Datos del Contacto:
        Nombre: ${full_name}
        Cargo: ${position || "No especificado"}
        Teléfono: ${phone}
        Email: ${email}
        
        - Detalles del requerimiento:
        Servicio solicitado: ${service_interested || "No especificado"}
        Mensaje:
        ${message}
                    `
        };

        // 3. Enviar el correo
        await transporter.sendMail(mailOptions);

        res.status(201).json({ ok: true, id: result.rows[0].id });
    } catch (err) {
        console.error("Error al guardar mensaje o enviar email:", err);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
