import React from "react";
import style from "./SalePage.module.css";
import userimg from "../../IMG/Ellipse 13 (2).svg";
import Line from "../../assets/icons/Line";
import IconChat from "../../assets/icons/IconChat";
import IconWarning from "../../assets/icons/IconWarning";
import { Link } from "react-router-dom";
const SalePage = () => {
  return (
    <div className={style.SalePage}>
      <div className={style.div_user}>
        <img src={userimg} />
        <h4 className={style.h4}>
          Вы продаёте <span className={style.span}>Trust Bear </span>{" "}
        </h4>
      </div>
      <p className={style.p_hashtag}>#AB-00148760</p>

      <div className={style.div_big}>
        <div className={style.div_1}>
          <p className={style.p_1}>Цена за 1 USDT</p>
          <p className={style.p_2}>31 615,01 UZS</p>
        </div>
        <Line />
        <div className={style.div_2}>
          <p className={style.p_1}>Доступно</p>
          <p className={style.p_2}>77 USDT</p>
        </div>
        <Line />
        <div className={style.div_2}>
          <p className={style.p_1}>Лимиты</p>
          <p className={style.p_2}>100 000 ~ 961 665,16 UZS</p>
        </div>
        <Line />
        <div className={style.div_2}>
          <p className={style.p_1}>Метод оплаты</p>
          <p className={style.p_2}>Humo</p>
        </div>
        <Line />
        <div className={style.div_1}>
          <p className={style.p_1}>Время на оплату</p>
          <p className={style.p_2}>15 мин</p>
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

      <div className={style.div_worning}>
        <div className={style.worn_icon}>
          <IconWarning />
        </div>
        <p className={style.worn_p}>
          Только мошенники предлагают общение и проведение сделок вне P2P
          Маркета
        </p>
      </div>
      <p className={style.p_dann}>Данные покупателя</p>

      <div className={style.user_div}>
        <div className={style.div_3}>
          <p className={style.p_3}>Имя покупателя</p>
          <p className={style.p_4}>Trust Bear</p>
        </div>
        <Line />
        <div className={style.div_4}>
          <p className={style.p_3}>Статистика торгов</p>
          <p className={style.p_4}>сделок: 14 · 99%</p>
        </div>
      </div>
      <Link to={"/salepage2"} className={style.btn}>
        Назад
      </Link>
    </div>
  );
};

export default SalePage;
