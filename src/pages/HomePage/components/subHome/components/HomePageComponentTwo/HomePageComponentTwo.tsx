import { Button } from "@mui/material";
import { FC } from "react";
import { Canvas } from "react-three-fiber";
import ThreeJsModal from "../ThreeJsModal";
import {
  StyledCanvas,
  StyledHomeContainerTwo,
  StyledLineOne,
  StyledLineTwo,
} from "./style";
import { useNavigate } from "react-router-dom";

const HomePageComponentTwo: FC = () => {
  const history = useNavigate();

  const getCanvas = () => {
    return (
      <>
        <Canvas
          gl={{ antialias: true }}
          style={{
            width: "100%",
            height: "400px",
          }}
          camera={{ fov: 25, position: [5, 5, 5] }}
        >
          <ThreeJsModal />
        </Canvas>
      </>
    );
  };

  return (
    <>
      <StyledHomeContainerTwo>
        <StyledCanvas>{getCanvas()}</StyledCanvas>
        <div>
          <StyledLineOne>
            Learn, Synthesize, Innovate: Empowering your technical journey.
          </StyledLineOne>
          <StyledLineTwo>
            <span>—</span> About leo's blogs
          </StyledLineTwo>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history(`/leoblogclient/blogs/null`)}
          >
            More
          </Button>
        </div>
      </StyledHomeContainerTwo>
    </>
  );
};
export default HomePageComponentTwo;
