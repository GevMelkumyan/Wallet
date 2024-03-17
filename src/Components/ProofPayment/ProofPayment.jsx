import React, { useState } from 'react'
import styles from "./ProofPayment.module.css";
import person from "../../assets/photos/photo1.png";
import IconArrow6 from "../../assets/icons/IconArrow6";
import IconArrow3 from "../../assets/icons/IconArrow3";
import IconArrow4 from "../../assets/icons/IconArrow4";
import { Link } from "react-router-dom";
import MessIcon from "../../assets/icon/MessIcon";
import Checking from "../../assets/icon/Checking";
import NavigationIcon from "../../assets/icon/NavigationIcon";
import Line from "../../assets/icon/Line";
import InterfaceIcon from "../../assets/icon/InterfaceIcon";
import EditIcon from "../../assets/icon/EditIcon";
import SistemIcon from "../../assets/icon/SistemIcon";
import Line2 from "../../assets/icon/Line2";


const ProofPayment = () => {
    const [alert, setAlert] = useState()

    return (
        <div className={styles.divBig}>
            <div className={styles.div1}>
                <img className={styles.person} src={person} />
                <div className={styles.div1s}>
                    <p>Вы покупаете у</p>
                    <h4>Trust Bear</h4>
                </div>
            </div>
            <p className={styles.codetext}>#05678541</p>
            <div className={styles.div2}>
                <p className={styles.priceP}>0</p>
                <p className={styles.valP}>UZS</p>
            </div>

            <div className={styles.div_mess}>
                <div className={styles.mess_icon}>
                    <MessIcon />
                </div>
                <p className={styles.p_p}>Начать чат</p>
            </div>
            <div className={styles.div3}>
                <div className={styles.div3s1}>
                    <Checking />
                </div>
                <div className={styles.div3s2}>
                    <p className={styles.statustext}>Статус</p>
                    <p className={styles.sdelkatext}>Покупатель подтвердил оплату</p>
                </div>
            </div>
            <div className={styles.div4}>
                <div className={styles.div4s1}>
                    <IconArrow6 />
                </div>
                <div className={styles.div4s2}>
                    <p className={styles.attentiontext1}>Внимание</p>
                    <p className={styles.attentiontext2}>
                        Проверьте, получили ли вы платёж
                    </p>
                </div>
            </div>
            <p className={styles.endtext}>Ждём покупателя в течение 14:24</p>
            <p className={styles.endtext}>Детали платежа</p>
            <div className={styles.div5}>
                <div className={styles.div5s1}>
                    <div className={styles.div_icon1}>
                        <NavigationIcon />
                    </div>

                    <div className={styles.div_text1}>
                        <p className={styles.text1}>Метод оплаты</p>
                        <p className={styles.text2}>Humo</p>
                    </div>
                </div>
                <Line />

                <div className={styles.div5s1}>
                    <div className={styles.div_icon1}>
                        <InterfaceIcon />
                    </div>

                    <div className={styles.div_text1}>
                        <p className={styles.text1}>Номер карты или телефон</p>
                        <p className={styles.text2}>+998 675 834 123</p>
                    </div>

                    <div className={styles.editicon}>
                        <EditIcon />
                    </div>
                </div>
                <Line />

                <div className={styles.div5s1}>
                    <div className={styles.div_icon1}>
                        <SistemIcon />
                    </div>

                    <div className={styles.div_text1}>
                        <p className={styles.text1}>Сумма</p>
                        <p className={styles.text2}>624 545 UZS</p>
                    </div>

                    <div className={styles.editicon}>
                        <EditIcon />
                    </div>
                </div>

            </div>

            <p className={styles.p_plat}>Подтвердите получение в течение 15:00</p>
            <div className={styles.div6}>
                <div className={styles.div6s1}>
                    <IconArrow3 />
                </div>
                <div className={styles.div6s2}>
                    <p className={styles.comtext}>Комментарий</p>
                    <p className={styles.hellotext}>Привет</p>
                </div>
            </div>
            <div className={styles.div7}>
                <div className={styles.div7s1}>
                    <IconArrow4 />
                </div>
                <p>
                    Только мошенники предлагают общение и проведение сделок вне P2P
                    Маркета
                </p>
            </div>
            <p className={styles.biotext}>Данные продавца</p>
            <div className={styles.div8}>
                <div className={styles.div8s1}>
                    <p>Имя продавца</p>
                    <p>Trust Bear</p>
                </div>
                <div className={styles.div8s2}>
                    <p>Статистика торгов</p>
                    <p>сделок: 14 · 99%</p>
                </div>
            </div>


            <div className={`${styles.modal} ${alert ? styles.show : styles.hide}`}>
                <div className={`${styles.div_inp}`} >
                    <p className={styles.inp_p}>Вы подтверждаете получение платежа на сумму 624 545 UZS и продажу 50 USDT покупателю?</p>
                    <Line />
                    <div className={styles.inp_butt}>
                        <button className={styles.butt1} onClick={() => setAlert(false)}>Отмена</button>
                        <Line2 />
                        <Link className={styles.butt2} to={"/saledispatch"}>Подтвердить</Link>
                    </div>
                </div>
            </div>


            <Link className={styles.btn} onClick={() => setAlert(true)} >Подтвердить платёж</Link>
        </div>
    )
}

export default ProofPayment