import styled, { css } from "styled-components";
import { media } from "../../styles/ media.styles";
import { BubbleContainer } from "../Bubble/index.styles";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
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
  height: 75dvh;
  overflow-y: auto;
  padding: 8px;
  align-items: center;

  /* hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }

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
  flex: 1;
  align-items: center;
  gap: 8px;
  ${media.xs(
    css`
      align-items: center;
      justify-content: end;
    `
  )};
`;
