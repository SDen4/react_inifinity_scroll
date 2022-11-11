import { createSelector } from '@reduxjs/toolkit';
import { AppStateType } from 'index';

export const initDataSelect = createSelector(
  (store: AppStateType) => store.main.initData,
  (initData) => initData,
);

export const rndDataSelect = createSelector(
  (store: AppStateType) => store.main.rndData,
  (rndData) => rndData,
);
