import React from "react";
import style from "./Checking.module.css";
import circle from "./images/Chat_Circle.png";
import user from "./images/Ellipse 13.png";
import { Link } from "react-router-dom";
const Checking = () => {
  return (
    <div className={style.checking}>
      <div className={style.checkAd}>
        <p className={style.newP1}>Проверьте объявление</p>
        <p className={style.newP2}>4 / 4</p>
      </div>
      <div className={style.card}>
        <div className={style.cardDiv}>
          <div className={style.cardChild1}>
            <div className={style.priceDiv}>
              <p className={style.price}>132,61 RUB </p>
              <p className={style.priceDesc}>150% от рыночной цены за 1 USDT</p>
            </div>
            <div>
              <button className={style.btnBuy}> Купить</button>
            </div>
          </div>
          <div className={style.cardChild2}>
            <div className={style.cardChildText}>
              <div className={style.user}>
                <img src={user} className={style.userImg} alt="" />
                <p className={style.setValues}>Михаил Т.</p>
              </div>
              <div className={style.valueText}>
                <p className={style.value}>Сумма</p>
                <p className={style.value}>Лимиты</p>
                <p className={style.value}>Метод оплаты</p>
                <p className={style.value}>Время на оплату</p>
              </div>
            </div>
            <div className={style.cardChildText}>
              <div className={style.setValueDiv}>
                <p className={style.setValues}>
                  сделок: <span className={style.setValues}>1· 100%</span>
                </p>
              </div>
              <div className={style.valueText}>
                <p className={style.setValues}>38,98 USDT</p>
                <p className={style.setValues}>400 - 5 169,04 RUB</p>
                <p className={style.setValues}>Тинькофф</p>
                <p className={style.setValues}>15 мин</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={style.commision}>
        Комиссия продавца за каждую транзакцию = 0,9%
      </p>
      <div className={style.commentDiv}>
        <div className={style.comment}>
          <div className={style.commentImg}>
            <div className={style.commentImgFon}>
              <img className={style.circleImg} src={circle} alt="" />
            </div>
          </div>
          <div className={style.commentText}>
            <p className={style.commentText1}>Комментарий</p>
            <p className={style.commentText2}>Привет</p>
          </div>
        </div>
      </div>
      <Link to={"/dispatch"} className={style.createBtn}>Создать объявление</Link>
    </div>
  );
};

export default Checking;
