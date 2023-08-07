import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTodo } from '../store/module/todoSlice';
import styles from './TodoInput.module.scss'
const TodoInput = () => {

    // const {text} = useSelector(state=>state.todoR)
    const [text, setText] = useState('')
    const dispatch = useDispatch()


    const onSubmit = e=>{
        e.preventDefault()
        if(!text)return
        dispatch(postTodo(text))
        setText('')
    }

    return (
        <div className={styles.input}>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='일정을 입력하세요' value={text} onChange={(e)=>setText(e.target.value)}/>
                <button type='submit'>추가</button>
            </form>
        </div>
    );
};

export default TodoInput;