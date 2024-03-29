import type { RefObject } from 'react';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { scrollSaga } from 'store/scroll/actions';

import { endOfUsersListSelect, loadingSelect } from 'selectors/scroll';

export const InfinityScroll = (Comp: typeof React.Component) => {
  const dispatch = useDispatch();
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const loadingStore = useSelector(loadingSelect);
  const endOfUsersList = useSelector(endOfUsersListSelect);

  const [initHeight, setInitHeight] = useState<number | undefined>(0);

  useLayoutEffect(() => {
    setInitHeight(ref?.current?.clientHeight);
  }, [initHeight]);

  const scrollFunc = useCallback(() => {
    if (
      (Number(ref?.current?.clientHeight) - window.scrollY) * 0.5 <=
        Number(initHeight) &&
      !loadingStore &&
      !endOfUsersList
    ) {
      dispatch(scrollSaga());
    }
  }, [dispatch, endOfUsersList, initHeight, loadingStore]);

  useEffect(() => {
    document.addEventListener('scroll', scrollFunc);

    return () => document.removeEventListener('scroll', scrollFunc);
  }, [loadingStore, scrollFunc]);

  return () => {
    return (
      <div ref={ref}>
        <Comp />
      </div>
    );
  };
};
