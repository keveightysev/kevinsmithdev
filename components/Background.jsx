'use client';
import { useRef, useEffect } from 'react';

import { Canvas } from '../utils';

const Background = () => {
  const cnvs = useRef(null);

  useEffect(() => {
    const canvas = new Canvas(cnvs.current);
    canvas.run();
    return () => canvas.stop();
  }, [cnvs]);
  return <canvas ref={cnvs} width='32' height='32' />;
};

export default Background;
