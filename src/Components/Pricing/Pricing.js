import './Pricing.css'
import image from '../../images/kid.png'

import { useNavigate } from 'react-router-dom';
// import Request from '../Request-Quote/Request'

function Pricing () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Request');
    };
      
    return (
        <div className='Pricing'>
            <div className='Pricing-Container'>
                <h2 className='title'>Pricing</h2>

                <div className='Details'>
                    <div>
                        <h2>One illustration</h2>
                        <p>- 1 full color illustration</p>
                        <p>- High Resolution</p>
                        <p>- Score File</p>
                        <p>- Custom Background</p>
                        <p>- Style by the Refference</p>
                        <p>- Text Design</p>
                        <p>- Quick Delivery</p>
                        <p>- Commercial Use</p>
                        <p>- Discounted rates <br/><span>starting 3+ illustrations</span></p>
                        <div className='lower-section'>
                            <p className='p1 num'>45$</p>
                            <p className='p2'>per illustration</p>
                        </div>
                    </div>

                    <div>
                        <h2>Illustrated book<br/> from 24 to 36 pages</h2>
                        <p>- Front & back cover</p>
                        <p>- 2 Custom Titles</p>
                        <p>- Original Layout</p>
                        <p>- Text Design</p>
                        <p>- High Resolution</p>
                        <p>- Source File</p>
                        <p>- Background / Sence</p>
                        <p>- Commercial Use</p>
                        <p>- Discounted rates for books<br/><span>with 36 pages plus</span></p>
                        <div className='lower-section'>
                            <p>starting at</p>
                            <p className='num'>27$</p>
                            <p>per illustration</p>
                        </div>
                    </div>

                    <div>
                        <h2>Children's book<br/>12-36 pages</h2>
                        <p>- 2 Personalized characters</p>
                        <p>- Special message on title</p>
                        <p>- Original Layout</p>
                        <p>- Score Files</p>
                        <p>- Story Adaptation</p>
                        <p>- Commercial Use</p>
                        <br/>
                            <img src={image} alt='#' style={{width:'200px', marginLeft:'12px'}}/>  
                        <div className='lower-section1' style={{textAlign:'center',marginTop:'60px'}}>
                            <p>starting at</p>
                            <p className='num'>25$</p>
                            <p>per illustration</p>
                        </div>
                    </div>

                    <div>
                        <h2>Journal design</h2>
                        <p>- Custom hourly rates for <br/>advanced difficulty projects</p>
                        <p>- Time / Screen Tracking via<br/> web work tracker</p>
                        <div className='lower-section'>
                            <p>starting at</p>
                            <p className='num'>25$</p>
                            <p>per illustration</p>
                        </div>
                    </div>

                </div>

                <div className='requet-btn'>
                    <button className='btnn' onClick={handleClick}>
                        Request
                    </button>
                </div>
                <br/>
                <br/>
                <br/>

            </div>
        </div>
    )
}

export default Pricing;