import styled from "styled-components";
import { BubbleContainer } from "../Bubble/index.styles";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 32px;
`;

export const Bubbles = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 60vh;
  overflow-y: auto;
  flex-direction: column-reverse;

  ${BubbleContainer} {
    margin-bottom: 32px;
  }
`;
