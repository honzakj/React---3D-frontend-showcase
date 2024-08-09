import { Tilt } from "react-tilt";


export const TiltWrap = ({ children, style, axis }) => {
    const tiltOptions = {
        reverse: true,
        max: 10,
        perspective: 2000,
        speed: 500,
        scale: 1,
        transition: true,
        reset: true,
        axis: axis && axis
    }

    return (
        <Tilt className={'w-100 h-100 flex-column flex-justify-center flex-align-center'} options={tiltOptions} style={style} >
            {children}
        </Tilt >
    )
}