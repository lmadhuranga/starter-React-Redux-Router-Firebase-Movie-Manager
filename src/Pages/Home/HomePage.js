import React, { Component } from 'react';   
// import PropTypes from 'prop-types'; 
// import { appConfig } from '../../config/globel.conf'; 
import MovieListPage from '../Movie/ListPage';


class HomePage extends Component {
  
  render() {

    return (
      <div className="container homePage">
        <h1>Home Page</h1>  
        <MovieListPage limit={10}></MovieListPage>
      </div>
    );
    
  }
  
} 

export default (HomePage);