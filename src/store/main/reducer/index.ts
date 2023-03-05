import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItemType } from 'model/types';

export interface IInitialState {
  usersList: ItemType[];
  user: string;
  loading: boolean;
  page: number;
  endOfUsersList: boolean;
}

const initialState = {
  usersList: [],
  user: '',
  loading: false,
  page: 2,
  endOfUsersList: false,
} as IInitialState;

const mainSlice = createSlice({
  name: 'MAIN',
  initialState,
  reducers: {
    usersListAct(state, action: PayloadAction<ItemType[]>) {
      return { ...state, usersList: action.payload };
    },
    userAct(state, action: PayloadAction<string>) {
      return { ...state, user: action.payload };
    },
    loadingAct(state, action: PayloadAction<boolean>) {
      return { ...state, loading: action.payload };
    },
    pageAct(state, action: PayloadAction<number>) {
      return { ...state, page: action.payload };
    },
    endOfUsersListAct(state, action: PayloadAction<boolean>) {
      return { ...state, endOfUsersList: action.payload };
    },
    resetAct() {
      return initialState;
    },
  },
});

export const {
  usersListAct,
  userAct,
  loadingAct,
  pageAct,
  endOfUsersListAct,
  resetAct,
} = mainSlice.actions;
const mainReducer = mainSlice.reducer;
export { mainReducer };
