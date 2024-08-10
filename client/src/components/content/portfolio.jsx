import { useEffect, useState } from "react"
import { CustomButton } from "../functional/button"
import { MasonryWrap } from "../functional/masonry"
import { TiltWrap } from "../functional/tiltWrap"
import { Card } from "../functional/card"

const portfolioData = [{
    projectName: 'Židle',
    imgSrc: "img/zidle.JPG",
    projectCategory: 'Design',
    projectDescription: 'lorem ipsum'
},
{
    projectName: 'Café Stalingrad',
    imgSrc: "img/cafe_stalingrad.jpg",
    projectCategory: 'Architektura',
    projectDescription: 'Podhled kavárny vznikl degitálním přepisem místní morfologie terénu'
}, {
    projectName: 'Návrh lehátka',
    imgSrc: "img/lehatko.png",
    projectCategory: 'Design',
    projectDescription: 'lorem ipsum'
}, {
    projectName: 'Arborista Lakkis',
    imgSrc: "img/lakkis.jpg",
    projectCategory: 'Web development',
    projectDescription: 'lorem ipsum'
},
{
    projectName: 'Návrh bytového domu',
    imgSrc: "img/plakat.png",
    projectCategory: 'Architektura',
    projectDescription: 'lorem ipsum'
}, {
    projectName: 'Terminál robotické kavárny',
    imgSrc: "img/robot.jpg",
    projectCategory: 'UI/UX',
    projectDescription: 'lorem ipsum'
},

]

export const PortfolioContent = () => {
    useEffect(() => {
        //Tady by byl požadavek skrz API na data z databáze -> dynamický obsah
        //Zároveň bych v app.jsx udělal state variable isLoading a navázal na ni načítání dat z databáze a načítání obrázků
        //Tím zajistím že se nebudou obrázky postupně nahrávat uživatli před očima -> smooth experience
        //Projekty prozatím hardcoded v portfolioData
    }, [])


    return (
        <div>
            <MasonryWrap>
                {portfolioData.map((projectObj, index) => (
                    <ProjectCard key={'portfolio_project_' + index} imgSrc={projectObj.imgSrc} name={projectObj.projectName} category={projectObj.projectCategory} />
                ))}
            </MasonryWrap>

            <div className='flex flex-justify-end w-100'>
                <CustomButton text={'zobrazit portfolio'} inversed filled styleOverride={{ position: 'relative', margin: '92px 0' }} clickHandler={(e) => { alert('funkce prozatím není implementována') }} />
            </div>
        </div>
    )
}

const ProjectCard = ({ imgSrc, name, category }) => {
    const [isHovering, setHovering] = useState(false)

    return (
        <TiltWrap style={{ all: 'unset' }}>
            <Card>
                <div className="h-100 w-100"
                    style={{ position: 'absolute', background: 'rgba(0,0,0,0.4)', opacity: isHovering ? 1 : 0, transition: 'opacity 300ms ease-in-out', cursor: 'pointer', }}
                    onMouseEnter={(e) => setHovering(true)}
                    onMouseLeave={(e) => setHovering(false)}>
                    <div className='flex-column w-100' style={{ position: 'absolute', alignSelf: 'flex-end', color: '#fff', padding: '24px' }}>
                        <p>{category}</p>
                        <h3>{name}</h3>
                    </div>
                </div>

                <img
                    src={imgSrc}
                    style={{ height: 'auto', width: '100%' }}
                />
            </Card>
        </TiltWrap>

    )
}

