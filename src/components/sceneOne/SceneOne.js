import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Table({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('Table.glb');

	return (
		<group ref={group} {...props} dispose={null}>
			<group
				position={[-3.9, 1.73, -0.08]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[0.5, 0.16, 0.5]}>
				<mesh
					geometry={nodes.Cube006.geometry}
					material={nodes.Cube006.material}
				/>
				<mesh
					geometry={nodes.Cube006_1.geometry}
					material={nodes.Cube006_1.material}
				/>
			</group>
			<group
				position={[3.9, 1.82, -0.08]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[0.5, 0.16, 0.5]}>
				<mesh
					geometry={nodes.Cube005.geometry}
					material={nodes.Cube005.material}
				/>
				<mesh
					geometry={nodes.Cube005_1.geometry}
					material={nodes.Cube005_1.material}
				/>
			</group>
			<group
				position={[1.35, 1.79, 2.34]}
				rotation={[-Math.PI, 0, -Math.PI]}
				scale={[0.5, 0.16, 0.5]}>
				<mesh
					geometry={nodes.Cube004.geometry}
					material={nodes.Cube004.material}
				/>
				<mesh
					geometry={nodes.Cube004_1.geometry}
					material={nodes.Cube004_1.material}
				/>
			</group>
			<group
				position={[-1.67, 1.7, 2.42]}
				rotation={[-Math.PI, 0, -Math.PI]}
				scale={[0.5, 0.16, 0.5]}>
				<mesh
					geometry={nodes.Cube003.geometry}
					material={nodes.Cube003.material}
				/>
				<mesh
					geometry={nodes.Cube003_1.geometry}
					material={nodes.Cube003_1.material}
				/>
			</group>
			<group position={[1.3, 1.81, -2.21]} scale={[0.5, 0.16, 0.5]}>
				<mesh
					geometry={nodes.Cube002.geometry}
					material={nodes.Cube002.material}
				/>
				<mesh
					geometry={nodes.Cube002_1.geometry}
					material={nodes.Cube002_1.material}
				/>
			</group>
			<group position={[-1.72, 1.9, -2.12]} scale={[0.5, 0.16, 0.5]}>
				<mesh
					geometry={nodes.Cube001.geometry}
					material={nodes.Cube001.material}
				/>
				<mesh
					geometry={nodes.Cube001_1.geometry}
					material={nodes.Cube001_1.material}
				/>
			</group>
			<group position={[0, 3.21, 0]} scale={[3.44, -0.33, 1.8]}>
				<mesh
					geometry={nodes.Cube.geometry}
					material={materials.Material}
				/>
				<mesh
					geometry={nodes.Cube_1.geometry}
					material={materials['Material.003']}
				/>
			</group>
		</group>
	);
}

function SceneOne({ dark }) {
	return (
		<div
		// className='scene-one'
		// id='sceneOne'
		// style={{
		// 	backgroundColor: dark ? '#363636' : '#F8F8F8',
		// 	color: dark ? '#F8F8F8' : '#363636',
		// }}
		>
			<Canvas>
				<ambientLight intensity={0.5} />
				<Suspense fallback={null}>
					<Table />
				</Suspense>
				<OrbitControls />
			</Canvas>
		</div>
	);
}

export default SceneOne;
