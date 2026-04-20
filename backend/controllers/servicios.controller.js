const pool = require('../db');
const myCache = require('../cache');

/**
 * GET /api/servicios
 * Retorna todos los servicios activos, ordenados por order_index.
 */
const getServicios = async (req, res) => {
    try {
        const cacheKey = 'servicios';
        const cachedServicios = myCache.get(cacheKey);

        if (cachedServicios) {
            return res.json(cachedServicios);
        }

        const result = await pool.query(
            'SELECT * FROM services WHERE is_active = true ORDER BY order_index ASC'
        );
        
        myCache.set(cacheKey, result.rows);
        res.json(result.rows);
    } catch (err) {
        console.error('Error en getServicios:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

/**
 * GET /api/servicios/:slug
 * Retorna un servicio específico por su slug (ej: /api/servicios/custodia).
 */
const getServicioBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const cacheKey = `servicio_${slug}`;
        const cachedServicio = myCache.get(cacheKey);

        if (cachedServicio) {
            return res.json(cachedServicio);
        }

        const result = await pool.query(
            'SELECT * FROM services WHERE slug = $1 AND is_active = true',
            [slug]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Servicio no encontrado.' });
        }

        myCache.set(cacheKey, result.rows[0]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error en getServicioBySlug:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = { getServicios, getServicioBySlug };
