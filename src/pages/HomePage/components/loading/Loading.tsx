import { FC } from "react";
import { Circle, Container, Outer, Outer2, TextDiv } from "./style";

const Loading: FC = () => {
  return (
    <>
      <Container>
        <Outer2>
          <Outer />
          <Circle>
            <TextDiv>Loading...</TextDiv>
          </Circle>
        </Outer2>
      </Container>
    </>
  );
};
export default Loading;
