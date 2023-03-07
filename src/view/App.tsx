import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from 'components/Header';
import { Result } from 'components/Result';
import { Search } from 'components/Search';
import { Button } from 'components/ui/Button';

import { usersListSelect } from 'selectors/main';

import styles from './styles.css';

export const App = () => {
  const usersList = useSelector(usersListSelect);

  const onClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.section}>
        <Search />
      </section>

      <section className={styles.section}>
        <Result />
      </section>

      {usersList?.length ? (
        <Button type="button" className={styles.upButton} onClick={onClick} />
      ) : null}
    </main>
  );
};
