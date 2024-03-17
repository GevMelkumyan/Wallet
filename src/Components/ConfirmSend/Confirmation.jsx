import React from 'react'
import style from "./Confirmation.module.css"
import { Link } from 'react-router-dom'
import TelegSend from '../../assets/icon/TelegSend'

const Confirmation = () => {
    return (
        <div className={style.ConfirmSend}>
            <div className={style.clock_div}>
                <TelegSend />
            </div>

            <h3 className={style.h3}>
                Ждём подтверждение
            </h3>
            <p className={style.p}>Это займет примерно 10 мин. Вы можете закрыть Diram Wallet, мы сообщим, когда средства будут зачислены.</p>
            <p className={style.p_p}>Отправить аппеляцию</p>

            <div className={style.but_div}>
                <button className={style.btn1}>Отменить сд...</button>
                <button className={style.btn2}>Сообщение</button>
            </div>

            <Link className={style.btn}>Открыть P2P Маркет</Link>
        </div>
    )
}

export default Confirmation