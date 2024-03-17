import React from 'react'
import style from "./Checkin.module.css"
import Line from '../../assets/icons/Line'
import { Link } from 'react-router-dom'

const Checkin = () => {
    return (
        <div className={style.Checkin}>
            <div className={style.div_chek}>
                <div className={style.div2}>
                    <input className={style.inp} type='checkbox' />
                    <h4 className={style.h4}>Все</h4>
                </div>
                <Line />
                <div className={style.div1}>
                    <input className={style.inp} type='checkbox' />
                    <h4 className={style.h4}>Uzcard</h4>
                </div>
                <Line />
                <div className={style.div1}>
                    <input className={style.inp} type='checkbox' />
                    <h4 className={style.h4}>Anorbank</h4>
                </div>
                <Line />
                <div className={style.div1}>
                    <input className={style.inp} type='checkbox' />
                    <h4 className={style.h4}>Ipak Yuli Bank</h4>
                </div>
                <Line />
                <div className={style.div1}>
                    <input className={style.inp} type='checkbox' />
                    <h4 className={style.h4}>Kapitalnank</h4>
                </div>
                <Line />
                <div className={style.div2}>
                    <input className={style.inp} type='checkbox' />
                    <h4 className={style.h4}>Tenge Bank</h4>
                </div>
            </div>

            <Link to={"/sale1"} className={style.btn}>
                Готово
            </Link>
        </div>
    )
}

export default Checkin