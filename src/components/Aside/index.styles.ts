import styled, { css } from "styled-components";
import { media } from "../../styles/ media.sytles";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: end;
  .avatar {
    width: 600px;
    height: 600px;
  }
  ${media.xs(
    css`
      display: none;
    `
  )}
`;
