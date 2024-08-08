import { forwardRef } from 'react'
import './sectionWrap.css'


const SectionWrap = forwardRef(({ name, title, children, sectionStyle, contentStyle, fullWidth }, ref) => {


    return (
        <section ref={ref} className='flex flex-justify-center w-100' style={sectionStyle}>

            <div className='section-content flex-column flex' style={{ maxWidth: fullWidth && '100%', overflow: fullWidth && 'hidden', ...contentStyle }}>
                <div className='w-100' style={{ maxWidth: fullWidth && '1210px', alignSelf: fullWidth && 'center' }}>
                    {name &&
                        <p className='section-name'>{name}</p>
                    }

                    {title &&
                        <h1 className='section-title'>{title}</h1>
                    }
                </div>

                {children}
            </div>
        </section>
    )
})

export default SectionWrap