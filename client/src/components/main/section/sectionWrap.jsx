import { forwardRef } from 'react'
import './sectionWrap.css'


const SectionWrap = forwardRef(({ name, title, children, sectionStyle }, ref) => {


    return (
        <section ref={ref} className='flex flex-justify-center w-100' style={sectionStyle}>
            <div className='section-content flex-column'>
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