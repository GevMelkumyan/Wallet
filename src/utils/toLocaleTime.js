export function toLocaleTime(locale="ru", time) {
  const intl = new Intl.DateTimeFormat(locale, {day: "2-digit", month: "long", minute: "2-digit", hour: "2-digit"})

  return intl.format(new Date(time))
}