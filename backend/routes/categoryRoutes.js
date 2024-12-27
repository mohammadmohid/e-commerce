const express = require('express');
const { getCategories, createCategory } = require('../controllers/categoryController.js');
const router = express.Router();

// Route to fetch all categories
router.get('/getCategory', getCategories);

// Route to create a new category
router.post('/createCategory', createCategory);

module.exports = router;
