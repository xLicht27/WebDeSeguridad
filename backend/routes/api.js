const express = require("express");
const router = express.Router();
const pool = require("../db");
const nodemailer = require("nodemailer"); // Importamos nodemailer

// Configuramos Nodemailer con los datos de tu .env
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.get("/mensaje", (req, res) => {
    res.json({ texto: "Backend funcionando correctamente ✅" });
});

router.post("/contacto", async (req, res) => {
    const { full_name, email, phone, company, ruc, position, service_interested, message } = req.body;

    // Validación básica
    if (!full_name || !email || !message) {
        return res.status(400).json({ error: "Nombre, email y mensaje son obligatorios." });
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
