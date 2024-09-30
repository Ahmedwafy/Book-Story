import './Footer.css'

function Footer () {
    return (
        <div className='Footer'>
            <div className='Footer-Container'>

                <div className='footer-info'>

                    <div className='head'>
                        <h2 className='logo2'>
                            <a href='/'>BOOK<p>BY STORY</p></a>
                        </h2>
                    </div>

                    <div className='list'>
                        <a href='/'><p>Home</p></a>
                        <a href='/TheProcess'><p>The Process</p></a>
                        <a href='/About'><p>About</p></a>
                        <a href='/Help'><p>Help</p></a>                                                              
                    </div>

                    <div className='more-list'>
                        <a href='/NewReleases'><p>New Releases</p></a>                                                              
                        <a href='/'><p>Portofolio</p></a>                                                              
                        <a href='/'><p>Team</p></a>                                                              
                        <a href='/'><p>Email</p></a>                                                                                                                                                                       
                    </div>

                    <div className='links'>
                        <p>Instgram</p>
                        <p>Facebook</p>
                        <p>Twiter</p>
                        <p>Behance</p>                                                                   
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;