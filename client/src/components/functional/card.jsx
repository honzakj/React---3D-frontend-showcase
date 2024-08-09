

export const Card = ({ children }) => {
    return (
        <div
            className='flex'
            style={{ borderRadius: '15px', overflow: 'hidden', position: 'relative', boxShadow: 'rgba(0, 0, 0, 0.3) 8px 8px 16px', }}
        >
            {children}
        </div>
    )
}
