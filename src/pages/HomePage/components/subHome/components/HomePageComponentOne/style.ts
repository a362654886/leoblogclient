import styled from "styled-components";

export const StyledHomeContainerOne = styled.div`
  display: flex;
  height: 80vh;
  padding-left: 50px;
  align-items: center;
`;

export const StyledHomeContext = styled.div`
  width: 60%;
  display: flex;
  div {
    margin: 0 auto;
  }
  height: 600px;
`;

export const StyledHomeContextDiv = styled.div`
  margin: 0 auto;
  position: relative;
  h3 {
    color: white;
    font-size: 35px;
  }
  p {
    color: #d766f5 !important;
    font-size: 24px;
    font-weight: bold;
    top: 0;
    left: 0;
  }
  div {
    display: flex;
  }
`;

export const StyledImage = styled.div`
  display: inline;
  width: 40%;
  position: relative;
  img {
    margin: 0 auto;
    width: 370px;
    height: 370px;
    object-fit: contain;
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    animation: animate 2s infinite ease alternate;
    @keyframes animate {
      to {
        transform: translateY(50px);
      }
    }
  }
`;
