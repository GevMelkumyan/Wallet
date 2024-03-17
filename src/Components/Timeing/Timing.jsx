import React from 'react'
import style from "./Timing.module.css"
import { Link } from 'react-router-dom'
import Clock from "../../assets/icon/Clock"

const Timeing = () => {
    return (
        <div className={style.ConfirmSend}>
            <div className={style.clock_div}>
                <Clock />
            </div>

            <h3 className={style.h3}>
                Платёж подтверждён
            </h3>
            <p className={style.p}>Через 2 минуты сумма 50 UZS будет зачислена на ваш кошелёк.</p>
            <p className={style.p_p}>Отправить аппеляцию</p>



            <Link to={'/sell'} className={style.btn}>Открыть P2P Маркет</Link>
        </div>
    )
}

export default Timeing