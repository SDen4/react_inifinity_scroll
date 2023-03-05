import React, {
  FC,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Header } from 'components/Header';
import { Result } from 'components/Result';
import { Search } from 'components/Search';

import { scrollSaga } from 'store/main/actions';

import { endOfUsersListSelect, loadingSelect } from 'selectors/main';

import styles from './styles.css';

export const App: FC = () => {
  const dispatch = useDispatch();
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const loadingStore = useSelector(loadingSelect);
  const endOfUsersList = useSelector(endOfUsersListSelect);

  const [initHeight, setInitHeight] = useState<number | undefined>(0);

  useLayoutEffect(() => {
    setInitHeight(ref?.current?.clientHeight);
  }, [initHeight]);

  const scrollFunc = useCallback(() => {
    if (
      Number(ref?.current?.clientHeight) - window.scrollY - 121 <=
        Number(initHeight) &&
      !loadingStore &&
      !endOfUsersList
    ) {
      dispatch(scrollSaga());
    }
  }, [dispatch, endOfUsersList, initHeight, loadingStore]);

  useEffect(() => {
    document.addEventListener('scroll', scrollFunc);

    return () => document.removeEventListener('scroll', scrollFunc);
  }, [loadingStore, scrollFunc]);

  return (
    <main className={styles.main} ref={ref}>
      <Header />

      <section className={styles.section}>
        <Search />
      </section>

      <section className={styles.section}>
        <Result />
      </section>
    </main>
  );
};
