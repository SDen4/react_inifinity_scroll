import type { SagaIterator } from 'redux-saga';
import { put, select, takeEvery } from 'redux-saga/effects';

import { usersListAct } from 'store/main/reducer';
import { scrollSaga } from 'store/scroll/actions';
import { endOfUsersListAct, loadingAct, pageAct } from 'store/scroll/reducer';

import { userSelect, usersListSelect } from 'selectors/main';
import { pageSelect } from 'selectors/scroll';

import { httpRequest } from 'api/httpRequest';

import type { AllDataType, ItemType } from 'model/types';

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
