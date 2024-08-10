import { useRef, useEffect } from 'react';
import { UseCanvas, ViewportScrollScene } from '@14islands/r3f-scroll-rig';

import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useFBX } from '@react-three/drei';
import { MeshNormalMaterial } from 'three';



export const RenderViewportScene = () => {
    const trackElRef = useRef()

    return (
        <>
            <div className={'flex flex-justify-center flex-align-center h-100 w-100'} style={{ position: 'absolute' }} ref={trackElRef}></div>

            <UseCanvas>
                <ViewportScrollScene track={trackElRef}>
                    {(props) => (
                        <RenderTrackedMesh {...props} />
                    )}
                </ViewportScrollScene>
            </UseCanvas>
        </>
    )
}

const RenderTrackedMesh = ({ scale, scrollState }) => {
    const fbx = useFBX('models/logo.fbx')
    const Material = new MeshNormalMaterial()
    const meshRef = useRef()

    useEffect(() => {
        fbx.children.forEach((meshRef) => {
            meshRef.material = Material
        })

    }, [meshRef])

    const amplitudeY = 10;
    const frequencyY = 0.5;

    const amplitudeX = 6;
    const frequencyX = 0.3;

    const yOffsetOffset = Math.random() * Math.PI * 2;
    const xOffsetOffset = Math.random() * Math.PI * 2;

    useFrame(() => {
        const time = performance.now() * 0.005;
        const yOffset = amplitudeY * Math.sin(frequencyY * time + yOffsetOffset);
        const xOffset = amplitudeX * Math.sin(frequencyX * time + xOffsetOffset);

        meshRef.current.rotation.y = -(scrollState.progress * Math.PI) + Math.PI / 2
        meshRef.current.position.y = yOffset;
        meshRef.current.position.x = xOffset;
    })

    return (
        <>
            <group >
                <mesh ref={meshRef}>
                    <primitive object={fbx} />
                </mesh>
                <PerspectiveCamera fov={45} position={[-250, 250, 900]} makeDefault onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </group>
        </>
    )
}