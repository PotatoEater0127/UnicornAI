import styled from "styled-components";

export const Form = styled.form`
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 32px;
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
