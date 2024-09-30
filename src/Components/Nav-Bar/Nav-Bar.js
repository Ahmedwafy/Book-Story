import { useState } from 'react';
import './Nav-Bar.css'
import { NavLink } from 'react-router-dom';


function NavBar () {

    const [isList, setIsList] = useState(false)
    function handleOnClick () {
        return (
            setIsList(!isList)
        )
    }


    return (
        <div className='Nav-Bar'>
            <div className='Nav-Bar-Container'> 

                <h2 className='logo'>
                    <a href='/'>BOOK<p>BY STORY</p></a>
                </h2>

                <ul>
                    <li><NavLink to='/Request'>REQUEST</NavLink></li>
                    <li><NavLink to='/TheProcess'>THE PROCESS</NavLink></li>
                    <li><NavLink to='/OurWork'>OUR WORK</NavLink></li>
                    <li><NavLink to='/Pricing'>PRICING</NavLink></li>
                    <li><NavLink to='/About'>ABOUT</NavLink></li>
                </ul>

                    {/* Show bars icon only if isList is false */}
                    {!isList && (
                    <h2 className="bars">
                        <i className="fa-solid fa-bars" onClick={handleOnClick}></i>
                    </h2>
                    )}

                    {/* Show barList only if isList is true */}
                    {isList && (
                    
                        <ul className="barList">
                            <li>Profile</li>
                            <li>Settings</li>
                            <li>Logout</li>
                            <li onClick={handleOnClick}><i className="fa-solid fa-caret-up"></i></li>   
                        </ul>
                    
                    )}

                <h2 className='user'>
                    <i className="fa-solid fa-circle-user"></i>   
                </h2>
            </div>
            <hr/>
        </div>
    ) 
}

export default NavBar;