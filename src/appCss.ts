import styled from "styled-components";
import backgroundImg from "./img/bg.jpeg";

export const StyledApp = styled.div`
  min-height: 100vh;
  font-size: 14px;
  padding: 5px;
  margin: 0px;
  position: relative;
  h1,
  h2,
  h3,
  h4,
  p,
  span,
  li {
    font-family: Arial;
  }
  button {
    height: 30px;
  }
  .ql-syntax {
    background-color: black;
    color: white;
    padding: 5px 0px 5px 10px;
    width: 80%;
  }
  .MuiInputBase-input {
    padding: 10px;
  }
  .MuiButtonBase-root,
  .Mui-selected {
    color: white !important;
  }
  background-image: url(${backgroundImg});
  background-size: cover;
  background-attachment: fixed;
`;
