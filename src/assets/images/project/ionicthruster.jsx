import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../../../components/about/Loader";

const Thruster = ({ isMobile }) => {
  const thruster = useGLTF("./ionicthruster.gltf");
  const thrusterRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  // Apply gradient material to all meshes
  useEffect(() => {
    thruster.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set('#ffffff');
        child.material.metalness = 0.6;
        child.material.roughness = 0.3;
        child.material.envMapIntensity = 2.0;
        child.material.emissive.set('#808080');
        child.material.emissiveIntensity = 0.4;
      }
    });
  }, [thruster]);

  // Continuous rotation animation
  useFrame((state, delta) => {
    if (!isHovered && thrusterRef.current) {
      thrusterRef.current.rotation.y += delta * 0.8; // Slow, continuous rotation
    }
  });

  return (
    <mesh
      ref={thrusterRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {/* Base ambient light */}
      <ambientLight intensity={0.6} color="#ffffff" />
      
      {/* Gradient hemisphere light - white to gray */}
      <hemisphereLight
        intensity={1.0}
        groundColor='#4a4a4a'
        color='#ffffff'
      />
      
      {/* Main top light */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.5}
        penumbra={1}
        intensity={1.8}
        castShadow
        shadow-mapSize={1024}
        color='#ffffff'
      />
      
      {/* Gray accent light from bottom */}
      <spotLight
        position={[20, -30, -10]}
        angle={0.8}
        penumbra={1}
        intensity={0.8}
        color='#a0a0a0'
      />

      {/* Center highlight */}
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#d3d3d3" />
      
      {/* Gray rim light */}
      <pointLight position={[-5, 0, -5]} intensity={0.8} color="#808080" />

      <primitive
        object={thruster.scene}
        scale={isMobile ? 0.07 : 0.07}
        position={[0, -1, -2]}
        rotation={[-0.01, 0, -0.1]}
      />
    </mesh>
  );
};

const Ionicthruster = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always' // Changed from 'demand' to 'always' for continuous animation
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        toneMappingExposure: 1.5
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Thruster isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Ionicthruster;