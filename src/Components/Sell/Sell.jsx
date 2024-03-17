import React from "react";
import style from "./Sell.module.scss";
import IconBuy from "../../assets/icons/IconBuy";
import IconSell from "../../assets/icons/IconSell";
import IconUserData from "../../assets/icons/IconUserData";
import IconArrowRight from "../../assets/icons/IconArrowRight";
import IconCreate from "../../assets/icons/IconCreate";
import IconNotification from "../../assets/icons/IconNotification";
import IconFaq from "../../assets/icons/IconFaq";
import { Link } from "react-router-dom";
import CustomSelect from "../Select/Select";


const Sell = () => {
  return (
    <div className={style.sell}>
      <p className="title">P2P Маркет</p>
      <p className="hint text">
        Покупайте и продавайте криптовалюту без посредников
      </p>
      <div className={style.btns}>
        <Link to={"/buy"}>
          {" "}
          <button>
            <IconBuy />
            Купить
          </button>
        </Link>
        <Link to={"/sale1"}>
          <button>
            <IconSell />
            Продать
          </button>
        </Link>
      </div>{" "}
      <div className={style.blockContainer}>
        <div className={style.bigBlock}>
          <Link to={"/myAds"} className="actionBlock">
            <div className="actionIconBlock">
              <div className="iconBack">
                <IconUserData />
              </div>
              <div className="actionText">
                <p>Мои объявления</p>
                <p className="hint">Настройки объявлений и платежей</p>
              </div>
            </div>

            <IconArrowRight />
          </Link>
          <Link to={"/menu"} className="actionBlock">
            <div className="actionIconBlock">
              <div className="iconBack">
                <IconCreate />
              </div>
              <p className="createAdText">Создать объявление</p>
            </div>

            <IconArrowRight />
          </Link>
        </div>
        <div className={style.bigBlock}>
          <Link to={"/notifications"} className="actionBlock">
            <div className="actionIconBlock">
              <div className="iconBackNotification">
                <IconNotification />
              </div>
              <p className="createAdTextWhite">Уведомления</p>
            </div>
            <IconArrowRight />
          </Link>
          <div className="actionBlock">
            <div className="actionIconBlock">
              <div className="iconBackFAQ">
                <IconFaq />
              </div>
              <p className="createAdTextWhite">FAQ </p>
            </div>
            <IconArrowRight />
          </div>
        </div>
      </div>
      <div className={style.myDeals}>
        <p className="hint">Мои сделки</p>
        <CustomSelect options={[{ label: "Активные", value: "Активные" }, { label: "Завершенные", value: "Завершенные" }]} />
      </div>
      <div className={style.showDeals}>
        <p className="hint">Здесь появятся ваши сделки</p>
      </div>
    </div>
  );
};

export default Sell;
