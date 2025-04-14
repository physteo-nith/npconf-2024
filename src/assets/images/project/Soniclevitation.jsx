import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../../../components/about/Loader";

const Sonic = ({ isMobile }) => {
    const sonic = useGLTF("./Soniclevitation.gltf");
    const meshRef = useRef();
    const [isHovered, setIsHovered] = useState(false);

    // Apply metallic gradient material
    useEffect(() => {
        sonic.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set('#ffffff');
                child.material.metalness = 0.65;
                child.material.roughness = 0.25;
                child.material.envMapIntensity = 2.2;
                child.material.emissive.set('#909090');
                child.material.emissiveIntensity = 0.45;
            }
        });
    }, [sonic]);

    // Add continuous rotation with hover pause
    useFrame((state, delta) => {
        if (!isHovered && meshRef.current) {
            meshRef.current.rotation.y += delta * 0.8; // Using same speed as Ramjet
        }
    });

    return (
        <mesh 
            ref={meshRef}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
        >
            {/* Enhanced lighting system */}
            <ambientLight intensity={0.7} color="#f0f0f0" />
            <hemisphereLight 
                intensity={1.2}
                groundColor='#505050'
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
            <pointLight position={[0, 2, 0]} intensity={1.8} color="#e0e0e0" />
            <pointLight position={[5, -1, -3]} intensity={0.9} color="#909090" />

            <primitive
                object={sonic.scene}
                scale={isMobile ? 0.006 : 0.006}
                position={[0, 0, -1]}
                rotation={[0, 0, 3 * Math.PI / 2]}
            />
        </mesh>
    );
};

const Soniclevitation = () => {
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
                toneMappingExposure: 1.6
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Sonic isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
}

export default Soniclevitation;