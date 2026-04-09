const { Router } = require('express');
const { getSlides } = require('../controllers/carrusel.controller');

const router = Router();

router.get('/', getSlides);

module.exports = router;
