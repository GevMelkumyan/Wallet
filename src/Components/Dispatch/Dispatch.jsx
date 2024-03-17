import React from 'react'
import style from "./Dispatch.module.css"
import CricleCheck from '../../assets/icon/CricleCheck'
import { Link } from 'react-router-dom'

const Dispatch = () => {
    return (
        <div className={style.Dispatch}>
            <div className={style.div_check}>
                <CricleCheck />
            </div>
            <h2 className={style.h2}>Объявление создано</h2>
            <p className={style.p}>Мы сообщим, когда на него откликнутся</p>
            <p className={style.p1}>Посмотреть объявление</p>

            <Link to={'/sell'} className={style.btn}>Открыть P2P Маркет</Link>
        </div>
    )
}

export default Dispatch