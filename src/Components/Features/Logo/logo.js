import React from'react';
import './logo.css';
import {Link} from'react-router-dom';

function Logo(){

    return (
        
            <div className='logoDiv'> 
            <Link to='/'>
                <img className='logo' alt='Logo which reads Shred-It Collective' src='../Images/ShredItLogo.png'></img>
               </Link>
            </div>
       
    )
}

export default Logo;