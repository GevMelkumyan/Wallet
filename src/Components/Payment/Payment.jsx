import React from "react";
import style from "./Payment.module.css";
import user from "../../IMG/user_green.svg";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import bumaj from "../../IMG/User_Circle.svg";

const Payment = () => {
  return (
    <div className={style.Payment}>
      <div className={style.payment}>
        <h4 className={style.h4}>Как отправить криптовалюту</h4>
        <div className={style.why_payment}>
          <Link to={"#"} className={style.akk}>
            <div className={style.actionIconBlock}>
              <div className={style.actionIconBl}>
                <img src={user} />
              </div>
              <div className={style.div_text}>
                <h3 className={style.h3}>Ваш контакт в Telegram</h3>
                <p className={style.p_text}>Переводы в Telegram без комиссии</p>
              </div>
            </div>

            <GoChevronRight
              color="rgba(61, 61, 63, 1)"
              size={24}
              className={style.right}
            />
          </Link>

          <Link
            to={"/payVal"}
            state={{ link: "/sending" }}
            className={style.akk}
          >
            <div className={style.actionIconBlock}>
              <div className={style.actionIconB}>
                <img src={bumaj} />
              </div>

              <div className={style.div_text}>
                <h3 className={style.h3}>Внешний кошелек</h3>
                <p className={style.p_text}>Отправить на криптокошелек</p>
              </div>
            </div>

            <GoChevronRight
              color="rgba(61, 61, 63, 1)"
              size={24}
              className={style.right}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
