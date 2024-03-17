import React, { useEffect, useState } from "react";
import style from "./Valutes.module.css";
import usd from "../../IMG/usdt.svg";
import usdt from "../../IMG/usdt (1).svg";
import eter from "../../IMG/ETH (2).svg";
import btc from "../../IMG/Layer x0020 1.svg";
import { IoMdCheckmark } from "react-icons/io";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useAxios } from "../../utils/hooks/useAxios";
import { SERVER_URL, telegramUser } from "../../config";
import CurrencyStyle from "../../utils/components/CurrencyStyle";

export const valutesData = [
  {
    imgSrc: usd,
    name: "USDT",
    value: "TRC20_USDT",
    type: "trc20",
    currency: "USDT",
  },
  {
    imgSrc: usdt,
    name: "USDT",
    value: "ERC20_USDT",
    type: "erc20",
    currency: "USDT",
  },
  {
    imgSrc: eter,
    name: "Ethereum",
    value: "ETH",
    type: "",
    currency: "ETH",
  },
  {
    imgSrc: btc,
    name: "Bitcoin",
    value: "BTC",
    type: "",
    currency: "BTC",
  },
];

const Valute = ({
  value,
  name,
  type,
  imgSrc,
  checkedValue,
  currency,
  handleValuteClick,
}) => {
  const { data } = useAxios(
    `${SERVER_URL}/users/${telegramUser?.id || 1}/${value}`
  );

  return (
    <div
      className={`${style.val1} ${checkedValue === value ? style.checked : ""}`}
      onClick={() => handleValuteClick(value)}
    >
      <div className={style.val_img}>
        <img src={imgSrc} alt={name} />
      </div>
      <div className={style.val_name}>
        <h5 className={style.h5}>
          {name} {type && <p className={style.spanp}>{type}</p>}
        </h5>
        <p className={style.p_val}>
          <CurrencyStyle
            amount={data?.amount}
            currency={currency}
            toSymbol={false}
          />
        </p>
      </div>
      {checkedValue === value && (
        <div className={style.div_money}>
          <IoMdCheckmark size={24} color="rgba(72, 177, 74, 1)" />
        </div>
      )}
    </div>
  );
};

const Valutes = () => {
  const [checkedValue, setCheckedValue] = useState(valutesData[0].value);

  const { state } = useLocation();

  const handleValuteClick = (value) => {
    setCheckedValue(value);
  };

  return (
    <div className={style.Valutes}>
      <div className={style.valutes}>
        <div className={style.name_div}>Выберите активы для отправки</div>
      </div>
      <div className={style.valute}>
        {valutesData.map((valute, index) => (
          <Valute
            key={index}
            {...valute}
            checkedValue={checkedValue}
            handleValuteClick={handleValuteClick}
          />
        ))}
      </div>
      <Link
        to={`${state.link}?crypto=${checkedValue}`}
        replace={true}
        className={style.btn}
      >
        Далее
      </Link>
    </div>
  );
};

export default Valutes;
