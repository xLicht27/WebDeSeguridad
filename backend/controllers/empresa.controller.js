const pool = require('../db');

/**
 * GET /api/empresa
 * Retorna la información de contacto y redes sociales de la empresa.
 * Solo se espera un registro (id=1), por eso usamos LIMIT 1.
 */
const getEmpresa = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM company_info ORDER BY id ASC LIMIT 1'
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Información de la empresa no encontrada.' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error en getEmpresa:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = { getEmpresa };
