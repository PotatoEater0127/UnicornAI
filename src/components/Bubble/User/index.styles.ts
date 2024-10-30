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
  align-self: flex-end;

  ${media.xs(
    css`
      margin-right: ${ARROW_SIZE_XS}px;
    `
  )}
  ${media.sm(
    css`
      margin-right: ${ARROW_SIZE_SM}px;
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
