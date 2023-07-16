"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.getProductById = exports.getAllProduct = exports.deleteProduct = exports.createProduct = void 0;
const products_1 = require("../models/products");
const createProduct = async (req, res, next) => {
    var products = await products_1.Products.create({ ...req.body });
    return res
        .status(200)
        .json({ message: "Product created successfully", data: products });
};
exports.createProduct = createProduct;
const deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    const deletedProduct = await products_1.Products.findByPk(id);
    await products_1.Products.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Product deleted successfully", data: deletedProduct });
};
exports.deleteProduct = deleteProduct;
const getAllProduct = async (req, res, next) => {
    const allProducts = await products_1.Products.findAll();
    return res
        .status(200)
        .json({ message: "Product fetched successfully", data: allProducts });
};
exports.getAllProduct = getAllProduct;
const getProductById = async (req, res, next) => {
    const { id } = req.params;
    const products = await products_1.Products.findByPk(id);
    return res
        .status(200)
        .json({ message: "Product fetched successfully", data: products });
};
exports.getProductById = getProductById;
const updateProduct = async (req, res, next) => {
    const { id } = req.params;
    await products_1.Products.update({ ...req.body }, { where: { id } });
    const updatedProducts = await products_1.Products.findByPk(id);
    return res
        .status(200)
        .json({ message: "Product updated successfully", data: updatedProducts });
};
exports.updateProduct = updateProduct;
