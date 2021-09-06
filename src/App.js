import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

import Header from './Header';
import Footer from './Footer';
import Feed from './Feed';
import Checkin from './Checkin';
import MyMap from './MyMap';
import Profile from './Profile';
import Login from './Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ?
                <Feed />
                : <Login />}
            </Route>
            <Route path="/checkin">
              <Checkin />
            </Route>
            <Route path="/mymap">
              <MyMap />
            </Route>
            <Route path="/profile">
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
