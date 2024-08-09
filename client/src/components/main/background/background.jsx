import './background.css'



const BackgroundAnimation = ({ children }) => {
    return (
        <div className='h-100 w-100 anim-gradient' >
            <div className='h-100 w-100 anim-gradient-overlay' style={{ backdropFilter: 'blur(100px)' }}>
                {children}
            </div>
        </div>
    )
}

export default BackgroundAnimation