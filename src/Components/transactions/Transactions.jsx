import React, { useMemo } from "react";
import style from "./Transactions.module.css"
import { useAxios } from "../../utils/hooks/useAxios";
import { selectUser } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../../config";
import img from "../../IMG/Ellipse 1.svg";
import { RiUserLine } from "react-icons/ri";
import img1 from "../../IMG/Rectangle 693.svg";
import img2 from "../../IMG/Rectangle 692.png";
import icon from "../../IMG/Group 3.svg";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsCreditCard } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import usd from "../../IMG/usdt.svg";
import usdt from "../../IMG/usdt (1).svg";
import eter from "../../IMG/ETH (2).svg";
import btcImg from "../../IMG/Layer x0020 1.svg";
import { Link, useParams } from "react-router-dom";
import CurrencyStyle from "../../utils/components/CurrencyStyle";
import { toLocaleTime } from "../../utils/toLocaleTime";
import { convertToCrypto } from "../../utils/convertToCrypto";
import { transactionTypeText } from "../../utils/transaction";
import ERC20_USDT from "../../IMG/USDT ERC.png"
import TRC20_USDT from "../../IMG/USDT TRC.png"
import BTC from "../../IMG/BITCOIN.png"
import ETH from "../../IMG/ETH.png"
import { NotFoundTransaction } from "./notFound/NotFoundTransaction";
import { selectSettingsAssetsShow } from "../../redux/slices/settingsSlice";
import { useTranslation } from "react-i18next";


const images = {
  ERC20_USDT,
  TRC20_USDT,
  BTC,
  ETH,
}

export const transactionImages = {
  ERC20_USDT: usdt,
  TRC20_USDT: usd,
  ETH: eter,
  BTC: btcImg,
};


export const Transactions = () => {
  const user = useSelector(selectUser);
  const isAssetsShow = useSelector(selectSettingsAssetsShow);
  const { t } = useTranslation()

  const { data: totalBalance, loading: isTotalBalanceLoading } = useAxios(
    `${SERVER_URL}/users/${user?.telegramId}/totalBalance`,
    {}
  );

  const { token } = useParams()

  const tokenImg = useMemo(() => images[token] || icon)


  const { data: transactions } = useAxios(`${SERVER_URL}/users/${user?.telegramId}/${token ? token + "/" : ""}transactions?`)


  return (
    <div className={style.page1}>
      <div className={style.div1}>
        <div className={style.div1_1}>
          <img src={img} className={style.img} alt="" />
          <div className={style.name_div}>
            <h3 className={style.h3}>{user?.name}</h3>
            {user?.username && <p className={style.p}>@{user?.username}</p>}
          </div>
          <Link to={"/profile"} className={style.user}>
            <RiUserLine color="white" size={24} />
          </Link>
        </div>

        <div className={style.div1_2}>
          <img src={img1} className={style.imgb} alt="" />
          <div className={style.back_div}>
            <img src={img2} className={style.imgg} alt="" />
          </div>
          <div className={style.div_card}>
            <div className={style.card_1}>
              <div className={style.card_num}>
                <p className={style.balance_p}>Ваш баланс</p>
                <div className={style.balance_div}>
                  <h4 className={style.h4}>
                    {isAssetsShow ?
                      isTotalBalanceLoading ?
                        "loading..." :
                        <CurrencyStyle
                          amount={totalBalance?.totalAmount}
                          currency={totalBalance?.currency}
                        /> : "****"
                    }
                  </h4>
                </div>
              </div>
              <div className={style.card_2}>
                <img src={tokenImg} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className={style.div_butt}>
          <div className={style.div_b1}>
            <Link to={"/payment"}>
              <button className={style.btn1}>
                <FaLongArrowAltUp color="rgba(72, 177, 74, 1)" size={30} />
              </button>
            </Link>
            <p className={style.but_p1}>Отправить</p>
          </div>
          <div className={style.div_b1}>
            <Link to={"/payVal"} state={{ link: "/qr" }} className={style.btn1}>
              <IoMdAddCircleOutline color="rgba(72, 177, 74, 1)" size={34} />
            </Link>
            <p className={style.but_p1}>Принять</p>
          </div>
          <div className={style.div_b1}>
            <Link to={"/sell"} className={style.btn1}>
              <BsCreditCard color="rgba(72, 177, 74, 1)" size={32} />
            </Link>
            <p className={style.but_p1}>Продать</p>
          </div>
          <div className={style.div_b1}>
            <Link to={"/exchange"} className={style.btn1}>
              <FaArrowRightArrowLeft color="rgba(72, 177, 74, 1)" size={30} />
            </Link>
            <p className={style.but_p1}>Обменять</p>
          </div>
        </div>
      </div>


      <div className={style.users_div}>
        <div className={style.user_name}>
          <p className={style.user_p}>История транзакций</p>
        </div>
        <div className={style.user_pages}>
          {transactions?.length ? transactions?.map(({ created_at, effective_amount, token, status, type }) => {
            return (
              <div className={style.val1}>
                <div className={style.user_img}>
                  <img src={transactionImages[token]} alt="" />
                </div>
                <div className={style.user__name}>
                  <h5 className={style.h5}>{t(type)}</h5>
                  <p className={style.p_val}>{toLocaleTime(user?.language, created_at)}</p>
                </div>
                <div className={`${style.div_money_user} ${style[type]} ${style[status]}`}>
                  <p className={style.p_money_user}>{convertToCrypto(token, effective_amount)} {token}</p>
                  <p className={style.p__money}>{transactionTypeText(type, status)}</p>
                </div>
              </div>
            )
          }) : <NotFoundTransaction />}

        </div>
      </div>
    </div>
  );
};
