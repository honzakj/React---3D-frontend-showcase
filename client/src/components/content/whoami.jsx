import { Tilt } from "react-tilt"

export const WhoAmIContent = () => {
    const tiltOptions = {
        reverse: true,
        max: 15,
        perspective: 1800,
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