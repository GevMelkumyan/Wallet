import React from "react";
import style from "./Sending4.module.css";
import CircleCheck from "../../assets/icon/CircleCheck";
import { Link, useLocation } from "react-router-dom";
import CurrencyStyle from "../../utils/components/CurrencyStyle";

const Sending4 = () => {
  const { state } = useLocation()

  return (
    <div className={style.Sending4}>
      <div className={style.div_check}>
        <CircleCheck />
      </div>
      <h3 className={style.h3}>{state?.crypto} уже в пути</h3>
      <p className={style.p_1}>Ваша транзакция проведена</p>
      <p className={style.p2}>Сумма <CurrencyStyle amount={state?.amount} currency={state?.crypto} toSymbol={false} /> отправлена на кошелёк</p>
      <p className={style.p_https}>
        {state?.address}
      </p>

      <Link to={"/sending5"} state={state} className={style.btn}>
        Готово
      </Link>
    </div>
  );
};

export default Sending4;
