import React from 'react'
import styles from "./Time.module.css"
import IconArrow14 from '../../assets/icons/IconArrow14'
import { Link } from 'react-router-dom'

const Time = () => {
  return (
    <div className={styles.divBig}>
         <div className={styles.div1}>
          <IconArrow14/>
        </div>
        <p className={styles.waittext}>Платёж подтверждён</p>
        <p className={styles.longtext}>Через 2 минуты сумма 50 UZS будет зачислена на ваш кошелёк.</p>
        <p className={styles.sendtext}>Отправить аппеляцию</p>
        <Link to={"/end"} className={styles.linkbtn}>
          <p>Открыть P2P Маркет</p>
        </Link>
    </div>
  )
}

export default Time