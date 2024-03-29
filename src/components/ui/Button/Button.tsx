import type { FC, HTMLAttributes } from 'react';
import React from 'react';

import styles from './styles.css';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  text?: string;
}

export const Button: FC<IProps> = ({ type, text, ...props }) => {
  return (
    <button type={type} className={styles.button} {...props}>
      {text}
    </button>
  );
};
