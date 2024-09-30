import './NewReleases.css';
import image from '../../images/books.png';
import image2 from '../../images/comming soon.png';

function NewReleases () {
    return (
        <div className='NewReleases'>
            <div className='Container-NewReleases'>
            
                <div className='first'>
                    <div className='title'>
                        <h2>Stay tuned on our latest work and what is coming</h2>
                        <img src={image2} alt=''/>
                    </div>
    
                    <div className='image'>
                        <img src={image} alt=''/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewReleases;