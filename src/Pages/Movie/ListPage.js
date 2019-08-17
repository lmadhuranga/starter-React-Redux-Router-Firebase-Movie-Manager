import React, { Component } from 'react';   
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies, deleteMovie} from '../../redux/actions/movieActions';
import { Link } from 'react-router-dom';
import { moduleConfig } from './config';

class ListPage extends Component { 
  
  constructor() {
    super();
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  getMovies() { 
    this.props.fetchMovies();
  }

  deleteMovie(e, id) {
    this.props.deleteMovie(id)
    .then(()=> {
      this.getMovies();
    })
  }

  componentDidMount() {
    this.getMovies();
  }
  
  render() {
    const { movies, limit } = this.props;
    const recordsCount = movies.length; 
    
    if(recordsCount===0){
      return(<div>Loading.....</div>);
    } 

    // if list defined only list last items only
    const _limit = limit || recordsCount; 
    
    let moviesItems = movies.slice((recordsCount - _limit), recordsCount).map((movie)=>{
      let url = `/${moduleConfig.url}/view/${movie.id}`;
      return (
        <li key={movie.id}>
          <Link to={url} > {movie.name} </Link>
          <button className="btn btn-outline-danger btn-sm" onClick={(e) => this.deleteMovie(e, movie.id)}>x</button>
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
  movies: state.movies.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    deleteMovie: (id) => dispatch(deleteMovie(id))
  }
}

export default connect( mapStateToprops, mapDispatchToProps)(ListPage);