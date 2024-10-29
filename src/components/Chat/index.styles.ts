import styled from "styled-components";

const BORDER_RADIUS = 16;

export const Form = styled.form`
  background-color: #fff;
  border-radius: ${BORDER_RADIUS}px;
  display: flex;
  align-items: center;
  padding: 32px;
  position: relative;
  width: 1000px;

  .textarea {
    font-family: "Inter", sans-serif;
    border: none;
    font-size: 1.25rem;
    line-height: 2rem;
    outline: none;
    resize: none;
    flex-grow: 1;
    &::placeholder {
      color: #8d8d8d;
      font-size: 2rem;
    }
  }

  .send {
    background: center / contain no-repeat url("/assets/send_icon.svg");
    border-color: transparent;
    height: 40px;
    width: 40px;
    &:hover {
      cursor: pointer;
    }
  }
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
