import { useRef } from 'react';
import { useFrame, ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

export default function Three(props: ThreeElements['mesh']) {
	const meshRef = useRef<THREE.Mesh>(null!);

	useFrame((state, delta) => {
		delta = 0.01;
		return (
			(meshRef.current.rotation.z += Math.random() * delta),
			(meshRef.current.rotation.x -= Math.random() * delta)
		);
	});
	return (
		<mesh {...props} ref={meshRef}>
			<icosahedronGeometry />
			<meshPhysicalMaterial roughness={0.4} transmission={0.8} thickness={0.6} />
		</mesh>
	);
}
