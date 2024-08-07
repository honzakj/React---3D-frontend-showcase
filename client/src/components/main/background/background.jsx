import './background.css'



const BackgroundAnim = () => {
    return (
        <div className='h-100 w-100 anim-gradient' >
            <div className='h-100 w-100 anim-gradient-overlay' style={{ backdropFilter: 'blur(100px)' }}>
            </div>
        </div>
    )
}

export default BackgroundAnim