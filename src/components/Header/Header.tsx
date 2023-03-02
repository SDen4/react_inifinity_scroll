import React, { FC } from 'react';

import styles from './styles.css';

export const Header: FC = () => {
  return (
    <header>
      <h1 className={styles.appHeader}>React Infinity Scroll Example</h1>
    </header>
  );
};
