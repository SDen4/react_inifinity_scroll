import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from 'store/rootReducer';

export const usersListSelect = createSelector(
  (store: AppStateType) => store.main.usersList,
  (usersList) => usersList,
);

export const rndDataSelect = createSelector(
  (store: AppStateType) => store.main.rndData,
  (rndData) => rndData,
);

export const loadingSelect = createSelector(
  (store: AppStateType) => store.main.loading,
  (loading) => loading,
);
