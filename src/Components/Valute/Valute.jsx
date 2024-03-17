import React, { useEffect, useState } from "react";
import style from "./Valute.module.css";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { currencies } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserCurrency,
  setUserCurrency,
} from "../../redux/slices/userSlice";

const Valute = () => {
  const { t, i18n } = useTranslation();
  const currency = useSelector(selectUserCurrency);
  const [selectedDiv, setSelectedDiv] = useState(currency);
  const dispatch = useDispatch();

  const handleDivClick = (divName) => {
    setSelectedDiv(divName === selectedDiv ? selectedDiv : divName);
  };

  const handleCurrencyChange = () => {
    dispatch(setUserCurrency({ currency: selectedDiv }));
  };

  useEffect(() => {
    setSelectedDiv(currency);
  }, [currency]);

  return (
    <div className={style.Valute}>
      <div className={style.valute}>
        <div className={style.name}>
          <p className={style.name_p}>Доступные валюты</p>
        </div>
        {currencies.map((currency, index) => {
          return (
            <div
              className={`${style.div_usd} ${
                selectedDiv === currency.value ? style.checked : ""
              }`}
              onClick={() => handleDivClick(currency.value)}
            >
              <div className={style.div_img}>
                <img src={currency.img} alt={currency.name} />
              </div>
              <div className={style.usd_name}>
                <h4 className={style.usd_h4}>{t(currency.name)}</h4>
                <p className={style.usd_p}>{currency.value}</p>
              </div>
              {selectedDiv === currency.value && (
                <FiCheck color="rgba(72, 177, 74, 1)" size={24} />
              )}
            </div>
          );
        })}
      </div>
      <button onClick={handleCurrencyChange} className={style.btn}>
        Готово
      </button>
    </div>
  );
};

export default Valute;
