import styled from "styled-components";

export const ARROW_SIZE = 39.84;
export const Arrow = styled.div`
  border-top: 17.25px solid transparent;
  border-bottom: 17.25px solid transparent;
  border-left: ${ARROW_SIZE}px solid #fff;
`;

export const Chat = styled.p`
  background: #fff;
  border-radius: 32px;
  font-family: "Inter", serif;
  font-size: 1.25rem;
  line-height: 2rem;
  padding: 32px;
`;

export const BubbleContainer = styled.div`
  position: relative;
`;
