import { CustomButton } from "../functional/button"
import { RenderViewportScene } from "../threejs/render"

export const HeroContent = ({ scrollToSection }) => {
    return (
        <div className='flex flex-justify-center w-100 h-100'>

            <div className={'flex-column flex-justify-center w-50 h-100'}>

                <h1 style={{ fontSize: '3.5em', fontWeight: 700, lineHeight: 1.2, letterSpacing: 1.5 }}>Tvořím design <br></br>pomocí algoritmů.</h1>
                <p style={{ fontSize: '1.5em', fontWeight: 300, margin: '32px 0 64px 0' }}>Architektura, procedurální design a vývoj aplikací</p>

                <div className='flex' style={{ gap: '12px' }}>
                    <CustomButton text='Kontaktujte mě' filled clickHandler={(e) => scrollToSection(3)} />
                    <CustomButton text='Co nabízím?' clickHandler={(e) => scrollToSection(1)} />
                </div>

            </div>

            <div className={'flex-column flex-justify-center flex-align-center w-50 h-100'} style={{ position: 'relative' }}>
                <RenderViewportScene />
            </div>
        </div>
    )
}

