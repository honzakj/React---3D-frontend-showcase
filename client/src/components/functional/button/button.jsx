const Button = ({ text, icon, filled, clickHandler }) => {
    const buttonStyle = {
        all: 'unset',
        background: filled ? '#fff' : null,
        border: '2px solid #fff',
        borderRadius: '15px',
        padding: icon ? '0 16px 0 2px' : '8px 24px',
        color: filled && '#000',
        cursor: 'pointer'
    }

    return (
        <button className='flex button-custom' style={buttonStyle} onClick={clickHandler}>
            {icon && icon}
            {text}
        </button>
    )
}

export default Button