import React, { Component } from 'react';   
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecords, deletePost} from '../../redux/actions/postActions'; 
// import { appConfig } from '../../config/globel.conf';

import PostListPage from '../Post/ListPage'; 


class HomePage extends Component { 
   
  render() {
    
    return (
      <div className="container homePage">
        <h1>Home Page</h1> 
        <PostListPage limit={10}></PostListPage>
      </div>
    );
  }
}

// ListPage.propTypes = {
//   title: PropTypes.string.isRequired,
// };
const mapStateToprops = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecords: () => dispatch(fetchRecords()),
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect( mapStateToprops, mapDispatchToProps)(HomePage);