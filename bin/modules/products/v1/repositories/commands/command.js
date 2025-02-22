const Mysql = require('../../../../../infrastructure/databases/mysql/db');
const configs = require('../../../../../infrastructure/configs/global_config');

const insertOneProduct = async (param) => {
  const { sku, skuInduk, namaProduk, varian, size, qty, hargaModal, createdAt, updatedAt } = param;
  const db = new Mysql(configs.get('/mysqlConfig'));
  const query = `INSERT INTO products (id, sku, sku_induk, nama_produk, varian, size, qty, harga_modal, created_at, updated_at) 
  VALUES (NULL, '${sku}', '${skuInduk}', '${namaProduk}', '${varian}', '${size}', '${qty}', '${hargaModal}', '${createdAt}', '${updatedAt}')`;
  const result = await db.query(query);
  return result;
};

const deleteProduct = async (param) => {
  const { id } = param;
  const db = new Mysql(configs.get('/mysqlConfig'));
  const query = `DELETE FROM products WHERE products.id = ${id}`;
  const result = await db.query(query, [param]);
  return result;
};

const updateProduct = async (param) => {
  const { id, sku, skuInduk, namaProduk, varian, size, updatedAt } = param;
  const db = new Mysql(configs.get('/mysqlConfig'));
  const query = `UPDATE products 
  SET sku = '${sku}', sku_induk = '${skuInduk}', nama_produk = '${namaProduk}', varian = '${varian}', size = '${size}', updated_at = '${updatedAt}'
  WHERE products.id = ${id}`;
  const result = await db.query(query, [param]);
  return result;
};

module.exports = {
  insertOneProduct,
  deleteProduct,
  updateProduct
};
