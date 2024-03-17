import React from "react";
import style from "./TelegramAkk.module.css";
import clos from "../../IMG/Close_Circle.svg";
import vector from "../../IMG/Vector.svg";

const TelegramAkk = () => {
  return (
    <div className={style.TelegramAkk}>
      <div className={style.telegramakk}>
        <div className={style.close}>
          <img className={style.close_icon} src={clos} />
          <h4 className={style.h4}>Выберите чат</h4>
        </div>
        <input className={style.input} placeholder="Поиск" />
        <div className={style.akk_div}>
          <div className={style.user_div}>
            <img className={style.vector} src={vector} />
            <h2 className={style.h2}>Рик Санчез</h2>
          </div>
          <div className={style.user_div}>
            <img className={style.vector} src={vector} />
            <h2 className={style.h2}>Рик Санчез</h2>
          </div>
          <div className={style.user_div}>
            <img className={style.vector} src={vector} />
            <h2 className={style.h2}>Рик Санчез</h2>
          </div>
          <div className={style.user_div}>
            <img className={style.vector} src={vector} />
            <h2 className={style.h2}>Рик Санчез</h2>
          </div>
          <div className={style.user_div}>
            <img className={style.vector} src={vector} />
            <h2 className={style.h2}>Рик Санчез</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramAkk;
