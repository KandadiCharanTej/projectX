"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Torus, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function ScorpioForm() {
  const groupRef = useRef<THREE.Group>(null!);
  const innerRef  = useRef<THREE.Mesh>(null!);
  const ring1Ref  = useRef<THREE.Mesh>(null!);
  const ring2Ref  = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();

  const copperColor = new THREE.Color("#C65D2E");
  const copperLight = new THREE.Color("#E8854A");
  const navyColor   = new THREE.Color("#071525");
  const copperDark  = new THREE.Color("#7a3517");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;

    groupRef.current.rotation.y += (mouse.x * 0.4 - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (-mouse.y * 0.2 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.08;

    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.3;
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.2;
      ring2Ref.current.rotation.z = -t * 0.15;
    }
    if (innerRef.current) {
      const scale = 1 + Math.sin(t * 2) * 0.04;
      innerRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Sphere ref={innerRef} args={[0.6, 64, 64]}>
        <MeshDistortMaterial color={copperColor} distort={0.15} speed={2} roughness={0.2} metalness={0.9} envMapIntensity={1.5} />
      </Sphere>

      <Sphere args={[0.62, 32, 32]}>
        <meshBasicMaterial color={copperLight} transparent opacity={0.06} side={THREE.BackSide} />
      </Sphere>

      <Torus ref={ring1Ref} args={[1.3, 0.012, 12, 120]}>
        <meshStandardMaterial color={copperColor} roughness={0.1} metalness={1} />
      </Torus>

      <Torus ref={ring2Ref} args={[1.8, 0.008, 12, 120]} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <meshStandardMaterial color={copperDark} roughness={0.2} metalness={0.8} transparent opacity={0.7} />
      </Torus>

      {[0, 90, 180, 270].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <mesh key={i} position={[Math.cos(rad) * 1.3, Math.sin(rad) * 1.3, 0]}>
            <sphereGeometry args={[0.035, 16, 16]} />
            <meshStandardMaterial color={copperLight} roughness={0} metalness={1} />
          </mesh>
        );
      })}

      {Array.from({ length: 12 }).map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 12);
        const theta = Math.sqrt(12 * Math.PI) * phi;
        return (
          <mesh
            key={`p${i}`}
            position={[
              2.2 * Math.sin(phi) * Math.cos(theta),
              2.2 * Math.sin(phi) * Math.sin(theta),
              2.2 * Math.cos(phi),
            ]}
          >
            <sphereGeometry args={[0.018, 8, 8]} />
            <meshStandardMaterial color={i % 3 === 0 ? copperColor : navyColor} roughness={0} metalness={1} transparent opacity={0.8} />
          </mesh>
        );
      })}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} color="#FAF9F6" />
      <pointLight position={[3, 3, 3]} intensity={4} color="#C65D2E" />
      <pointLight position={[-3, -2, 2]} intensity={2} color="#071525" />
      <pointLight position={[0, 4, -2]} intensity={2} color="#FAF9F6" />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#E8854A" />
    </>
  );
}

export default function HeroOrb() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Lights />
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
          <ScorpioForm />
        </Float>
      </Canvas>
    </div>
  );
}
