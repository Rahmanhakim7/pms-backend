const pool = require("../../config/db");

const getAllProducts = async() => {
    const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
    return result.rows;
};

const getProductById = async(id) => {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
    return result.rows[0];
};

const createProducts = async(data) => {
    const { name, price, stock } = data;
    const result = await pool.query(
        "INSERT INTO products (name, price, stock) VALUES ($1,$2,$3) RETURNING *", [name,price,stock]
    );
    return result.rows[0];
}

const updateProducts = async(id,data) => {
    const { name, price, stock } = data;
    const result = await pool.query(`UPDATE products SET name = $1, price = $2, stock = $3 WHERE id = $4 RETURNING *`, [name,price,stock,id]);
    return result.rows[0];
}

const deleteProduct = async(id) => {
    const result = await pool.query("DELETE FROM products WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
}

module.exports = { 
    getAllProducts,
    createProducts,
    getProductById,
    updateProducts,
    deleteProduct
};