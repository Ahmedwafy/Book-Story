import image1 from '../../../src/images/coverrr.jpg'
import './Cover.css'

function Cover () {
    return (
        <div className='Cover'>
        <div className='Cover-Container'>

            <img className='img1' src={image1} alt='#' style={{width:'600px',marginTop:'70px'}}/>

            <div className='parags'>
                <p>WE CREATE</p>
                <p>awesome illustrations for your BOOK based on your STORY</p>   
            </div>
        </div>
        </div>
    )
}

export default Cover;