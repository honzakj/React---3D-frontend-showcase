import React, { useRef, useState } from 'react'
import { GlobalCanvas, SmoothScrollbar, UseCanvas, ScrollScene } from '@14islands/r3f-scroll-rig'
import { useFrame } from '@react-three/fiber'
import { useFBX } from '@react-three/drei';

import Header from './components/main/header/header'
import './App.css'


function App() {



  return (
    <>
      <Header />

      <main>
        <GlobalCanvas />
        <SmoothScrollbar />
        <RenderComponent />
        <RenderComponent />

      </main>
    </>
  )
}



const RenderComponent = () => {
  const el = useRef()
  const wrapStyle = {
    height: '50vh',
    justifyContent: 'center'
  }

  const sectionStyle = {
    width: '100%',
    height: '100%',
  }

  return (
    <section style={sectionStyle}>
      <div className={'flex'} style={wrapStyle} ref={el}>Track me!</div>
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => (
            <Box {...props} />
          )}

        </ScrollScene>

      </UseCanvas>
    </section>
  )
}

const Box = (props) => {
  const ref = useRef()

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const fbx = useFBX('models/temp_export.fbx')

  useFrame(() => (ref.current.rotation.y = props.scrollState.progress * Math.PI * 2))


  return (
    <>
      <ambientLight intensity={1} />

      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <primitive object={fbx} />
        <meshStandardMaterial color={'#fff'} />
      </mesh>
    </>
  )
}


export default App
