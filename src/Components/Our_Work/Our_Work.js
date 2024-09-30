import './OurWork.css';
import image1 from '../../images/kid1.jpg'
import image2 from '../../images/kid2.jpg'
import image3 from '../../images/kid3.jpg'
import image4 from '../../images/kid4.jpg'
import image5 from '../../images/kid5.jpg'
import image6 from '../../images/kid6.jpg'
import image7 from '../../images/kid7.jpg'
import image8 from '../../images/kid8.jpg'
import image9 from '../../images/kid9.jpg'

function Our_Work () {
    return (
        <div className="Our_Work">
            <div className="Container-Our_Work" style={{textAlign:'center'}}>
                <h2>Our Work</h2>

                <div className='row1'>
                    <img src={image1} alt='#'/>
                    <img src={image2} alt='#'/>    
                    <img src={image3} alt='#'/>   
                </div>

                <div className='row2'>
                    <img src={image4} alt='#'/>
                    <img src={image5} alt='#'/>    
                    <img src={image6} alt='#'/>  
                </div>

                <div className='row3'>
                    <img src={image7} alt='#'/>
                    <img src={image8} alt='#'/>    
                    <img src={image9} alt='#'/>  
                </div>

            </div>
        </div>
    )
}

export default Our_Work;