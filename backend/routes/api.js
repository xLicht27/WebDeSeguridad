const express = require("express");
const router = express.Router();

router.get("/mensaje", (req, res) => {
    res.json({ texto: "Hola desde el backend" });
});

module.exports = router;