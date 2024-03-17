import React from 'react'
import style from "./FinishDispatch.module.css"
import ArrowCheck from '../../assets/icon/ArrowCheck'
import { Link } from 'react-router-dom'



const FinishDispatch = () => {
    return (
        <div className={style.ConfirmSend}>
            <div className={style.clock_div}>
                <ArrowCheck />
            </div>

            <h3 className={style.h3}>
                Вы продали 50 USDT
            </h3>
            <p className={style.p}>Сделка завершена</p>
            <p className={style.p_p}>Отправить аппеляцию</p>

            <Link to={"/"} className={style.btn}>Готово</Link>
        </div>
    )
}

export default FinishDispatch