import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logOut } from '../../redux/actions/authAction';

function LoginLinks({logOut, profile}) { 

  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home</NavLink> 
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/movie">Movies</NavLink> 
          </li>
      </ul>
      <ul className="nav nav-pills">
          <li><Link className="nav-item" onClick={logOut} to={''}>Log Out</Link></li>
          <li><NavLink className="nav-item" to="/" >{profile.initials}</NavLink></li>
      </ul>
    </div>
  );
  
}
 
export default connect(null, { logOut })(LoginLinks);