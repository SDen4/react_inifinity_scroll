import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItemType } from 'model/types';

export interface IInitialState {
  usersList: ItemType[];
  rndData: number | null;
  loading: boolean;
}

const initialState = {
  usersList: [],
  rndData: null,
  loading: false,
} as IInitialState;

const mainReducer = createSlice({
  name: 'MReducer',
  initialState,
  reducers: {
    usersList(state, action: PayloadAction<ItemType[]>) {
      return { ...state, usersList: action.payload };
    },
    rndData(state, action: PayloadAction<number>) {
      return { ...state, rndData: action.payload };
    },
    loading(state, action: PayloadAction<boolean>) {
      return { ...state, loading: action.payload };
    },
    reset() {
      return initialState;
    },
  },
});

export const { usersList, rndData, loading, reset } = mainReducer.actions;
export default mainReducer.reducer;
