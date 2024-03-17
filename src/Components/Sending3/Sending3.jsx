import React, { useEffect, useState } from "react";
import style from "./Sending3.module.css";
import ArrowCircle from "../../assets/icon/ArrowCircle";
import ArrowUpDown from "../../assets/icon/ArrowUpDown";
import Line from "../../assets/icon/Line";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { shortAddr } from "../../utils/shortAddr";
import { useAxios } from "../../utils/hooks/useAxios";
import { SERVER_URL, telegramUser } from "../../config";
import { selectUserCurrency } from "../../redux/slices/userSlice";
import CurrencyStyle from "../../utils/components/CurrencyStyle";
import { useSelector } from "react-redux";
import axios from "axios";

const Sending3 = () => {
  const { state } = useLocation();
  const navigate = useNavigate()

  const currency = useSelector(selectUserCurrency);
  const [output, setOutput] = useState(state?.amount)
  const [from, setFrom] = useState(currency)
  const [to, setTo] = useState(state?.currency)

  const { data: feeData } = useAxios(`${SERVER_URL}/users/fee`, {
    method: "POST",
    data: { amount: state?.amount, crypto: state?.crypto },
  });

  const { data: fee } = useAxios(
    `${SERVER_URL}/convert?from=${state?.crypto}&to=${currency}&amount=${feeData?.resultFee}`
  );

  const { data: cashOutData } = useAxios(
    `${SERVER_URL}/convert?from=${state?.crypto}&to=${currency}&amount=${+state?.amount}`
  );

  const handleRotate = () => {
    setFrom(to)
    setTo(from)
  }

  useEffect(() => {
    axios.get(`${SERVER_URL}/convert?from=${from}&to=${to}&amount=${output}`)
      .then(({ data }) => setOutput(data))
  }, [from, to])

  useEffect(() => {
    setFrom(state?.crypto)
    setTo(currency)
  }, [currency])

  return (
    <div className={style.Sending3}>
      <div className={style.send_name}>
        <div className={style.icon}>
          <ArrowCircle />
        </div>
        <p className={style.name_p}>
          Отправить {shortAddr(state?.address, 2, 4)}
        </p>
        {/* <ArrowTopBottom /> */}
      </div>

      <div className={style.div_cash}>
        <div className={style.div_usdt}>
          <h3 className={style.h3}>
            <CurrencyStyle amount={output} currency={to} toSymbol={false} />
          </h3>
        </div>
        <div className={style.arrow} onClick={handleRotate}>
          <ArrowUpDown />
        </div>
      </div>

      <div className={style.news}>
        <div className={style.div1}>
          <p className={style.p_1}>Адрес получателя</p>
          <p className={style.p_http}>{state?.address}</p>
        </div>
        <Line />
        <div className={style.div2}>
          <p className={style.p_2}>Комиссия</p>
          <p className={style.p_num}>
            ≈ <CurrencyStyle amount={fee} currency={currency} toSymbol={false} />
          </p>
        </div>
        <Line />
        <div className={style.div2}>
          <p className={style.p_2}>Сумма списания</p>
          <p className={style.p_num}>
            ≈ <CurrencyStyle amount={cashOutData} currency={currency} toSymbol={false} />
          </p>
        </div>
        <Line />
        <div className={style.div3}>
          <p className={style.p_2}>Сеть</p>
          <p className={style.p_num}>{state?.crypto}</p>
        </div>
      </div>
      <p className={style.p_p}>
        Ваши средства могут быть утрачены, если вы отправите их в другую сеть
      </p>

      <button className={style.btn} onClick={async () => {
        const { data } = await axios.post(`${SERVER_URL}/users/${telegramUser?.id || 1}/${state?.crypto}/transactions`, {
          effectiveAmount: +state?.amount,
          receiverAddress: state?.address
        })
        navigate("/sending4", { state: { ...state, date: new Date() } })
      }}>
        Подтвердить и отправить
      </button>
    </div>
  );
};

export default Sending3;
