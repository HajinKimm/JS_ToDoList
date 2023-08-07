import React, { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import BgModal from './BgModal';
import { useDispatch, useSelector } from 'react-redux';
import { setBg } from '../store/module/bgSlice';
import styles from './Todo.module.scss'
import Time from './Time';

const Todo = () => {
    const [bgShow, setBgShow] = useState(false)
    const { currentBg } = useSelector(state => state.bgR)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setBg())
    }, [])
    return (
        <div className={styles.todoWrap}
            style={{ backgroundImage: `url(${currentBg.url})` }}
        >
            <button className={styles.bgBtn} onClick={() => setBgShow(!bgShow)}>배경선택</button>
            {
                bgShow && <BgModal setBgShow={setBgShow}/>
            }
            <Time/>
            <div className={styles.todoTop}>
                <h2>To Do List</h2>
                <TodoInput />
            </div>
                <TodoList />
        </div>
    );
};

export default Todo;