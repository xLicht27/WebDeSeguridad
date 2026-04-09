const { Router } = require('express');
const { getEmpresa } = require('../controllers/empresa.controller');

const router = Router();

router.get('/', getEmpresa);

module.exports = router;
