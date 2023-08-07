import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState={
    // text:'',
    todoData :  [],
    current : {}
    // editText:''
}
export const getTodo  = createAsyncThunk(
    'todos/getTodo',
    async()=>{
        const res = await axios.get(`http://localhost:3000/todo`)
        return res.data
    }
)
export const postTodo = createAsyncThunk(
    'todos/postTodo',
    async(item)=>{
        const res = await axios.post(`http://localhost:3000/todo`,{item})
        return res.data
    }
)
export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async(id)=>{
        const res = await axios.delete(`http://localhost:3000/todo/${id}`)
        return res.data
    }
)
export const putTodo = createAsyncThunk(
    'todos/putTodo',
    async(id)=>{
        const res = await axios.put(`http://localhost:3000/todo/edit/${id}`)
        return res.data
    }
)
export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async(item)=>{
        const res = await axios.put(`http://localhost:3000/todo/update/${item.id}`,item)
        return res.data
    }
)
export const putChkTodo = createAsyncThunk(
    'todos/putChkTodo',
    async(id)=>{
        const res = await axios.put(`http://localhost:3000/todo/${id}`)
        return res.data
    }
)

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getTodo.fulfilled, (state,action)=>{
            state.todoData = action.payload
        })
        .addCase(postTodo.fulfilled, (state,action)=>{
            state.todoData = action.payload
        })
        .addCase(deleteTodo.fulfilled, (state,action)=>{
            state.todoData = action.payload
        })
        .addCase(putTodo.fulfilled, (state,action)=>{
            state.current = action.payload
            console.log(action.payload)
        })
        .addCase(updateTodo.fulfilled, (state,action)=>{
            state.todoData = action.payload
        })
        .addCase(putChkTodo.fulfilled, (state,action)=>{
            state.todoData = action.payload
        })
    }
})

export const {} = todoSlice.actions
export default todoSlice.reducer