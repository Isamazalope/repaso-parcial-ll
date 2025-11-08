const model = require('../models/vehiculo57');

const create = (req, res) => {
  res.render('vehiculo57/create', { mensaje: '' });
};

const store = async (req, res) => {
  const { marca, modelo, precio, cantidad } = req.body;

  try {
    await model.store(marca, modelo, precio, cantidad);
    res.render('vehiculo57/create', { mensaje: 'Vehículo agregado correctamente' });
  } catch (error) {
    console.error(error);
    res.render('vehiculo57/create', { mensaje: 'Error al agregar vehículo' });
  }
};

const index = async (req, res) => {
  try {
    const vehiculos = await model.findAll();
    res.render('vehiculo57/index', { vehiculos });
  } catch (error) {
    res.render('vehiculo57/index', { vehiculos: [], error: 'Error al obtener vehículos' });
  }
};

const show = async (req, res) => {
  try {
    const id = req.params.id;
    const vehiculo = await model.findById(id);
    res.render('vehiculo57/show', { vehiculo });
  } catch (error) {
    res.render('vehiculo57/show', { error: 'Error al mostrar el vehículo' });
  }
};

const edit = async (req, res) => {
  try {
    const id = req.params.id;
    const vehiculo = await model.findById(id);
    res.render('vehiculo57/edit', { vehiculo });
  } catch (error) {
    res.render('vehiculo57/edit', { error: 'Error al cargar el formulario de edición' });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { marca, modelo, precio, cantidad } = req.body;
    await model.update(id, marca, modelo, precio, cantidad);
    res.redirect('/vehiculo57');
  } catch (error) {
    const vehiculo = await model.findById(req.params.id); // para mantener los datos en el formulario
    res.render('vehiculo57/edit', { vehiculo, error: 'Error al actualizar el vehículo' });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id;
    await model.destroy(id);
    res.redirect('/vehiculo57');
  } catch (error) {
    res.render('vehiculo57/index', { vehiculos: [], error: 'Error al eliminar el vehículo' });
  }
};

module.exports = { create, store, index, show, edit, update, destroy };
