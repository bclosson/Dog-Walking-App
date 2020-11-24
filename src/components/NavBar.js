import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return ( 
    <div>
<ul>
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
</ul>
    </div>
   );
}
 
export default NavBar;