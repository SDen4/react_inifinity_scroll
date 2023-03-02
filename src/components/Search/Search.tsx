import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'components/ui/Button';

import { searchUsersSaga } from 'store/main/actions';

import styles from './styles.css';

export const Search = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event) {
      return;
    }

    setValue(event.target.value);
  };

  const onButtonClick = () => {
    dispatch(searchUsersSaga(value));
  };

  return (
    <div>
      <input className={styles.input} onChange={onChange} />

      <Button
        type="button"
        text="Find"
        title="Find repos on GitHub by username"
        onClick={onButtonClick}
      />
    </div>
  );
};
