import "./App.scss";
import Sell from "./Components/Sell/Sell";
import Notifications from "./Components/Notifications/Notifications";
import MyAds from "./Components/MyAds/MyAds";
import Language from "./Components/Language/Language";
import HomePage from "./Components/HomePage/HomePage";
import Payment from "./Components/Payment/Payment";
import Settings from "./Components/Settings/Settings";
import TelegramAkk from "./Components/TelegramAkk/TelegramAkk";
import User from "./Components/User/User";
import Valute from "./Components/Valute/Valute";
import Valutes from "./Components/Valutes/Valutes";
import Sending from "./Components/Sending/Sending";
import Sending2 from "./Components/Sending2/Sending2";
import Sending4 from "./Components/Sending4/Sending4";
import Sending5 from "./Components/Sending5/Sending5";
import Qr from "./Components/QR/Qr";
import Exchange from "./Components/Exchange/Exchange";
import Exchange2 from "./Components/Exchange2/Exchange2";
import Menu from "./Components/Menu/Menu";
import PaymentMethod from "./Components/PaymentMethod/PaymentMethod";
import Method from "./Components/Method/Method";
import Message from "./Components/Message/Message";
import Checking from "./Components/Checking/Checking";
import End from "./Components/end/End";
import Time from "./Components/time/Time";
import Wait from "./Components/wait/Wait";
import Allow from "./Components/allowproces/Allow";
import Params from "./Components/params1/Params";
import Params2 from "./Components/params2/Params2";
import Buy from "./Components/buy/Buy";
import Proces from "./Components/proces/Proces";
import Sale1 from "./Components/Sale1/Sale1";
import SaleClick from "./Components/SaleClick/SaleClick";
import SaleClickOn from "./Components/SaleClickOn/SaleClickOn";
import SaleSettings from "./Components/SaleSettings/SaleSettings";
import SaleHumo from "./Components/SaleHumo/SaleHumo";
import SalePage from "./Components/SalePage/SalePage";
import CreateDeal from "./Components/CreateDeal/CreateDeal";
import SalePage2 from "./Components/SalePage2/SalePage2";
import Checkin from "./Components/Checkin/Checkin";
import Dispatch from "./Components/Dispatch/Dispatch";
import Confirmation from "./Components/ConfirmSend/Confirmation";
import Timeing from "./Components/Timeing/Timing";
import {
  RouterProvider,
  // ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import Params3 from "./Components/Params3/Params3";
import Timing from "./Components/Timeing/Timing";
import Ready from "./Components/Ready/Ready";
import WaitingPayment from "./Components/WaitingPayment/WaitingPayment";
import ProofPayment from "./Components/ProofPayment/ProofPayment";
import SaleDispatch from "./Components/SaleDispatch/SaleDispatch";
import FinishDispatch from "./Components/FinishDispatch/FinishDispatch";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, selectUserLanguage } from "./redux/slices/userSlice";
import { useTranslation } from "react-i18next";
import { socket } from "./socket";
import { telegramUser, tg } from "./config";
import Sending3 from "./Components/Sending3/Sending3";
import { Transactions } from "./Components/transactions/Transactions";


tg.expand();

tg.BackButton.show();

tg.BackButton.onClick(() => {
  window.history.back();
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/transactions/:token?",
    element: <Transactions />
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/language",
    element: <Language />,
  },
  {
    path: "/valute",
    element: <Valute />,
  },
  {
    path: "/profile",
    element: <User />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/telegramakk",
    element: <TelegramAkk />,
  },
  {
    path: "/payVal",
    element: <Valutes />,
  },
  {
    path: "/sending",
    element: <Sending />,
  },
  {
    path: "/sending2",
    element: <Sending2 />,
  },
  {
    path: "/sending3",
    element: <Sending3 />,
  },
  {
    path: "/sending4",
    element: <Sending4 />,
  },
  {
    path: "/sending5",
    element: <Sending5 />,
  },
  {
    path: "/qr",
    element: <Qr />,
  },
  {
    path: "/exchange",
    element: <Exchange />,
  },
  {
    path: "/exchange2",
    element: <Exchange2 />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
  {
    path: "/myAds",
    element: <MyAds />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/paymentMethod",
    element: <PaymentMethod />,
  },
  {
    path: "/method",
    element: <Method />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/checking",
    element: <Checking />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/proces",
    element: <Proces />,
  },
  {
    path: "/params",
    element: <Params />,
  },
  {
    path: "/params2",
    element: <Params2 />,
  },
  {
    path: "/allow",
    element: <Allow />,
  },
  {
    path: "/wait",
    element: <Wait />,
  },
  {
    path: "/time",
    element: <Time />,
  },
  {
    path: "/end",
    element: <End />,
  },
  {
    path: "/sale1",
    element: <Sale1 />,
  },
  {
    path: "/sellbtn",
    element: <SaleClick />,
  },
  {
    path: "/sellbtnon",
    element: <SaleClickOn />,
  },
  {
    path: "/salesettings",
    element: <SaleSettings />,
  },
  {
    path: "/saleHumo",
    element: <SaleHumo />,
  },
  {
    path: "/salepage",
    element: <SalePage />,
  },
  {
    path: "/salepage2",
    element: <SalePage2 />,
  },
  {
    path: "/createdeal",
    element: <CreateDeal />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/paymentMethod",
    element: <PaymentMethod />,
  },
  {
    path: "/method",
    element: <Method />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/checking",
    element: <Checking />,
  },
  {
    path: "/paymantoll",
    element: <Checkin />,
  },

  {
    path: "/dispatch",
    element: <Dispatch />,
  },

  {
    path: "/params3",
    element: <Params3 />,
  },
  {
    path: "/Confirmation",
    element: <Confirmation />,
  },
  {
    path: "/timeing",
    element: <Timeing />,
  },

  {
    path: "/ready",
    element: <Ready />,
  },
  {
    path: "/waitingpayment",
    element: <WaitingPayment />,
  },
  {
    path: "/proofpayment",
    element: <ProofPayment />,
  },
  {
    path: "/saledispatch",
    element: <SaleDispatch />,
  },
  {
    path: "/finishdispatch",
    element: <FinishDispatch />,
  },
]);

function App() {
  const { i18n } = useTranslation();
  const language = useSelector(selectUserLanguage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    socket.auth = { telegramId: telegramUser?.id || 1 };

    socket.connect();

    return () => socket.disconnect();
  }, [dispatch]);

  useEffect(() => {
    if (language) i18n.changeLanguage(language);
  }, [language]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
