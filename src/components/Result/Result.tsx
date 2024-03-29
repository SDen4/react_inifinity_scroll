import type { FC } from 'react';
import React from 'react';
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
        <p style={{ color: '#fff' }}>No data to dispay...</p>
      )}
    </>
  );
};
