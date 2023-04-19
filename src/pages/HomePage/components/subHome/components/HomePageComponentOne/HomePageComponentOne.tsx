import { FC, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import ImgBgModal from "../ImgBgModal";
import {
  StyledHomeContainerOne,
  StyledHomeContext,
  StyledHomeContextDiv,
  StyledImage,
} from "./style";
import BallModal from "./component/BallModal";
import CanvasLoader from "./component/CanvasLoader";
import { OrbitControls } from "@react-three/drei";

import css from "./component/assets/css.png";
import html from "./component/assets/html.png";
import mongodb from "./component/assets/mongodb.png";
import nodejs from "./component/assets/nodejs.png";
import reactjs from "./component/assets/reactjs.png";
import redux from "./component/assets/redux.png";
import typescript from "./component/assets/typescript.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import moon from "../../../../../../img/moon.png";

export const images = [css, nodejs, html, mongodb];
export const images2 = [reactjs, redux, typescript];

const HomePageComponentOne: FC = () => {
  const history = useNavigate();

  const getImgBgCanvas = () => {
    return (
      <>
        <Canvas
          gl={{ antialias: true }}
          style={{
            width: "100%",
            height: "600px",
          }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} color={"red"} />
          <ImgBgModal />
        </Canvas>
        <img src={moon} />
      </>
    );
  };

  const getBallCanvas = (img: any, key: number) => {
    return (
      <div key={key}>
        <Canvas
          style={{
            width: "200px",
            height: "200px",
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <BallModal position={[0, 0, 0]} imgUrl={img} />
          </Suspense>
        </Canvas>
      </div>
    );
  };

  return (
    <>
      <StyledHomeContainerOne>
        <StyledHomeContext>
          <StyledHomeContextDiv>
            <h3>Hi, I'm Leo Lu</h3>
            <p>
              an experienced and results-driven full-stack developer, skilled in
              crafting effective websites and applications. A technically
              proficient problem-solver with a calm and focused demeanour.
              Seeking new challenges to further improve and grow with a leading
              company.
            </p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history(`/leoblogclient/aboutMe`)}
            >
              About Me
            </Button>
            <div>{images.map((item, index) => getBallCanvas(item, index))}</div>
            <div>
              {images2.map((item, index) => getBallCanvas(item, index))}
            </div>
          </StyledHomeContextDiv>
        </StyledHomeContext>
        <StyledImage>{getImgBgCanvas()}</StyledImage>
      </StyledHomeContainerOne>
    </>
  );
};
export default HomePageComponentOne;
