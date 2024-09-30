import './Testimonials.css'
import image1 from '../../images/testimonials.png'
import image2 from '../../images/team1-150x150.jpg'
import image3 from '../../images/team2-150x150.jpg'
import image4 from '../../images/team3-150x150.jpg'

function Testimonials () {
    return (
        <div className='Testimonials'>
            <div className='Testimonials_Container' >
                <h2>Testimonials</h2>

                <img src={image1} alt='#' style={{width:'500px'}}/>
                
                <img src={image2} alt='#'/>
                <img src={image3} alt='#'/>
                <img src={image4} alt='#'/>

                <div className='Quote1'>
                    <q>
                        i have ordered a set of illustrations of robots for my blog and it 
                        were hit, i instantly received numerous likes and reposts because of
                        how good the illustrations were
                    </q>
                </div>

                <div className='Quote2'>
                    <q>
                    i was working with a numerous illustrators through my career in book
                    publishing. But the book i made with book by story was the most easiest
                    creative process i had in a while.
                    </q>
                </div>

                <div className='Quote3'>
                    <q>
                    Exelent work. My child was portrayed as ship captain in the story i wrote 
                    for him. The book meant to be the birthday gift. When he recieved the book,
                    he couldn't believe it's happening and that's it's him on every page.
                    </q>
                </div>

            </div>
        </div>
    )
}

export default Testimonials;