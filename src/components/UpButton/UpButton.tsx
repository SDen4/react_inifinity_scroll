import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'components/ui/Button';

import { usersListSelect } from 'selectors/main';

import styles from './styles.css';

export const UpButton: FC = () => {
  const usersList = useSelector(usersListSelect);

  const onClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  if (!usersList.length) return null;
  return <Button type="button" className={styles.upButton} onClick={onClick} />;
};
