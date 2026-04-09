const { Router } = require('express');
const { postContacto } = require('../controllers/contacto.controller');
const { contactoLimiter } = require('../middlewares/rateLimiter');

const router = Router();

router.post('/', contactoLimiter, postContacto);

module.exports = router;
