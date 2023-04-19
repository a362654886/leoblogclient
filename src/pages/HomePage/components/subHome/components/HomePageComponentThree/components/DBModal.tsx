import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { FC, useRef } from "react";

const DBModal: FC = () => {
  const textRef = useRef<any>();

  useFrame(
    (state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime))
  );

  return (
    <>
      <ambientLight />
      <directionalLight position={[3, 2, 1]} />
      <OrbitControls enableZoom={false} autoRotate />
      <mesh position={[0, 0, 0]}>
        <Text ref={textRef} fontSize={1} color="#555">
          Database
        </Text>
      </mesh>
    </>
  );
};
export default DBModal;

{
  /*onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
  scale={active ? 1 : 2}*/
}
