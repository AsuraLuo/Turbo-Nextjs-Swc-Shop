import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";

/* Types */
export interface AppSliceState {
  loading: false;
  currency: any;
  storeConfig: any;
}

const initialState: AppSliceState = {
  loading: false,
  currency: null,
  storeConfig: null,
};

export const slice: Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppConfig: (
      state: any,
      action: PayloadAction<Pick<AppSliceState, "currency" | "storeConfig">>
    ) => {
      const { currency, storeConfig } = action.payload;
      state.currency = currency;
      state.storeConfig = storeConfig;
    },
  },
});
