import { createAction } from '@reduxjs/toolkit';

const prefix = 'MAIN';

export const searchUsersSaga = createAction<string>(
  `${prefix}/SEARCH_USERS_SAGA`,
);
