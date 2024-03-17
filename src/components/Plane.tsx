import { useRef } from 'react';
import { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

export default function Plane(props: ThreeElements['mesh']) {
	const meshRef = useRef<THREE.Mesh>(null!);

	return (
		<mesh {...props} ref={meshRef}>
			<planeGeometry args={[10, 10, 10]} />
			<meshStandardMaterial color={'gray'} roughness={0.8} metalness={0.1} />
		</mesh>
	);
}
