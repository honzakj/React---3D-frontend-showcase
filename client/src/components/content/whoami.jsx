import { Card } from '../functional/card'



const whoamiData = [{
    imgSrc: 'https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi dolor, consequat vitae sodales ut, pharetra in orci. Proin malesuada tellus urna. Sed iaculis in dui vitae finibus. Morbi blandit leo nec lorem lobortis accumsan. Nulla convallis justo mi, a eleifend velit pretium nec. Nunc gravida et elit ac lacinia. In vehicula risus magna. Aenean vitae mattis sapien, quis molestie arcu. Cras lobortis magna mauris, a bibendum nibh sodales ac. Praesent ut lorem interdum, accumsan ex id, cursus lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula diam. Morbi justo libero, dignissim sit amet arcu at, cursus convallis est. Praesent venenatis odio non tortor laoreet vestibulum.'
},
{
    imgSrc: 'https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi dolor, consequat vitae sodales ut, pharetra in orci. Proin malesuada tellus urna. Sed iaculis in dui vitae finibus. Morbi blandit leo nec lorem lobortis accumsan. Nulla convallis justo mi, a eleifend velit pretium nec. Nunc gravida et elit ac lacinia. In vehicula risus magna. Aenean vitae mattis sapien, quis molestie arcu. Cras lobortis magna mauris, a bibendum nibh sodales ac. Praesent ut lorem interdum, accumsan ex id, cursus lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula diam. Morbi justo libero, dignissim sit amet arcu at, cursus convallis est. Praesent venenatis odio non tortor laoreet vestibulum.'

}]

export const WhoamiContent = () => {
    return (
        <div className='w-100 flex-column' >
            {whoamiData.map((data, index) => {
                return (
                    <ImgText flip={index % 2 !== 0} imgSrc={data.imgSrc} text={data.text} />

                )
            })}
        </div>
    )
}

const ImgText = ({ flip, text, imgSrc }) => {

    const ImgPart = () => (
        <div className='w-50 flex'>
            <Card>
                <img src={imgSrc} style={{ width: '100%', height: 'auto' }} />
            </Card>
        </div >
    )

    const TextPart = () => (
        <div className='w-50 flex-column'>
            <p style={{ textAlign: flip ? 'right' : 'left' }}>{text}</p>
        </div>
    )

    return (
        <div className="flex" style={{ margin: '64px 0', gap: '64px' }}>
            {flip ?
                <>
                    <TextPart />
                    <ImgPart />
                </>
                :
                <>
                    <ImgPart />
                    <TextPart />
                </>
            }
        </div>
    )
}