import React, { FC, HTMLAttributes } from 'react';

import styles from './styles.css';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  text?: string;
}

export const Button: FC<IProps> = ({ type, text, ...props }) => {
  return (
    <button type={type} {...props} className={styles.button}>
      {text}
    </button>
  );
};

