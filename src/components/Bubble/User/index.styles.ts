import styled from "styled-components";
import { Arrow, ARROW_SIZE, BubbleContainer, Chat } from "../index.styles";

export const Container = styled(BubbleContainer)`
  margin-right: ${ARROW_SIZE}px;
  ${Chat} {
    background: #fff;
  }
  ${Arrow} {
    border-left-color: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
  }
`;
