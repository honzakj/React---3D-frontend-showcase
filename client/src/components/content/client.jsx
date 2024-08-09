import { BlurCard } from "../functional/blurCard";
import { TiltWrap } from "../functional/tiltWrap";
import { HorizontalSlideshow } from "../functional/slideshow";
import { useEffect } from "react";

const clientsData = [{
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt pharetra metus, non efficitur diam venenatis ac. Morbi finibus nisl quis neque egestas tincidunt. Donec consectetur, lorem ac laoreet molestie, nulla lorem aliquam tortor, ut sollicitudin tortor metus sit amet ligula. Donec arcu lorem, mattis bibendum porta id, pellentesque quis dui. ',
    author: 'Lorem Ipsum 1'
},
{
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae lacinia sapien, vitae sagittis arcu. Donec molestie accumsan nisl vitae gravida. Aliquam quis hendrerit enim, at feugiat justo. Etiam ornare quam neque, a facilisis magna ornare nec. Sed tincidunt sodales nisi a lobortis. Etiam convallis erat ac feugiat imperdiet.',
    author: 'Lorem Ipsum 2'
},
{
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt metus et dolor interdum blandit. Nulla non quam semper, mollis nisi ut, laoreet tortor. Integer mattis nibh id ligula pellentesque pellentesque. Aenean eget quam tortor. Donec viverra turpis in posuere aliquam. Aenean id malesuada est.',
    author: 'Lorem Ipsum 3'
}]

export const ClientSection = () => {

    useEffect(() => {
        //Tady bych dal požadavek skrz API na data z databáze
        //Klientům pak rozesílat malý formulář k vyplnění -> dynamický obsah
        //prozatím hardcoded
    }, [])

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
        <div className='w-100 h-100 ' style={{ flexShrink: 0, margin: '120px 0 32px 0' }}>
            <TiltWrap>
                <BlurCard style={{ maxWidth: '1210px', padding: '48px 40px' }}>

                    <div className='flex-column flex-justify-end'>

                        <h3 style={{ fontWeight: 200 }}><i>{`"${text}"`}</i></h3>
                        <p style={{ fontWeight: 100, alignSelf: 'flex-end', margin: '8px 24px 0 0' }}>{`- ${author}`}</p>

                    </div>

                </BlurCard>
            </TiltWrap>
        </div >
    )
}



