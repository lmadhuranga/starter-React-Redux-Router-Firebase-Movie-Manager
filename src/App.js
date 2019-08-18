import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css'; 
 
import HomePage from './Pages/Home/HomePage';

import MovieViewPage from './Pages/Movie/ViewPage';
import MovieEditPage from './Pages/Movie/EditPage';
import MovieListPage from './Pages/Movie/ListPage';


import LoginPage from './Pages/Auth/LoginPage'; 
import RegisterPage from './Pages/Auth/RegisterPage'; 

import Error from './Pages/Movie/Error';
import Navgation from './Pages/Nav/Navgation';

class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navgation/>
            <div className="main-container">
              <Switch> 
                <Route path='/auth/login' component={LoginPage} />
                <Route path='/auth/register' component={RegisterPage} />

                <Route path='/' exact component={HomePage} />
                <Route path='/home' component={HomePage} />
                
                <Route path='/movie/' exact component={MovieListPage} />
                <Route path='/movie/view/:id' component={MovieViewPage} />
                <Route path='/movie/edit/:id' component={MovieEditPage} />
                <Route path='/movie/edit' component={MovieEditPage} />
 
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