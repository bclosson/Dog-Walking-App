import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return ( 
    <div>
        <nav className="main-nav">

          <div class="nav-wrapper">
            <div class="brand-logo"><Link to ='/'>Puppy Love</Link></div>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/index">Dog Profiles</Link></li>
            </ul>
          </div>
        </nav>
        

{/* <ul>
  <li>
    <Link to = '/'>Home</Link>
  </li>
  <li>
    <Link to = '/login'>Login</Link>
  </li>
  <li>
    <Link to = '/signup'>Sign Up</Link>
  </li>
  <li>
    <Link to ='/dog'> Dog Profile</Link>
  </li>
  <li>
    <Link to ='/index'> Dog Index Page</Link>
  </li>
</ul> */}
    </div>
   );
}
 
export default NavBar;