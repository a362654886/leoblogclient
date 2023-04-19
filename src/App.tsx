import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { StyledApp } from "./appCss";
import { routes } from "./config/routeConfig";
import "react-quill/dist/quill.snow.css";

const App: FC = () => {
  const element = useRoutes(routes);
  return (
    <>
      <StyledApp>{element}</StyledApp>
    </>
  );
};

export default App;
