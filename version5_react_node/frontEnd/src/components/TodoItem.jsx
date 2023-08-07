import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCheck } from 'react-icons/ai'
import { deleteTodo, getTodo, putChkTodo, putTodo, updateTodo } from '../store/module/todoSlice';
import styles from './TodoList.module.scss'
const TodoItem = ({ item }) => {
    const { id, title, isChk, isEdit } = item
    const {current, todoData} = useSelector(state=>state.todoR)
    const [text, setText] = useState({})
    // console.log(current)
    // const {id, title, isChk, isEdit} = text
    const dispatch = useDispatch()
    const textRef = useRef()
    console.log(todoData.filter(item=>item.isEdit).length>todoData.length-1)
    const onEdit = () => {
        if(todoData.filter(item=>item.isEdit).length>todoData.length-1){
            dispatch(putTodo(id))
            setTimeout(()=>{textRef.current.focus()},100)
        }else{
            alert('수정을 완료해주세요')
        }
    };
    const inputChange=e=>{
        // const value
    }
    console.log(current)
    console.log(text)
    const onSubmit = e=>{
        e.preventDefault()
        if(!text.title)return
        dispatch(updateTodo(text))
    }
    useEffect(()=>{
        dispatch(getTodo())
        setText(current)
    },[current])
    return (
        <li className={isChk&&isEdit ? styles.on : ''}>
            <i onClick={() => dispatch(putChkTodo(id))}><AiOutlineCheck /></i>
            {
                isEdit
                    ?
                    <>
                        <strong>{title}</strong>
                        {
                        !isChk&&
                            <button onClick={onEdit}>수정</button>
                        }
                    </>
                    :
                    <>
                        <form onSubmit={onSubmit}>
                            <input type="text" value={text.title} ref={textRef} onChange={e=>setText({...text, title:e.target.value})} />
                            <button type='submit'>완료</button>
                        </form>
                    </>
            }
            {
               isEdit&& <button type='button' onClick={() => dispatch(deleteTodo(id))}>삭제</button>
            }
            
            
        </li>
    );
};

export default TodoItem;