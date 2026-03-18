const productRepository = require("./products.repository");
const getProducts = async () => {
    const products =  await productRepository.getAllProducts();
    return products;
};

module.exports = {
    getProducts
};