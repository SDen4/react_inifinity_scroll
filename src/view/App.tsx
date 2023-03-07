import React from 'react';

import { Header } from 'components/Header';
import { Result } from 'components/Result';
import { Search } from 'components/Search';
import { Button } from 'components/ui/Button';

import styles from './styles.css';

export const App = () => {
  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.section}>
        <Search />
      </section>

      <section className={styles.section}>
        <Result />
      </section>

      <Button type="button" className={styles.upButton} />
    </main>
  );
};
