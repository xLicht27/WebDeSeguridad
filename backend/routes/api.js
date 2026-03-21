const express = require("express");
const router = express.Router();
const pool = require("../db");

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
        const result = await pool.query(
            `INSERT INTO messages (full_name, email, phone, company, ruc, position, service_interested, message)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
            [full_name, email, phone, company, ruc, position, service_interested, message]
        );
        res.status(201).json({ ok: true, id: result.rows[0].id });
    } catch (err) {
        console.error("Error al guardar mensaje:", err);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
