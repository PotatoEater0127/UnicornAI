import styled, { css, keyframes } from "styled-components";
import { media } from "../../styles/ media.styles";

type ButtonProps = {
  $isRecording?: boolean;
};

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(100, 50, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(100, 50, 0, 0);
  }
`;

export const Container = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.xs(css`
    order: 3;
  `)}
`;

export const Button = styled.button<ButtonProps>`
  background: center / 25% no-repeat url("/assets/audio_record_icon.svg");
  background-color: #b074ec;
  border-radius: 50%;
  border-color: transparent;
  box-shadow: 0 0 1px 1px #efa3b9;
  width: 120px;
  height: 120px;

  ${({ $isRecording }) =>
    $isRecording &&
    css`
      animation: ${pulseAnimation} 1.5s infinite;
    `}

  ${media.xs(css`
    width: 50px;
    height: 50px;
  `)}
  ${media.sm(css`
    width: 60px;
    height: 60px;
  `)}
  ${media.md(css`
    width: 70px;
    height: 70px;
  `)}

  &:hover {
    cursor: pointer;
  }
`;
