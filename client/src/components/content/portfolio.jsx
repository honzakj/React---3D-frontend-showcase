import { Tilt } from "react-tilt"
import Button from "../functional/button/button"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const portfolioData = [{
    projectName: 'projekt 1',
    imgSrc: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    projectCategory: 'architecture'
},
{
    projectName: 'webovka 1',
    imgSrc: "https://picsum.photos/200/300?image=1050",
    projectCategory: 'programming'
},
{
    projectName: 'nábytek 1',
    imgSrc: "https://picsum.photos/200/300?image=206",
    projectCategory: 'design'
},
{
    projectName: 'nábytek 2',
    imgSrc: "https://picsum.photos/200/300?image=1050",
    projectCategory: 'design',
    projectDescription: 'lorem ipsum'
},
{
    projectName: 'projekt 1',
    imgSrc: "https://picsum.photos/200/300?image=206",
    projectCategory: 'architecture'
},
{
    projectName: 'webovka 2',
    imgSrc: "https://picsum.photos/200/300?image=1050",
    projectCategory: 'programming'
}]

export const PortfolioContent = () => {

    const tiltOptions = {
        reverse: true,
        max: 10,
        perspective: 1800,
        speed: 500,
        scale: 1,
        transition: true,
        reset: true,
    }

    return (
        <div>

            <MeasonryWrap>

                {portfolioData.map((projectObj, index) => (
                    <Tilt key={'portfolio_project_' + index} options={tiltOptions}>
                        <div className='flex' style={{ borderRadius: '15px', overflow: 'hidden', position: 'relative', cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.4) 12px 12px 12px' }}>
                            <img
                                src={projectObj.imgSrc}
                                style={{ width: "100%" }}
                            />
                            <div className='flex w-100' style={{ position: 'absolute', alignSelf: 'flex-end', color: '#fff', padding: '16px' }}><h3>{projectObj.projectName}</h3></div>
                        </div>
                    </Tilt>
                ))}

            </MeasonryWrap>

            <div className='flex flex-justify-end w-100'>
                <Button text={'zobrazit portfolio'} inversed filled styleOverride={{ position: 'relative', marginTop: '64px' }} />
            </div>
        </div>
    )
}

const MeasonryWrap = ({ children }) => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            style={{ marginTop: '64px' }}>

            <Masonry gutter='32px' >
                {children}
            </Masonry>

        </ResponsiveMasonry>
    )
}