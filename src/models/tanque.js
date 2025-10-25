const pool = require('./mysql');

const store = async (nivel, tiempo, litros, fechaDatos) => {
  const sql = "INSERT INTO tanque (nivel, tiempo, litros, `Fecha_Datos`) VALUES (?, ?, ?, ?)";
  const fecha = fechaDatos || new Date();
  const [result] = await pool.query(sql, [nivel, tiempo, litros, fecha]);
  return result;
};

const findAll = async () => {
  const sql = `
    SELECT 
      ID_TANQUE,
      NIVEL       AS nivel,
      TIEMPO      AS tiempo,
      LITROS      AS litros,
      Fecha_Datos AS Fecha_Datos
    FROM tanque
    ORDER BY ID_TANQUE ASC
  `;
  const [rows] = await pool.query(sql);
  return rows;
};

const findById = async (id) => {
  const sql = `
    SELECT 
      ID_TANQUE,
      NIVEL       AS nivel,
      TIEMPO      AS tiempo,
      LITROS      AS litros,
      Fecha_Datos AS Fecha_Datos
    FROM tanque
    WHERE ID_TANQUE = ?
  `;
  const [rows] = await pool.query(sql, [id]);
  return rows[0];
};

const update = async (id, nivel, tiempo, litros) => {
  const sql = "UPDATE tanque SET nivel = ?, tiempo = ?, litros = ? WHERE ID_TANQUE = ?";
  const [result] = await pool.query(sql, [nivel, tiempo, litros, id]);
  return result;
};

const destroy = async (id) => {
  const sql = "DELETE FROM tanque WHERE ID_TANQUE = ?";
  const [result] = await pool.query(sql, [id]);
  return result;
};

module.exports = { store, findAll, findById, update, destroy };