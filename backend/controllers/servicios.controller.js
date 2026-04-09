const pool = require('../db');

/**
 * GET /api/servicios
 * Retorna todos los servicios activos, ordenados por order_index.
 */
const getServicios = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM services WHERE is_active = true ORDER BY order_index ASC'
        );
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
        const result = await pool.query(
            'SELECT * FROM services WHERE slug = $1 AND is_active = true',
            [slug]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Servicio no encontrado.' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error en getServicioBySlug:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = { getServicios, getServicioBySlug };
