import React, { useEffect, useRef, useState } from 'react'
import { GlobalCanvas, SmoothScrollbar, UseCanvas, ViewportScrollScene } from '@14islands/r3f-scroll-rig'
import { useFrame, useThree } from '@react-three/fiber'
import { Grid, useFBX } from '@react-three/drei';

import SectionWrap from './components/main/section/sectionWrap';

import Header from './components/main/header/header'

import { MeshNormalMaterial } from 'three';
import BackgroundAnim from './components/main/background/background';

import './App.css'
import NavPanel from './components/main/navPanel/navPanel';
import { SocialIcon } from 'react-social-icons';
import Button from './components/functional/button/button';


function App() {
  const [activeNav, setActiveNav] = useState(0)

  const sectionRefs = useRef([])
  const mainRef = useRef(null)

  const scrollToSection = (index) => {
    setActiveNav(index)
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className='flex flex-align-center w-100 h-100' style={{ position: 'absolute', zIndex: 2, pointerEvents: 'none' }}>
        <NavPanel scrollToSection={scrollToSection} activeNav={activeNav} />
      </div>

      <main ref={mainRef} className='flex flex-column '>
        <BackgroundAnim />
        <SmoothScrollbar >
          {(bind) => (

            <div {...bind} style={{ zIndex: 5 }}>
              <SectionWrap ref={(el) => { sectionRefs.current[0] = el }} bckgCol={'rgba(0,0,0,0'} height={'910px'}>

                <Header />
                <HeroContent scrollToSection={scrollToSection} />

              </SectionWrap>

              <SectionWrap bckgCol={'#fff'} name={'KDO JSEM?'} title='Jsem architekt věnující se digitální tvorbě, CGI a programmingu' height={'900px'} textCol={'#262626'}>

              </SectionWrap>

              <SectionWrap ref={(el) => { sectionRefs.current[1] = el }} bckgCol={'transparent'} name={'CO NABÍZÍM?'} title={"Proměňuji digitální vize ve skutečnost."} height={'70vh'}>


              </SectionWrap>

              <SectionWrap ref={(el) => { sectionRefs.current[2] = el }} bckgCol={'#fff'} name={'UKÁZKY PRÁCE'} textCol={'#262626'} height={'100vh'}>
              </SectionWrap>

              <SectionWrap bckgCol={'#fff'} name={'MOJI KLIENTI'} textCol={'#262626'} height={'550px'}>
              </SectionWrap>

              <SectionWrap ref={(el) => { sectionRefs.current[3] = el }} bckgCol={'transparent'} name={'KONTAKT'} title={"Máte zájem o spolupráci?\n Neváhejte mě kontaktovat"} height={'70vh'}>
                <ContactContent />
                <Footer scrollToSection={scrollToSection} />
              </SectionWrap>
            </div>
          )}
        </SmoothScrollbar>
        <GlobalCanvas eventSource={mainRef} style={{ zIndex: 1 }} />

      </main >

    </>
  )
}

const HeroContent = ({ scrollToSection }) => {
  return (
    <div className='flex flex-justify-center w-100 h-100'>

      <div className={'flex-column flex-justify-center w-50 h-100'}>

        <h1 style={{ fontSize: '3.5em', fontWeight: 700, lineHeight: 1.2, letterSpacing: 1.5 }}>Tvořím design <br></br>pomocí algoritmů.</h1>
        <p style={{ fontSize: '1.5em', fontWeight: 300, margin: '32px 0 64px 0' }}>Architektura, procedurální design a web development</p>

        <div className='flex' style={{ gap: '12px' }}>
          <Button text='Kontaktujte mě' filled clickHandler={(e) => scrollToSection(3)} />
          <Button text='Co nabízím?' clickHandler={(e) => scrollToSection(1)} />
        </div>

      </div>

      <div className={'flex-column flex-justify-center flex-align-center w-50 h-100'} style={{ position: 'relative' }}>
        <RenderComponent />
      </div>
    </div>
  )
}

const ContactContent = () => {

  const InfoWrap = ({ title, children }) => {
    const wrapStyle = {
      marginTop: '96px'
    }

    return (
      <div className='flex-column w-50 h-100' style={wrapStyle}>
        <h2 style={{ fontWeight: 500, fontSize: '1.3em', marginBottom: '12px' }}>{title}</h2>
        {children}
      </div>
    )
  }

  const iconOpts = ['facebook', 'instagram', 'x', 'github']
  const optNames = ['messenger', 'instagram', 'twitter', 'github']



  return (
    <div className='flex w-100 h-100'>
      <InfoWrap title={'Kontaktujte mě'}>
        <p style={{ fontWeight: 300, marginBottom: '24px' }}>honzak.jirka@gmail.com</p>
        <p style={{ fontWeight: 300 }}>
          Bc. Ing. arch. Jiří Honzák<br></br>
          Ulička 18 <br></br>
          623 00 Brno
        </p>

      </InfoWrap>

      <InfoWrap title={'Sociální sítě'}>
        <div className='flex' style={{ gap: '12px' }}>

          {iconOpts.map((opt, index) => {
            const icon = <SocialIcon bgColor={'transparent'} network={opt} fgColor={'#fff'} style={{ height: 40, width: 40 }} />
            return (
              <Button text={optNames[index]} icon={icon} />
            )
          })}

        </div>
      </InfoWrap>
    </div>
  )
}



const Footer = ({ scrollToSection }) => {
  const footerStyle = {
    position: 'absolute',
    bottom: '12px',
    maxWidth: '1210px',
    fontWeight: 400,
    fontSize: '.8em',
    borderTop: '1px solid #fff',
    paddingTop: '12px'
  }
  return (
    <footer className='w-100 flex flex-justify-between flex-align-center' style={footerStyle}>
      <Button text='scroll up' filled clickHandler={() => scrollToSection(0)} />
      <p> 2024 © Jiří Honzák</p>
    </footer>
  )
}

const RenderComponent = () => {
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

  zoomCamera(camera, 1.01)



  return (
    <>
      <group >
        <mesh ref={mesh}>
          <primitive object={fbx} />
        </mesh>
        <Grid />

      </group>
    </>
  )
}



export default App
