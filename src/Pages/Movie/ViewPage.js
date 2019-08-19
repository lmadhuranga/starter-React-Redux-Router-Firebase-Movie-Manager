import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie, deleteMovie } from '../../redux/actions/movieActions';
import { moduleConfig } from './config';
import LoadingCmps from '../Components/LoadingCmps';


class ViewPage extends Component {
  
  componentDidMount(){
    let movieId = this.props.match.params.id; 
    this.props.fetchMovie(movieId);    
  }

  deleteMovie(e, movieId) {
    this.props.deleteMovie(movieId);
    this.props.history.push("/")
  }

  render() {

    const { movie, isLoading } = this.props; 

    if(movie.name === undefined || isLoading) {
      return(<LoadingCmps></LoadingCmps>);
    }
    else {

      let editurl = `/${moduleConfig.url}/edit/${movie.id}`; 
      return (
        <div className="container movie-page">
        <h3>movie : {movie.name}</h3>
        <p>quality : {movie.quality}</p>
        <p>path : <Link to={movie.path}>{movie.path}</Link></p>
        <Link className="btn btn-primary btn-sm" to={editurl}>Edit</Link> &nbsp;
        <button className="btn btn-danger btn-sm" onClick={(e) => this.deleteMovie(e, movie.id)}>Delete</button> &nbsp;
        <Link className="btn btn-primary btn-sm" to={`/${moduleConfig.url}`} > Back</Link>
      </div>
      );

    } 
  }
}

// ViewPage.propTypes = {
//   name: PropTypes.string.isRequired,
// };
const mapStateToprops = state => ({
  isLoading: state.movies.isLoading,
  movie: state.movies.item
});

export default connect( mapStateToprops, { fetchMovie, deleteMovie})(ViewPage);