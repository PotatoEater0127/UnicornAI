import styled, { css } from "styled-components";
import { media } from "../../../styles/ media.styles";
import {
  Arrow,
  ARROW_SIZE,
  ARROW_SIZE_SM,
  ARROW_SIZE_XS,
  BubbleContainer,
  Chat,
} from "../index.styles";

export const Container = styled(BubbleContainer)`
  margin-right: ${ARROW_SIZE}px;
  margin-left: 10%;
  align-self: flex-end;

  ${media.xs(
    css`
      margin-right: ${ARROW_SIZE_XS}px;
      margin-left: 30%;
    `
  )}
  ${media.sm(
    css`
      margin-right: ${ARROW_SIZE_SM}px;
      margin-left: 30%;
    `
  )}

  ${Chat} {
    background: #fff;
  }
  ${Arrow} {
    border-left-color: #fff;
    position: absolute;
    top: 50%;
    right: 2px;
    transform: translate(100%, -50%);
  }
`;
