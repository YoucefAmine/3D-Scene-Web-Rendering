import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Classroom({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('Classroom.glb');

	return (
		<group ref={group} {...props} dispose={null}>
			<group position={[17.72, 2.62, 19.16]} scale={[1.13, 1.06, 1]}>
				<mesh
					geometry={nodes.WindowFrame001.geometry}
					material={nodes.WindowFrame001.material}
					scale={[10.54, 8.02, 3.63]}>
					<group position={[-0.59, 0.03, 0.02]}>
						<mesh
							geometry={nodes.WindowL002.geometry}
							material={nodes.WindowL002.material}
						/>
						<mesh
							geometry={nodes.WindowL002_1.geometry}
							material={nodes.WindowL002_1.material}
						/>
						<mesh
							geometry={nodes.Handle004.geometry}
							material={nodes.Handle004.material}
							position={[0.04, 0.47, 0.04]}
						/>
					</group>
					<group position={[0.59, 0.03, 0.06]}>
						<mesh
							geometry={nodes.WindowR002.geometry}
							material={nodes.WindowR002.material}
						/>
						<mesh
							geometry={nodes.WindowR002_1.geometry}
							material={nodes.WindowR002_1.material}
						/>
						<mesh
							geometry={nodes.Handle005.geometry}
							material={nodes.Handle005.material}
							position={[-0.04, 0.47, 0.04]}
						/>
					</group>
					{/* <mesh
            geometry={nodes.Windows_Sill001.geometry}
            material={nodes.Windows_Sill001.material}
            position={[0, 0, 0.1]}
          /> */}
				</mesh>
			</group>
			<group position={[31.17, 5.05, 0]} scale={[1.05, 2.98, 6.53]}>
				<mesh
					geometry={nodes.Cube_1.geometry}
					material={materials['Material.002']}
				/>
				<mesh
					geometry={nodes.Cube_2.geometry}
					material={nodes.Cube_2.material}
				/>
			</group>
			<group position={[31.11, 10.4, -5.97]} scale={[0.02, 0.04, 0.47]}>
				<mesh
					geometry={nodes.Cube005_1.geometry}
					material={materials['Material.001']}
				/>
				<mesh
					geometry={nodes.Cube005_2.geometry}
					material={materials['Material.004']}
				/>
				<mesh
					geometry={nodes.Cube005_3.geometry}
					material={materials['Material.005']}
				/>
			</group>
			<group position={[31.17, 10.81, 11.84]} scale={[0.47, 1.33, 2.92]}>
				<mesh
					geometry={nodes.Cube002_1.geometry}
					material={nodes.Cube002_1.material}
				/>
				<mesh
					geometry={nodes.Cube002_2.geometry}
					material={materials['Material.007']}
				/>
			</group>
			<mesh
				geometry={nodes.Cube003.geometry}
				material={nodes.Cube003.material}
				position={[30.7, 7.02, 11.73]}
				scale={[1.42, 0.24, 4.39]}
			/>
			<mesh
				geometry={nodes.Cube004.geometry}
				material={nodes.Cube004.material}
				position={[30.7, 4.37, 11.73]}
				scale={[1.42, 0.24, 4.39]}
			/>
			<group position={[15.31, 9.2, -19.49]} scale={[2.93, 1.39, 0.15]}>
				<mesh
					geometry={nodes.Cube006_1.geometry}
					material={materials['Material.014']}
				/>
				<mesh
					geometry={nodes.Cube006_2.geometry}
					material={materials['Material.015']}
				/>
			</group>
			<group position={[3.55, 8.23, -19.48]} scale={[5.53, 2.63, 0.19]}>
				<mesh
					geometry={nodes.Cube007_1.geometry}
					material={materials['Material.010']}
				/>
				<mesh
					geometry={nodes.Cube007_2.geometry}
					material={materials['Material.011']}
				/>
				<mesh
					geometry={nodes.Cube007_3.geometry}
					material={materials['Material.012']}
				/>
				<mesh
					geometry={nodes.Cube007_4.geometry}
					material={materials['Material.013']}
				/>
			</group>
			<mesh
				geometry={nodes.Handle.geometry}
				material={nodes.Handle.material}
				position={[0.04, 0.47, 0.04]}
			/>
			<mesh
				geometry={nodes.Handle001.geometry}
				material={nodes.Handle001.material}
				position={[-0.04, 0.47, 0.04]}
			/>
			<mesh
				geometry={nodes.WindowFrame.geometry}
				material={nodes.WindowFrame.material}
				position={[0.37, 2.66, 19.16]}
				scale={[10.54, 8.31, 3.63]}>
				<group position={[-0.59, 0.03, 0.02]}>
					<mesh
						geometry={nodes.WindowL001_1.geometry}
						material={nodes.WindowL001_1.material}
					/>
					<mesh
						geometry={nodes.WindowL001_2.geometry}
						material={nodes.WindowL001_2.material}
					/>
					<mesh
						geometry={nodes.Handle002.geometry}
						material={nodes.Handle002.material}
						position={[0.04, 0.47, 0.04]}
					/>
				</group>
				<group position={[0.59, 0.03, 0.06]}>
					<mesh
						geometry={nodes.WindowR001_1.geometry}
						material={nodes.WindowR001_1.material}
					/>
					<mesh
						geometry={nodes.WindowR001_2.geometry}
						material={nodes.WindowR001_2.material}
					/>
					<mesh
						geometry={nodes.Handle003.geometry}
						material={nodes.Handle003.material}
						position={[-0.04, 0.47, 0.04]}
					/>
				</group>
				<mesh
					geometry={nodes.Windows_Sill.geometry}
					material={nodes.Windows_Sill.material}
					position={[0, 0, 0.1]}
				/>
			</mesh>
			<mesh
				geometry={nodes.DoorFrame.geometry}
				material={nodes.DoorFrame.material}
				position={[28.31, -1.26, -19.8]}
				scale={[6.97, 5.2, 5.2]}>
				<mesh
					geometry={nodes.Door.geometry}
					material={materials['Material.009']}
					position={[0.42, 1.05, 0.02]}>
					<mesh
						geometry={nodes.Handle_Back.geometry}
						material={nodes.Handle_Back.material}
						position={[-0.76, 0, 0]}
					/>
					<mesh
						geometry={nodes.Handle_Front.geometry}
						material={nodes.Handle_Front.material}
						position={[-0.76, 0, -0.03]}
						rotation={[-Math.PI, 0, 0]}
					/>
				</mesh>
			</mesh>
			<mesh
				geometry={nodes.Cylinder001.geometry}
				material={nodes.Cylinder001.material}
				position={[30.46, 9.33, 10.61]}
				scale={[0.14, 0.08, 0.14]}
			/>
			<mesh
				geometry={nodes.Cylinder003.geometry}
				material={nodes.Cylinder003.material}
				position={[30.4, 9.18, 11.62]}
				scale={[0.13, 0.07, 0.13]}
			/>
			<mesh
				geometry={nodes.Cylinder005.geometry}
				material={nodes.Cylinder005.material}
				position={[30.44, 9.38, 9.36]}
				scale={[0.14, 0.08, 0.14]}
			/>
			<mesh
				geometry={nodes.Cylinder007.geometry}
				material={nodes.Cylinder007.material}
				position={[30.47, 8.95, 12.59]}
				scale={[0.1, 0.06, 0.1]}
			/>
			<mesh
				geometry={nodes.Cylinder009.geometry}
				material={nodes.Cylinder009.material}
				position={[30.49, 9.28, 8.44]}
				scale={[0.14, 0.07, 0.14]}
			/>
			<group position={[29.98, 0, -12.13]} scale={[1.01, 1.13, 2.26]}>
				<mesh
					geometry={nodes.Cube008.geometry}
					material={materials['Material.021']}
				/>
				<mesh
					geometry={nodes.Cube008_1.geometry}
					material={materials['Material.022']}
				/>
			</group>
			<mesh
				geometry={nodes.Cylinder002.geometry}
				material={nodes.Cylinder002.material}
				position={[30.46, 6.33, 10.6]}
				scale={[0.11, 0.06, 0.11]}
			/>
			<mesh
				geometry={nodes.Cylinder004.geometry}
				material={nodes.Cylinder004.material}
				position={[30.41, 6.19, 11.41]}
				scale={[0.1, 0.06, 0.1]}
			/>
			<mesh
				geometry={nodes.Cylinder006.geometry}
				material={nodes.Cylinder006.material}
				position={[30.44, 6.29, 9.57]}
				scale={[0.12, 0.06, 0.12]}
			/>
			<mesh
				geometry={nodes.Cylinder008.geometry}
				material={nodes.Cylinder008.material}
				position={[30.47, 6.03, 12.2]}
				scale={[0.08, 0.05, 0.08]}
			/>
			<mesh
				geometry={nodes.Cylinder010.geometry}
				material={nodes.Cylinder010.material}
				position={[30.48, 6.19, 8.83]}
				scale={[0.11, 0.06, 0.11]}
			/>
			<mesh
				geometry={nodes.Plane002.geometry}
				material={nodes.Plane002.material}
				position={[12.41, 15.22, 0]}
				scale={20.1}
			/>
			<group
				position={[10.16, 1.08, -13.5]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[2.53, 0.07, 1.29]}>
				<mesh
					geometry={nodes.Cube001_1.geometry}
					material={materials['Material.008']}
				/>
				<mesh
					geometry={nodes.Cube001_2.geometry}
					material={materials['Material.006']}
				/>
			</group>
			<mesh
				geometry={nodes.Plane001.geometry}
				material={nodes.Plane001.material}
				position={[12.48, -1.03, 0]}
				scale={20.03}
			/>
		</group>
	);
}

useGLTF.preload('Classroom.glb');

function TpTwo({ dark }) {
	return (
		<div
		// className='scene-Two'
		// id='sceneTwo'
		// style={{
		// 	backgroundColor: dark ? '#363636' : '#F8F8F8',
		// 	color: dark ? '#F8F8F8' : '#363636',
		// }}
		>
			<Canvas>
				<ambientLight intensity={0.5} />
				<pointLight position={[100, 80, 0]} />
				<pointLight position={[0, 100, -100]} />
				<pointLight position={[0, -100, 100]} />
				<Suspense fallback={null}>
					<Classroom />
				</Suspense>
				<OrbitControls />
			</Canvas>
		</div>
	);
}

export default TpTwo;
