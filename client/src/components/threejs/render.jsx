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
    const fbx = useFBX('models/people.fbx')
    const Material = new MeshNormalMaterial()
    const meshRef = useRef()

    useEffect(() => {
        fbx.children.forEach((meshRef) => {
            meshRef.material = Material
            fbx.position.set(-160, -60, 150)
        })

    }, [meshRef])


    useFrame(() => (meshRef.current.rotation.y = -(scrollState.progress * Math.PI) + Math.PI / 2))

    return (
        <>
            <group >

                <mesh ref={meshRef}>
                    <primitive object={fbx} />
                </mesh>
                <PerspectiveCamera fov={45} position={[150, 250, 900]} makeDefault onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </group>
        </>
    )
}