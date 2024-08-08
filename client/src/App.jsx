import React, { useEffect, useRef, useState } from 'react';
import { GlobalCanvas, SmoothScrollbar, UseCanvas, ViewportScrollScene } from '@14islands/r3f-scroll-rig';
import { useFrame, useThree } from '@react-three/fiber';
import { Grid, useFBX } from '@react-three/drei';
import { MeshNormalMaterial } from 'three';
import { SocialIcon } from 'react-social-icons';
import { Tilt } from 'react-tilt'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import SectionWrap from './components/main/section/sectionWrap';
import Header from './components/main/header/header';
import Footer from './components/main/footer/footer';
import BackgroundAnim from './components/main/background/background';
import NavPanel from './components/main/navPanel/navPanel';

import Button from './components/functional/button/button';

import './App.css';



function App() {
  const [activeNav, setActiveNav] = useState(0)

  const sectionRefs = useRef([])
  const mainRef = useRef(null)

  const scrollToSection = (index) => {
    const urlItems = ['home', 'services', 'portfolio', 'contact']

    setActiveNav(index)
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' })
    window.location.hash = urlItems[index]

  }

  const sectionStyleOverride = {
    backgroundColor: '#fff',
    color: '#262626'
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
              <SectionWrap ref={(el) => { sectionRefs.current[0] = el }} sectionStyle={{ height: '910px' }}>

                <Header />
                <HeroContent scrollToSection={scrollToSection} />

              </SectionWrap>

              <SectionWrap name={'KDO JSEM?'} title='Jsem architekt věnující se digitální tvorbě, CGI a programmingu' sectionStyle={{ ...sectionStyleOverride, height: '910px' }}>

              </SectionWrap>


              <SectionWrap ref={(el) => { sectionRefs.current[1] = el }} name={'CO NABÍZÍM?'} title={'Proměňuji digitální vize ve skutečnost.'} >

                <WhoAmIContent />
              </SectionWrap>

              <SectionWrap name={'CO ŘÍKAJÍ KLIENTI?'} sectionStyle={{ ...sectionStyleOverride, height: '450px' }} fullWidth>
                <ClientsContent />
              </SectionWrap>

              <SectionWrap ref={(el) => { sectionRefs.current[2] = el }} name={'UKÁZKY PRÁCE'} sectionStyle={{ ...sectionStyleOverride }}>

                <PortfolioContent />
              </SectionWrap>





              <SectionWrap ref={(el) => { sectionRefs.current[3] = el }} name={'KONTAKT'} title={"Máte zájem o spolupráci?\n Neváhejte mě kontaktovat!"} sectionStyle={{ height: '70vh' }}>
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

const PortfolioContent = () => {

  const MeasonryWrap = ({ children }) => {
    return (
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        style={{ marginTop: '64px' }}
      >
        <Masonry gutter='12px' >
          {children}
        </Masonry>
      </ResponsiveMasonry>
    )
  }

  const portfolioData = [{
    projectName: 'projekt 1',
    imgSrc: "https://picsum.photos/200/300?image=1050",
    projectCategory: 'architecture'
  },
  {
    projectName: 'webovka 1',
    imgSrc: "https://picsum.photos/200/300?image=1050",
    projectCategory: 'programming'
  },
  {
    projectName: 'nábytek 1',
    imgSrc: "https://picsum.photos/200/300?image=206",
    projectCategory: 'design'
  },
  {
    projectName: 'nábytek 2',
    imgSrc: "https://picsum.photos/200/300?image=1050",
    projectCategory: 'design'
  },
  {
    projectName: 'projekt 1',
    imgSrc: "https://picsum.photos/200/300?image=206",
    projectCategory: 'architecture'
  },
  {
    projectName: 'webovka 2',
    imgSrc: "https://picsum.photos/200/300?image=1050",
    projectCategory: 'programming'
  }]

  const tiltOptions = {
    reverse: true,
    max: 20,
    perspective: 1800,
    speed: 500,
    scale: 1,
    transition: true,
    reset: true,
  }

  return (
    <div>

      <MeasonryWrap>
        {portfolioData.map((projectObj, index) => (
          <Tilt key={'portfolio_project_' + index} options={tiltOptions}>
            <div className='flex' style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <img
                src={projectObj.imgSrc}
                style={{ width: "100%", height: 'auto' }}
              />
            </div>
          </Tilt>
        ))}
      </MeasonryWrap>

      <div className='flex flex-justify-end w-100'>
        <Button text={'zobrazit portfolio'} inversed filled styleOverride={{ position: 'relative', marginTop: '24px' }} />
      </div>
    </div>
  )
}

const ClientsContent = () => {
  const clientsData = [{
    text: 'Práce na naší interní aplikaci byla velice inspirativní a výsledek mě velmi potěšil.',
    author: 'Patrik Lakkis'
  },
  {
    text: 'V naší kavárně vás nově obslouží robotické rameno s charakterem',
    author: 'Jan Palacký'
  },
  {
    text: 'lorem ipsum dolor sit amet',
    author: 'tralala olala'
  }]

  const duplicatedData = [...clientsData, clientsData[0]];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCardIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (prevIndex === duplicatedData.length - 1) {
          cardContainerRef.current.style.transition = 'none';
          setCurrentCardIndex(0)

          setTimeout(() => {
            cardContainerRef.current.style.transition = 'transform 0.5s ease-in-out';
            return (1)
          }, 15);

        } else return nextIndex
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const QuoteCard = ({ text, author }) => {
    const tiltOptions = {
      reverse: true,
      max: 20,
      perspective: 1800,
      speed: 500,
      scale: 1,
      transition: true,
      reset: true,
      axis: 'x'
    }

    return (
      <div className='w-100 h-100 ' style={{ flexShrink: 0, marginTop: '120px' }}>

        <Tilt className={'w-100 h-100 flex-column flex-justify-center flex-align-center'} options={tiltOptions} >
          <div className='flex-column flex-justify-end'>
            <h3><i>{`"${text}"`}</i></h3>

            <p style={{ alignSelf: 'center', margin: '12px 0 0 0' }}>{`- ${author}`}</p>
          </div>
        </Tilt>
      </div >
    )
  }


  return (
    <div ref={cardContainerRef} className='flex flex-align-center h-100' style={{ transform: `translateX(${-(currentCardIndex * 100)}%)`, transition: 'transform 0.5s ease-in-out' }}>
      {duplicatedData.map((data, index) => {

        return (
          <QuoteCard key={'quote_card_' + index} text={data.text} author={data.author} />
        )
      })}
    </div>
  )

}

const WhoAmIContent = () => {
  const tiltOptions = {
    reverse: true,
    max: 25,
    perspective: 1500,
    speed: 500,
    scale: 1,
    transition: true,
    reset: true
  }

  const cardsData = [
    {
      name: 'Design',
      text: 'Vytvářím design všeho druhu. Od uživatelských prostředí a aplikací, přes interaktivní modely, nábytek, až po celé stavby.',
      points: ['UI/UX design', 'Grafický design', 'Procedurální design', 'Užitné umění']
    },
    {
      name: 'Architektura',
      text: 'Navrhuji moderní, udržitelnou architekturu na základě dat. Vytvářím parametrické definice aplikovatelné v různých kontextech.',
      points: ['Parametrické navrhování', 'Digitální fabrikace', '3D modelování', 'Vizualizace']
    },
    {
      name: 'Development',
      text: 'Vyvíjím inovativní aplikace šité na míru dle vašich potřeb. Provedu vás celým procesem od prvotních náčrtů, až po hotovou aplikaci.',
      points: ['Full-stack development', 'Webové aplikace', 'Mobilní aplikace', 'Interaktivní instalace']
    }
  ]


  return (

    <div className='flex flex-align-end w-100' style={{ gap: '32px', marginTop: '96px' }}>

      {cardsData.map((dataObj, index) => {
        return (
          <Tilt key={'info_card_' + index} options={tiltOptions} className={'flex-column w-100'} style={{ aspectRatio: '2.2/3', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '15px', backdropFilter: 'blur(100px)', padding: '48px', marginBottom: index === 1 && '96px', boxShadow: 'rgba(0,0,0,.4) 12px 12px 12px' }}>
            <h3 style={{ fontWeight: 500, fontSize: '1.3em', marginBottom: '32px' }}>{dataObj.name}</h3>
            <p style={{ marginBottom: '40px' }}>
              {dataObj.text}
            </p>

            <ul className='flex-column' style={{ margin: 0, padding: 0, lineHeight: '40px' }}>
              {dataObj.points.map((point, index) => {
                return (
                  <li style={{
                    all: 'unset',
                    fontWeight: 200
                  }} key={`card_${dataObj.name}_${index}`}>{point}</li>
                )
              })}
            </ul>
          </Tilt >
        )
      })}
    </div >

  )
}

const HeroContent = ({ scrollToSection }) => {
  return (
    <div className='flex flex-justify-center w-100 h-100'>

      <div className={'flex-column flex-justify-center w-50 h-100'}>

        <h1 style={{ fontSize: '3.5em', fontWeight: 700, lineHeight: 1.2, letterSpacing: 1.5 }}>Tvořím design <br></br>pomocí algoritmů.</h1>
        <p style={{ fontSize: '1.5em', fontWeight: 300, margin: '32px 0 64px 0' }}>Architektura, procedurální design a vývoj aplikací</p>

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

    return (
      <div className='flex-column w-50 h-100' style={{ marginTop: '96px' }}>
        <h2 style={{ fontWeight: 500, fontSize: '1.3em', marginBottom: '12px' }}>{title}</h2>
        {children}
      </div>
    )
  }

  const buttonsData = [
    {
      name: 'facebook',
      text: 'messenger'
    }, {
      name: 'instagram',
      text: 'instagram'
    }, {
      name: 'x',
      text: 'twitter'
    }, {
      name: 'github',
      text: 'github'
    },
  ]

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

          {buttonsData.map((data, index) => {

            const icon = <SocialIcon bgColor={'transparent'} network={data.name} fgColor={'#fff'} style={{ height: 40, width: 40 }} />

            return (
              <Button key={'social_btn_' + data.name} text={data.text} icon={icon} />
            )
          })}

        </div>
      </InfoWrap>
    </div>
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
