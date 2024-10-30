import styled, { css } from "styled-components";
import { media } from "../../styles/ media.styles";

export const ARROW_SIZE = 39.84;
export const ARROW_SIZE_SM = 25;
export const ARROW_SIZE_XS = 20;

export const Arrow = styled.div`
  border-top: 17.25px solid transparent;
  border-bottom: 17.25px solid transparent;
  border-left: ${ARROW_SIZE}px solid #fff;

  ${media.xs(
    css`
      border-top-width: 8px;
      border-bottom-width: 8px;
      border-left-width: ${ARROW_SIZE_XS}px;
    `
  )}
  ${media.sm(
    css`
      border-top-width: 8px;
      border-bottom-width: 8px;
      border-left-width: ${ARROW_SIZE_XS}px;
    `
  )}
`;

export const Chat = styled.p`
  background: #fff;
  border-radius: 32px;
  font-family: "Inter", serif;
  font-size: 1.25rem;
  line-height: 2rem;
  padding: 32px;
  position: relative;
  white-space: pre-line;

  ${media.xs(
    css`
      border-radius: 16px;
      font-size: ${12 / 16}rem;
      padding: 8px;
      line-height: 1.1rem;
    `
  )}
  ${media.sm(
    css`
      font-size: 1rem;
      padding: 16px;
      line-height: 1.2rem;
    `
  )}
`;

export const BubbleContainer = styled.div`
  position: relative;
  max-width: 1000px;
  min-width: 50px;
`;
