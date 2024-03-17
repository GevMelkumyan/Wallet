const cryptos = {
  BTC: /\b((bc|tb)(0([ac-hj-np-z02-9]{39}|[ac-hj-np-z02-9]{59})|1[ac-hj-np-z02-9]{8,87})|([13]|[mn2])[a-km-zA-HJ-NP-Z1-9]{25,39})\b/,
  ETH: /^(0x)[0-9A-Fa-f]{40}$/,
  ERC20_USDT: /^(0x)[0-9A-Fa-f]{40}$/,
  TRC20_USDT: /T[1-9A-HJ-NP-Za-km-z]{33}$/,
};

export function validate(address, crypto) {
  return cryptos[crypto].test(address);
}
