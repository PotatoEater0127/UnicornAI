import styled, { css, keyframes } from "styled-components";

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

  &:hover {
    cursor: pointer;
  }
`;