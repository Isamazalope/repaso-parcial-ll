let carros = [];

exports.index = (req, res) => {
  res.render('index57', { carros });
};

exports.create = (req, res) => {
  res.render('create57');
};

exports.store = (req, res) => {
  const { id, marca } = req.body;
  carros.push({ id, marca });
  res.redirect('/');
};

exports.show = (req, res) => {
  const { id } = req.params;
  const carro = carros.find(c => c.id === id);
  res.render('show57', { carro });
};
