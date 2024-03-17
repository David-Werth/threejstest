import { useRef } from 'react';
import { useFrame, ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

export default function Four(props: ThreeElements['mesh']) {
	const meshRef = useRef<THREE.Mesh>(null!);
	const lightRef = useRef<THREE.SpotLight>(null!);

	useFrame((state, delta) => {
		delta = 0.01;
		return (meshRef.current.rotation.z -= delta);
	});

	return (
		<mesh {...props} ref={meshRef}>
			<tetrahedronGeometry args={[0.1]} />
			<meshPhysicalMaterial emissive={'yellow'} emissiveIntensity={2} />
		</mesh>
	);
}
