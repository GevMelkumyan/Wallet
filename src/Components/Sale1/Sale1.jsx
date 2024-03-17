import React from "react";
import style from "./Sale1.module.css";
import ArrowUpDown from "../../assets/icons/ArrowUpDown";
import ArrowUpRight from "../../assets/icons/ArrowUpRight";
import { Link } from "react-router-dom";
import Line from "../../assets/icons/Line";
import imgus from "../../IMG/Ellipse 1.svg";
import CustomSelect from "../Select/Select";


const Sale1 = () => {
  return (
    <div className={style.Sale1}>
      <div className={style.div_sel}>
        <Link to={"/paymantoll"} className={style.div_1}>
          <div className={style.ddiv_name}>
            <p className={style.p1}>Оплата</p>
            <h6 className={style.h6}>Все</h6>
          </div>
          <ArrowUpDown color="white" />
        </Link>

        <CustomSelect variant={"primary"} icon={<ArrowUpDown />} title={"Валюта"} options={[{ label: "RUB", value: "RUB" }, { label: "USD", value: "USD" }, { label: "EUR", value: "EUR" }, { label: "UZB", value: "UZB" }, { label: "KZT", value: "KZT" }, { label: "TJS", value: "TJS" }, { label: "KGS", value: "KGS" }]} />
        <CustomSelect variant={"primary"} icon={<ArrowUpDown />} title={"Крипта"} options={[{ label: "RUB", value: "RUB" }, { label: "USD", value: "USD" }, { label: "EUR", value: "EUR" }, { label: "UZB", value: "UZB" }, { label: "KZT", value: "KZT" }, { label: "TJS", value: "TJS" }, { label: "KGS", value: "KGS" }]} />

        {/* <div className={style.div_1}>
          <div className={style.ddiv_name}>
            <p className={style.p1}>Крипта</p>
            <h6 className={style.h6}>USDT</h6>
          </div>
          <ArrowUpDown />
        </div> */}
        <div className={style.div_2}>
          <div className={style.ddiv_name}>
            <p className={style.p1}>Сумма</p>
            <h6 className={style.h_6}>10.00 UZS</h6>
          </div>
        </div>
      </div>

      <div className={style.div_cript}>
        <div className={style.cript_div}>
          <div className={style.cripto_1}>
            <h5 className={style.h5}>31 610,23 UZS</h5>
            <p className={style.crip_p}>Цена за 1 USDT</p>
          </div>
          <div className={style.cripto_2}>
            <div className={style.div_arrow}>
              <ArrowUpRight />
            </div>
            <Link to={"/sellbtn"} className={style.btn_sale}>
              Продать
            </Link>
          </div>
        </div>
        <Line />

        <div className={style.div_cr}>
          <div className={style.cr_1}>
            <div className={style.div_img}>
              <img src={imgus} alt="" />
              <h5 className={style.h_5}>Trust Bear</h5>
            </div>
            <p className={style.p_dost}>Доступно</p>
            <p className={style.p_lim}>Лимиты</p>
            <p className={style.p_vvod}>Метод оплаты</p>
          </div>

          <div className={style.cr_2}>
            <div className={style.div_tex}>
              <p className={style.p_p}>сделок:</p>
              <p className={style.pp}>14 · 99%</p>
            </div>
            <p className={style.p_num}>152,614 USDT</p>
            <p className={style.lim_num}>
              25 000 - <br /> 50 935,66 UZS
            </p>
            <p className={style.vvod_nam}>Uzcard и Humo</p>
          </div>
        </div>
      </div>
      <div className={style.div_cript}>
        <div className={style.cript_div}>
          <div className={style.cripto_1}>
            <h5 className={style.h5}>12 490,9 UZS</h5>
            <p className={style.crip_p}>Цена за 1 USDT</p>
          </div>
          <div className={style.cripto_2}>
            <div className={style.div_arrow}>
              <ArrowUpRight />
            </div>
            <Link to={"/sellbtn"} className={style.btn_sale}>
              Продать
            </Link>
          </div>
        </div>
        <Line />

        <div className={style.div_cr}>
          <div className={style.cr_1}>
            <div className={style.div_img}>
              <img src={imgus} alt="" />
              <h5 className={style.h_5}>Михаил Т.</h5>
            </div>
            <p className={style.p_dost}>Доступно</p>
            <p className={style.p_lim}>Лимиты</p>
            <p className={style.p_vvod}>Метод оплаты</p>
          </div>

          <div className={style.cr_2}>
            <div className={style.div_tex}>
              <p className={style.p_p}>сделок:</p>
              <p className={style.pp}>1· 100%</p>
            </div>
            <p className={style.p_num}>152,614 USDT</p>
            <p className={style.lim_num}>
              4 500 000 - <br /> 4 518 935,66 UZS
            </p>
            <p className={style.vvod_nam}>Uzcard и Humo</p>
          </div>
        </div>
      </div>

      <div className={style.div_cript}>
        <div className={style.cript_div}>
          <div className={style.cripto_1}>
            <h5 className={style.h5}>12 490,9 UZS</h5>
            <p className={style.crip_p}>Цена за 1 USDT</p>
          </div>
          <div className={style.cripto_2}>
            <div className={style.div_arrow}>
              <ArrowUpRight />
            </div>
            <Link to={"/sellbtn"} className={style.btn_sale}>
              Продать
            </Link>
          </div>
        </div>
        <Line />

        <div className={style.div_cr}>
          <div className={style.cr_1}>
            <div className={style.div_img}>
              <img src={imgus} alt="" />
              <h5 className={style.h_5}>Михаил Т.</h5>
            </div>
            <p className={style.p_dost}>Доступно</p>
            <p className={style.p_lim}>Лимиты</p>
            <p className={style.p_vvod}>Метод оплаты</p>
          </div>

          <div className={style.cr_2}>
            <div className={style.div_tex}>
              <p className={style.p_p}>сделок:</p>
              <p className={style.pp}>1· 100%</p>
            </div>
            <p className={style.p_num}>152,614 USDT</p>
            <p className={style.lim_num}>
              4 500 000 - <br /> 4 518 935,66 UZS
            </p>
            <p className={style.vvod_nam}>Uzcard и Humo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale1;
