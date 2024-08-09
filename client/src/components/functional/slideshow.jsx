import { useState, useRef, useEffect } from "react";


export const HorizontalSlideshow = ({ children, dataLength }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cardContainerRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (currentCardIndex + 1) % dataLength;

            if (nextIndex !== 0) setCurrentCardIndex(nextIndex);

            if (nextIndex === 0) {
                return new Promise(resolve => {
                    cardContainerRef.current.style.transition = 'none';
                    resolve();
                })
                    .then(() => {
                        setCurrentCardIndex(0);
                        return new Promise(resolve => setTimeout(resolve, 25));
                    })
                    .then(() => {
                        cardContainerRef.current.style.transition = 'transform 0.5s ease-in-out';
                    });
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentCardIndex, dataLength]);

    return (
        <div
            ref={cardContainerRef}
            className='flex flex-align-center h-100'
            style={{ transform: `translateX(${-(currentCardIndex * 100)}%)`, transition: 'transform 0.5s ease-in-out' }}
        >
            {children}
        </div>
    );
};