import React, { useEffect, useMemo, useState } from "react";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";
import CustomSelect from "../Select/Select";
import axios from "axios";
import { SERVER_URL } from "../../config";



const Menu = () => {
  const cryptos = useMemo(() => [{ label: "USDT trc20", value: "TRC20_USDT" }, { label: "USDT erc20", value: "ERC20_USDT" }, { label: "Ethereum", value: "ETH" }, { label: "Bitcoin", value: "BTC" }], [[]])
  const currencies = useMemo(() => [{ label: "RUB", value: "RUB" }, { label: "USD", value: "USD" }, { label: "EUR", value: "EUR" }, { label: "UZB", value: "UZB" }, { label: "KZT", value: "KZT" }, { label: "TJS", value: "TJS" }, { label: "KGS", value: "KGS" }], [])
  const priceTypes = useMemo(() => [{ label: "Плавающая", value: "fraction" }, { label: "Фиксированная", value: "fixed" }], [])
  const payTimes = useMemo(() => [{ label: "15 мин.", value: 1000 * 60 * 15 }, { label: "30 мин", value: 1000 * 60 * 30 }, { label: "45 мин", value: 1000 * 60 * 45 }, { label: "1 ч", value: 1000 * 60 * 60 }, { label: "2 ч", value: 1000 * 60 * 60 * 2 }, { label: "3 ч", value: 1000 * 60 * 60 * 3 }], [])

  const [options, setOptions] = useState({
    type: "sell",
    crypto: cryptos[0].value,
    currency: currencies[0].value,
    priceType: "fraction",
    price: 100,
    amount: 0,
    minAmount: 0,
    payTime: 0,
  })
  const [rate, setRate] = useState(1)
  const [price, setPrice] = useState(0)

  const handleChangeOptions = (e) => {
    const { name, value } = e.target
    setOptions((prev) => ({ ...prev, [name]: value }))
  }

  console.log(options);

  useEffect(() => {
    axios.get(`${SERVER_URL}/convert?from=${options.crypto}&to=${options.currency}&amount=1`).then(({ data }) => {
      setRate(data)
    })
  }, [options.currency, options.crypto])

  useEffect(() => {
    if (options.priceType === "fraction") {
      return setPrice((rate * options.price) / 100)
    }

    return setPrice(options.price)
  }, [options.price, options.priceType, rate])

  return (
    <div className={style.menu}>
      <div className={style.createNew}>
        <p className={style.newP1}>Создайте объявление</p>
        <p className={style.newP2}>1 / 4</p>
      </div>
      <div className={style.buttons}>
        <div className={style.btn}>
          <div className={style.btnDiv}>
            <p className={style.btnText}>Я хочу</p>
            <div className={style.btnBuySell}>
              <button className={`${style.btn1} ${options.type === "buy" ? style.active : ""}`} name="type" value={"buy"} onClick={handleChangeOptions}>Купить</button>
              <button className={`${style.btn1} ${options.type === "sell" ? style.active : ""}`} name="type" value={"sell"} onClick={handleChangeOptions}>Продать</button>
            </div>
          </div>
        </div>
        <div className={style.btn}>
          <div className={style.btnDiv}>
            <p className={style.btnText}>Продать криптовалюту</p>

            <CustomSelect options={cryptos} name={"crypto"} onChange={handleChangeOptions} />

          </div>
        </div>
        <div className={style.btn}>
          <div className={style.btnDiv}>
            <p className={style.btnText}>Национальная валюта</p>
            <CustomSelect options={currencies} name={"currency"} onChange={handleChangeOptions} />
          </div>
        </div>
        <div className={style.btn}>
          <div className={style.btnDiv}>
            <p className={style.btnText}>Тип цены</p>

            <CustomSelect options={priceTypes} name={"priceType"} onChange={handleChangeOptions} />

          </div>
        </div>
      </div>
      <div className={style.precentDiv}>
        <p className={style.precent}> Процент от рыночной цены</p>
      </div>
      <div className={style.precentPrice}>
        <div className={style.precentBtn}>
          <div className={style.precentBtnDiv}>
            <input min={10} className={style.btnText} type="number" name="price" onChange={handleChangeOptions} value={options.price} />
            <p className={style.btnText}>{options.priceType === "fraction" ? "%" : options.currency}</p>
          </div>
        </div>
        <div className={style.precentResult}>
          <p className={style.btn1}>
            Рыночная цена: <span className={style.price}>{rate} за 1 {options.crypto}</span>
          </p>
          <p className={style.price}>Ваша цена: {price} {options.currency} за 1 {options.crypto}</p>
        </div>
      </div>

      <div className={style.precentDiv}>
        <p className={style.precent}>Сумма</p>
      </div>
      <div className={style.precentBalanse}>
        <div className={style.precentBtn}>
          <div className={style.precentBtnDiv}>
            <input className={style.btnText} type="number" />
            <p className={style.btnText}>USDT</p>
          </div>
        </div>
        <div className={style.balanse}>
          <p className={style.btn1}>
            Ваш баланс:
            <span className={style.price}>39,334768 USDT</span>
          </p>
          <p className={style.max}>Макс.</p>
        </div>
      </div>

      <div className={style.precentDiv}>
        <p className={style.precent}>Мин. сумма сделки</p>
      </div>
      <div className={style.sum}>
        <div className={style.precentBtn}>
          <div className={style.precentBtnDiv}>
            <input className={style.btnText} type="number" />
            <p className={style.btnText}>RUB</p>
          </div>
        </div>
        <div className={style.btnTime}>
          <div className={style.btnDiv}>
            <p className={style.btnText}>Время на оплату</p>
            <CustomSelect options={payTimes} name={"payTime"} onChange={handleChangeOptions} />
          </div>
        </div>
      </div>
      <Link to="/paymentMethod" className={style.next}>
        <button className={style.nextBtn}>Далее</button>
      </Link>
    </div>
  );
};

export default Menu;
