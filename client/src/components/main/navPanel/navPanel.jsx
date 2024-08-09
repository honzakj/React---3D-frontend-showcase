import { FaUser, FaHome, FaPhone, FaPencilRuler } from "react-icons/fa";
import { RiLayoutMasonryFill } from "react-icons/ri";

import './navPanel.css'
import { useState } from "react";

const NavPanel = ({ scrollToSection }) => {
    const [hoverIndex, setHover] = useState(null)


    const navData = [{
        name: 'domů',
        icon: <FaHome className="w-100 h-100" />
    },
    {
        name: 'o mně',
        icon: <FaUser className="w-100 h-100" />,

    },
    {
        name: 'služby',
        icon: <FaPencilRuler className="w-100 h-100" />,

    },
    {
        name: 'portfolio',
        icon: <RiLayoutMasonryFill className="w-100 h-100" />
    },
    {
        name: 'kontakt',
        icon: <FaPhone className="w-100 h-100" />
    },
    ]

    return (
        <nav className='flex flex-column flex-justify-between flex-align-end'>
            {navData.map((item, index) => {
                return (
                    <div key={'nav_option_' + index} className="flex flex-justify-end flex-align-center" style={{ position: 'relative' }}>

                        <p className="nav-text" style={{ opacity: hoverIndex === index ? 1 : 0 }}>{item.name}</p>

                        <button className="nav-button hover-scale-animation" key={'navItem_' + index}
                            onClick={(e) => {
                                scrollToSection(index)
                            }}
                            onMouseOver={(e) => setHover(index)}
                            onMouseLeave={(e) => setHover(null)}
                        >
                            {item.icon}
                        </button>
                    </div>
                )
            })}
        </nav>
    )
}

export default NavPanel