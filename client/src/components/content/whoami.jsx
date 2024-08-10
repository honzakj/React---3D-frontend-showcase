import { Card } from '../functional/card'


const whoamiData = {
    imgSrc: 'img/portrait.jpeg',
    text: [
        "Jmenuji se Jiří Honzák a mým zájmem je propojování světa architektury a designu s digitální tvorbou. Programování se věnuji od svých 15 let. V roce 2017 jsem se vydal na dlouhou, ale nesmírně zajímavou cestu studia architektury, v rámci které jsem se snažil o propojení s již získanými vědomostmi. Díky tomu jsem propadl parametrickému designu a počítačové grafice. Mým cílem je vytvářet inovativní a esteticky působivé projekty, které spojují technologii s uměním. Mým štětcem je nejen tužka, ale také počítačový kód.",
        "Na svém kontě mám řadu projektů - jak digitálních, tak těch fyzických. V rámci programmingu se věnuji zejména full-stack web developmentu, pochlubit se však mohu i interaktivními instalacemi např. v kavárně Brněnského Umělecko-průmyslového muzea, nebo menšími IOT projekty do domácností. Fyzické projekty obvykle tvořím jako součást větších celků ve spolupráci se známými architektonickými studii, popřípadě jen tak pro radost."
    ]
}

export const WhoamiContent = () => {
    return (
        <div className='w-100 flex-column' >

            <ImgText imgSrc={whoamiData.imgSrc} text={whoamiData.text} title={whoamiData.title} />

        </div>
    )
}

const ImgText = ({ flip, text, imgSrc, title }) => {

    const ImgPart = () => (
        <div className='w-50 flex flex-align-center flex-justify-center'>
            <img src={imgSrc} style={{ width: '80%', height: 'auto' }} />
        </div >
    )

    const TextPart = () => (
        <div className='w-50 flex-column flex-justify-center' style={{ textAlign: flip ? 'right' : 'left' }}>
            {title &&
                <h3 style={{ marginBottom: '24px' }}>{title}</h3>
            }
            {text.map((paragraph, index) => (
                <p key={'whoAmI_text_' + index} style={{ margin: '16px 0' }}>{paragraph}</p>
            ))}

        </div>
    )

    return (
        <div className="flex" style={{ margin: '64px 0', gap: '40px' }}>

            <>
                <ImgPart />
                <TextPart />
            </>

        </div>
    )
}