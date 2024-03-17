import { useRef } from 'react';
import { useFrame, ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

export default function Three(props: ThreeElements['mesh']) {
	const meshRef = useRef<THREE.Mesh>(null!);

	useFrame((state, delta) => {
		delta = 0.1;
		return (
			(meshRef.current.rotation.z += Math.random() * delta * 0.1),
			(meshRef.current.rotation.x -= Math.random() * delta * 0.2)
		);
	});
	return (
		<mesh {...props} ref={meshRef}>
			<icosahedronGeometry />
			<meshPhysicalMaterial roughness={0.2} transmission={0.7} thickness={0.5} />
		</mesh>
	);
}
