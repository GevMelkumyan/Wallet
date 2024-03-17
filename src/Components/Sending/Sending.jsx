import React, { useEffect, useMemo, useState } from "react";
import style from "./Sending.module.css";
import { Link, useSearchParams } from "react-router-dom";
import usd from "../../IMG/usdt.svg";
import usdt from "../../IMG/usdt (1).svg";
import eter from "../../IMG/ETH (2).svg";
import btcImg from "../../IMG/Layer x0020 1.svg";
import { shortAddr } from "../../utils/shortAddr";
import { validate } from "../../utils/validate";

const images = {
  ERC20_USDT: usdt,
  TRC20_USDT: usd,
  ETH: eter,
  BTC: btcImg,
};

const Sending = () => {
  const [searchParams] = useSearchParams();
  const [address, setAddress] = useState(searchParams.get("address"));
  const [isAddressValid, setIsAddressValid] = useState();

  const crypto = useMemo(() => searchParams.get("crypto"), [searchParams]);

  const img = useMemo(() => images[crypto], []);

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePast = async () => {
    const text = await window.navigator.clipboard.readText();
    setAddress(text);
  };

  useEffect(() => {
    const isValid = validate(address, crypto);
    setIsAddressValid(isValid);
  }, [address]);

  return (
    <div className={style.Sending}>
      <div className={style.sending}>
        <input
          className={style.input}
          value={address}
          placeholder="Введите адрес кошелька"
          onChange={handleChangeAddress}
          autoFocus
        />
        <button className={style.butt} onClick={handlePast}>
          Вставить
        </button>
      </div>

      {isAddressValid && (
        <div className={style.user_div}>
          <div className={style.icon_div}>
            <img className={style.usd_icon} src={img} />
          </div>
          <div className={style.div_text}>
            <h6 className={style.h6}>{shortAddr(address)}</h6>
            <p className={style.p}>адрес {crypto}</p>
          </div>
        </div>
      )}

      {isAddressValid && (
        <Link
          to={"/sending2"}
          state={{ crypto, address }}
          className={style.btn}
        >
          Далее
        </Link>
      )}
    </div>
  );
};

export default Sending;
