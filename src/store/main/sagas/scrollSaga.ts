import { SagaIterator } from 'redux-saga';
import { put, select, takeEvery } from 'redux-saga/effects';

import { scrollSaga } from '../actions';
import {
  endOfUsersListAct,
  loadingAct,
  pageAct,
  usersListAct,
} from '../reducer';

import { pageSelect, userSelect, usersListSelect } from 'selectors/main';

import { httpRequest } from 'api/httpRequest';

import { AllDataType, ItemType } from 'model/types';

import { usersPerRequest } from 'constants/index';

function* scrollWorker() {
  const user: string = yield select(userSelect);
  const page: number = yield select(pageSelect);
  const usersList: ItemType[] = yield select(usersListSelect);

  yield put(loadingAct(true));

  try {
    const allData: AllDataType = yield httpRequest(user, page);

    yield put(usersListAct([...usersList, ...allData.items]));

    if (allData.items.length < usersPerRequest) {
      yield put(endOfUsersListAct(true));
    } else {
      yield put(pageAct(page + 1));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(loadingAct(false));
  }
}

export function* rootScrollSaga(): SagaIterator {
  [yield takeEvery(scrollSaga, scrollWorker)];
}
