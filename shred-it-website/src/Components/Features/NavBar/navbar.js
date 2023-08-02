import React, {Fragment} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Navlink from '../NavLink/navlink'
/* import '../../global.css'; */

function Navbar(props) {

    return(
        <Fragment>
        <div>
            <header id='header' className='nav'>
            
                <div className='navContainer'>
                 

                   <ul id="nav-links">
                        <li> 
                            <Link to='/about-us'>
                                {' '}
                                        <Navlink text='About Us'/>
                            </Link>
                            </li>
                            <li>
                            <Link to='/projects'>
                                {' '}
                                        <Navlink text='Our Projects'/>
                            </Link>
                            </li>
                            <li>
                            <Link to='/Howitworks'>
                                {' '}
                                        <Navlink text='How It Works'/>
                            </Link>
                            </li>
                            <li>
                            <Link to='/contact'>
                                {' '}
                                        <Navlink text='Contact Us'/>
                            </Link>
                        </li>
                   </ul>
                    
                </div>
                
            </header>
        </div>
        </Fragment>
    )
}

export default Navbar;