import styled, { css } from "styled-components";
import { media } from "./styles/ media.sytles";

export const Container = styled.div`
  background: center bottom/ cover no-repeat url("/assets/background.png");
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: stretch;

  ${media.xs(
    css`
      justify-content: center;
    `
  )}
`;
