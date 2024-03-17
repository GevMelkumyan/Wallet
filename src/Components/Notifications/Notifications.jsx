import React from "react";
import style from "./Notifications.module.scss";
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <div className={style.notifications}>
      <p className={style.noNotif}>У вас пока нет уведомлений</p>
      <Link to={"/"} className={`createAdText ${style.openMenu}`}>
        Открыть меню
      </Link>
    </div>
  );
};

export default Notifications;
