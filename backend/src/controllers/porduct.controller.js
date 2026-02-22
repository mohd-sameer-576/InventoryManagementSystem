const Products = require('../model/products');

// Create a new product
async function createProduct(req, res) {
    try {
        const { name, price, category, quantity } = req.body;
        const userId = req.user.userId; // Get user ID from auth middleware
        const newProduct = new Products({ name, price, category, quantity, userId });
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
}

// Get all products for the authenticated user
async function getProducts(req, res) {
    try {
        const userId = req.user.userId; // Get user ID from auth middleware
        const products = await Products.find({ userId });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
}