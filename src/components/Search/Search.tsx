import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'components/ui/Button';

import { searchUsersSaga } from 'store/main/actions';

import styles from './styles.css';

export const Search = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event) return;

    setValue(event.target.value);
  };

  const onButtonClick = () => {
    if (!value.length) return;

    dispatch(searchUsersSaga(value));
  };

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    onButtonClick();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className={styles.input}
        onChange={onChange}
        placeholder="Type github user"
      />

      <Button
        type="button"
        text="Find"
        title="Find repos on GitHub by username"
        onClick={onButtonClick}
      />
    </form>
  );
};
