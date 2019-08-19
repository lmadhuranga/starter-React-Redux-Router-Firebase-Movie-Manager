import React from 'react';
import { NavLink } from 'react-router-dom';


export default function LogOutLinks() {

  return (
    <ul >
        <li><NavLink to="/auth/login">Login</NavLink></li>
        <li><NavLink to="/auth/register">Register</NavLink></li>
    </ul>
  );
  
};

