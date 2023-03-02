import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'components/ui/Button';

import { rndData } from 'store/main/reducers';

import styles from './styles.css';

export const Search = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    const randomNum = Math.random();
    dispatch(rndData(randomNum));
  };

  return (
    <div>
      <input className={styles.input} />

      <Button
        type="button"
        text="Find"
        title="Find repos on GitHub by username"
        onClick={onButtonClick}
      />
    </div>
  );
};
