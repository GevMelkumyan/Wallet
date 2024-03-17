import React, { useEffect, useMemo, useState } from "react";
import style from "./HomePage.module.css";
import img from "../../IMG/Ellipse 1.svg";
import { RiUserLine } from "react-icons/ri";
import img1 from "../../IMG/Rectangle 693.svg";
import img2 from "../../IMG/Rectangle 692.png";
import icon from "../../IMG/Group 3.svg";
import btcImg from "../../IMG/Layer x0020 1.svg";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsCreditCard } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import usd from "../../IMG/usdt.svg";
import usdt from "../../IMG/usdt (1).svg";
import eter from "../../IMG/ETH (2).svg";
import { MdChevronRight } from "react-icons/md";
import set from "../../IMG/Settings.svg";
import { Link, useSearchParams } from "react-router-dom";
import ethimg from "../../IMG/ETH.svg";
import { SERVER_URL } from "../../config";
import { useAxios } from "../../utils/hooks/useAxios";
import CurrencyStyle from "../../utils/components/CurrencyStyle";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/userSlice";
import { socket } from "../../socket";
import { toLocaleTime } from "../../utils/toLocaleTime";
import { convertToCrypto } from "../../utils/convertToCrypto";
import { transactionTypeText } from "../../utils/transaction";
import { transactionImages } from "../transactions/Transactions";
import { NotFoundTransaction } from "../transactions/notFound/NotFoundTransaction";
import { selectSettingsAssetsShow } from "../../redux/slices/settingsSlice";
import { useTranslation } from "react-i18next";

const TRANSACTION_LIMIT = 3

const HomePage = () => {
  const user = useSelector(selectUser);
  const isAssetsShow = useSelector(selectSettingsAssetsShow);
  const { t } = useTranslation()
  const [balanceChanged, setBalanceChanged] = useState();

  const { data: totalBalance, loading: isTotalBalanceLoading } = useAxios(
    `${SERVER_URL}/users/${user?.telegramId}/totalBalance`,
    {},
    [balanceChanged]
  );

  const { data: erc20, loading: isErc20Loading } = useAxios(
    `${SERVER_URL}/users/${user?.telegramId}/ERC20_USDT`,
    {},
    [balanceChanged]
  );

  const { data: trc20, loading: isTrc20Loading } = useAxios(
    `${SERVER_URL}/users/${user?.telegramId}/TRC20_USDT`,
    {},
    [balanceChanged]
  );

  const { data: btc, loading: isBtcLoading } = useAxios(
    `${SERVER_URL}/users/${user?.telegramId}/BTC`,
    {},
    [balanceChanged]
  );

  const { data: eth, loading: isEthLoading } = useAxios(
    `${SERVER_URL}/users/${user?.telegramId}/ETH`,
    {},
    [balanceChanged]
  );

  const { data: transactions, loading: isTransactionsLoading } = useAxios(`${SERVER_URL}/users/${user?.telegramId}/transactions?count=${TRANSACTION_LIMIT}`, [balanceChanged])

  useEffect(() => {
    socket.on("notifications", (ctx) => {
      console.log(ctx);
      setBalanceChanged(ctx);
    });
  }, []);

  return (
    <div className={style.page1}>
      <div className={style.div1}>
        <div className={style.div1_1}>
          <img src={user?.img ? user?.img : img} className={style.img} alt="" />
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
                <img src={icon} alt="" />
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

      {/* ----------------------------------------- */}

      <div className={style.valute}>
        <Link to={"/transactions/TRC20_USDT"} className={style.val1}>
          <div className={style.val_img}>
            <img src={usd} alt="" />
          </div>
          <div className={style.val_name}>
            <h5 className={style.h5}>
              USDT <p className={style.spanp}>trc20</p>
            </h5>
            <p className={style.p_val}>
              {isAssetsShow ?
                isTrc20Loading ? "loading..." :
                  <CurrencyStyle
                    amount={trc20?.amount}
                    currency={"USDT"}
                    toSymbol={false}
                  /> : "****"
              }

            </p>
          </div>
          <div className={style.div_money}>
            <p className={style.p_money}>
              {isAssetsShow ?
                isTrc20Loading ? "Loading..." :
                  <CurrencyStyle
                    amount={trc20?.convertedAmount}
                    currency={trc20?.currency}
                  /> : "****"
              }
            </p>
          </div>
        </Link>

        <Link to={"/transactions/ERC20_USDT"} className={style.val1}>
          <div className={style.val_img}>
            <img src={usdt} alt="" />
            <div className={style.eth_div}>
              <img src={ethimg} alt="" />
            </div>
          </div>
          <div className={style.val_name}>
            <h5 className={style.h5}>
              USDT <p className={style.spanp}>erc20</p>
            </h5>
            <p className={style.p_val}>
              {isAssetsShow ?
                isErc20Loading ? "Loading..." :
                  <CurrencyStyle
                    amount={erc20?.amount}
                    currency={"USDT"}
                    toSymbol={false}
                  /> : "****"
              }
            </p>
          </div>
          <div className={style.div_money}>
            <p className={style.p_money}>
              {isAssetsShow ?
                isErc20Loading ? "Loading..." :
                  <CurrencyStyle
                    amount={erc20?.convertedAmount}
                    currency={erc20?.currency}
                  /> : "****"
              }
            </p>
          </div>
        </Link>

        <Link to={"/transactions/ETH"} className={style.val1}>
          <div className={style.val_img}>
            <img src={eter} alt="" />
          </div>
          <div className={style.val_name}>
            <h5 className={style.h5}>Ethereum</h5>
            <p className={style.p_val}>
              {isAssetsShow ?
                isEthLoading ? "Loading..." :
                  <CurrencyStyle
                    amount={eth?.amount}
                    currency={"ETH"}
                    toSymbol={false}
                  /> : "****"
              }
            </p>
          </div>
          <div className={style.div_money}>
            <p className={style.p_money}>
              {isAssetsShow ?
                isEthLoading ? "Loading..." :
                  <CurrencyStyle
                    amount={eth?.convertedAmount}
                    currency={eth?.currency}
                  /> : "****"
              }
            </p>
          </div>
        </Link>

        <Link to={"/transactions/BTC"} className={style.val1}>
          <div className={style.val_img}>
            <img src={btcImg} alt="" />
          </div>
          <div className={style.val_name}>
            <h5 className={style.h5}>Bitcoin</h5>
            <p className={style.p_val}>
              {isAssetsShow ?
                isBtcLoading ? "Loading..." :
                  <CurrencyStyle
                    amount={btc?.amount}
                    currency={"BTC"}
                    toSymbol={false}
                  /> : "****"
              }
            </p>
          </div>
          <div className={style.div_money}>
            <p className={style.p_money}>
              {isAssetsShow ?
                isBtcLoading ? "Loading..." :
                  <CurrencyStyle
                    amount={btc?.convertedAmount}
                    currency={btc?.currency}
                  /> : "****"
              }
            </p>
          </div>
        </Link>
      </div>

      <div className={style.users_div}>
        <div className={style.user_name}>
          <p className={style.user_p}>История транзакций</p>
          <Link to={"/transactions"} className={style.user_butt} >
            Вся история <MdChevronRight />
          </Link>
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

      <Link to={"/settings"} className={style.settings}>
        <div className={style.sett_div}>
          <img src={set} className={style.set_img} alt="" />
        </div>
        <p className={style.sett}>Настройки</p>
        <MdChevronRight color="gray" className={style.iconn} />
      </Link>
    </div>
  );
};

export default HomePage;
