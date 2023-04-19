import styled from "styled-components";

export const StyledHomeContainerThree = styled.div`
  display: flex;
  height: 100vh;
  padding-left: 50px;
  align-items: center;
`;

export const StyledAnimationDiv = styled.div`
  display: inline;
  width: 50%;
`;

export const StyledCanvasDiv = styled.div`
  width: 50%;
`;

export const StyledAnimation = styled.div`
  margin-left: 80px;
  position: relative;
  margin-bottom: 30px;
`;

export const StyledAnimationText = styled.div`
  color: transparent;
  cursor: pointer;
  font-size: 50px;
  font-weight: bold;
  top: 0;
  left: 0;
  -webkit-text-stroke: 0.5px white;

  ::after {
    content: "${(props) => props.title}";
    position: absolute;
    top: 0px;
    left: 0px;
    color: #d766f5;
    width: 0;
    overflow: hidden;
    height: 400px;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
