import styled, { css } from "styled-components";
import { BREAK_POINTS, media } from "./styles/ media.styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: center bottom/ cover no-repeat url("/assets/background.png");
  width: 100vw;
`;

export const Content = styled.div`
  max-width: ${BREAK_POINTS.XLG}px;
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: space-between;
  padding-left: 2.5%;
  padding-right: 5%;

  ${media.xs(
    css`
      justify-content: center;
      padding: 0;
    `
  )}
  ${media.sm(
    css`
      justify-content: center;
      padding: 0;
    `
  )}
`;
