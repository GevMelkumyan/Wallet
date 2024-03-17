import React, { useEffect, useState } from "react";
import style from "./Buy.module.css";
import IconArrowUpDown from "../../assets/icons/IconArrowUpDown";
import person from "../../assets/photos/photo1.png";
import IconArrow2 from "../../assets/icons/IconArrow2";
import { Link } from "react-router-dom";
import CustomSelect from "../Select/Select";
import axios from "axios";
import { SERVER_URL } from "../../config";

const Buy = () => {
  const [price, setPrice] = useState(0);
  const [from, setFrom] = useState("UZS");
  const [to, setTo] = useState("TON");
  const [output, setOutput] = useState(0);
  const [rate, setRate] = useState(0);

  const handleChange = (e) => {
    const { style, value } = e.target;

    if (!+value && +value !== 0) {
      return;
    }

    if (value[0] === "0" && value[1] !== ".") {
      return setPrice(+value + "");
    }

    if (value.length === 0) {
      return setPrice(0);
    }
    style.width = value.length + "ch";
    setPrice(value);
  };

  const handleflip = () => {
    setFrom(to);
    setTo(from);
  };

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/convert?from=${from}&to=${to}&amount=${1}`)
      .then(({ data }) => {
        setRate(data);
      });
  }, [from, to]);

  useEffect(() => {
    setOutput(price * rate);
  }, [price, rate]);

  return (
    <div className={style.divBig}>
      <div className={style.div1}>
        <img className={style.person} src={person} alt="" />
        <div className={style.div1s}>
          <p>Вы покупаете у</p>
          <h4>Trust Bear</h4>
        </div>
      </div>
      <div className={style.div2}>
        <div className={style.div2s1}>
          <input value={price} type="text" onChange={handleChange} />
          <p>{from}</p>
        </div>
        <div className={style.div2s2} onClick={handleflip}>
          <IconArrowUpDown />
        </div>
      </div>
      <p className={style.pricetext1}>
        {price === 0 ? (
          <>
            Цена за 1 {from} ≈ {rate} {to}
          </>
        ) : (
          <>
            ≈ {output} {to}
          </>
        )}
      </p>
      <p className={style.buyAll}>Купить все</p>
      <div className={style.div4}>
        <div className={style.div4s}>
          <p className={style.div4stext}>Метод оплаты</p>
          {/* <select className={style.div4sP}>
            <option className={style.option}>Uzcard  </option>
            <Line />
            <option className={style.option}>Humo</option>
            <Line />
            <option className={style.option}>Kapitalbank</option>
            <Line />
            <option className={style.option}> Tenge bank</option>
            <div>
              <IconArrow1 />
            </div>
          </select> */}
          <CustomSelect
            size={"small"}
            options={[
              { label: "Uzcard", value: "Uzcard" },
              { label: "Humo", value: "Humo" },
              { label: "Kapitalbank", value: "Kapitalbank" },
              { label: "Tenge bank", value: "Tenge bank" },
            ]}
          />
        </div>
        <div className={style.div4s1}>
          <p className={style.div4stext1}>Лимиты</p>
          <p className={style.div4stext1}>4 500 000 ~ 4 519 665,16 UZS</p>
        </div>
        <Link to={"/params"} className={style.div4s2}>
          <p className={style.div4stext1}>Детали объявления</p>
          <div className={style.div4sP1}>
            <IconArrow2 />
          </div>
        </Link>
      </div>
      <Link
        to={"/proces"}
        className={`${style.linkbtn} ${!+price ? style.linkBtnDisabled : ""}`}
      >
        <p>Купить</p>
      </Link>
    </div>
  );
};

export default Buy;
