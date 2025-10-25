const express = require('express');
const router = express.Router();
const controller = require('../controllers/main.controller');

router.get('/', controller.index); // Muestra el archivo index.html desde /private

module.exports = router;