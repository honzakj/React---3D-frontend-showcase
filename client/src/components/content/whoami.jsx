import { Card } from '../functional/card'


const whoamiData = [{
    imgSrc: 'https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Jmenuji se Jiří Honzák a mým zájmem je propojování světa architektury a designu s digitální tvorbou. Programování se věnuji od svých 15 let. V roce 2017 jsem se vydal na dlouhou, ale nesmírně zajímavou cestu studia architektury, v rámci kterého jsem snažil o propojení s již získanými vědomostmi. Díky tomu jsem propadl hluboké vášni k parametrickému designu a počítačové grafice. Mým cílem je vytvářet inovativní a esteticky působivé projekty, které spojují technologii s uměním. Mým štětcem je nejen tužka, ale také počítačový kód.'
},
{
    imgSrc: 'https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Na svém kontě mám řadu projektů - jak digitálních, tak těch fyzických. V rámci programmingu se věnuji zejména full-stack web developmentu, pochlubit se však mohu i interaktivními instalacemi např. v kavárně Brněnského Umělecko-průmyslového muzea, nebo menšími IOT projekty do domácností. Fyzické projekty obvykle tvořím jako součást větších celků ve spolupráci se známými architektonickými studii, popřípadě jen tak pro radost. '
}]

export const WhoamiContent = () => {
    return (
        <div className='w-100 flex-column' >
            {whoamiData.map((data, index) => {
                return (
                    <ImgText flip={index % 2 !== 0} imgSrc={data.imgSrc} text={data.text} title={data.title} />

                )
            })}
        </div>
    )
}

const ImgText = ({ flip, text, imgSrc, title }) => {

    const ImgPart = () => (
        <div className='w-50 flex'>
            <Card>
                <img src={imgSrc} style={{ width: '100%', height: 'auto' }} />
            </Card>
        </div >
    )

    const TextPart = () => (
        <div className='w-50 flex-column flex-justify-center' style={{ textAlign: flip ? 'right' : 'left' }}>
            {title &&
                <h3 style={{ marginBottom: '24px' }}>{title}</h3>
            }
            <p >{text}</p>
        </div>
    )

    return (
        <div className="flex" style={{ margin: '64px 0', gap: '40px' }}>
            {flip ?
                <>
                    <TextPart />
                    <ImgPart />
                </>
                :
                <>
                    <ImgPart />
                    <TextPart />
                </>
            }
        </div>
    )
}