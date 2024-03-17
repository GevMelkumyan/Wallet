import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL, telegramUser, tg } from "../../config";

// const initialState = {
//   user: {
//     _id: "string",
//     uuid: "string",
//     telegramId: 0,
//     username: "string",
//     name: "string",
//     tel: "string",
//     status: "base",
//     currency: "string",
//     language: "string",
//     isBlocked: true,
//     socketId: "string",
//   },
// };

const initialState = {
  user: null,
};

console.log(telegramUser);

export const fetchUser = createAsyncThunk(
  "users/fetchUsers",
  async (_, { getState }) => {
    const { user } = getState();
    if (user) {
      const { data } = await axios.post(`${SERVER_URL}/users`, {
        telegramId: telegramUser?.id,
        name: telegramUser?.first_name,
        username: telegramUser?.username,
        currency: "USD",
        languageCode: telegramUser?.language_code || "en",
      });
      if (!data?.tel) {
        tg.requestContact(async (isShared, d) => {
          if (!isShared) {
            return tg?.close();
          }
          await axios.put(`${SERVER_URL}/users/tel`, {
            telegramId: telegramUser?.id,
            tel: "+" + d?.responseUnsafe?.contact?.phone_number,
          });
        });
      }

      return data;
    }
    return user;
  }
);

export const setUserLanguage = createAsyncThunk(
  "users/setUserLanguage",
  async ({ languageCode }) => {
    await axios.put(`${SERVER_URL}/users/${telegramUser?.id || 1}/language`, {
      languageCode,
    });
    return languageCode;
  }
);

export const setUserCurrency = createAsyncThunk(
  "users/setUserCurrency",
  async ({ currency }) => {
    await axios.put(`${SERVER_URL}/users/${telegramUser?.id || 1}/currency`, {
      currency,
    });
    return currency;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(setUserLanguage.fulfilled, (state, { payload }) => {
      state.user.language = payload;
    });
    builder.addCase(setUserCurrency.fulfilled, (state, { payload }) => {
      state.user.currency = payload;
    });
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state) => state.user.user;
export const selectUserLanguage = (state) => state.user.user?.language;
export const selectUserCurrency = (state) => state.user.user?.currency;
export const selectUserSocketId = (state) => state.user.user?.socketId;
export const selectUserImg = (state) => state.user.user?.img;
