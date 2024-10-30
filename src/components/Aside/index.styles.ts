import styled, { css } from "styled-components";
import { media } from "../../styles/ media.styles";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 100dvh;
  width: 40%;
  .avatar {
    display: block;
  }
  ${media.xs(
    css`
      display: none;
    `
  )}
  ${media.sm(
    css`
      display: none;
    `
  )}
  ${media.md(
    css`
      justify-content: center;
      .avatar {
        width: 400px;
        height: 400px;
      }
    `
  )}
`;
