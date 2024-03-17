import React from "react";
import styles from "./Params2.module.css";
import person from "../../assets/photos/photo1.png";
import IconArrow5 from "../../assets/icons/IconArrow5";
import IconArrow6 from "../../assets/icons/IconArrow6";
import IconArrow3 from "../../assets/icons/IconArrow3";
import IconArrow4 from "../../assets/icons/IconArrow4";
import { Link } from "react-router-dom";

const Params2 = () => {
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
      <div className={styles.div3}>
        <div className={styles.div3s1}>
          <IconArrow5 />
        </div>
        <div className={styles.div3s2}>
          <p className={styles.statustext}>Статус</p>
          <p className={styles.sdelkatext}>Ожидается подтверждение продавца</p>
        </div>
      </div>
      <div className={styles.div4}>
        <div className={styles.div4s1}>
          <IconArrow6 />
        </div>
        <div className={styles.div4s2}>
          <p className={styles.attentiontext1}>Внимание</p>
          <p className={styles.attentiontext2}>
            Ожидается подтверждение сделки от продавца
          </p>
        </div>
      </div>
      <p className={styles.endtext}>Ждём покупателя в течение 9:24</p>
      <div className={styles.div5}>
        <div className={styles.div5s1}>
          <p>Цена за 1 USDT</p>
          <p>31 615,01 UZS</p>
        </div>
        <div className={styles.div5s2}>
          <p>Сумма</p>
          <p>624 545 USDT</p>
        </div>
        <div className={styles.div5s3}>
          <p>Метод оплаты</p>
          <p>Humo</p>
        </div>
        <div className={styles.div5s4}>
          <p>Оплатить в течение</p>
          <p>15 мин</p>
        </div>
      </div>
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


    </div>
  );
};

export default Params2;
