import Cover from '../Cover/Cover';
import Process from '../Process/Process';
import OurWork from '../Our_Work/Our_Work';
import Testimonials from '../Testimonials/Testimonials';
import Pricing from '../Pricing/Pricing';
import Footer from '../Footer/Footer';

function Home () {
    return (
        <div>
            <Cover />
            <Process />
            <OurWork />
            <Testimonials />
            <Pricing />
            <Footer /> 
        </div>
    )
}

export default Home;