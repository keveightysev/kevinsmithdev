import React from "react";
import styled from "styled-components";

import generateStars from "./utils";

const StarrySky = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const small = generateStars(width * 0.4, width, height);
  const medium = generateStars(width * 0.25, width, height);
  const large = generateStars(width * 0.1, width, height);
  return (
    <Starfield small={small} medium={medium} large={large} role="presentation">
      <div className="small" role="presentation" />
      <div className="medium" role="presentation" />
      <div className="large" role="presentation" />
    </Starfield>
  );
};

export default StarrySky;

const Starfield = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  .small {
    height: 1px
    width: 1px;
    border-radius: 50%;
    background: transparent;
    box-shadow: ${({ small }) => small.boxShadow};
    animation: small-blink 3s infinite;
  }

  .medium {
    height: 2px
    width: 2px;
    border-radius: 50%;
    background: transparent;
    box-shadow: ${({ medium }) => medium.boxShadow};
    animation: medium-blink 3s infinite 2s;
  }

  .large {
    height: 3px
    width: 3px;
    border-radius: 50%;
    background: transparent;
    box-shadow: ${({ large }) => large.boxShadow};
    animation: large-blink 3s infinite 5s;
  }

  @keyframes small-blink {
    0%, 100% {
      box-shadow: ${({ small }) => small.boxShadow};
    }
    50% {
      box-shadow: ${({ small }) => small.keyframe};
    }
  }

  @keyframes medium-blink {
    0%, 100% {
      box-shadow: ${({ medium }) => medium.boxShadow};
    }
    50% {
      box-shadow: ${({ medium }) => medium.keyframe};
    }
  }  

  @keyframes large-blink {
    0%, 100% {
      box-shadow: ${({ large }) => large.boxShadow};
    }
    50% {
      box-shadow: ${({ large }) => large.keyframe};
    }
  }  
`;
