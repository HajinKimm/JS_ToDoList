import { createSlice } from "@reduxjs/toolkit";

const initialState={
    text:'',
    todoNum: localStorage.getItem('todoNum')?
            JSON.parse(localStorage.getItem('todoNum')) : 1,
    todoData : localStorage.getItem('todoData') ? 
            JSON.parse(localStorage.getItem('todoData')) : [],
    editText:''
}


export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        changeInput(state, action){
            state.text = action.payload
        },
        addTodo(state,action){
            state.todoData.push({id:state.todoNum++, title:action.payload, isChk:false, editTodo:true})
            localStorage.setItem('todoData', JSON.stringify(state.todoData))
            localStorage.setItem('todoNum', JSON.stringify(state.todoNum))
        },
        delTodo(state,action){
            state.todoData = state.todoData.filter(item=>item.id!==Number(action.payload))
            localStorage.setItem('todoData', JSON.stringify(state.todoData))
        },
        checkTodo(state,action){
            state.todoData = state.todoData.map(item=>item.id===Number(action.payload)?{...item, isChk:!item.isChk}:item)
            localStorage.setItem('todoData', JSON.stringify(state.todoData))
        },
        edit(state,action){
            state.todoData = state.todoData.map(item=>item.id===Number(action.payload)?{...item, editTodo:!item.editTodo}:item)
            let txt = state.todoData.find(item=>item.id===Number(action.payload))
            state.editText = txt.title
            localStorage.setItem('todoData', JSON.stringify(state.todoData))
        },
        editTextChangeInput(state,action){
            state.editText = action.payload
        },
        updateTodo(state,action){
            state.todoData = state.todoData.map(item=>item.id===Number(action.payload)?{...item, title:state.editText, editTodo:!item.editTodo}:item)
            localStorage.setItem('todoData', JSON.stringify(state.todoData))
        }
    }
})

export const {changeInput,addTodo,delTodo,checkTodo, edit,editTextChangeInput, updateTodo} = todoSlice.actions
export default todoSlice.reducer