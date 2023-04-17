import type { FC } from 'react';
import React from 'react';

import type { ItemType } from 'model/types';

import styles from './styles.css';

interface IProps {
  card: ItemType;
}

export const Card: FC<IProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={card.avatar_url} className={styles.img} loading="lazy" />
      </div>
      <h3 className={styles.title}>
        <a
          href={card.html_url}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {card.login}{' '}
        </a>
        (id: {card.id})
      </h3>
    </div>
  );
};
