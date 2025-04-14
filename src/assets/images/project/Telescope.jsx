import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../../../components/about/Loader";

const Telescope = ({ isMobile }) => {
    const telescope = useGLTF("./Telescope.gltf");
    const meshRef = useRef();
    const [isHovered, setIsHovered] = useState(false);

    // Apply metallic gradient material
    useEffect(() => {
        telescope.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set('#ffffff');
                child.material.metalness = 0.6;
                child.material.roughness = 0.3;
                child.material.envMapIntensity = 2.0;
                child.material.emissive.set('#808080');
                child.material.emissiveIntensity = 0.4;
            }
        });
    }, [telescope]);

    // Add continuous rotation with hover pause
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
            {/* Enhanced lighting system */}
            <ambientLight intensity={0.6} color="#ffffff" />
            <hemisphereLight 
                intensity={1.0}
                groundColor='#4a4a4a'
                color='#ffffff'
            />
            <spotLight
                position={[-25, 55, 15]}
                angle={0.45}
                penumbra={0.8}
                intensity={2.0}
                castShadow
                shadow-mapSize={2048}
                color='#ffffff'
            />
            <spotLight
                position={[25, -35, -15]}
                angle={0.75}
                penumbra={1}
                intensity={1.0}
                color='#a5a5a5'
            />
            <pointLight position={[0, 2, 0]} intensity={1.8} color="#d3d3d3" />
            <pointLight position={[5, -1, -3]} intensity={0.9} color="#909090" />

            <primitive
                object={telescope.scene}
                scale={isMobile ? 0.0068 : 0.0068}
                position={[0, -3, -2]}
                rotation={[3 * Math.PI / 2, 0, 3 * Math.PI / 2]}
            />
        </mesh>
    );
};

const TELESCOPE = () => {
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
                toneMappingExposure: 1.5
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Telescope isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
}

export default TELESCOPE;