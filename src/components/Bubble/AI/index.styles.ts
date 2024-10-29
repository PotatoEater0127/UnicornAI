import styled from "styled-components";
import Arrow, { ARROW_SIZE } from "../ components/Arrow";
import Chat from "../ components/Chat";

export const Container = styled.div`
  position: relative;
  margin-left: ${ARROW_SIZE}px;
  ${Chat} {
    background: #000;
    color: #fff;
  }
  ${Arrow} {
    border-left-color: #000;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%) rotateZ(180deg);
  }
`;
