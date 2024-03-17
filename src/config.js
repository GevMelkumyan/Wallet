import usd from "./IMG/Shape.svg";
import euro from "./IMG/Shape (1).svg";
import rubl from "./IMG/Shape (2).svg";
import uzb from "./IMG/Shape (3).svg";
import kaz from "./IMG/Shape (4).svg";
import taj from "./IMG/Shape (5).svg";
import kirg from "./IMG/Shape (6).svg";

export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const tg = window.Telegram.WebApp;
export const telegramUser = tg.initDataUnsafe.user;

export const languages = [
  { value: "ru", enLabel: "Russian", label: "Русский" },
  { value: "tg", enLabel: "Tajik", label: "Тоҷикӣ" },
  { value: "en", enLabel: "English", label: "English" },
];
export const currencies = [
  { value: "USD", img: usd, name: "usd" },
  { value: "EUR", img: euro, name: "eur" },
  { value: "RUB", img: rubl, name: "rub" },
  { value: "UZS", img: uzb, name: "uzs" },
  { value: "KZT", img: kaz, name: "kzt" },
  { value: "TJS", img: taj, name: "tjs" },
  { value: "KGS", img: kirg, name: "kgs" },
];
