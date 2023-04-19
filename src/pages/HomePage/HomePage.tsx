import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBody, StyledFooter, StyledHeader, StyledHome } from "./style";
import logo from "../../img/logo.jpg";

interface HomePageProps {
  state: number;
  context?: JSX.Element;
}

const HomePage: FC<HomePageProps> = (props) => {
  const history = useNavigate();

  const subPages = ["", "blogs/null", "aboutMe"];

  const [value] = useState(props.state);

  const handleChange = (newValue: number) => {
    history(`/${subPages[newValue]}`);
  };

  return (
    <StyledHome>
      <StyledHeader>
        <img src={logo} />
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => handleChange(newValue)}
        >
          <BottomNavigationAction label="Home" />
          <BottomNavigationAction label="Blogs" />
          <BottomNavigationAction label="About me" />
        </BottomNavigation>
      </StyledHeader>
      <StyledBody>{props.context}</StyledBody>
    </StyledHome>
  );
};
export default HomePage;
