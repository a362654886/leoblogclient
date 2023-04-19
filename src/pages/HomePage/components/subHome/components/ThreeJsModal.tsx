import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { FC, useRef } from "react";

const ThreeJsModal: FC = () => {
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
        <boxGeometry args={[2, 2, 2]} />

        <meshStandardMaterial>
          <RenderTexture attach={"map"}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <color attach="background" args={["#dc9dcd"]} />
            <Text ref={textRef} fontSize={2} color="#555">
              Blogs
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    </>
  );
};
export default ThreeJsModal;

{
  /*onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
  scale={active ? 1 : 2}*/
}
