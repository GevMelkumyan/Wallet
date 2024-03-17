import React from "react";
import style from "./Settings.module.css";
import Usericon from "../../assets/icon/Usericon";
import { GoChevronRight } from "react-icons/go";
import Cardicon from "../../assets/icon/Cardicon";
import Switch from "../Switch/Switch";
import { Link } from "react-router-dom";
import Globicon from "../../assets/icon/Globicon";
import Checkicon from "../../assets/icon/Checkicon";
import Chaticon from "../../assets/icon/Chaticon";
import Bellicon from "../../assets/icon/Bellicon";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserCurrency,
  selectUserLanguage,
} from "../../redux/slices/userSlice";
import { languages } from "../../config";
import { CHANGE_ASSETS_SHOW, selectSettingsAssetsShow } from "../../redux/slices/settingsSlice";

const Settings = () => {
  const language = useSelector(selectUserLanguage);
  const currency = useSelector(selectUserCurrency);
  const isAssetsShow = useSelector(selectSettingsAssetsShow)
  const dispatch = useDispatch()

  return (
    <div className={style.setting}>
      <Link to={"/profile"} className={style.user}>
        <div className={style.div_usericon}>
          <Usericon className={style.svg} />
        </div>
        <p className={style.profile}>Мой профиль</p>
      </Link>

      <div className={style.div1}>
        <Link to={"/language"} className={style.lang}>
          <div className={style.glob_div}>
            <Globicon className={style.glob} />
          </div>
          <p className={style.yazik}>Язык кошелька</p>
          <p className={style.select_lang}>
            {languages.find((lang) => lang.value === language)?.label}{" "}
            <GoChevronRight color="rgba(162, 161, 167, 1)" />
          </p>
        </Link>

        <Link to={"/valute"} className={style.lang}>
          <div className={style.card_icon}>
            <Cardicon className={style.glob} />
          </div>
          <p className={style.yazik}>Основная Валюта</p>
          <p className={style.card_lang}>
            {currency} <GoChevronRight color="rgba(162, 161, 167, 1)" />
          </p>
        </Link>

        <div className={style.lang}>
          <div className={style.check_icon}>
            <Checkicon className={style.glob} />
          </div>
          <p className={style.yazikk}>Раскрыть активы</p>
          <Switch className={style.Switch} checked={isAssetsShow} handleChange={() => dispatch(CHANGE_ASSETS_SHOW())} />
        </div>
      </div>

      <div className={style.div2}>
        <div className={style.lang}>
          <div className={style.chat_icon}>
            <Chaticon className={style.glob} />
          </div>
          <p className={style.yazik}>Обратиться в поддержку</p>
          <GoChevronRight
            color="rgba(162, 161, 167, 1)"
            className={style.chat}
          />
        </div>

        <div className={style.lang}>
          <div className={style.bellicon}>
            <Bellicon className={style.glob} />
          </div>
          <p className={style.yazik}>Новости Diram Wallet</p>
          <GoChevronRight
            color="rgba(162, 161, 167, 1)"
            className={style.chat}
          />
        </div>
      </div>

      <div className={style.div3}>
        <div className={style.gren}>
          <p className={style.set_p}>Правовая информация</p>
        </div>

        <div className={style.gren}>
          <p className={style.set_p}>Пользовательское соглашение</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
