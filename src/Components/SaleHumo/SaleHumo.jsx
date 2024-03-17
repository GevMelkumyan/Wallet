import React from "react";
import style from "./SaleHumo.module.css";
import { Link } from "react-router-dom";

const SaleHumo = () => {
  return (
    <div className={style.SaleHumo}>
      <h5 className={style.h5}>Humo · UZS</h5>
      <div className={style.div_name}>Humo</div>
      <input
        className={style.input}
        placeholder="Аккаунт, номер карты или телефон"
      />
      <Link to={"/paymentMethod"} className={style.btn}>
        Добавить метод оплаты
      </Link>
    </div>
  );
};

export default SaleHumo;
