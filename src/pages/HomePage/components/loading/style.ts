import styled, { keyframes } from "styled-components";

export const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Outer2 = styled.div`
  border-radius: 50%;
  border-top: 2px solid #da11d0;
  border-bottom: 2px solid transparent;
  border-left: 2px solid #da11d0;
  border-right: 2px solid #da11d0;
  width: 320px;
  height: 320px;
  animation: ${rotateAnimation} 7s linear infinite;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Outer = styled.div`
  border-radius: 50%;
  border-top: 4px solid #cc0954;
  border-bottom: 4px solid #cc0954;
  border-left: 4px solid transparent;
  border-right: 4px solid #cc0954;
  width: 300px;
  height: 300px;
  animation: ${rotateAnimation} 5s linear infinite;
`;

export const Circle = styled.div`
  border-radius: 50%;
  border-top: 4px double transparent;
  border-bottom: 4px double #ff9900;
  border-left: 4px double #ff9900;
  border-right: 4px double #ff9900;
  width: 280px;
  height: 280px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextDiv = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  background: linear-gradient(to right, #da11d0, #cc0954, #ff9900);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 3px 3px #fff;
`;
