import { SocialIcon } from 'react-social-icons'
import './header.css'


const Header = (props) => {
    const navOpts = ['https://m.me/jirka.honzak', 'služby', 'projekty', 'kontakt']
    const iconOpts = ['facebook', 'instagram', 'x', 'github']

    const logoStyle = {
        height: '40px',
        width: '40px',
        background: `url('svg/logo_white.svg')`,
        fill: '#fff'
    }
    return (
        <header className='flex flex-align-center flex-justify-center'>
            <div className='header-content flex flex-justify-between'>

                <div className='flex flex-justify-center logo-wrap'>
                    <div style={logoStyle}></div>
                    <h2>paramoo.</h2>
                </div>

                <ul className='flex' >

                    {navOpts.map((opt, index) => {
                        return (
                            <li key={'opt_' + index} className={'nav-opt-item'}>
                                <SocialIcon url={opt} bgColor={'transparent'} network={iconOpts[index]} fgColor={'#fff'} style={{ height: 40, width: 40 }} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}


export default Header