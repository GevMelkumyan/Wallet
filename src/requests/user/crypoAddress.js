import axios from "axios";
import { SERVER_URL, telegramUser } from "../../config";

/**
 *
 * @param {string} crypto
 */
export async function cryptoAddress(crypto) {
  const { data } = await axios.get(
    `${SERVER_URL}/users/${telegramUser?.id || 1}/${crypto}/address`
  );

  return data;
}
