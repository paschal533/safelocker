import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
 
import './Navbar.css';

 
const Navbar = () => {
    const [toggleState, setToggleState] = useState('inactive')

    const handleToggle = () => {
      if(toggleState === 'inactive'){
        setToggleState ('active')
        console.log(toggleState)
      }else {
        setToggleState  ('inactive')
      }
    };
    
    const [dropState, setdropState] = useState('not-dropdown')

    const handleDrop = () => {
      if(dropState === 'not-dropdown'){
        setdropState ('dropdown')
        console.log(dropState)
      }else {
        setdropState  ('not-dropdown')
      }
    };

    
     return(
         <div className="navbar-container" >
            <div className="avatar" onClick={handleDrop}><Avatar src="/broken-image.jpg"  />
              <div className={dropState}>
                <h5>sign in</h5>
                <h5>signup</h5>
              </div>
             </div>

            <div className="logo" ><h1>Safelocker</h1></div>
            <div className="navbar" onClick={handleToggle}>
                 <div className="nav" ></div>
                 <div className="nav" ></div>
                 <div className="nav" ></div>
            </div>
            <ul className={toggleState}>
                <li>Home</li>
                <li>about</li>
                <li>contant</li>
            </ul>
         </div>

     )
}

export default Navbar