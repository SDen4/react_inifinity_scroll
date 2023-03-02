import { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { searchUsersSaga } from '../actions';

import { loading, usersList } from '../reducers';

import { httpRequest } from 'api/httpRequest';

import { AllDataType } from 'model/types';

function* searchUsers({ payload }: ReturnType<typeof searchUsersSaga>) {
  yield put(loading(true));
  try {
    const allData: AllDataType = yield httpRequest(payload);

    yield put(usersList(allData?.items));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(loading(false));
  }
}

export function* rootSearchSaga(): SagaIterator {
  [yield takeEvery(searchUsersSaga, searchUsers)];
}
