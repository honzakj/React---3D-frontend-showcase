import React, { useRef, useState } from 'react';
import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig';

import SectionWrap from './components/main/section/sectionWrap';
import Header from './components/main/header/header';
import Footer from './components/main/footer/footer';
import BackgroundAnim from './components/main/background/background';
import NavPanel from './components/main/navPanel/navPanel';

import { ClientSection } from './components/content/client';
import { ContactContent } from './components/content/contact';
import { PortfolioContent } from './components/content/portfolio';
import { WhoAmIContent } from './components/content/whoami';
import { HeroContent } from './components/content/hero';

import './App.css';



const App = () => {
  const [activeNav, setActiveNav] = useState(0)

  const sectionRefs = useRef([])
  const mainRef = useRef(null)

  const scrollToSection = (index) => {
    const hashItems = ['home', 'services', 'portfolio', 'contact']

    setActiveNav(index)
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' })
    window.location.hash = hashItems[index]

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
            <div {...bind}>
              <SectionWrap ref={(el) => { sectionRefs.current[0] = el }} sectionStyle={{ height: '910px' }}>

                <Header />
                <HeroContent scrollToSection={scrollToSection} />

              </SectionWrap>

              <SectionWrap name={'KDO JSEM?'} title='Jsem architekt věnující se digitální tvorbě, CGI a programmingu' sectionStyle={{ ...sectionStyleOverride, height: '910px' }} >

              </SectionWrap>




              <SectionWrap ref={(el) => { sectionRefs.current[1] = el }} name={'CO NABÍZÍM?'} title={'Proměňuji digitální vize ve skutečnost.'} contentStyle={{ margin: '150px 0 64px 0' }} >

                <WhoAmIContent />
              </SectionWrap>

              <SectionWrap name={'CO ŘÍKAJÍ KLIENTI?'} fullWidth contentStyle={{ margin: '64px 0 150px 0' }}>
                <ClientSection />
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

export default App
