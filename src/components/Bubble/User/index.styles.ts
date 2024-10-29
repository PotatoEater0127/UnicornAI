import styled from "styled-components";
import Arrow, { ARROW_SIZE } from "../ components/Arrow";
import Chat from "../ components/Chat";

export const Container = styled.div`
  position: relative;
  margin-right: ${ARROW_SIZE}px;
  ${Chat} {
    background: #fff;
  }
  ${Arrow} {
    border-left-color: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
  }
`;
