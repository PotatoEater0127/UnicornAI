import styled, { css, keyframes } from "styled-components";
import { media } from "../../styles/ media.styles";

type ButtonProps = {
  $isRecording?: boolean;
};

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
  }
`;

export const Container = styled.div`
  width: 20%;
  order: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<ButtonProps>`
  background: center / 30px no-repeat url("/assets/audio_record_icon.svg");
  background-color: #000;
  border-radius: 50%;
  border-color: transparent;
  box-shadow: 0 0 1px 1px #000;
  width: 120px;
  height: 120px;

  ${({ $isRecording }) =>
    $isRecording &&
    css`
      animation: ${pulseAnimation} 1.5s infinite;
    `}

  ${media.xs(css`
    background-size: 20px;
    width: 50px;
    height: 50px;
  `)}

  ${media.sm(css`
    background-size: 30px;
    width: 80px;
    height: 80px;
  `)}

  &:hover {
    cursor: pointer;
  }
`;
