import {configureStore} from '@reduxjs/toolkit'
import todoR from './module/todoSlice'
import bgR from './module/bgSlice'

export const store = configureStore({
    reducer:{
        todoR,
        bgR
    }
})