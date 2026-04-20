const pool = require('../db');
const myCache = require('../cache');

/**
 * GET /api/slides
 * Retorna todos los slides activos del carrusel principal, ordenados por order_index.
 */
const getSlides = async (req, res) => {
    try {
        const cacheKey = 'slides';
        const cachedSlides = myCache.get(cacheKey);

        if (cachedSlides) {
            return res.json(cachedSlides);
        }

        const result = await pool.query(
            'SELECT * FROM hero_slides WHERE is_active = true ORDER BY order_index ASC'
        );
        
        myCache.set(cacheKey, result.rows);
        res.json(result.rows);
    } catch (err) {
        console.error('Error en getSlides:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = { getSlides };
