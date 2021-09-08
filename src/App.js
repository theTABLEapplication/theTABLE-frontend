import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';
// import Checkin from './components/Checkin';
import MyMap from './components/MyMap';
import Profile from './components/Profile';
import Login from './components/Login';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              {this.props.auth0.isAuthenticated ? <Feed /> : <Login />}
            </Route>
            {/* // TODO: what is CheckIn doing? */}
            {/* <Route path='/checkin'>
              <Checkin />
            </Route> */}
            <Route path='/mymap'>
              <MyMap />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
