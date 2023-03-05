import { SagaIterator } from 'redux-saga';
import { put, select, takeEvery } from 'redux-saga/effects';

import { scrollSaga } from '../actions';

import { loading, page, usersList } from '../reducers';

import { pageSelect, userSelect, usersListSelect } from 'selectors/main';

import { httpRequest } from 'api/httpRequest';

import { AllDataType, ItemType } from 'model/types';

function* scrollWorker() {
  const user: string = yield select(userSelect);
  const pageStore: number = yield select(pageSelect);
  const usersListStore: ItemType[] = yield select(usersListSelect);

  yield put(loading(true));

  try {
    const allData: AllDataType = yield httpRequest(user, pageStore);

    yield put(usersList([...usersListStore, ...allData.items]));
    yield put(page(pageStore + 1));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(loading(false));
  }
}

export function* rootScrollSaga(): SagaIterator {
  [yield takeEvery(scrollSaga, scrollWorker)];
}
