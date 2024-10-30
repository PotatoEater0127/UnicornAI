import styled from "styled-components";
import { Arrow, ARROW_SIZE, BubbleContainer, Chat } from "../index.styles";

export const Container = styled(BubbleContainer)`
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
