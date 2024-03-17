import React from 'react'
import styles from "./Proces.module.css"
import person from "../../assets/photos/photo1.png"
import IconArrow3 from '../../assets/icons/IconArrow3'
import IconArrow4 from '../../assets/icons/IconArrow4'
import { Link } from 'react-router-dom'

const Proces = () => {
    return (
        <div className={styles.divBig}>
            <div className={styles.div1}>
                <img className={styles.person} src={person} />
                <div className={styles.div1s}><p>Вы покупаете у</p><h4>Trust Bear</h4></div>
            </div>
            <p className={styles.codetext}>#AS-00148560</p>
            <div className={styles.div2}>
                <div className={styles.div2s1}>
                    <p>Цена за 1 TON</p>
                    <p>31 615,01 UZS</p>
                </div>
                <div className={styles.div2s2}>
                    <p>Доступно</p>
                    <p>152,614 TON</p>
                </div>
                <div className={styles.div2s3}>
                    <p>Лимиты</p>
                    <p>4 500 000 ~ 4 519 665,16 UZS</p>
                </div>
                <div className={styles.div2s4}>
                    <p>Метод оплаты</p>
                    <p>Uzcard</p>
                </div>
                <div className={styles.div2s5}>
                    <p>Оплатить в течение</p>
                    <p>15 мин</p>
                </div>
            </div>
            <div className={styles.div3}>
                <div className={styles.div3s1}>
                    <IconArrow3 />
                </div>
                <div className={styles.div3s2}>
                    <p className={styles.comtext}>Комментарий</p>
                    <p className={styles.hellotext}>Привет</p>
                </div>
            </div>
            <div className={styles.div4}>
                <div className={styles.div4s1}>
                    <IconArrow4/>
                </div>
                <p className={styles.predtext}>Только мошенники предлагают общение и проведение сделок вне P2P Маркета</p>
            </div>
            <p className={styles.biotext}>Данные продавца</p>
            <div className={styles.div5}>
                <div className={styles.div5s1}>
                    <p>Имя продавца</p>
                    <p>Trust Bear</p>
                </div>
                <div className={styles.div5s2}>
                    <p>Статистика торгов</p>
                    <p>сделок: 14 · 99%</p>
                </div>
            </div>
            <Link to={"/buy"}  className={styles.linkbtn}>
                <p>Назад</p>
            </Link>
        </div>
    )
}

export default Proces