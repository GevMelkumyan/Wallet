import React from 'react'
import styles from './Wait.module.css'
import IconArrow13 from '../../assets/icons/IconArrow13'
import { Link } from 'react-router-dom'

const Wait = () => {
  return (
    <div className={styles.divBig}>
        <div className={styles.div1}>
          <IconArrow13/>
        </div>
        <p className={styles.waittext}>Ждём подтверждение</p>
        <p className={styles.longtext}>Это займет примерно 10 мин. Вы можете закрыть Diram Wallet, мы сообщим, когда средства будут зачислены.</p>
        <p className={styles.sendtext}>Отправить аппеляцию</p>
        <div className={styles.divbtn}>
          <button className={styles.btn1}>Отменить сд...</button>
          <button className={styles.btn2}>Сообщение</button>
        </div>
        <Link to={"/time"} className={styles.linkbtn}>
           <p>Открыть P2P Маркет</p>
        </Link>
    </div>
  )
}

export default Wait