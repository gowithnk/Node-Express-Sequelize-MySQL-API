"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodoById = exports.getAllToDo = exports.deleteToDo = exports.createToDo = void 0;
const todos_1 = require("../models/todos");
const createToDo = async (req, res, next) => {
    var todos = await todos_1.Todos.create({ ...req.body });
    return res
        .status(200)
        .json({ message: "Todo created successfully", data: todos });
};
exports.createToDo = createToDo;
const deleteToDo = async (req, res, next) => {
    const { id } = req.params;
    const deletedTodo = await todos_1.Todos.findByPk(id);
    await todos_1.Todos.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Todo deleted successfully", data: deletedTodo });
};
exports.deleteToDo = deleteToDo;
const getAllToDo = async (req, res, next) => {
    const allTodos = await todos_1.Todos.findAll();
    return res
        .status(200)
        .json({ message: "Todo fetched successfully", data: allTodos });
};
exports.getAllToDo = getAllToDo;
const getTodoById = async (req, res, next) => {
    const { id } = req.params;
    const todos = await todos_1.Todos.findByPk(id);
    return res
        .status(200)
        .json({ message: "Todo fetched successfully", data: todos });
};
exports.getTodoById = getTodoById;
const updateTodo = async (req, res, next) => {
    const { id } = req.params;
    await todos_1.Todos.update({ ...req.body }, { where: { id } });
    const updatedTodos = await todos_1.Todos.findByPk(id);
    return res
        .status(200)
        .json({ message: "Todo updated successfully", data: updatedTodos });
};
exports.updateTodo = updateTodo;
