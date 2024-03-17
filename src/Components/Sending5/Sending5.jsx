import React from "react";
import style from "./Sending5.module.css";
import ArrowCircle from "../../assets/icon/ArrowCircle";
import ArrowTopBottom from "../../assets/icon/ArrowTopBottom";
import ArrowUpDown from "../../assets/icon/ArrowUpDown";
import ArrowReload from "../../assets/icon/ArrowReload";
import ArrowCheck from "../../assets/icon/ArrowCheck";
import { Link, useLocation } from "react-router-dom";
import { shortAddr } from "../../utils/shortAddr";
import CurrencyStyle from "../../utils/components/CurrencyStyle";
import { toLocaleTime } from "../../utils/toLocaleTime";
import { useSelector } from "react-redux";
import { selectUserLanguage } from "../../redux/slices/userSlice";


const Sending5 = () => {
  const language = useSelector(selectUserLanguage)
  const { state } = useLocation()

  return (
    <div className={style.Sending5}>
      <div className={style.send_name}>
        <div className={style.icon}>
          <ArrowCheck />
        </div>
        <p className={style.name_p}>Отправить {shortAddr(state?.address, 2, 4)}</p>
        {/* <ArrowTopBottom /> */}
      </div>
      <div className={style.div_cash}>
        <div className={style.div_usdt}>
          <h3 className={style.h3}>
            - <CurrencyStyle amount={state?.amount} currency={state?.crypto} toSymbol={false} />
          </h3>
        </div>
      </div>
      <p className={style.p_data}>{toLocaleTime(language, state?.date)}</p>
      <Link to={"/payment"} className={style.div_reload}>
        <div className={style.icon_rel}>
          <ArrowReload />
        </div>
        <p className={style.p_reload}>Отправить повторно</p>
      </Link>
      <p className={style.paym_div}>Детали платежа</p>
      <div className={style.div_answer}>
        <p className={style.p1}>Статус</p>
        <h6 className={style.h6}>Успешно</h6>
      </div>
    </div>
  );
};

export default Sending5;
