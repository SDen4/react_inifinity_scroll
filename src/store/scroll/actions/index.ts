import { createAction } from '@reduxjs/toolkit';

const prefix = 'SCROLL';

export const scrollSaga = createAction(`${prefix}/SCROLL_SAGA`);
