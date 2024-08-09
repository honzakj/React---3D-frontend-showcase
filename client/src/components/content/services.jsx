import { BlurCard } from "../functional/blurCard"
import { TiltWrap } from "../functional/tiltWrap"

export const ServicesContent = () => {

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
                    <ServiceCard key={'service_card_' + index} name={dataObj.name} text={dataObj.text} points={dataObj.points} cardIndex={index} />
                )
            })}
        </div >
    )
}

const ServiceCard = ({ name, text, points, cardIndex }) => {
    return (
        <TiltWrap style={{ marginBottom: cardIndex === 1 && '96px' }}>
            <BlurCard style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>

                <h3 style={{ fontWeight: 500, fontSize: '1.3em', marginBottom: '32px', textDecoration: 'underline' }}>{name}</h3>
                <p style={{ marginBottom: '40px' }}>
                    {text}
                </p>

                <ul className='flex-column' style={{ margin: 0, padding: 0, lineHeight: '40px' }}>
                    {points.map((point, index) => {
                        return (
                            <li style={{
                                all: 'unset',
                                fontWeight: 200
                            }} key={`card_${name}_${index}`}>{point}</li>
                        )
                    })}
                </ul>
            </BlurCard>
        </TiltWrap>
    )
}