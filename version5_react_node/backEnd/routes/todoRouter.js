const express = require('express');
const { getTodo, postTodo, deleteTodo, putTodo, updataTodo, putChkTodo } = require('../controllers/todo.controller');
const todoRouter = express.Router()

todoRouter.get('/', getTodo)
todoRouter.post('/', postTodo)
todoRouter.delete('/:id', deleteTodo)
todoRouter.put('/edit/:id', putTodo)
todoRouter.put('/update/:id', updataTodo)
todoRouter.put('/:id', putChkTodo)

module.exports = todoRouter