import { OrbitControls } from "@react-three/drei";
import { FC, Suspense } from "react";
import Web3D from "./models/Web3D";

const WebApplicationModal: FC = () => {
  return (
    <>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={0.1} />
      <directionalLight position={[3, 2, 1]} intensity={2} />
      <Suspense fallback={null}>
        <Web3D scale={[0.3, 0.3, 0.3]} />
      </Suspense>
    </>
  );
};
export default WebApplicationModal;

{
  /*onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
  scale={active ? 1 : 2}*/
}
