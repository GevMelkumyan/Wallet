const intl = new Intl.NumberFormat("ru");

export function shortNum(number) {
  return intl.format(number);
}
