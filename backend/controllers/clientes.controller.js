const pool = require('../db');
const myCache = require('../cache');

/**
 * GET /api/clientes
 * Retorna todos los logos de clientes activos, ordenados por order_index.
 */
const getClientes = async (req, res) => {
    try {
        const cacheKey = 'clientes';
        const cachedClientes = myCache.get(cacheKey);

        if (cachedClientes) {
            return res.json(cachedClientes);
        }

        const result = await pool.query(
            'SELECT * FROM clients WHERE is_active = true ORDER BY order_index ASC'
        );
        
        myCache.set(cacheKey, result.rows);
        res.json(result.rows);
    } catch (err) {
        console.error('Error en getClientes:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = { getClientes };
