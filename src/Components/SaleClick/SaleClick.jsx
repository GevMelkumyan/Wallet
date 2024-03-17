import React, { useState } from "react";
import style from "./SaleClick.module.css";
import userimg from "../../IMG/Ellipse 13 (2).svg";
import UpDownArrow from "../../assets/icons/UpDownArrow";
import Line from "../../assets/icons/Line";
import RightArrow from "../../assets/icons/RightArrow";
import { Link } from "react-router-dom";

const SaleClick = () => {
  const [prise, setPrise] = useState("0");

  const handleChange = (e) => {
    const { style, value } = e.target;

    if (!+value && +value !== 0) {
      return;
    }

    if (value[0] == 0 && value[1] != ".") {
      return setPrise(+value + "");
    }

    if (value.length == 0) {
      return setPrise(0);
    }
    style.width = value.length + "ch";
    setPrise(value);
  };

  const handleButtonClick = () => {
    if (prise === "0" || prise.trim() === "") {
      return;
    }
  };
  return (
    <div className={style.SaleClick}>
      <div className={style.div_user}>
        <img src={userimg} alt="" />
        <h2 className={style.h2}>
          Вы продаёте <span className={style.span}>Trust Bear</span>{" "}
        </h2>
      </div>

      <div className={style.div_value}>
        <div className={style.div2s1}>
          <input value={prise} type="text" onChange={handleChange} />
          <p>UZS</p>
        </div>

        <div className={style.div_arrow}>
          <UpDownArrow />
        </div>
      </div>
      <div className={style.div_text}>
        <p className={style.p}>Цена за 1 USDT ≈ 31 615,01 UZS</p>
        <p className={style.p_1}>Продать все</p>
      </div>

      <div className={style.div_big}>
        <div className={style.div_1}>
          <p className={style.p1}>Доступный баланс</p>
          <p className={style.p2}>454, 66516 USDT</p>
        </div>
        <Line />
        <div className={style.div_2}>
          <p className={style.p1}>Метод оплаты</p>
          <Link to={"/salesettings"} className={style.p2_g}>
            Добавить
          </Link>
        </div>
        <Line />
        <div className={style.div_3}>
          <p className={style.p1}>Лимиты</p>
          <p className={style.p2}>8, 005828 ~ 77 USDT</p>
        </div>
        <Line />
        <div className={style.div_4}>
          <p className={style.p1}>Детали объявления</p>
          <div className={style.right_arrow}>
            <RightArrow />
          </div>
        </div>
      </div>

      <Link
        to={prise !== "0" ? "/sellbtnon" : "#"}
        className={`${style.btn} ${prise == "0" ? style.btnDisabled : ""}`}
        onClick={handleButtonClick}
      >
        Далее
      </Link>
    </div>
  );
};

export default SaleClick;
