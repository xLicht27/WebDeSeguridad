const { Router } = require('express');

const carruselRoutes   = require('./carrusel.routes');
const serviciosRoutes = require('./servicios.routes');
const clientesRoutes  = require('./clientes.routes');
const empresaRoutes  = require('./empresa.routes');
const contactoRoutes  = require('./contacto.routes');

const router = Router();

// Ruta de salud (health check)
router.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Rutas de recursos
router.use('/carrusel',  carruselRoutes);
router.use('/servicios', serviciosRoutes);
router.use('/clientes',  clientesRoutes);
router.use('/empresa',   empresaRoutes);
router.use('/contacto',  contactoRoutes);

module.exports = router;
