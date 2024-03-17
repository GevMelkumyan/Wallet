import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowAssets: true
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    CHANGE_ASSETS_SHOW(state) {
      state.isShowAssets = !state.isShowAssets
    }
  },
});


export const { CHANGE_ASSETS_SHOW } = settingsSlice.actions;
export default settingsSlice.reducer;

export const selectSettingsAssetsShow = (state) => state.settings.isShowAssets
