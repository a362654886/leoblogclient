import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import ThreeJsModal from "../../subHome/components/ThreeJsModal";

const EarthCanvas = () => {
  return (
    <>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={0.1} />
      <directionalLight position={[3, 2, 1]} intensity={2} />
      <Suspense fallback={null}>
        <ThreeJsModal />
      </Suspense>
    </>
  );
};

export default EarthCanvas;
