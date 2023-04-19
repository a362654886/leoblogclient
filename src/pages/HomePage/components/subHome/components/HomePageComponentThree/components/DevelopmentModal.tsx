import { OrbitControls } from "@react-three/drei";
import { FC, Suspense, useRef } from "react";
import React3D from "./models/React3D";

const DevelopmentModal: FC = () => {
  return (
    <>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={0.1} />
      <directionalLight position={[3, 2, 1]} intensity={2} />
      <Suspense fallback={null}>
        <React3D scale={[0.5, 0.5, 0.5]} />
      </Suspense>
    </>
  );
};
export default DevelopmentModal;

{
  /*onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
  scale={active ? 1 : 2}*/
}
