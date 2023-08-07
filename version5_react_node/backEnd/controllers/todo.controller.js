let data = require('../models/todo.model');
let no = data.length+1;

const getTodo = (req, res)=>{
    res.send(data)
}
const postTodo = (req,res)=>{
    const title = req.body.item
    const item = {id:no++, title:title, isChk:false, isEdit:true}
    data.push(item)
    res.send(data)
}
const deleteTodo = (req,res)=>{
    data = data.filter(item=>item.id !== Number(req.params.id))
    res.send(data)
}
const putTodo = (req,res)=>{
    const item = data.find(item=>item.id === Number(req.params.id))
    if(item){
        item.isEdit = !item.isEdit
    }
    res.send(item)
}
const updataTodo = (req,res)=>{
    data = data.map(item=>item.id === Number(req.params.id)?{...req.body, isEdit:!req.body.isEdit}:item)
    res.send(data)
}
const putChkTodo = (req,res)=>{
    data = data.map(item=>item.id === Number(req.params.id)?{...item, isChk:!item.isChk}:item)
    res.send(data)
}

module.exports = {
    getTodo,
    postTodo,
    deleteTodo,
    putTodo,
    updataTodo,
    putChkTodo
}