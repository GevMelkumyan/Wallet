import axios from "axios";
import { SERVER_URL } from "../../config";

/**
 *
 * @param {{
 * telegramId: number,
 * name: string,
 * username: string,
 * tel: string,
 * currency: string,
 * languageCode: string
 * }} body
 */
export async function createUser(body) {
  const { data } = await axios.post(`${SERVER_URL}/users`, body);

  return data;
}
