const pool = require('../db');

/**
 * GET /api/clientes
 * Retorna todos los logos de clientes activos, ordenados por order_index.
 */
const getClientes = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM clients WHERE is_active = true ORDER BY order_index ASC'
        );
        res.json(result.rows);
    } catch (err) {
        console.error('Error en getClientes:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = { getClientes };
