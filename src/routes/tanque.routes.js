const express = require('express');
const router = express.Router();
const controller = require('../controllers/tanque.controller');

router.get('/create', controller.create);       // Mostrar formulario de ingreso
router.post('/', controller.store);             // Guardar datos nuevos
router.get('/', controller.index);              // Ver todos los registros
router.get('/:id', controller.show);            // Ver un registro específico
router.get('/:id/edit', controller.edit);       // Mostrar formulario de edición
router.put('/:id', controller.update);          // Actualizar datos
router.delete('/:id', controller.destroy);      // Eliminar registro

module.exports = router;