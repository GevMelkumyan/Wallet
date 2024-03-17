import React from "react";
import style from "./NotFoundTransaction.module.css"

export const NotFoundTransaction = () => {
  return (
    <div className={style.user_pages}>
      <h6 className={style.h6}>У вас пока нет транзакций.</h6>
      <p className={style.users_p}>
        Ваши транзакции будут отображаться здесь
      </p>
    </div>
  );
};
