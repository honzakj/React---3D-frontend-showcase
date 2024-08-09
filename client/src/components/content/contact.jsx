import { SocialIcon } from "react-social-icons"
import { CustomButton } from "../functional/button"

export const ContactContent = () => {

    const buttonsData = [
        {
            iconName: 'facebook',
            text: 'messenger',
            url: 'https://m.me/jirka.honzak'
        }, {
            iconName: 'instagram',
            text: 'instagram',
            url: 'https://instagram.com/honzatedajirka'
        }, {
            iconName: 'x',
            text: 'twitter',
            url: 'https://x.com/HonzakJi?t=Bwipqs98eBv40onmpdtDMA&s=09'
        }, {
            iconName: 'github',
            text: 'github',
            url: 'https://github.com/honzakj'
        },
    ]

    return (
        <div className='flex w-100 h-100' style={{ marginBottom: '96px' }}>

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
                    {buttonsData.map((buttonData, index) => {

                        const icon = <SocialIcon bgColor={'transparent'} network={buttonData.iconName} fgColor={'#fff'} style={{ height: 40, width: 40 }} />

                        return (
                            <CustomButton key={'social_btn_' + buttonData.iconName} text={buttonData.text} icon={icon} clickHandler={(e) => window.open(buttonData.url)} />
                        )
                    })}
                </div>

            </InfoWrap>
        </div>
    )
}

const InfoWrap = ({ title, children }) => {
    return (
        <div className='flex-column w-50 h-100' style={{ marginTop: '96px' }}>
            <h2 style={{ fontWeight: 500, fontSize: '1.3em', marginBottom: '12px' }}>{title}</h2>
            {children}
        </div>
    )
}

