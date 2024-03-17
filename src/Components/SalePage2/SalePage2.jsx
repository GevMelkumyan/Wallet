import React from "react";
import style from "./SalePage2.module.css";
import userimg from "../../IMG/Ellipse 13 (2).svg";
import IconClock from "../../assets/icons/IconClock";
import IconWarning from "../../assets/icons/IconWarning";
import Line from "../../assets/icons/Line";
import IconChat from "../../assets/icons/IconChat";
import { Link } from "react-router-dom";

const SalePage2 = () => {
  return (
    <div className={style.SalePage2}>
      <div className={style.div_user}>
        <img src={userimg} />
        <h4 className={style.h4}>
          Вы продаёте <span className={style.span}>Trust Bear </span>{" "}
        </h4>
      </div>
      <p className={style.p_hashtag}>#AB-00148760</p>
      <h2 className={style.h2}>
        50,00 <span className={style.span2}>USDT</span>
      </h2>
      <div className={style.div_chat}>
        <div className={style.icon_div}>
          <IconClock />
        </div>
        <div className={style.chat_text}>
          <h6 className={style.h6}>Статус</h6>
          <p className={style.p_chat}>Сделка формируется</p>
        </div>
      </div>
      <div className={style.div_worning}>
        <div className={style.worn_icon}>
          <IconWarning />
        </div>
        <div className={style.worn_name}>
          <p className={style.p_worn}>Внимание</p>
          <p className={style.worn_p}>
            Покупатель должен подтвердить сделку в течение 10 мин после её
            создания
          </p>
        </div>
      </div>
      <p className={style.time}>Завершите создание сделки в течение 2:54</p>
      <div className={style.big_1}>
        <div className={style.div_1}>
          <p className={style.p_1}>Комиссия сервиса</p>
          <p className={style.p_2}>0,45 USDT</p>
        </div>
        <Line />
        <div className={style.div_1}>
          <p className={style.p_1}>Сумма списания</p>
          <p className={style.p_2}>50,45 USDT</p>
        </div>
      </div>
      <div className={style.big_1}>
        <div className={style.div_1}>
          <p className={style.p_1}>Сумма</p>
          <p className={style.p_2}>624 545 UZS</p>
        </div>
        <Line />
        <div className={style.div_1}>
          <p className={style.p_1}>Цена за 1 USDT</p>
          <p className={style.p_2}>12 490,9 UZS</p>
        </div>
      </div>
      <div className={style.div_chat}>
        <div className={style.icon_div}>
          <IconChat />
        </div>
        <div className={style.chat_text}>
          <h6 className={style.h6}>Комментарий</h6>
          <p className={style.p_chat}>Привет</p>
        </div>
      </div>
      <div className={style.div_worningg}>
        <div className={style.worn__icon}>
          <IconWarning />
        </div>
        <p className={style.worn_pp}>
          Только мошенники предлагают общение и проведение сделок вне P2P
          Маркета
        </p>
      </div>
      <p className={style.p_dann}>Данные покупателя</p>
      <div className={style.big_2}>
        <div className={style.div_1}>
          <p className={style.p_1}>Имя покупателя</p>
          <p className={style.p_2}>Trust Bear</p>
        </div>
        <Line />
        <div className={style.div_1}>
          <p className={style.p_1}>Статистика торгов</p>
          <p className={style.p_2}>сделок: 14 · 99%</p>
        </div>
      </div>
      <Link to={"/createdeal"} className={style.btn}>
        Создать сделку
      </Link>
    </div>
  );
};

export default SalePage2;
