import { SocialIcon } from "react-social-icons"
import Button from "../functional/button/button"

const ContactContent = () => {

    const InfoWrap = ({ title, children }) => {
        return (
            <div className='flex-column w-50 h-100' style={{ marginTop: '96px' }}>
                <h2 style={{ fontWeight: 500, fontSize: '1.3em', marginBottom: '12px' }}>{title}</h2>
                {children}
            </div>
        )
    }

    const buttonsData = [
        {
            name: 'facebook',
            text: 'messenger'
        }, {
            name: 'instagram',
            text: 'instagram'
        }, {
            name: 'x',
            text: 'twitter'
        }, {
            name: 'github',
            text: 'github'
        },
    ]

    return (
        <div className='flex w-100 h-100'>
            <InfoWrap title={'Kontaktujte mě'}>
                <p style={{ fontWeight: 300, marginBottom: '24px' }}>honzak.jirka@gmail.com</p>
                <p style={{ fontWeight: 300 }}>
                    Bc. Ing. arch. Jiří Honzák<br></br>
                    Ulička 18 <br></br>
                    623 00 Brno
                </p>

            </InfoWrap>

            <InfoWrap title={'Sociální sítě'}>
                <div className='flex' style={{ gap: '12px' }}>

                    {buttonsData.map((data, index) => {

                        const icon = <SocialIcon bgColor={'transparent'} network={data.name} fgColor={'#fff'} style={{ height: 40, width: 40 }} />

                        return (
                            <Button key={'social_btn_' + data.name} text={data.text} icon={icon} />
                        )
                    })}

                </div>
            </InfoWrap>
        </div>
    )
}

export default ContactContent