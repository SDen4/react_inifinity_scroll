import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItemType } from 'model/types';

export interface IInitialState {
  usersList: ItemType[];
  user: string;
}

const initialState = {
  usersList: [],
  user: '',
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
  },
});

export const { usersListAct, userAct } = mainSlice.actions;
const mainReducer = mainSlice.reducer;
export { mainReducer };
