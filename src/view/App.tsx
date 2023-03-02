import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from 'components/Header';
import { Result } from 'components/Result';
import { Button } from 'components/ui/Button';

import { getInitDataSaga } from 'store/main/actions';
import { reset, rndData } from 'store/main/reducers';

import { initDataSelect, loadingSelect } from 'selectors/main';

import styles from './styles.css';

export const App: FC = () => {
  const dispatch = useDispatch();

  const initData = useSelector(initDataSelect);
  const loading = useSelector(loadingSelect);

  useEffect(() => {
    dispatch(getInitDataSaga());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const onButtonClick = () => {
    const randomNum = Math.random();
    dispatch(rndData(randomNum));
  };

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.section}>
        <Button
          type="button"
          text="Find"
          title="Find repos on GitHub by username"
          onClick={onButtonClick}
        />
      </section>

      <section className={styles.section}>
        <Result />
      </section>

      <section className={styles.section}>
        {loading ? <p>Loading...</p> : <img src={initData} alt="todoImage" />}
      </section>
    </main>
  );
};
