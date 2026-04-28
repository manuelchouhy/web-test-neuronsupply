"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";

const nodesData = [
  { id: 0, position: [-2, 1, 0], color: "#00f2fe" }, // top left back
  { id: 1, position: [-2.5, -1, 0], color: "#00f2fe" }, // bottom left back
  { id: 2, position: [-0.5, 1.5, 0], color: "#4facfe" }, // top mid
  { id: 3, position: [-0.8, -1.2, 0], color: "#8a2be2" }, // bottom mid
  { id: 4, position: [0.8, 0.5, 0], color: "#a18cd1" }, // center top
  { id: 5, position: [0.5, -0.5, 0], color: "#8a2be2" }, // center bottom
  { id: 6, position: [2.5, 0, 0], color: "#b39ddb" }, // tip (right)
  { id: 7, position: [-1.2, 0.2, 0.5], color: "#4facfe" }, // front connection
];

const connections = [
  [0, 1], [0, 2], [1, 3], [0, 7], [1, 7],
  [2, 4], [3, 5], [7, 4], [7, 5],
  [4, 6], [5, 6], [2, 6] // form arrow pointing right
];

function Network() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      // Dynamic autonomous floating and rotation
      const autoRotateY = state.clock.elapsedTime * 0.15 + Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      const autoRotateX = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
      
      // Smoother and balanced mouse interactivity
      const targetX = (state.pointer.x * Math.PI) * 1.0 + autoRotateY;
      const targetY = (state.pointer.y * Math.PI) * 1.0 + autoRotateX;
      group.current.rotation.y += 0.02 * (targetX - group.current.rotation.y);
      group.current.rotation.x += 0.02 * (-targetY - group.current.rotation.x);
    }
  });

  const lines = useMemo(() => {
    return connections.map(([startIdx, endIdx], i) => {
      const start = new THREE.Vector3(...nodesData[startIdx].position as [number, number, number]);
      const end = new THREE.Vector3(...nodesData[endIdx].position as [number, number, number]);
      const color = new THREE.Color(nodesData[endIdx].color).lerp(new THREE.Color(nodesData[startIdx].color), 0.5);
      return (
        <Line
          key={`line-${i}`}
          points={[start, end]}
          color={color}
          lineWidth={2}
          transparent
          opacity={0.6}
        />
      );
    });
  }, []);

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {nodesData.map((node) => (
          <Sphere key={node.id} position={new THREE.Vector3(...node.position as [number, number, number])} args={[0.15, 32, 32]}>
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </Sphere>
        ))}
        {lines}
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Network />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
