import styled from "styled-components";

export const StyledHome = styled.div`
  padding-left: 20px;
`;

export const StyledHeader = styled.div`
  display: flex;
  img {
    height: 100px;
    width: 200px;
  }
  .MuiBottomNavigation-root {
    background-color: transparent;
    height: 160px;
  }
  .MuiBottomNavigationAction-root {
    height: 55px;
    width: 120px;
  }
  .MuiBottomNavigationAction-label,
  .MuiBottomNavigationAction-label {
    padding-top: 50px;
    font-size: 18px !important;
    color: white;
  }
  .Mui-selected {
    color: pink;
  }
  span {
    font-size: 18px;
  }
`;

export const StyledBody = styled.div`
  width: 100%;
`;

export const StyledFooter = styled.div`
  height: 40px;
  position: absolute;
  bottom: 5px;
`;
