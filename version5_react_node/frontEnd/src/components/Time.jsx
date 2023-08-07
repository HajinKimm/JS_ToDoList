import React, { useEffect, useState } from 'react';
import styles from './Time.module.scss'
const Time = () => {
    const [now,setNow] = useState(new Date())
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()
    const dayArry = ['일','월','화','수','목','금','토']
    const day = dayArry[now.getDay()]
    const h = now.getHours()
    let m = now.getMinutes();
    let s = now.getSeconds();
    useEffect(()=>{
        let timer = setInterval(()=>{
            setNow(new Date())
        },1000)
        return()=>{
            clearInterval(timer)
        }
    },[])
    return (
        <div className={styles.timeWrap}>
            <p>{year}년 {month+1}월 {date}일 {day}요일</p>
            <strong>{h}시 {m}분 {s}초</strong>
            {/* <p>{now.toLocaleTimeString()}</p> */}
        </div>
    );
};

export default Time;