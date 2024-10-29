import styled from "styled-components";
import { BubbleContainer } from "../Bubble/index.styles";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Bubbles = styled.div`
  display: flex;
  flex-direction: column;

  ${BubbleContainer} {
    margin-bottom: 32px;
  }
`;
