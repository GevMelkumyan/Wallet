import React, { useMemo } from "react";
import style from "./User.module.css";
import usimg from "../../IMG/Ellipse 13.svg";
import star from "../../IMG/Star.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/userSlice";
import { tg } from "../../config";

const User = () => {
  const user = useSelector(selectUser)

  return (
    <div className={style.User}>
      <div className={style.user}>
        <div className={style.user_name}>
          <img src={user?.img || usimg} className="rounded" />
          <h1 className={style.h1}>{user?.name}</h1>
          <h4 className={style.h4}>{user?.tel}</h4>
          <p className={style.p}>
            Это имя будет вашим ID для всех операций в Diram Wallet
          </p>
        </div>
        <div className={style.verifik}>
          <div className={style.actionIconB}>
            <img src={star} className={style.star} />
          </div>

          <div className={style.text}>
            <p className={style.p_text}>Статус верификации</p>
            <h5 className={style.h5}>{user?.status}</h5>
          </div>
        </div>

        <div className={style.textt}>
          <p className={style.p1}>
            Базовый статус верификации -подтверждает вашу личность и
            обеспечивает основную защиту для вашего аккаунта.
          </p>
          <p className={style.p3}>
            Торговец - открывает перед вами мир возможностей. Статус торговца
            подтверждает вашу профессиональность и надежность операций.
          </p>
          <p className={style.p2}>
            Мерчант - статус мерчанта открывает доступ к специальным
            возможностям и привилегиям криптовалютной торговли.
          </p>
        </div>
        <button className={style.btn}>Верификация</button>
      </div>
    </div>
  );
};

export default User;
