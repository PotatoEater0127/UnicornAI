import styled, { keyframes } from "styled-components";
import { Arrow, ARROW_SIZE, BubbleContainer, Chat } from "../index.styles";

type ContainerProps = {
  $isLoading: boolean;
};

const DOT_COLOR = "#9880ff";
const DISTANCE = 20;
const ORIGIN = 9984;
const SECOND = ORIGIN + DISTANCE;
const THIRD = SECOND + DISTANCE;

const dotTyping = keyframes`
  0% {
    box-shadow: ${ORIGIN}px 0 0 0 ${DOT_COLOR}, ${SECOND}px 0 0 0 ${DOT_COLOR}, ${THIRD}px 0 0 0 ${DOT_COLOR};
  }
  16.667% {
    box-shadow: ${ORIGIN}px -10px 0 0 ${DOT_COLOR}, ${SECOND}px 0 0 0 ${DOT_COLOR}, ${THIRD}px 0 0 0 ${DOT_COLOR};
  }
  33.333% {
    box-shadow: ${ORIGIN}px 0 0 0 ${DOT_COLOR}, ${SECOND}px 0 0 0 ${DOT_COLOR}, ${THIRD}px 0 0 0 ${DOT_COLOR};
  }
  50% {
    box-shadow: ${ORIGIN}px 0 0 0 ${DOT_COLOR}, ${SECOND}px -10px 0 0 ${DOT_COLOR}, ${THIRD}px 0 0 0 ${DOT_COLOR};
  }
  66.667% {
    box-shadow: ${ORIGIN}px 0 0 0 ${DOT_COLOR}, ${SECOND}px 0 0 0 ${DOT_COLOR}, ${THIRD}px 0 0 0 ${DOT_COLOR};
  }
  83.333% {
    box-shadow: ${ORIGIN}px 0 0 0 ${DOT_COLOR}, ${SECOND}px 0 0 0 ${DOT_COLOR}, ${THIRD}px -10px 0 0 ${DOT_COLOR};
  }
  100% {
    box-shadow: ${ORIGIN}px 0 0 0 ${DOT_COLOR}, ${SECOND}px 0 0 0 ${DOT_COLOR}, ${THIRD}px 0 0 0 ${DOT_COLOR};
  }
`;

export const LoadingAnimation = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${DOT_COLOR};
  color: ${DOT_COLOR};
  animation: ${dotTyping} 1.5s infinite linear;
  transform: translate(50px, -50%);
`;

export const Container = styled(BubbleContainer)<ContainerProps>`
  position: relative;
  margin-left: ${ARROW_SIZE}px;
  align-self: flex-start;
  ${Chat} {
    background: #000;
    color: #fff;
  }
  ${Arrow} {
    border-left-color: #000;
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translate(-100%, -55%) rotateZ(180deg);
  }
`;
