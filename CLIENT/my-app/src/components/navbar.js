import React from 'react'
// import styles from'../css/navbar.css';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <div className='head'>
   <a href='#' className='logo'>
     <span className='span'>b</span>urger &nbsp;
      <i className='fas fa-hamburger'>&nbsp;</i>
     <span className='span'>k</span>ing
</a>

<nav className='navbar'>
<a href="#"><span className='span'>H</span>ome</a>
<a href="#"><span className='span'>A</span>bout</a>
<a href="#"><span className='span'>S</span>ervices</a>
<a href="#"><span className='span'>M</span>enu</a>
<a href="#"><span className='span'>C</span>ontact</a>
<a href="#"><span className='span'>B</span>log</a>
</nav>
<div className='menu-bar'><i className='fas fa-bars'></i></div>
    </div>
  )
}

export default Navbar