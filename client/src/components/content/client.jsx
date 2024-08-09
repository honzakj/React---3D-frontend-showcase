import { BlurCard } from "../functional/blurCard";
import { TiltWrap } from "../functional/tiltWrap";
import { HorizontalSlideshow } from "../functional/slideshow";

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

export const ClientSection = () => {

    //duplikace prvního elementu na konec -> infinite scroll jedním směrem
    const duplicatedData = [...clientsData, clientsData[0]];

    return (
        <HorizontalSlideshow dataLength={duplicatedData.length} infinite>
            {duplicatedData.map((data, index) => {
                return (
                    <QuoteCard key={'quote_card_' + index} text={data.text} author={data.author} />
                )
            })}
        </HorizontalSlideshow>
    )
}

const QuoteCard = ({ text, author }) => {
    return (
        <div className='w-100 h-100 ' style={{ flexShrink: 0, margin: '120px 0' }}>
            <TiltWrap>
                <BlurCard style={{ maxWidth: '1210px', padding: '64px 40px' }}>

                    <div className='flex-column flex-justify-end'>

                        <h3><i>{`"${text}"`}</i></h3>
                        <p style={{ alignSelf: 'center', margin: '12px 0 0 0' }}>{`- ${author}`}</p>

                    </div>

                </BlurCard>
            </TiltWrap>
        </div >
    )
}



