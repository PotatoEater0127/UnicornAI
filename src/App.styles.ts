import styled, { css } from "styled-components";
import { BREAK_POINTS, media } from "./styles/ media.sytles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: center bottom/ cover no-repeat url("/assets/background.png");
  width: 100vw;
`;

export const Content = styled.div`
  max-width: ${BREAK_POINTS.XLG}px;
  height: 100dvh;
  display: flex;
  justify-content: stretch;

  ${media.xs(
    css`
      justify-content: center;
    `
  )}

  ${media.lg(
    css`
      padding-left: 65px;
      padding-right: 130px;
    `
  )}
`;
