const Button = ({ text, icon, filled, inversed, clickHandler, styleOverride }) => {
    const buttonStyle = {
        all: 'unset',
        background: filled ? inversed ? '#262626' : '#fff' : null,
        border: '2px solid #fff',
        borderRadius: '15px',
        padding: icon ? '0 16px 0 2px' : '8px 24px',
        color: filled ? inversed ? '#fff' : '#262626' : inversed ? '#262626' : '#fff',
        cursor: 'pointer',
        ...styleOverride
    }

    return (
        <button className='flex button-custom' style={buttonStyle} onClick={clickHandler}>
            {icon && icon}
            {text}
        </button>
    )
}

export default Button