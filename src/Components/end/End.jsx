import React from 'react'
import styles from './End.module.css'
import IconArrow15 from '../../assets/icons/IconArrow15'

const End = () => {
  return (
    <div className={styles.divBig}>
         <div className={styles.div1}>
          <IconArrow15/>
        </div>
        <p className={styles.waittext}>Вам зачислено 50 UZS</p>
        <p className={styles.longtext}>Сделка завершена</p>
        <p className={styles.sendtext}>Отправить аппеляцию</p>
        <button className={styles.btn}>Готово</button>
    </div>
  )
}

export default End