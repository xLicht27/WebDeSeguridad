const { Router } = require('express');
const { getServicios, getServicioBySlug } = require('../controllers/servicios.controller');

const router = Router();

router.get('/', getServicios);
router.get('/:slug', getServicioBySlug);

module.exports = router;
