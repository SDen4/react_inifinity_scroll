import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import React, { memo } from 'react';

import classes from './styles.css';

export const Flex: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = memo(
  ({ children, className, style, ...props }) => {
    return (
      <div className={`${classes.flex} ${className}`} style={style} {...props}>
        {children}
      </div>
    );
  },
);
