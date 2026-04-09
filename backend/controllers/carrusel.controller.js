const pool = require('../db');

/**
 * GET /api/slides
 * Retorna todos los slides activos del carrusel principal, ordenados por order_index.
 */
const getSlides = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM hero_slides WHERE is_active = true ORDER BY order_index ASC'
        );
        res.json(result.rows);
    } catch (err) {
        console.error('Error en getSlides:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = { getSlides };
