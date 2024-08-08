import { useRef, useEffect } from 'react';
import { UseCanvas, ViewportScrollScene } from '@14islands/r3f-scroll-rig';

import { useFrame, useThree } from '@react-three/fiber';
import { Grid, PerspectiveCamera, useFBX } from '@react-three/drei';
import { MeshNormalMaterial } from 'three';



export const RenderComponent = () => {
    const el = useRef()
    const wrapStyle = {
        position: 'absolute',
    }

    return (
        <>
            <div className={'ScrollScene Placeholder flex flex-justify-center flex-align-center h-100 w-100'} style={wrapStyle} ref={el}></div>
            <UseCanvas>
                <ViewportScrollScene track={el}>
                    {(props) => (
                        <RenderTrackedMesh {...props} />
                    )}
                </ViewportScrollScene>
            </UseCanvas>
        </>
    )
}

const zoomCamera = (camera, zoomFactor) => {
    camera.position.x *= zoomFactor;
    camera.position.y *= zoomFactor;
    camera.position.z *= zoomFactor;
}

const RenderTrackedMesh = ({ scale, scrollState }) => {
    const fbx = useFBX('models/temp_export.fbx')
    const Material = new MeshNormalMaterial()
    const mesh = useRef()

    const { camera } = useThree()

    useEffect(() => {
        fbx.children.forEach((mesh) => {
            mesh.material = Material
            fbx.position.set(-160, -80, 150)
        })

    }, [mesh])


    useFrame(() => (mesh.current.rotation.y = -(scrollState.progress * Math.PI) + Math.PI / 2))

    return (
        <>
            <group >

                <mesh ref={mesh}>
                    <primitive object={fbx} />
                </mesh>
                <PerspectiveCamera fov={45} position={[150, 250, 850]} makeDefault onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </group>
        </>
    )
}