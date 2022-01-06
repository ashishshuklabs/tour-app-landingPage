import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { designVariables } from "../../../styles/globalVariables";

export const Hamburger = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  const [rotate, setRotate] = useState(false);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setRotate(true);
  };
  return (
    <StyledButton className={className} onClick={handleClick}>
      <svg
        className={`${rotate ? "rotate" : ""}`}
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </StyledButton>
  );
};
const scale = keyframes`
from {
  transform: scale(.7);
}
to{
  transform: scale(1);
}
`;
const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  animation: ${scale} 1s ease-in infinite alternate; //infinite animation, alternate ensures smooth transition, as it switches froma and to accordingly ;
  svg {
    transition: transform 0.3s linear;
    transform: rotateX(0);
    fill: ${designVariables.palette.green700};
    transition: all 0.3s linear;

    &.rotate {
      transform: rotateX(180deg);
    }
  }
  &:hover svg {
    fill: ${designVariables.palette.green100};
  }
`;
