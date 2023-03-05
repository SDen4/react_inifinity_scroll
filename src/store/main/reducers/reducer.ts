import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItemType } from 'model/types';

export interface IInitialState {
  usersList: ItemType[];
  user: string;
  loading: boolean;
  page: number;
}

const initialState = {
  usersList: [],
  user: '',
  loading: false,
  page: 2,
} as IInitialState;

const mainReducer = createSlice({
  name: 'MReducer',
  initialState,
  reducers: {
    usersList(state, action: PayloadAction<ItemType[]>) {
      return { ...state, usersList: action.payload };
    },
    user(state, action: PayloadAction<string>) {
      return { ...state, user: action.payload };
    },
    loading(state, action: PayloadAction<boolean>) {
      return { ...state, loading: action.payload };
    },
    page(state, action: PayloadAction<number>) {
      return { ...state, page: action.payload };
    },
    reset() {
      return initialState;
    },
  },
});

export const { usersList, user, loading, page, reset } = mainReducer.actions;
export default mainReducer.reducer;
