import { useState } from 'react';
import { useEventListener } from './useEventListener';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<[number, number]>([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEventListener('resize', () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  });

  return windowSize;
};
