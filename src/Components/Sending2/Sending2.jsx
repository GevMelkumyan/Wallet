import React, { useEffect, useMemo, useState } from "react";
import style from "./Sending2.module.css";
import ArrowCircle from "../../assets/icon/ArrowCircle";
import ArrowTopBottom from "../../assets/icon/ArrowTopBottom";
import ArrowUpDown from "../../assets/icon/ArrowUpDown";
import Usdt from "../../assets/icon/Usdt";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { SERVER_URL, telegramUser } from "../../config";
import { useSelector } from "react-redux";
import { selectUserCurrency } from "../../redux/slices/userSlice";
import { shortAddr } from "../../utils/shortAddr";
import { useAxios } from "../../utils/hooks/useAxios";
import { valutesData } from "../Valutes/Valutes";
import { shortNum } from "../../utils/shortNum";

const Sending2 = () => {
  const currency = useSelector(selectUserCurrency);
  const { state } = useLocation();

  const [price, setPrice] = useState(0);
  const [from, setFrom] = useState(state?.crypto);
  const [to, setTo] = useState(currency);
  const [output, setOutput] = useState(0);
  const [rate, setRate] = useState(0);

  const amount = useMemo(() => from == state?.crypto ? price : output, [price, output])
  console.log(amount);

  const { data } = useAxios(
    `${SERVER_URL}/users/${telegramUser?.id}/${state?.crypto}`
  );

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

  useEffect(() => {
    setTo(currency);
  }, [currency]);

  return (
    <div className={style.Sending2}>
      <div className={style.send_name}>
        <div className={style.icon}>
          <ArrowCircle />
        </div>
        <p className={style.name_p}>
          Отправить {shortAddr(state.address, 2, 4)}
        </p>
        <ArrowTopBottom />
      </div>

      <div className={style.div_cash}>
        <div className={style.div_usdt}>
          <h3 className={style.h3}>
            <input value={price} type="text" onChange={handleChange} />{" "}
            <span>{from}</span>
          </h3>
          <p className={style.p}>
            {price === 0 ? (
              <>
                Цена за 1 {from} ≈ {shortNum(rate)} {to}
              </>
            ) : (
              <>
                ≈ {shortNum(output)} {to}
              </>
            )}
          </p>
        </div>
        <div className={style.arrow} onClick={handleflip}>
          <ArrowUpDown />
        </div>
      </div>

      <div className={style.usdt_div}>
        <div className={style.img}>
          <img
            src={
              valutesData.find((valute) => valute.value === state?.crypto)
                ?.imgSrc
            }
            alt=""
          />
        </div>
        <div className={style.name_div}>
          <p className={style.p_1}>Выбранный баланс</p>
          <p className={style.p_2}>
            {data?.amount} {data?.token}
          </p>
        </div>
      </div>

      <Link
        className={style.btn}
        state={{ ...state, amount }}
        disabled={+amount > +data?.amount || !+amount}
        to={"/sending3"}
      >
        Отправить {state?.crypto}
      </Link>
    </div>
  );
};

export default Sending2;
