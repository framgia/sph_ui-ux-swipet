import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Scene';

const AnimationForHeroImage = () => (
  <Canvas>
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -1, -10]} />
    <pointLight position={[-10, -1, 10]} />
    <pointLight position={[0, 0, 200]} />
    <Model position={[0, -2.2, 0]} rotation={[0, 5.8, 0]} scale={[1, 1, 1]} />
  </Canvas>
);

export default AnimationForHeroImage;
