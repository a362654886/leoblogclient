import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { FC } from "react";

const ImgBgModal: FC = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <OrbitControls enableZoom={false} />
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#321449"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </>
  );
};
export default ImgBgModal;
