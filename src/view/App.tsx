import React, { FC } from 'react';

import { Header } from 'components/Header';
import { Result } from 'components/Result';
import { Search } from 'components/Search';

import styles from './styles.css';

export const App: FC = () => {
  return (
    <main className={styles.main}>
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
