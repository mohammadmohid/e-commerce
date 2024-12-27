const  Category = require('../models/category');

// Fetch all categories
const getCategories = async (req, res) => {
    try {
        const categoryList = await Category.find();
        if (!categoryList) {
            return res.status(500).json({ success: false });
        }
        res.send(categoryList);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Create a new category
const createCategory = async (req, res) => {
    try {
        const category = new Category({
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        });

        const savedCategory = await category.save();
        if (!savedCategory) {
            return res.status(404).send('The Category cannot be created');
        }
        res.send(savedCategory);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getCategories,
    createCategory
};
