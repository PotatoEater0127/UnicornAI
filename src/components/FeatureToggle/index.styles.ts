import styled, { css } from "styled-components";
import { media } from "../../styles/ media.styles";

const BORDER_RADIUS = "100";

type LiProps = {
  $isActive?: boolean;
};

export const Li = styled.li<LiProps>`
  padding: 10px 20px;
  background: transparent;
  border: solid 1px rgb(250, 145, 45);

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: rgb(245, 200, 150);
      color: rgb(150, 85, 55);
      font-weight: 600;
    `}

  &:hover {
    cursor: pointer;
  }

  ${media.xs(`padding: 5px 10px;`)}
  ${media.sm(`padding: 7.5px 15px;`)}
`;

export const Ul = styled.ul`
  align-items: stretch;
  background: rgb(245, 175, 150);
  border-radius: ${BORDER_RADIUS}px;
  color: rgb(100, 60, 60);
  display: flex;
  font-size: ${14 / 16}rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  width: max-content;
  line-height: 1.25rem;
  list-style: none;
  letter-spacing: 0.1px;
  padding: 0;

  ${media.xs(
    css`
      font-size: ${12 / 16}rem;
    `
  )}

  ${Li} {
    &:first-child {
      border-radius: ${BORDER_RADIUS}px 0 0 ${BORDER_RADIUS}px;
    }
    &:last-child {
      border-radius: 0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  ${media.xs(css`
    width: 75%;
  `)}
  ${media.sm(css`
    width: 75%;
  `)}
`;
