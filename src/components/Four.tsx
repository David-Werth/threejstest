import { useRef } from 'react';
import { useFrame, ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

export default function Four(props: ThreeElements['mesh']) {
	const meshRef = useRef<THREE.Mesh>(null!);
	const lightRef = useRef<THREE.SpotLight>(null!);

	useFrame((state, delta) => {
		delta = 0.01;
		return (
			(meshRef.current.rotation.z -= Math.random() * delta),
			(meshRef.current.rotation.y += Math.random() * delta)
		);
	});

	return (
		<mesh {...props} ref={meshRef}>
			<capsuleGeometry args={[0.1, 0.4, 200]} />
			<meshPhysicalMaterial
				color={'black'}
				roughness={1}
				emissive={'red'}
				emissiveIntensity={1}
			/>
		</mesh>
	);
}
