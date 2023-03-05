import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitialState {
  loading: boolean;
  page: number;
  endOfUsersList: boolean;
}

const initialState = {
  loading: false,
  page: 2,
  endOfUsersList: false,
} as IInitialState;

const scrollSlice = createSlice({
  name: 'MAIN',
  initialState,
  reducers: {
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

export const { loadingAct, pageAct, endOfUsersListAct, resetAct } =
  scrollSlice.actions;
const scrollReducer = scrollSlice.reducer;
export { scrollReducer };
