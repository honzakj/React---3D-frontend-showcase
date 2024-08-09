import { SocialIcon } from 'react-social-icons'
import './header.css'


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

const Header = () => {
    return (
        <header className='flex flex-align-center flex-justify-center'>
            <div className='header-content flex flex-justify-between'>

                <div className='flex flex-justify-center logo-wrap'>
                    <div className='header-logo' style={{ background: `url('svg/logo_white.svg')` }}></div>
                    <h2>paramoo.</h2>
                </div>

                <ul className='flex' >

                    {buttonsData.map((buttonData, index) => {
                        return (
                            <li key={'opt_' + index} className={'nav-opt-item hover-scale-animation'}>
                                <SocialIcon url={buttonData.url} bgColor={'transparent'} network={buttonData.iconName} fgColor={'#fff'} style={{ height: 40, width: 40 }} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}


export default Header