const productRepository = require("./products.repository");
const getProducts = async () => {
    const products =  await productRepository.getAllProducts();
    return products;
};
const getProductById = async (id) => {
    const product =  await productRepository.getProductById(id);
    return product;
};

const createProducts = async (data) => {
    const products =  await productRepository.createProducts(data);
    return products;
};

const  updateProducts = async (id, data) => {
    const {name, price, stock} = data;
    if(!name || !price || !stock){ 
        throw new Error("Semua Field Wajib Di Isi"); 
    }
    const products =  await productRepository.updateProducts(id, data);
    return products;
};

const deleteProduct = async (id) => {
    const products =  await productRepository.deleteProduct(id);
    return products;
};

module.exports = {
    getProducts,
    createProducts,
    getProductById,
    updateProducts,
    deleteProduct  
};