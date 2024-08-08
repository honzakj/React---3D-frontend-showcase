import Button from "../../functional/button/button"
import './footer.css'

const Footer = ({ scrollToSection }) => {

    return (
        <footer className='w-100 flex flex-justify-between flex-align-center'>
            <Button text='scroll up' filled clickHandler={() => scrollToSection(0)} />
            <p> 2024 © Jiří Honzák</p>
        </footer>
    )
}

export default Footer