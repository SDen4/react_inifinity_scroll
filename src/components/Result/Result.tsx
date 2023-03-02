import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { usersListSelect } from 'selectors/main';

// import styles from './styles.css';

export const Result: FC = () => {
  const usersList = useSelector(usersListSelect);

  return (
    <>
      {usersList?.length ? (
        <ul>
          {usersList.map((el) => {
            return <p key={el.id}>{el.login}</p>;
          })}
        </ul>
      ) : (
        <p>No data to dispay...</p>
      )}
    </>
  );
};
