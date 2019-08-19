import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  appConfig  } from '../../config/globel.conf'
import LogInLinks from './LogInLinks';
import LogOutLinks from './LogOutLinks';

class Navgation extends Component { 

  render() {
    const { auth, profile } = this.props; 
    const links = auth.uid ? <LogInLinks profile={profile}/> : <LogOutLinks />
     
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">{appConfig.app.name}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        { links }
      </nav>
    ); 
  }

}

const mapStateToProps = (state) => { 
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
} 
export default connect(mapStateToProps)(Navgation);