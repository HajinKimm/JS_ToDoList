import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeInput } from '../store/module/todoSlice';
import styles from './TodoInput.module.scss'
const TodoInput = () => {

    const {text} = useSelector(state=>state.todoR)
    const dispatch = useDispatch()

    const onSubmit = e=>{
        e.preventDefault()
        if(!text)return
        dispatch(addTodo(text))
        dispatch(changeInput(''))
    }

    return (
        <div className={styles.input}>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='일정을 입력하세요' value={text} onChange={(e)=>dispatch(changeInput(e.target.value))}/>
                <button type='submit'>추가</button>
            </form>
        </div>
    );
};

export default TodoInput;