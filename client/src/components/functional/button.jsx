import { useState } from "react"

export const CustomButton = ({ text, icon, filled, inversed, clickHandler, styleOverride }) => {
    const [isHovering, setHover] = useState(false)

    const buttonStyle = {
        all: 'unset',
        background: filled ? inversed ? '#262626' : '#fff' : null,
        border: '2px solid #fff',
        borderRadius: '15px',
        padding: icon ? '0 16px 0 2px' : '8px 24px',
        color: filled ? inversed ? '#fff' : '#262626' : inversed ? '#262626' : '#fff',
        cursor: 'pointer',
        transform: isHovering ? 'scale(1.03)' : null,
        transition: 'transform 150ms ease-in-out',
        flexWrap: 'nowrap',
        ...styleOverride
    }

    return (
        <button className='button-custom' style={buttonStyle} onClick={clickHandler} onMouseEnter={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)}>
            <div className="flex flex-align-center">
                {icon && icon}
                <p>{text}</p>
            </div>
        </button>
    )
}

