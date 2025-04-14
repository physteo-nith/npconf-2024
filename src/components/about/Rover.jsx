import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const RoverModel = ({ isMobile }) => {
  const rover = useGLTF("/Perseverance.gltf");

  useEffect(() => {
    rover.scene.traverse((child) => {
      if (child.isMesh) {
        // Apply different materials based on mesh position/name
        if (child.name.includes('body') || child.name.includes('main')) {
          // Main body parts - Bright gold
          child.material.color.set("#FFD700"); // Pure gold
          child.material.metalness = 0.9;
          child.material.roughness = 0.1;
          child.material.emissive.set("#4A3500");
          child.material.emissiveIntensity = 0.4;
        } else {
          // Other parts - Pearlescent white
          child.material.color.set("#FFFFFF"); // Pure white
          child.material.metalness = 0.7;
          child.material.roughness = 0.2;
          child.material.emissive.set("#404040");
          child.material.emissiveIntensity = 0.3;
        }
        // Enhanced reflectivity for all parts
        child.material.envMapIntensity = 3.0;
      }
    });
  }, [rover]);

  return (
    <mesh>
      {/* Enhanced ambient light */}
      <ambientLight intensity={0.7} />

      {/* Main bright light */}
      <directionalLight position={[-20, 50, 10]} intensity={2.5} color="#FFFFFF" />

      {/* Warm accent light for gold */}
      <pointLight position={[10, -10, -10]} intensity={1.2} color="#FFE5B4" />

      {/* Cool light for white parts */}
      <pointLight position={[-10, 0, 10]} intensity={0.8} color="#E6F0FF" />

      {/* Ground fill light */}
      <pointLight position={[0, -5, 0]} intensity={0.6} color="#FFFFFF" />

      <primitive
        object={rover.scene}
        scale={isMobile ? 2.2 : 1.7}
        position={[0, -1, -2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const RoverCanvas = () => {
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
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        toneMapping: 3,
        outputEncoding: 3,
      }}
    >
      <color attach="background" args={["#000000"]} /> {/* Pure black background */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={0.5} />
        <RoverModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RoverCanvas;
