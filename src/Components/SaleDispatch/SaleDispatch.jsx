import React from 'react'
import style from "./SaleDispatch.module.css"
import { Link } from 'react-router-dom'
import Clock from "../../assets/icon/Clock"

const SaleDispatch = () => {
    return (
        <div className={style.ConfirmSend}>
            <div className={style.clock_div}>
                <Clock />
            </div>

            <h3 className={style.h3}>
                Платёж подтверждён
            </h3>
            <p className={style.p}>Через 2 минуты сумма 50 USDT будет списана с вашего кошелька.</p>
            <p className={style.p_p}>Отправить аппеляцию</p>



            <Link to={"/sell"} className={style.btn}>Открыть P2P Маркет</Link>
        </div>
    )
}

export default SaleDispatch