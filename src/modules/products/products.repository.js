const pool = require("../../config/db");

const getAllProducts = async() => {
    const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
    return result.rows;
};

module.exports = { 
    getAllProducts
};