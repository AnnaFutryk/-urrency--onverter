import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
  }
`;

export const SpanFirst = styled.span`
  position: absolute;
  color: transparent;
  display: inline-block;
  font-size: 40px;
  letter-spacing: 4px;
  top: 200px;
  -webkit-text-stroke: 0.5px #ddd;
`;

export const SpanSecond = styled.span`
  position: absolute;
  color: aqua;
  display: inline-block;
  font-size: 40px;
  letter-spacing: 4px;
  top: 200px;
  -webkit-text-stroke: 1px #ddd;
  animation: ${animation} 3000ms ease-in-out infinite;
`;

export const Equal = styled.div`
  font-size: 28px;
  color: lightgrey;
`;
