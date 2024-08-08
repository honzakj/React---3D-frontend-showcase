import { FaUser, FaHome, FaPhone } from "react-icons/fa";
import { RiLayoutMasonryFill } from "react-icons/ri";

import './navPanel.css'
import { useState } from "react";

const NavPanel = ({ scrollToSection }) => {
    const navItems = ['domů', 'co nabízím', 'portfolio', 'kontakt']

    const [hoverIndex, setHover] = useState(null)

    const iconComponents = [
        <FaHome className="w-100 h-100" />,
        <FaUser className="w-100 h-100" />,
        <RiLayoutMasonryFill className="w-100 h-100" />,
        <FaPhone className="w-100 h-100" />,
    ];

    return (
        <nav className='flex flex-column flex-justify-between flex-align-end'>
            {navItems.map((item, index) => {
                return (
                    <div className="flex flex-justify-end flex-align-center" style={{ position: 'relative' }}>
                        <p className="nav-text" style={{ opacity: hoverIndex === index ? 1 : 0 }}>{item}</p>

                        <button className="nav-button hover-scale-animation" key={'navItem_' + index}
                            onClick={(e) => {
                                scrollToSection(index)
                            }}
                            onMouseOver={(e) => setHover(index)}
                            onMouseLeave={(e) => setHover(null)}
                        >
                            {iconComponents[index]}
                        </button>
                    </div>
                )
            })}
        </nav>
    )
}

export default NavPanel