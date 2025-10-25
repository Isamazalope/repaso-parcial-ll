const model = require('../models/tanque');

const create = (req, res) => {
  res.render('tanque/create', { mensaje: '' });
};

const store = async (req, res) => {
  const { nivel, tiempo, litros, fecha } = req.body;
  const fechaDatos = fecha ? new Date(fecha) : new Date();

  try {
    await model.store(nivel, tiempo, litros, fechaDatos);
    res.render('tanque/create', { mensaje: 'Datos agregados correctamente' });
  } catch (error) {
    console.error(error);
    res.render('tanque/create', { mensaje: 'Error al agregar datos' });
  }
};

const index = async (req, res) => {
  try {
    const tanque = await model.findAll();
    res.render('tanque/index', { tanque });
  } catch (error) {
    res.render('tanque/index', { tanque: [], error: 'Error al obtener datos' });
  }
};

const show = async (req, res) => {
  try {
    const id = req.params.id;
    const tanque = await model.findById(id);
    res.render('tanque/show', { tanque });
  } catch (error) {
    res.render('tanque/show', { error: 'Error al mostrar el registro' });
  }
};

const edit = async (req, res) => {
  try {
    const id = req.params.id;
    const tanque = await model.findById(id);
    res.render('tanque/edit', { tanque });
  } catch (error) {
    res.render('tanque/edit', { error: 'Error al cargar el formulario de edición' });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { nivel, tiempo, litros } = req.body;
    await model.update(id, nivel, tiempo, litros);
    res.redirect('/tanque');
  } catch (error) {
    const tanque = await model.findById(req.params.id); // para mantener los datos en el formulario
    res.render('tanque/edit', { tanque, error: 'Error al actualizar el registro' });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id;
    await model.destroy(id);
    res.redirect('/tanque');
  } catch (error) {
    res.render('tanque/index', { tanque: [], error: 'Error al eliminar el registro' });
  }
};

module.exports = { create, store, index, show, edit, update, destroy };
