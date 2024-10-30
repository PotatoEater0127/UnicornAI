import styled, { css } from "styled-components";
import { media } from "../../styles/ media.styles";
import { BubbleContainer } from "../Bubble/index.styles";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 32px;
  flex: 1;

  ${media.xs(
    css`
      width: 98vw;
    `
  )}
`;

export const Bubbles = styled.div`
  display: flex;
  flex-direction: column;
  height: 70dvh;
  overflow-y: auto;
  padding: 8px;
  flex-direction: column-reverse;

  ${media.xs(css`
    margin-bottom: 8px;
    height: 85dvh;
  `)}

  ${BubbleContainer} {
    margin-bottom: 32px;

    ${media.xs(css`
      margin-bottom: 8px;
    `)}
    ${media.sm(css`
      margin-bottom: 8px;
    `)}
  }
`;

export const Action = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  ${media.xs(
    css`
      align-items: center;
      justify-content: end;
    `
  )};
`;
