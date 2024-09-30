import './Request.css';
// import image1 from '../../images/request 11.png'
import { useState } from 'react';

function Request () {

    // Toggle Vissibility ocClick on Buy btn
    const [isVisible, setIsVisible] = useState(false)
    function handleOnClick () {
        return (
            setIsVisible(!isVisible)
        )
    }

    // form
    const [Name, setName] = useState()
    const [Phone, setPhone] = useState()
    const [Mail, setMail] = useState()
    const [Data, setData] = useState()
    const [Feedback, setFeedback] = useState()
    const [Story, setStory] = useState()

    // console.log(Name);
    // console.log(Phone);
    // console.log(Mail);
    // console.log(Data);
    // console.log(Feedback);
    // console.log(Story);


    return (

        <div className='Request'>
            <div className='Request-Container'>
                
                <div className='plan1'>
                    <h2>One illustration</h2>
                    <div className='plan-inside'>
                        <p>- 1 full color illustration</p>
                        <p>- High Resolution</p>
                        <p>- Score File</p>
                        <p>- Custom Background</p>
                        <p>- Style by the Refference</p>
                        <p>- Text Design</p>
                        <p>- Quick Delivery</p>
                        <p>- Commercial Use</p>
                        <p>- Discounted rates <br/><span>starting 3+ illustrations</span></p>
                    </div>

                    <div className='lower-section1'>
                        <p className='p1'>45$</p>
                    </div>
                </div>
                    

                <div className='plan2'>
                    <h2>Illustrated book<br/> from 24 to 36 pages</h2>
                    <div className='plan-inside'>
                        <p>- Front & back cover</p>
                        <p>- 2 Custom Titles</p>
                        <p>- Original Layout</p>
                        <p>- Text Design</p>
                        <p>- High Resolution</p>
                        <p>- Source File</p>
                        <p>- Background / Scene</p> {/* Fixed typo */}
                        <p>- Commercial Use</p>
                        <p>- Discounted rates for books<br/><span>with 36 pages plus</span></p>
                    </div>
                    <div className='lower-section2'>
                        <p className='p2'>$27</p> {/* Moved $ sign */}
                    </div>
                </div>
                                   
                <div className='plan3'>
                    <h2>Children's book<br/>12-36 pages</h2>
                    <div className='plan-inside'>
                        <p>- 2 Personalized characters</p>
                        <p>- Special message on title</p>
                        <p>- Original Layout</p>
                        <p>- Score Files</p>
                        <p>- Story Adaptation</p>
                        <p>- Commercial Use</p>
                        <br/>
                        <div className='lower-section3' style={{textAlign:'center',marginTop:'60px'}}>
                            <p className='p3'>25$</p>
                        </div>
                    </div>
                </div>

                <div className='plan4'>
                        <h2>Journal design</h2>
                    <div className='plan-inside'>
                        <p>- Custom hourly rates for <br/>advanced difficulty projects</p>
                        <p>- Time / Screen Tracking via<br/> web work tracker</p>
                        <div className='lower-section4'>
                            <p className='p4'>25$</p>
                        </div>
                    </div>
                </div> 

                <div className='all-btns'>
                    <button onClick={handleOnClick} className='btn-request'>Buy</button>
                    <button onClick={handleOnClick} className='btn-request'>Buy</button>
                    <button onClick={handleOnClick} className='btn-request'>Buy</button>
                    <button onClick={handleOnClick} className='btn-request'>Buy</button>
                </div>

                {/* <div className='image'>
                    <img src={image1} alt='#'/>
                </div> */}


             
                { isVisible && 

                    <div className='windoww'>
                         <div className='buy'> 
                            <form className='form' action=''>
                                <div>
                                    <label>Name*</label>
                                    <br/>
                                    <input placeholder='Name ...' required 
                                    value={Name}
                                    onChange={ e => setName(e.target.value)}
                                    />
                                </div>
                                <br/>
                                <div>
                                    <label>Phone*</label>
                                    <br/>
                                    <input placeholder='Phone ...' required 
                                    value={Phone}
                                    onChange={ e => setPhone(e.target.value)}
                                    />
                                    
                                </div>
                                <br/>                           
                                <div>
                                    <label>E-mail*</label>
                                    <br/>
                                    <input placeholder='Mail Adress...' required
                                     value={Mail}
                                     onChange={ e => setMail(e.target.value)}
                                     />
                                </div>
                                <br/> 
                                <div>
                                    <label>Need it for business or family?*</label>
                                    <br/>
                                    <input placeholder=' ...' required 
                                    value={Data}
                                    onChange={ e => setData(e.target.value)}

                                    />
                                </div>
                                <br/>    
                                <div>
                                    <label>Feedback</label>
                                    <br/>
                                    <textarea placeholder='Tell us how to be better ...' 
                                    required
                                    value={Feedback}
                                    onChange={ e => setFeedback(e.target.value)}

                                     />
                                </div>
                            </form>

                            <form className='form2'>
                                <div className='Sammary'>
                                    <label>Summary</label>
                                    <br/>
                                    <textarea placeholder='Give us a short summary about your story ...'
                                    required 
                                    value={Story}
                                    onChange={ e => setStory(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div> 
                         
                        <button onClick={handleOnClick} className='btn-Close'>Confirm</button>                        
                        <button onClick={handleOnClick} className='btn-Close2'>Cancel</button>                        
                       
                    </div>
                }              
            </div>
        </div>
                
                    
            


    )
}

export default Request;