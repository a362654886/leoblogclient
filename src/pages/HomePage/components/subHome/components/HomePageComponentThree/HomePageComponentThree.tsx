import { FC, useState } from "react";
import { Canvas } from "react-three-fiber";
import WebApplicationModal from "./components/WebApplicationModal";
import DBModal from "./components/DBModal";
import DevelopmentModal from "./components/DevelopmentModal";
import {
  StyledAnimation,
  StyledAnimationDiv,
  StyledAnimationText,
  StyledCanvasDiv,
  StyledHomeContainerThree,
} from "./style";

const HomePageComponentThree: FC = () => {
  const [rightComponent, setRightComponent] = useState("development");

  const getCanvas = () => {
    return (
      <>
        <Canvas
          style={{
            width: "100%",
            height: "400px",
          }}
          camera={{ fov: 25, position: [5, 5, 5] }}
        >
          {rightComponent === "development" ? (
            <DevelopmentModal />
          ) : rightComponent === "webApplication" ? (
            <WebApplicationModal />
          ) : (
            <DBModal />
          )}
        </Canvas>
      </>
    );
  };

  return (
    <>
      <StyledHomeContainerThree>
        <StyledAnimationDiv>
          <StyledAnimation>
            <StyledAnimationText
              title={"Development"}
              onMouseEnter={() => setRightComponent("development")}
            >
              Development
            </StyledAnimationText>
          </StyledAnimation>
          <StyledAnimation>
            <StyledAnimationText
              title={"Web Application"}
              onMouseEnter={() => setRightComponent("webApplication")}
            >
              Web Application
            </StyledAnimationText>
          </StyledAnimation>
          <StyledAnimation>
            <StyledAnimationText
              title={"Database"}
              onMouseEnter={() => setRightComponent("Database")}
            >
              Database
            </StyledAnimationText>
          </StyledAnimation>
        </StyledAnimationDiv>
        <StyledCanvasDiv>{getCanvas()}</StyledCanvasDiv>
      </StyledHomeContainerThree>
    </>
  );
};
export default HomePageComponentThree;
