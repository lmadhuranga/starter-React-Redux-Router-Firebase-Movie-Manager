import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie } from '../../redux/actions/movieActions';
import { moduleConfig } from './config';


class ViewPage extends Component {
  componentDidMount(props){
    let movieId = this.props.match.params.id;
    this.props.fetchMovie(movieId);    
  }

  UNSAFE_componentWillReceiveProps(props){
    this.setState({movie:props.movie});
  }

  render() {
    const { movie } = this.props;
    let editurl = `/${moduleConfig.url}/edit/${movie.id}`;
     
    if(movie.name===undefined)
      return(<div>Loading...</div>);
      
    return (
      <div className="container movie-page">
        <h3>movie : {movie.name}</h3>
        <p>quality : {movie.quality}</p>
        <p>path : <Link to={movie.path}>{movie.path}</Link></p>
        <Link className="btn btn-primary btn-sm" to={editurl}>Edit</Link> &nbsp;
        <Link className="btn btn-primary btn-sm" to={`/${moduleConfig.url}`} > Back</Link>
      </div>
    );
    
  }
}

// ViewPage.propTypes = {
//   name: PropTypes.string.isRequired,
// };
const mapStateToprops = state => ({
  movie: state.movies.item
});

export default connect( mapStateToprops, { fetchMovie })(ViewPage);