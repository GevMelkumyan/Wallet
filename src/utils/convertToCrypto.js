import BigNumber from "bignumber.js";

export function findCryptoPower(token) {
  if (token === "BTC") {
    return 8;
  }
  if (token === "ERC20_USDT" || token === "TRC20_USDT") {
    return 6;
  }
  if (token === "ETH") {
    return 18;
  }
}

export function convertToCrypto(token, amount) {
  let power = findCryptoPower(token);

  const num = new BigNumber(amount);
  const denom = new BigNumber(10).pow(power);

  let ans = num.dividedBy(denom).toString();

  return ans;
}
