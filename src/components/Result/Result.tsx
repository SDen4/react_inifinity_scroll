import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Card } from 'components/Card';

import { usersListSelect } from 'selectors/main';

export const Result: FC = () => {
  const usersList = useSelector(usersListSelect);

  return (
    <>
      {usersList?.length ? (
        <div>
          {usersList.map((el) => (
            <Card card={el} key={el.id} />
          ))}
        </div>
      ) : (
        <p>No data to dispay...</p>
      )}
    </>
  );
};
