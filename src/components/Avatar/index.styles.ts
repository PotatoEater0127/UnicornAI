import styled, { keyframes } from "styled-components";

const float = keyframes`
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-20px);
	}
	100% {
		transform: translateY(0px);
	}
`;

const swing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    7.5% {
        transform: rotate(15deg);
    }
    15% {
        transform: rotate(-10deg);
    }
    22.5% {
        transform: rotate(5deg);
    }
    30% {
        transform: rotate(0deg);
    }
`;

export const Container = styled.div`
  animation: ${float} 6s ease-in-out infinite;
`;

export const Base = styled.img`
  width: 100%;
  position: relative;
`;

export const Earring = styled.img`
  width: 4.5%;
  position: absolute;
  right: 30%;
  top: 56%;
  transform-origin: 50% 0;
  animation: ${swing} 6.5s ease-in-out infinite;
`;

export const Mouth = styled.img`
  width: 9%;
  position: absolute;
  left: 47.5%;
  top: 62.5%;
`;
