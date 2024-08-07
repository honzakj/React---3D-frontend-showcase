import { forwardRef } from 'react'
import './sectionWrap.css'


const SectionWrap = forwardRef(({ name, title, bckgCol, height, textCol, children }, ref) => {
    const sectionStyle = {
        position: 'relative',
        width: '100%',
        height: height && height,
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: bckgCol && bckgCol,
        color: textCol && textCol
    }

    const sectionContentStyle = {
        width: '100%',
        height: '-webkit-fill-available',
        maxWidth: '1210px',
        margin: '120px 0'
    }


    return (
        <section ref={ref} className='flex' style={sectionStyle}>
            <div className='sectionContent flex-column' style={sectionContentStyle}>
                {name &&
                    <p className='section-name'>{name}</p>
                }

                {title &&
                    <h1 className='section-title'>{title}</h1>
                }

                {children}
            </div>
        </section>
    )
})

export default SectionWrap