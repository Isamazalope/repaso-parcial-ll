const pool = require('./mysql');

const store = async (marca, modelo, precio, cantidad) => {
  const sql = "INSERT INTO vehiculo57 (marca, modelo, precio, cantidad) VALUES (?, ?, ?, ?)";
  const [result] = await pool.query(sql, [marca, modelo, precio, cantidad]);
  return result;
};

const findAll = async () => {
  const sql = `
    SELECT 
      id_vehiculo,
      marca,
      modelo,
      precio,
      cantidad
    FROM vehiculo57
    ORDER BY id_vehiculo ASC
  `;
  const [rows] = await pool.query(sql);
  return rows;
};

const findById = async (id) => {
  const sql = `
    SELECT 
      id_vehiculo,
      marca,
      modelo,
      precio,
      cantidad
    FROM vehiculo57
    WHERE id_vehiculo = ?
  `;
  const [rows] = await pool.query(sql, [id]);
  return rows[0];
};

const update = async (id, marca, modelo, precio, cantidad) => {
  const sql = "UPDATE vehiculo57 SET marca = ?, modelo = ?, precio = ?, cantidad = ? WHERE id_vehiculo = ?";
  const [result] = await pool.query(sql, [marca, modelo, precio, cantidad, id]);
  return result;
};

const destroy = async (id) => {
  const sql = "DELETE FROM vehiculo57 WHERE id_vehiculo = ?";
  const [result] = await pool.query(sql, [id]);
  return result;
};

module.exports = { store, findAll, findById, update, destroy };
