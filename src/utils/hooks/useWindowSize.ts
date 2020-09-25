import { useState } from 'react';
import { useEventListener } from './useEventListener';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<[number, number]>([-1, -1]);

  useEventListener('resize', () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  });

  return windowSize;
};
