import React, { useEffect, useState } from "react";
import style from "./Qr.module.css";
import qr from "../../IMG/qr.png";
import Edit from "../../assets/icon/Edit";
import Interface from "../../assets/icon/Interface";
import { cryptoAddress } from "../../requests/user/crypoAddress";
import { telegramUser } from "../../config";
import { Link, useSearchParams } from "react-router-dom";
import Valutes from "../Valutes/Valutes";

const Qr = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState({});

  const handleCopy = async () => {
    await navigator.clipboard.writeText(data?.address);
  };

  useEffect(() => {
    cryptoAddress(searchParams.get("crypto")).then((data) => setData(data));
  }, [searchParams]);

  return (
    <div className={style.Qr}>
      <div className={style.div_qr}>
        <div
          className={style.qr_img}
          dangerouslySetInnerHTML={{ __html: data?.qr }}
        ></div>

        <h5 className={style.h5}>{data?.address}</h5>
        <p className={style.p_ussd}>Ваш адрес {searchParams.get("crypto")}</p>
      </div>

      <p className={style.text}>
        Отправляйте только <span>{searchParams.get("crypto")}</span> на этот
        адрес. Другие активы могут не дойти и будут безвозвратно утрачены.
      </p>
      <div className={style.div_butt}>
        <button className={style.btn1} onClick={handleCopy}>
          <Edit /> Копировать
        </button>
        <a
          href={`https://telegram.me/share/url?url=${`${window.location.protocol + "//" + window.location.host
            }/sending/?crypto=${searchParams.get("crypto")}%26address=${data?.address}`}&text=${data?.address}`}
          className={style.btn2}
        >
          <Interface />
          Поделиться
        </a>
      </div>
    </div>
  );
};

export default Qr;
