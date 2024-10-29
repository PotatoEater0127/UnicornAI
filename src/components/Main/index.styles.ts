import styled, { css } from "styled-components";
import { media } from "../../styles/ media.sytles";
import { BubbleContainer } from "../Bubble/index.styles";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 32px;
  width: 60vw;

  ${media.xs(
    css`
      width: 98vw;
    `
  )}
`;

export const Bubbles = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 60vh;
  overflow-y: auto;
  flex-direction: column-reverse;

  ${BubbleContainer} {
    margin-bottom: 32px;

    ${media.xs(css`
      margin-bottom: 8px;
    `)}
  }
`;

export const Action = styled.div`
  display: flex;
`;
