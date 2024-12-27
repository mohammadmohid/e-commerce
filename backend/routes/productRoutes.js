const express = require('express');
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');
const router = express.Router();

// Route to create a new product
router.post('/addProduct', createProduct);

// Route to fetch all products
router.get('/getProducts', getProducts);

// Route to fetch a single product by ID
router.get('/getProduct/:id', getProductById);

// Route to update a product by ID
router.put('/updateProduct/:id', updateProduct);

// Route to delete a product by ID
router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router;
