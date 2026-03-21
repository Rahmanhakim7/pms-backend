const productService = require('./products.service');
const getProducts = async(req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);
        if (!product) {
            return res.status(404).json({
                message: "Product tidak ditemukan"
            });
        }
        res.status(200).json({
            data : product,
            message : "Product found successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createProducts = async(req, res) => {
    try {
        const products = await productService.createProducts(req.body);
        res.status(201).json({
            message: 'Product created successfully',
            product: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const  updateProducts = async(req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const products = await productService.updateProducts(id, data);
        if(!products){
            return res.status(404).json({
                message: "Product Gagal diupdate"
            });
        }
        res.status(200).json({
            message: 'Product updated successfully',
            product: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const deleteProduct = async(req,res) => {
    try {
        const { id } = req.params;
        const products = await productService.deleteProduct(id);
        if(!products){
            return res.status(404).json({
                message: "Product Gagal dihapus"
            });
        }
        res.status(200).json({
            message: 'Product deleted successfully',
            product: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
} 

module.exports =  {
    getProducts,
    createProducts,
    getProductById,
    updateProducts,
    deleteProduct
}