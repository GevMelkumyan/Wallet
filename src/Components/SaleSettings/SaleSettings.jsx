import React from "react";
import style from "./SaleSettings.module.css";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/icons/RightArrow";
import Line from "../../assets/icons/Line";

const SaleSettings = () => {
  return (
    <div className={style.SaleSettings}>
      <p className={style.p}>Выберите метод оплаты</p>
      <Link to={"/saleHumo"} className={style.div_humo}>
        <div className={style.humo_text}>
          <h4 className={style.h4}>Humo</h4>
          <p className={style.humo_p}>Humo · UZS</p>
          <p className={style.humo_number}>+998678456134</p>
        </div>

        <div className={style.div_icon_right}>
          <RightArrow />
        </div>
      </Link>

      <Link className={style.div_uzcard}>
        <div className={style.humo_text}>
          <h4 className={style.h4}>Uzcard</h4>
          <p className={style.humo_p}>Uzcard · UZS</p>
          <p className={style.humo_number}>+998678456134</p>
        </div>

        <div className={style.div_icon_right}>
          <RightArrow />
        </div>
      </Link>

      <p className={style.p_add}>Или добавьте новый метод оплаты</p>

      <div className={style.div_newCripto}>
        <div className={style.div_1}>
          <h5 className={style.h3}>Humo</h5>
          <div className={style.div_right}>
            <RightArrow />
          </div>
        </div>
        <Line />

        <div className={style.div_1}>
          <h5 className={style.h3}>Uzcard</h5>
          <div className={style.div_right}>
            <RightArrow />
          </div>
        </div>
        <Line />

        <div className={style.div_1}>
          <h5 className={style.h3}>Anorbank</h5>
          <div className={style.div_right}>
            <RightArrow />
          </div>
        </div>
        <Line />

        <div className={style.div_1}>
          <h5 className={style.h3}>Ipak Yuli Bank</h5>
          <div className={style.div_right}>
            <RightArrow />
          </div>
        </div>
        <Line />

        <div className={style.div_1}>
          <h5 className={style.h3}>Kapitalnank</h5>
          <div className={style.div_right}>
            <RightArrow />
          </div>
        </div>
        <Line />

        <div className={style.div_1}>
          <h5 className={style.h3}>Tenge Bank</h5>
          <div className={style.div_right}>
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleSettings;
