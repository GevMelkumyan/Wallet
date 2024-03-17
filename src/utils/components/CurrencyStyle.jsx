import React from "react";
import PropTypes from "prop-types";
import getSymbolFromCurrency from "currency-symbol-map";

let intl = new Intl.NumberFormat("ru");

export function shortNum(number, currency) {
  if (currency == "BTC") {
    return number.toFixed(6)
  }

  return intl.format(number)

}

const CurrencyStyle = ({ amount, currency, toSymbol = true }) => {
  return (
    <>
      {shortNum(Number(amount), currency) || 0}{" "}
      {toSymbol ? getSymbolFromCurrency(currency) || currency : currency}
    </>
  );
};

CurrencyStyle.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string,
  toSymbol: PropTypes.bool,
};

export default CurrencyStyle;
