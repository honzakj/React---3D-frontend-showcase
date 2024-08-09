import { CustomButton } from "../../functional/button"
import './footer.css'

const Footer = ({ scrollToSection }) => {

    return (
        <footer className='w-100 flex flex-justify-center'>

            <div className='w-100 footer-content flex flex-justify-between flex-align-center'>
                <p> 2024 © Jiří Honzák</p>
                <CustomButton text='scroll up' filled clickHandler={() => scrollToSection(0)} />

            </div>

        </footer>
    )
}

export default Footer