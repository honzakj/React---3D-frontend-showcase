import { useState, useRef, useEffect } from "react";
import { Tilt } from "react-tilt";

import { BlurCard } from "../functional/blurCard";

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

const ClientsContent = () => {

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
        <div className='w-100 h-100 ' style={{ flexShrink: 0, margin: '120px 0' }}>
            <Tilt className={'w-100 h-100 flex-column flex-justify-center flex-align-center'} options={tiltOptions} >
                <BlurCard style={{ maxWidth: '1210px', padding: '64px 40px' }}>
                    <div className='flex-column flex-justify-end'>
                        <h3><i>{`"${text}"`}</i></h3>

                        <p style={{ alignSelf: 'center', margin: '12px 0 0 0' }}>{`- ${author}`}</p>
                    </div>
                </BlurCard>
            </Tilt>
        </div >
    )
}



export default ClientsContent