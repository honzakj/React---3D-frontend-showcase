import { useEffect, useState } from "react"
import { CustomButton } from "../functional/button"
import { MasonryWrap } from "../functional/masonry"
import { TiltWrap } from "../functional/tiltWrap"

const portfolioData = [{
    projectName: 'projekt 1',
    imgSrc: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    projectCategory: 'architektura',
    projectDescription: 'lorem ipsum'
},
{
    projectName: 'webovka 1',
    imgSrc: "https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    projectCategory: 'programming',
    projectDescription: 'lorem ipsum'
},
{
    projectName: 'webovka 2',
    imgSrc: "https://images.pexels.com/photos/1029611/pexels-photo-1029611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    projectCategory: 'programming',
    projectDescription: 'lorem ipsum'
},
{
    projectName: 'nábytek 1',
    imgSrc: "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    projectCategory: 'design',
    projectDescription: 'lorem ipsum'
},
{
    projectName: 'nábytek 2',
    imgSrc: "https://images.pexels.com/photos/1774931/pexels-photo-1774931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    projectCategory: 'design',
    projectDescription: 'lorem ipsum'
},
{
    projectName: 'projekt 1',
    imgSrc: "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    projectCategory: 'architektura',
    projectDescription: 'lorem ipsum'
}]

export const PortfolioContent = () => {
    useEffect(() => {
        //Tady by byl požadavek skrz API na data z databáze -> dynamický obsah
        //Zároveň bych udělal state variable isLoading a navázal na ni animaci načítání
        //prozatím hardcoded v portfolioData
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
            <div
                className='flex'
                style={{ borderRadius: '15px', overflow: 'hidden', position: 'relative', cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.3) 8px 8px 16px', }}
                onMouseEnter={(e) => setHovering(true)}
                onMouseLeave={(e) => setHovering(false)}
            >
                <div className="h-100 w-100" style={{ position: 'absolute', background: 'rgba(0,0,0,0.3)', opacity: isHovering ? 1 : 0, transition: 'opacity 300ms ease-in-out' }}>
                    <div className='flex-column w-100' style={{ position: 'absolute', alignSelf: 'flex-end', color: '#fff', padding: '24px' }}>
                        <p>{category}</p>
                        <h3>{name}</h3>
                    </div>
                </div>

                <img
                    src={imgSrc}
                    style={{ height: 'auto', width: '100%' }}
                />
            </div>
        </TiltWrap>

    )
}
