import { Canvas } from '@react-three/fiber';
import Three from './components/Three';
import Plane from './components/Plane';
import Four from './components/Four';

function App() {
	return (
		<>
			<Canvas className="w-full h-full bg-black " shadows={'soft'}>
				<spotLight
					intensity={10}
					color={'blue'}
					position={[2, 3, 3]}
					angle={Math.PI / 5}
					penumbra={1}
					castShadow
				/>
				<spotLight
					intensity={10}
					color={'red'}
					position={[-2, -2, 4]}
					angle={Math.PI / 8}
					penumbra={1}
					castShadow
				/>

				<ambientLight
					intensity={0.1}
					color={'white'}
					position={[0, -1, 3]}
					castShadow
				/>
				<spotLight
					color={'red'}
					angle={Math.PI / 5}
					penumbra={20}
					position={[0, 2, 2]}
					intensity={20}
					castShadow
				/>

				<Three position={[0, 0, 0]} castShadow />

				<Four position={[0, 0, 0]} castShadow />
				<Plane position={[0, -2, 0]} rotation={[-1.8, 0, 0]} receiveShadow={true} />
				<Plane position={[0, -2, 0]} rotation={[0, 0, 0]} receiveShadow={true} />
				<Plane position={[2, -2, 0]} rotation={[0, -1.5, 0]} receiveShadow={true} />
				<Plane position={[-2, -2, 0]} rotation={[0, 1.5, 0]} receiveShadow={true} />
				<Plane position={[0, 3, 0]} rotation={[1.8, 0, 0]} receiveShadow={true} />
			</Canvas>
			,
		</>
	);
}

export default App;
