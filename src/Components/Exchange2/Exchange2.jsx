import React from "react";
import style from "./Exchange2.module.css";
import Usdt from "../../assets/icon/Usdt";
import Line from "../../assets/icon/Line";
import ArrowUpDown from "../../assets/icon/ArrowUpDown";
import Btc from "../../assets/icon/Btc";
import { Link } from "react-router-dom";

const Exchange2 = () => {
  return (
    <div className={style.Exchange2}>
      <div className={style.div_1}>
        <div className={style.icon_div}>
          <Usdt />
        </div>
        <p className={style.p}>Вы платите</p>
        <div className={style.div_num}>
          <p className={style.p_text}>Макс.:</p>
          <p className={style.p_num}>316,01 USDT</p>
        </div>
      </div>

      <div className={style.div_2}>
        <div className={style.points}>
          <h6 className={style.h6}>40</h6>
          <p className={style.point_p}>USDT</p>
        </div>
        <p className={style.p_price}>≈ 40,00 $</p>
      </div>

      <div className={style.line}>
        <Line />
        <div className={style.div_arroww}>
          <ArrowUpDown />
        </div>
      </div>

      <div className={style.valut_div}>
        <div className={style.div_btc}>
          <div className={style.btc_1}>
            <Btc />
          </div>
          <p className={style.btc_name}>Вы получите</p>
        </div>
        <div className={style.div_btc_num}>
          <h6 className={style.h6}>0, 00108543</h6>
          <p className={style.point_p}>BTC</p>
        </div>
      </div>

      <Link className={style.btn}>Проверить сделку</Link>
    </div>
  );
};

export default Exchange2;
