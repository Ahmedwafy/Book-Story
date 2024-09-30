import './Process.css';
import image1 from '../../images/video placeholder.png'
function Process () {
    return (
        <div className="Process">
            <div className="Container-Process" style={{textAlign:'center'}}>
                <h2>The Process</h2>
                <p>
                    We edit sketch untill it's perfect and using it as blueprint 
                    for the rest of the project. <br/>We provide a possibility of editing
                    at all stages.
                </p>

                <img src={image1} alt='#' style={{width:'1000px'}}/>
            </div>
        </div>
    )
}

export default Process;