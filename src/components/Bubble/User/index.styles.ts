import styled from "styled-components";
import { Arrow, ARROW_SIZE, BubbleContainer, Chat } from "../index.styles";

export const Container = styled(BubbleContainer)`
  margin-right: ${ARROW_SIZE}px;
  align-self: flex-end;
  ${Chat} {
    background: #fff;
  }
  ${Arrow} {
    border-left-color: #fff;
    position: absolute;
    top: 50%;
    right: 2px;
    transform: translate(100%, -50%);
  }
`;
