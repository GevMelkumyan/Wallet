import React, { useCallback, useEffect, useState } from "react";
import style from "./Language.module.css";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserLanguage,
  setUserLanguage,
} from "../../redux/slices/userSlice";
import { languages } from "../../config";

const Language = () => {
  const language = useSelector(selectUserLanguage);

  const [checkedLanguage, setCheckedLanguage] = useState(language);
  const dispatch = useDispatch();

  const handleLanguageClick = useCallback((language) => {
    setCheckedLanguage(language);
  }, []);

  const handleSetLanguage = useCallback(() => {
    dispatch(setUserLanguage({ languageCode: checkedLanguage }));
  }, [checkedLanguage]);

  useEffect(() => {
    setCheckedLanguage(language);
  }, [language]);

  return (
    <div className={style.language}>
      <div className={style.center}>
        <div className={style.name_div}>
          <p className={style.name_p}>Язык кошелька</p>
        </div>
        {languages.map(({ label, enLabel, value }, index) => (
          <div
            key={index}
            className={`${style.lang_rus} ${checkedLanguage === value ? style.checked : ""
              }`}
            onClick={() => handleLanguageClick(value)}
          >
            <div className={style.div_r}>
              <h4 className={style.h4_russ}>{enLabel}</h4>
              <p className={style.russ_p}>{label}</p>
            </div>
            {checkedLanguage === value && (
              <FiCheck
                color="rgba(72, 177, 74, 1)"
                size={24}
                className={style.icon}
              />
            )}
          </div>
        ))}
      </div>
      <Link to={"/settings"} replace={true} className={style.btn} onClick={handleSetLanguage}>
        Готово
      </Link>
    </div>
  );
};

export default Language;
