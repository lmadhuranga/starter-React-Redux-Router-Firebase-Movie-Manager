import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css'; 
 
import HomePage from './Pages/Home/HomePage';

import PostViewPage from './Pages/Post/ViewPage';
import PostEditPage from './Pages/Post/EditPage';
import PostListPage from './Pages/Post/ListPage'; 

import Error from './Pages/Post/Error';
import Navgation from './Pages/Navgation';

class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navgation/>
            <div className="main-container">
              <Switch> 
                <Route path='/' exact component={HomePage} />
                <Route path='/home' component={HomePage} />
                
                <Route path='/post/' exact component={PostListPage} />
                <Route path='/post/view/:id' component={PostViewPage} />
                <Route path='/post/edit/:id' component={PostEditPage} />
                <Route path='/post/edit' component={PostEditPage} />
 
                <Route  component={Error} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
 
export default App;