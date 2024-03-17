export function transactionTypeText(status, type) {
  let verifiedText = "Получено";

  if(status === "outcome") {
    verifiedText = "Отпровлено"
  }


  switch (type) {
    case "pending":
      return "В ожидании"
    case "verified":
      return verifiedText
    case "failed":
      return "Oтклонено"
    default:
      return ""
  }
}