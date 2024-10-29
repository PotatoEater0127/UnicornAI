import styled, { css } from "styled-components";
import { media } from "../../styles/ media.sytles";

export const ARROW_SIZE = 39.84;
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
`;

export const Chat = styled.p`
  background: #fff;
  border-radius: 32px;
  font-family: "Inter", serif;
  font-size: 1.25rem;
  line-height: 2rem;
  padding: 32px;

  ${media.xs(
    css`
      border-radius: 16px;
      font-size: 1rem;
      padding: 8px;
      line-height: 1.1rem;
    `
  )}
`;

export const BubbleContainer = styled.div`
  position: relative;
`;
