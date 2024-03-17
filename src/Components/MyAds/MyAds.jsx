import React, { useState } from "react";
import style from "./MyAds.module.scss";
import IconPaySettings from "../../assets/icons/IconPaySettings";
import IconArrowRight from "../../assets/icons/IconArrowRight";
import IconCreate from "../../assets/icons/IconCreate";
import IconArrowLeftRight from "../../assets/icons/IconArrowLeftRight";
import IOSStyledSwitch from "../../assets/icons/Switch/IOSStyledSwitch ";

import { Link } from "react-router-dom";

const MyAds = () => {
  const [activeButton, setActiveButton] = useState(true);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div className={style.myAds}>
      <p className="title">Михаил Т.</p>
      <p className="text">
        Это имя будет вашим ID для всех операций на P2P Маркете
      </p>
      <div className={style.deals}>
        <div className={style.dealsInfo}>
          <p>1</p>
          <p className={style.dealsInfoText}>Количество сделок</p>
        </div>
        <div className={style.dealsInfo}>
          <p>100%</p>
          <p className={style.dealsInfoText}>Завершённые сделки</p>
        </div>
      </div>
      <div className={style.blockContainer}>
        <Link to={"/salesettings"} className="actionBlock">
          <div className="actionIconBlock">
            <div className="iconBack">
              <IconPaySettings />
            </div>

            <p>Настройки оплаты</p>
          </div>

          <IconArrowRight />
        </Link>
        <div className="actionBlock">
          <div className="actionIconBlock">
            <div className={style.iconArrowLeftRight}>
              <IconArrowLeftRight />
            </div>

            <p>Торги</p>
          </div>

          <IOSStyledSwitch />
        </div>
      </div>
      <div className={style.blockContainer}>
        <p className={style.textMyAds}>Ваши объявления</p>
        <div className={style.btns}>
          <button
            className={
              activeButton ? style.active_button : style.inactive_button
            }
            onClick={() => handleButtonClick(true)}
          >
            Покупка
          </button>
          <button
            className={
              !activeButton ? style.active_button : style.inactive_button
            }
            onClick={() => handleButtonClick(false)}
          >
            Продажа
          </button>
        </div>
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
      <div className={style.hereIsAds}>
        <p className="text">Здесь появятся ваши объявления</p>
      </div>
    </div>
  );
};

export default MyAds;
