const express = require('express');
const router = express.Router();
const controller = require('../controllers/habitacion57.controller');

router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/store', controller.store);
router.get('/show/:id', controller.show);

module.exports = router;
