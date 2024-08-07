import { FaUser, FaHome, FaPhone } from "react-icons/fa";
import { RiLayoutMasonryFill } from "react-icons/ri";

import './navPanel.css'

const NavPanel = ({ scrollToSection }) => {

    const navItems = ['domů', 'co nabízím', 'portfolio', 'kontakt']

    const iconComponents = [
        <FaHome className="w-100 h-100" />,
        <FaUser className="w-100 h-100" />,
        <RiLayoutMasonryFill className="w-100 h-100" />,
        <FaPhone className="w-100 h-100" />,
    ];

    return (
        <nav className='flex flex-column flex-justify-between flex-align-center'>
            {navItems.map((item, index) => {
                return (

                    <button className="navButton" key={'navItem_' + index}
                        onClick={(e) => {
                            scrollToSection(index)
                        }}>
                        {iconComponents[index]}

                    </button>
                )
            })}
        </nav>
    )
}

export default NavPanel