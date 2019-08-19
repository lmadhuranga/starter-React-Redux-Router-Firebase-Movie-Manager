import React, { Component } from 'react';   
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'; 
import { moduleConfig } from './config';
import { fetchMovies} from '../../redux/actions/movieActions'; 
import LoadingCmps from '../Components/LoadingCmps';

class ListPage extends Component {
  
  componentDidMount() {
    this.props.fetchMovies();    
  }
  
  render() {
    const { movies, auth, isLoading } = this.props;
    
    const recordsCount = movies.length; 
    
    if(!auth.uid) return <Redirect to ="/auth/login" /> 

    if(isLoading || recordsCount===0){
      return(<LoadingCmps></LoadingCmps>);
    }

    // if(recordsCount===0){
    //   return(<Redirect to="movie/edit" />);
    // }
    
    let moviesItems = movies.map((movie)=>{
      let url = `/${moduleConfig.url}/view/${movie.id}`;
      return (
        <li key={movie.id}>
          <Link to={url} > {movie.name} </Link>
        </li>
      );
    });

    return (
      <div className="container ListPage">
        <div className="row">
          <h3>Movie Collection</h3> &nbsp;
          <Link className="btn btn-outline-info btn-sm" to={`/${moduleConfig.url}/edit`}>New</Link>
        </div>
        <ul>
          {moviesItems}
        </ul>
      </div>
    );

  }
}

// ListPage.propTypes = {
//   name: PropTypes.string.isRequired,
// };
const mapStateToprops = state => ({
  isLoading: state.movies.isLoading,
  movies: state.movies.items,
  auth: state.firebase.auth
});

export default connect(mapStateToprops, {fetchMovies})(ListPage)