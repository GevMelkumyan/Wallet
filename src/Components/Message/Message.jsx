import React from "react";
import style from "./Message.module.css";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className={style.message}>
      <div className={style.messageDiv}>
        <div className={style.commentTitle}>
          <p className={style.newP1}> Добавьте комментарий (необязательно)</p>
          <p className={style.newP2}>3 / 4</p>
        </div>
        <div className={style.exampleDiv}>
          <input type="text" id="message" placeholder="Введите сообщение" />
          <div className={style.exampleText}>
            <p className={style.example}>Пример сообщения:</p>
            <p className={style.example1}>
              Владельцем платёжного счета и аккаунт на P2P маркете Diram Wallet
              должен быть один человек. Не указывайте тикеры монет (например,
              TON) в комментарии к переводу.
            </p>
          </div>
        </div>
      <Link to={"/checking"} className={style.nextBtn}>
        Далее
      </Link>
      </div>
    </div>
  );
};

export default Message;
