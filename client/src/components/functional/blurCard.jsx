export const BlurCard = ({ children, style }) => {
    return (
        <div className="h-100 w-100 flex-column flex-justify-center flex-align-center" style={{ background: 'rgba(0,0,0,0.3)', padding: '40px', borderRadius: '15px', backdropFilter: 'blur(100px)', boxShadow: 'rgba(0,0,0,.4) 12px 12px 12px', ...style }}>
            {children}
        </div>
    )
}