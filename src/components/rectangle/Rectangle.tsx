import React from "react";
import styled from "styled-components";
import { useScroll } from "../../hooks/useScroll";
export const Rectangle = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { inView } = useScroll(ref);
  return (
    <StyledRectangle ref={ref}>
      <div className={`box-1 ${inView ? "show" : "hide"}`}>
        This is sliding in from left on scroll
      </div>
    </StyledRectangle>
  );
};

const StyledRectangle = styled.div`
  width: 100%;
  height: 30rem;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-1 {
    background-color: white;
    width: 80%;
    height: 10rem;
    text-align: center;
    padding-top: 5rem;
    opacity: 0;
    transition: all 1s ease-in-out;
    transform: translateX(-100%);
    &.show {
      opacity: 1;
      transform: translateX(0);
    }
    &.hide {
      opacity: 0;
    }
  }
`;
