"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Desktop-only 3D rendition of the same signature interaction as
 * MoleculeResolve.tsx — a candidate space converging on a stable structure.
 * Gated behind HeroVisual (viewport + WebGL + reduced-motion checks) so
 * mobile always gets the cheap SVG version instead of this bundle.
 */

type Vec3 = [number, number, number];
type SceneNode = { id: string; scattered: Vec3; resolved: Vec3; accent?: boolean };

const NODES: SceneNode[] = [
  { id: "n0", scattered: [-1.8, 1.6, 1.2], resolved: [0, 0, 0], accent: true },
  { id: "n1", scattered: [2.6, -1.4, -1.8], resolved: [1.1, 0.4, 0.3] },
  { id: "n2", scattered: [-2.2, -1.7, 1.4], resolved: [-0.9, 0.6, -0.4] },
  { id: "n3", scattered: [1.6, 2.1, -1.1], resolved: [0.5, -0.9, 0.5] },
  { id: "n4", scattered: [-1.4, 1.9, -2.0], resolved: [-0.6, -0.7, -0.3] },
  { id: "n5", scattered: [2.4, 1.1, 1.6], resolved: [1.3, -0.3, -0.6] },
  { id: "n6", scattered: [-2.6, 0.4, -1.3], resolved: [-1.2, -0.1, 0.6] },
  { id: "n7", scattered: [0.9, -2.3, 1.9], resolved: [0.2, 1.1, -0.5] },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
  [7, 0],
];

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function Molecule({ active }: { active: boolean }) {
  const group = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const lineRefs = useRef<(THREE.Line | null)[]>([]);
  const startTime = useRef<number | null>(null);
  const pointer = useThree((s) => s.pointer);

  const nodeVectors = useMemo(
    () => ({
      scattered: NODES.map((n) => new THREE.Vector3(...n.scattered)),
      resolved: NODES.map((n) => new THREE.Vector3(...n.resolved)),
    }),
    [],
  );

  useFrame((state) => {
    if (active && startTime.current === null) {
      startTime.current = state.clock.elapsedTime;
    }
    const elapsed = startTime.current === null ? 0 : state.clock.elapsedTime - startTime.current;
    const progress = active ? Math.min(elapsed / 1.4, 1) : 0;
    const eased = easeOutExpo(progress);
    const current: THREE.Vector3[] = [];

    NODES.forEach((_, i) => {
      const pos = nodeVectors.scattered[i].clone().lerp(nodeVectors.resolved[i], eased);
      current.push(pos);
      nodeRefs.current[i]?.position.copy(pos);
    });

    EDGES.forEach(([a, b], i) => {
      const line = lineRefs.current[i];
      if (!line) return;
      const geometry = line.geometry as THREE.BufferGeometry;
      const positions = geometry.attributes.position as THREE.BufferAttribute;
      positions.setXYZ(0, current[a].x, current[a].y, current[a].z);
      positions.setXYZ(1, current[b].x, current[b].y, current[b].z);
      positions.needsUpdate = true;
      const material = line.material as THREE.LineBasicMaterial;
      material.opacity = eased * 0.6;
    });

    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        pointer.x * 0.35,
        0.05,
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -pointer.y * 0.2,
        0.05,
      );
    }
  });

  return (
    <group ref={group}>
      {NODES.map((n, i) => (
        <mesh key={n.id} ref={(el) => { nodeRefs.current[i] = el; }}>
          <sphereGeometry args={[n.accent ? 0.16 : 0.1, 24, 24]} />
          <meshStandardMaterial
            color={n.accent ? "#ff5e00" : "#4f555a"}
            roughness={n.accent ? 0.3 : 0.55}
            metalness={n.accent ? 0.4 : 0.1}
          />
        </mesh>
      ))}
      {EDGES.map(([a, b], i) => (
        <line key={`${a}-${b}`} ref={(el) => { lineRefs.current[i] = el as unknown as THREE.Line; }}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(6), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#cc4b00" transparent opacity={0} />
        </line>
      ))}
    </group>
  );
}

export function MoleculeScene({ active }: { active: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.5], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <pointLight position={[-3, -2, -2]} intensity={0.5} color="#ff5e00" />
      <Molecule active={active} />
    </Canvas>
  );
}
