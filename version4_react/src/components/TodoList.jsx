import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import styles from './TodoList.module.scss'
const TodoList = () => {

    const {todoData} = useSelector(state=>state.todoR)

    return (
            <ul className={styles.todoList}>
                {
                    todoData.map((item,idx)=><TodoItem key={item.id} item={item}idx={idx}/>)
                }
            </ul>
    );
};

export default TodoList;