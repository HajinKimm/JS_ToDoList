import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCheck } from 'react-icons/ai'
import { checkTodo, delTodo, edit, editTextChangeInput, updateTodo } from '../store/module/todoSlice';
import styles from './TodoList.module.scss'
const TodoItem = ({ item,idx }) => {
    const { id, title, isChk, editTodo } = item
    
    const dispatch = useDispatch()
    const {editText} = useSelector(state=>state.todoR)
    const textRef = useRef()
    const onSubmit = e=>{
        e.preventDefault()
        if(!editText)return
        dispatch(updateTodo(id))
        dispatch(editTextChangeInput(''))
    }
    const onEdit = (id) => {
        dispatch(edit(id))
        // console.log(textRef)
        setTimeout(()=>{textRef.current.focus()},100)
    };
    return (
        <li className={isChk ? styles.on : ''}>
            <i onClick={() => dispatch(checkTodo(id))}><AiOutlineCheck /></i>
            {
                editTodo
                    ?
                    <>
                        <strong>{title}</strong>
                        {
                        !isChk&&<button onClick={() =>onEdit(id)}>수정</button>
                        }
                    </>
                    :
                    <>
                        <form onSubmit={onSubmit}>
                            <input type="text" value={editText} ref={textRef} onChange={e=>dispatch(editTextChangeInput(e.target.value))} />
                            <button type='submit'>완료</button>
                        </form>
                    </>
            }
            {
               editTodo&& <button type='button' onClick={() => dispatch(delTodo(id))}>삭제</button>
            }
            
            
        </li>
    );
};

export default TodoItem;