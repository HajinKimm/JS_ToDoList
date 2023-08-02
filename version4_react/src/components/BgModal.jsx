import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBg } from '../store/module/bgSlice';
import styles from './BgModal.module.scss'
const BgModal = ({setBgShow}) => {
    const {bgData} = useSelector(state=>state.bgR)
    const dispatch = useDispatch()
    return (
        <div className={styles.bgModal}>
            <ul>
                {bgData.map(item=><li key={item.id}>
                    <img src={item.url} alt={item.id} onClick={()=>{dispatch(editBg(item)), setBgShow(false)}}/>
                </li>)}
            </ul>
        </div>
    );
};

export default BgModal;