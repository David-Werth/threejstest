import { useRef } from 'react';
import { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

export default function Cube(props: ThreeElements['mesh']) {
	const meshRef = useRef<THREE.Mesh>(null!);

	return (
		<mesh {...props} ref={meshRef}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color={'red'} />
		</mesh>
	);
}
