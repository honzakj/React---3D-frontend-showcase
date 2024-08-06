import { SocialIcon } from 'react-social-icons'

const Header = (props) => {
    const headerStyle = {
        width: '100%',
        height: '75px',
        padding: '0 25px',
        top: 0,
        left: 0,
        position: 'fixed',
        borderBottom: '2px solid #fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000
    }


    const itemStyle = {
        all: 'unset',
        color: '#000',
        padding: '0 0 0 10px'
    }

    const logoWrap = {
        alignItems: 'baseline'
    }

    const navOpts = ['https://m.me/jirka.honzak', 'služby', 'projekty', 'kontakt']
    const iconOpts = ['facebook', 'instagram', '', '']


    return (
        <header className='flex flex-align-center flex-justify-between' style={headerStyle}>
            <div className='flex flex-justify-center' style={logoWrap}>
                <h1>Honzák</h1>
                <h2>Jiří</h2>
            </div>

            <ul className='flex' >

                {navOpts.map((opt, index) => {
                    return (
                        <li key={'opt_' + index} style={itemStyle}><SocialIcon url={opt} bgColor={'#000'} network={iconOpts[index]} fgColor={'#fff'} style={{ height: 40, width: 40 }} /></li>
                    )
                })}
            </ul>
        </header>
    )
}


export default Header