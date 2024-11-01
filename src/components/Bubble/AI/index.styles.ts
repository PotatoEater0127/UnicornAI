import styled, { css, keyframes } from "styled-components";
import { media } from "../../../styles/ media.styles";
import { Arrow, ARROW_SIZE, BubbleContainer, Chat } from "../index.styles";

type ContainerProps = {
  $isLoading: boolean;
};

const DOT_COLOR = "#fff";
const DISTANCE = 17.5;
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
  ${media.xs(
    css`
      width: 5px;
      height: 5px;
    `
  )}
  ${media.sm(
    css`
      width: 5px;
      height: 5px;
    `
  )}
`;

export const Container = styled(BubbleContainer)<ContainerProps>`
  position: relative;
  margin-left: ${ARROW_SIZE}px;
  align-self: flex-start;
  display: flex;

  ${media.xs(
    css`
      margin-left: 0;
    `
  )}
  ${media.sm(
    css`
      margin-left: 0;
    `
  )}

  ${Chat} {
    background: linear-gradient(135deg, #c084fc 0%, #d484e0 50%, #efa3b9 100%);
    color: #fff;
    animation: type 4s steps(60, end);
  }
  ${Arrow} {
    border-left-color: #c084fc;
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translate(-100%, -55%) rotateZ(180deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-right: 10%;
  ${media.xs(
    css`
      width: 60%;
      margin-right: 25%;
    `
  )}
  ${media.sm(
    css`
      width: 60%;
      margin-right: 25%;
    `
  )}
`;

export const MiniAvatar = styled.img`
  display: none;
  margin-right: auto;
  ${media.xs(
    css`
      width: 10%;
      display: block;
    `
  )}
  ${media.sm(
    css`
      width: 10%;
      display: block;
    `
  )}
`;
