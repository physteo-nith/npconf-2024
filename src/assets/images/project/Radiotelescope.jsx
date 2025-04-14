import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../../../components/about/Loader";

const RADIOTELESCOPE = ({ isMobile }) => {
    const radiotelescope = useGLTF("./RadioTelescope.gltf");
    const meshRef = useRef();
    const [isHovered, setIsHovered] = useState(false);

    // Apply gradient material to all meshes
    useEffect(() => {
        radiotelescope.scene.traverse((child) => {
            if (child.isMesh) {
                // Create material with white-to-gray gradient
                child.material.color.set('#ffffff');    // Base white color
                child.material.metalness = 0.6;         // Metallic appearance
                child.material.roughness = 0.3;         // Surface texture
                child.material.envMapIntensity = 2.0;   // Reflection intensity
                child.material.emissive.set('#808080'); // Gray emission
                child.material.emissiveIntensity = 0.4; // Subtle glow
            }
        });
    }, [radiotelescope]);

    // Continuous rotation animation that pauses on hover
    useFrame((state, delta) => {
        if (!isHovered && meshRef.current) {
            meshRef.current.rotation.y += delta * 0.8;
        }
    });

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
        >
            {/* Gradient lighting setup */}
            <ambientLight intensity={0.6} color="#ffffff" />
            <hemisphereLight
                intensity={1.0}
                groundColor='#4a4a4a'
                color='#ffffff'
            />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.5}
                penumbra={1}
                intensity={1.8}
                castShadow
                shadow-mapSize={1024}
                color='#ffffff'
            />
            <spotLight
                position={[20, -30, -10]}
                angle={0.8}
                penumbra={1}
                intensity={0.8}
                color='#a0a0a0'
            />
            <pointLight position={[0, 0, 0]} intensity={1.5} color="#d3d3d3" />
            <pointLight position={[-5, 0, -5]} intensity={0.8} color="#808080" />

            <primitive
                object={radiotelescope.scene}
                scale={isMobile ? 0.06 : 0.06}
                position={[0, -3.2, -0.7]}
                rotation={[Math.PI / 2, Math.PI, Math.PI / 4]}
            />
        </mesh>
    );
};

const RadioTelescope = () => {
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
            frameloop='always'  // Changed from 'demand' to 'always' for continuous animation
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{
                preserveDrawingBuffer: true,
                toneMappingExposure: 1.5  // Enhanced exposure for metallic effect
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <RADIOTELESCOPE isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
}

export default RadioTelescope;