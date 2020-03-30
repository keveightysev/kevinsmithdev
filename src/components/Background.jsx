import React, { useRef, useEffect } from "react";

import { generateText, Canvas } from "../utils";

const Background = () => {
  const cnvs = useRef(null);

  useEffect(() => {
    const canvas = new Canvas(cnvs.current);
    canvas.run();
    return () => canvas.stop();
  }, [cnvs]);
  return (
    <div id="background" role="img">
      <div role="img">{generateText()}</div>
      <canvas ref={cnvs} width="32" height="32" />
    </div>
  );
};

export default Background;
