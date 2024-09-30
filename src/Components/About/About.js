import './About.css'
import image from '../../images/about.png'
function About () {
    return (
        <div className='About'>
            <div className='About-Container'>
    
                <h2 className='title'>About Us</h2>
                
                <p>                           
                    At <strong>BOOK BY STORY</strong>,<br/> we specialize in bringing 
                    your narratives to life with stunning, customized illustrations. 
                    Our <strong>mission</strong> is to transform your story into a visual masterpiece, 
                    making your book unforgettable. Whether it's for children's books, 
                    novels, or any written project, we deliver illustrations that not 
                    only complement your story but also enhance its emotional and visual 
                    impact.
                    <br/>
                    <br/>
                    Our team of passionate artists works closely with authors to ensure 
                    that every detail reflects the essence of your story. From initial 
                    sketches to the final artwork, we value collaboration, offering you 
                    the flexibility to edit and refine every step along the way.
                    <br/>
                    <br/>

                    <strong>Our Process </strong>
                    
                    Collaborative Sketching – We start by sketching ideas based on your story and continue to refine them until you're fully satisfied.
                    Blueprint Perfection – Once the sketch is approved, it serves as a blueprint for the rest of the project, ensuring consistency and precision.
                    Unlimited Edits – We believe in perfection, which is why we allow edits and feedback at every stage of the process, making sure the final product exceeds your expectations.
                    At BOOK BY STORY, we are dedicated to creating illustrations that captivate, inspire, and bring your words to life.

                    Let’s create something extraordinary together!
                    <br/>

                    <div className='img'>
                        <img src={image} alt='#'/>
                        {/* <img src={image} alt='#'/> */}
                    </div>
                </p>

            </div>
        </div>
    )
}

export default About;