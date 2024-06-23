import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">

      <Link className="navbar navbar-expand-lg navbar-light bg-light">
   <div className="container-fluid">
    <Link  className="navbar-brand">
    VishalTech
    </Link>
    <button className="navbar-toggler" 
     type="button"
     data-bs-toggle="collapse" 
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" 
     aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link activeClassName='menu_active'
           exact
           className='nav-link active'
            aria-current="page" to="/">
            Home
            </Link>
        </li>
        <li className="nav-item" >
          <Link activeClassName='menu_active' className="nav-link" to="/service">
          Services
          </Link>
       </li>
       <li className="nav-item">
          <Link activeClassName='menu_active' className="nav-link" to="/about">
          About
          </Link>
       </li>
       <li className="nav-item">
          <Link activeClassName='menu_active' className="nav-link" to="/contact">
          Contact
          </Link>
       </li>
      </ul>
    </div>
  </div>
</Link>
</div>
</div>
</div>
    </>
);
};
export default Navbar;
