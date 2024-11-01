import styled, { css } from "styled-components";
import { media } from "../../styles/ media.styles";

const BORDER_RADIUS = 16;

type FormProps = {
  $hidden?: boolean;
};

export const Form = styled.form<FormProps>`
  background-color: #fff;
  border-radius: ${BORDER_RADIUS}px;
  display: flex;
  align-items: center;
  padding: 32px;
  position: relative;
  transition: opacity 0.12s ease-in;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};

  ${media.xs(
    css`
      padding: 8px 12px;
    `
  )}
  ${media.sm(
    css`
      padding: 16px;
    `
  )}

  .textarea {
    font-family: "Inter", sans-serif;
    border: none;
    font-size: 1.25rem;
    line-height: 1;
    outline: none;
    resize: none;
    flex-grow: 1;
    ${media.xs(
      css`
        font-size: ${12 / 16}rem;
      `
    )}
    &::placeholder {
      color: #8d8d8d;
      font-size: 1.3rem;
      ${media.xs(
        css`
          font-size: 1rem;
        `
      )}
    }
    &:disabled {
      background-color: initial;
    }
    /* hide scrollbar */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .send {
    background: center / contain no-repeat url("/assets/send_icon.svg");
    border-color: transparent;
    height: 40px;
    width: 40px;

    ${media.xs(
      css`
        height: 25px;
        width: 25px;
      `
    )}

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 95%;
`;

export const Loading = styled.div`
  background: gray;
  border-radius: ${BORDER_RADIUS}px;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
