import React from 'react'
import style from "./Ready.module.css"
import ArrowCheck from '../../assets/icon/ArrowCheck'
import { Link } from 'react-router-dom'

const Ready = () => {
    return (
        <div className={style.ConfirmSend}>
            <div className={style.clock_div}>
                <ArrowCheck />
            </div>

            <h3 className={style.h3}>
                Вам зачислено 50 UZS
            </h3>
            <p className={style.p}>Сделка завершена</p>
            <p className={style.p_p}>Отправить аппеляцию</p>

            <Link to={"/"} className={style.btn}>Готово</Link>
        </div>
    )
}

export default Ready