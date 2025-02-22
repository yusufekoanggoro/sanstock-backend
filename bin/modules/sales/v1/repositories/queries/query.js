const Mysql = require('../../../../../infrastructure/databases/mysql/db');
const configs = require('../../../../../infrastructure/configs/global_config');

const listSale = async () => {
  const db = new Mysql(configs.get('/mysqlConfig'));
  const query = 'SELECT * FROM sales';
  const result = await db.query(query);
  return result;
};

const countSalesBySKU = async (sku) => {
  const db = new Mysql(configs.get('/mysqlConfig'));
  const query = `SELECT COUNT(*) FROM sales WHERE sku = '${sku}'`;
  const result = await db.query(query);
  return result;
};

module.exports = {
  listSale,
  countSalesBySKU
};
