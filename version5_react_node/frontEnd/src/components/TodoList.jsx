import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import styles from './TodoList.module.scss'
import { getTodo } from '../store/module/todoSlice';
const TodoList = () => {

    const {todoData} = useSelector(state=>state.todoR)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTodo())
    },[])
    return (
            <ul className={styles.todoList}>
                {
                    todoData.map(   item=><TodoItem key={item.id} item={item}/>)
                }
            </ul>
    );
};

export default TodoList;