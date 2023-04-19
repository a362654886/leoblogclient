import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Earth from "./Earth";

const EarthCanvas = () => {
  return (
    <>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={0.1} />
      <directionalLight position={[3, 2, 1]} intensity={2} />
      <Suspense fallback={null}>
        <Earth scale={[3, 3, 3]} />
      </Suspense>
    </>
  );
};

export default EarthCanvas;
